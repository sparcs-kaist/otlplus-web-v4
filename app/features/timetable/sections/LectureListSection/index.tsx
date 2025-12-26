import React, { useCallback, useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

import type { GETLecturesResponse } from "@/api/lectures"
import LoadingCircle from "@/common/components/LoadingCircle"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import type { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { getAPIResponseType } from "@/utils/api/getAPIType"
import { useAPI } from "@/utils/api/useAPI"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"
import checkEmpty from "@/utils/search/checkEmpty"
import checkOverlap from "@/utils/timetable/checkOverlap"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureListBlock from "./LectureListBlock"

const LectureListSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const SearchSubSection = styled.div`
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.divider};
    max-height: 100%;
`

const NoResultText = styled(Typography)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DropDownWrapper = styled(FlexWrapper)`
    height: 36px;
`

const CourseBlockWrapper = styled(FlexWrapper)`
    height: fit-content;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Chip = styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    gap: 8px;
    border-radius: 6px;
    background-color: ${({ isSelected, theme }) =>
        isSelected
            ? theme.colors.Background.Button.highlightDark
            : theme.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Button.highlightDark};
    }
`

interface LectureListSectionProps {
    timetableLectures: Lecture[]
    year: number
    semester: SemesterEnum
    hoveredLecture: Lecture[] | null
    setHoveredLecture: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    selectedLecture: Lecture | null
    setSelectedLecture: React.Dispatch<React.SetStateAction<Lecture | null>>
    timeFilter: TimeBlock | null
    setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
    currentTimetableId: number | null
}

const SEARCH_LIMIT = 50

const LectureListSection: React.FC<LectureListSectionProps> = ({
    timetableLectures,
    year,
    semester,
    hoveredLecture,
    setHoveredLecture,
    selectedLecture,
    setSelectedLecture,
    timeFilter,
    setTimeFilter,
    currentTimetableId,
}) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const { user, status } = useUserStore()
    const queryClient = useQueryClient()

    const { ref, inView } = useInView({ threshold: 0 })

    const [enabled, setEnabled] = useState(false)

    const mergeCoursesById = useCallback((response?: GETLecturesResponse) => {
        if (!response) return response

        const courseMap = new Map<number, GETLecturesResponse["courses"][number]>()

        response.courses.forEach((course) => {
            const existing = courseMap.get(course.id)

            if (!existing) {
                courseMap.set(course.id, {
                    ...course,
                    lectures: [...course.lectures],
                })
                return
            }

            const lectureIds = new Set(existing.lectures.map((lecture) => lecture.id))
            const mergedLectures = [...existing.lectures]

            course.lectures.forEach((lecture) => {
                if (lectureIds.has(lecture.id)) return
                lectureIds.add(lecture.id)
                mergedLectures.push(lecture)
            })

            courseMap.set(course.id, {
                ...existing,
                lectures: mergedLectures,
            })
        })

        return {
            ...response,
            courses: Array.from(courseMap.values()),
        }
    }, [])

    const { query, setParams, data } = useInfiniteAPI("GET", "/lectures", {
        infinites: ["courses"],
        limit: SEARCH_LIMIT,
        enabled: enabled,
        gcTime: 0,
        select: mergeCoursesById,
        iterate: (data) => {
            let n = 0
            data.courses.forEach((course) => {
                n += course.lectures.length
            })
            if (n < SEARCH_LIMIT) return 0
            return n
        },
    })

    const { mutation: addTimetable, requestFunction: addTimetableFunction } = useAPI(
        "PATCH",
        `/timetables/${currentTimetableId}`,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [`/timetables/${currentTimetableId}`],
                })
            },
        },
    )

    const [searchResult, setSearchResult] = useState<
        getAPIResponseType<"GET", "/lectures">
    >({ courses: [] })
    const [isInWish, setIsInWish] = useState<number[]>([])

    const [sortOption, setSortOption] = useState<number>(0)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const [isWishlist, setIsWishlist] = useState<boolean>(false)

    const { query: wishListQuery, setParams: setWishListQuery } = useAPI(
        "GET",
        `/users/${user?.id}/wishlist`,
        {
            enabled: status === "success",
        },
    )

    const { requestFunction: patchUserWishlistFunction } = useAPI(
        "PATCH",
        `/users/${user?.id}/wishlist`,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [`/users/${user?.id}/wishlist`],
                })
            },
        },
    )

    const handleSearch = (param: SearchParamsType) => {
        if (checkEmpty(param)) {
            alert(t("common.search.empty"))
            return
        }
        setIsWishlist(false)
        const fullParam = {
            year: year,
            semester: semester,
            ...param,
            order: (["code", "popular", "studentCount"] as const)[sortOption] ?? "code",
            offset: 0,
            limit: SEARCH_LIMIT,
            day: param.time?.day ?? undefined,
            begin: param.time?.begin ?? undefined,
            end: param.time?.end ?? undefined,
        }
        setParams(fullParam)
        setEnabled(true)
    }

    useEffect(() => {
        setIsWishlist(false)
        setParams((prev) => ({
            ...prev,
            order: (["code", "popular", "studentCount"] as const)[sortOption] ?? "code",
            offset: 0,
        }))
        setEnabled(true)
    }, [sortOption])

    useEffect(() => {
        setSearchResult({ courses: [] })
        setWishListQuery({ year: year, semester: semester })
    }, [year, semester])

    useEffect(() => {
        if (inView && query.hasNextPage && !query.isFetchingNextPage) {
            query.fetchNextPage()
        }
    }, [inView])

    useEffect(() => {
        if (data !== undefined) {
            setSearchResult(data)
            setIsWishlist(false)
        }
        if (!query.hasNextPage) {
            setEnabled(false)
        }
    }, [data])

    useEffect(() => {
        if (wishListQuery.data === undefined) return

        if (isWishlist) {
            setSearchResult(wishListQuery.data)
        } else setSearchResult(data ?? { courses: [] })
    }, [isWishlist])

    useEffect(() => {
        if (wishListQuery.data === undefined) return

        setIsInWish(
            wishListQuery.data.courses
                .flatMap((course) => course.lectures)
                .map((lecture) => lecture.id),
        )

        if (isWishlist) {
            setSearchResult(wishListQuery.data)
        }
    }, [wishListQuery.data])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node) &&
                outerRef.current &&
                outerRef.current.contains(event.target as Node)
            ) {
                setSelectedLecture(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLikeClick = async (wish: boolean, lectureId: number) => {
        if (status === "idle") return

        // Optimistic update
        if (wish) {
            setIsInWish((prev) => prev.filter((id) => id !== lectureId))
        } else {
            setIsInWish((prev) => [...prev, lectureId])
        }

        try {
            patchUserWishlistFunction({
                lectureId: lectureId,
                mode: wish ? "delete" : "add",
            })
        } catch (error) {
            console.error("Failed to update wishlist:", error)
            // Revert optimistic update on error
            if (wish) {
                setIsInWish((prev) => [...prev, lectureId])
            } else {
                setIsInWish((prev) => prev.filter((id) => id !== lectureId))
            }
        }
    }

    const handleAddToTimetable = async (lecture: Lecture) => {
        if (!currentTimetableId) {
            console.warn("No timetable selected")
            return
        } else if (
            timetableLectures.some((lec) => checkOverlap(lec.classes, lecture.classes))
        ) {
            alert(t("timetable.addLectureConflict"))
            return
        }

        addTimetableFunction({ action: "add", lectureId: lecture.id })
    }

    return (
        <LectureListSectionInner
            direction="column"
            justify="stretch"
            align="stretch"
            gap={8}
            ref={outerRef}
        >
            <SearchSubSection>
                <SearchArea
                    options={["type", "department", "level", "term", "time"]}
                    timeFilter={timeFilter}
                    setTimeFilter={setTimeFilter}
                    onSearch={handleSearch}
                />
            </SearchSubSection>
            <FlexWrapper
                direction="row"
                gap={0}
                justify={"space-between"}
                align={"center"}
            >
                <Chip
                    isSelected={isWishlist}
                    onClick={() => {
                        setIsWishlist((prev) => !prev)
                    }}
                >
                    <Icon size={15} color={theme.colors.Highlight.default}>
                        {isWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Icon>
                    <Typography type={"Normal"} color={"Highlight.default"}>
                        {t("common.wishlist")}
                    </Typography>
                </Chip>
                <DropDownWrapper direction="row" gap={0}>
                    <ScrollableDropdown
                        options={[
                            t("dictionary.sortOptions.code"),
                            t("dictionary.sortOptions.popularity"),
                            t("dictionary.sortOptions.studentCount"),
                        ]}
                        setSelectedOption={setSortOption}
                        selectedOption={sortOption}
                    />
                </DropDownWrapper>
            </FlexWrapper>
            {searchResult.courses.length !== 0 ? (
                <CourseBlockWrapper direction="column" gap={12} ref={wrapperRef}>
                    {searchResult.courses.map((course) => (
                        <LectureListBlock
                            key={course.id}
                            course={course}
                            selectedLecture={selectedLecture}
                            hoveredLecture={hoveredLecture}
                            isInWish={isInWish}
                            isWishlist={isWishlist}
                            currentTimetableId={currentTimetableId}
                            timetableLectures={timetableLectures}
                            isAddTimetablePending={addTimetable.isPending}
                            setHoveredLecture={setHoveredLecture}
                            setSelectedLecture={setSelectedLecture}
                            handleLikeClick={handleLikeClick}
                            handleAddToTimetable={handleAddToTimetable}
                            t={t}
                        />
                    ))}

                    {!isWishlist && query.hasNextPage && <LoadingCircle ref={ref} />}
                </CourseBlockWrapper>
            ) : (
                <NoResultText type={"Bigger"} color={"Text.placeholder"}>
                    {t("dictionary.noResults")}
                </NoResultText>
            )}
        </LectureListSectionInner>
    )
}

export default LectureListSection
