import React, { useCallback, useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
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
import useUserStore from "@/utils/zustand/useUserStore"

import formatProfessorName from "./formatProfessorName"

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

const HeaderText = styled(Typography)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`

const SortWrapper = styled(FlexWrapper)`
    white-space: nowrap;
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

const CourseItemWrapper = styled.div<{ isSelected: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    transition: all 0.2s ease;
    transform: ${({ isSelected }) => (isSelected ? "translateY(-2px)" : "none")};
    box-shadow: ${({ isSelected }) =>
        isSelected ? "0 4px 8px rgba(0, 0, 0, 0.15)" : "none"};
    overflow: hidden;
    flex-shrink: 0;
`

const CourseTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    justify-content: space-between;
`

const LectureItemWrapper = styled.div<{ isHighlighted: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ isHighlighted, theme }) =>
        isHighlighted
            ? theme.colors.Background.Block.dark
            : theme.colors.Background.Block.default};
    cursor: pointer;
`

const Divider = styled.div`
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.dark};
    align-self: center;
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

    const handleAddToTimetable = async (lectureId: number) => {
        if (!currentTimetableId) {
            console.warn("No timetable selected")
            return
        }

        addTimetableFunction({ action: "add", lectureId: lectureId })
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
                    {searchResult.courses.map((course, idx) => {
                        const courseId = course.lectures[0]?.courseId ?? -1
                        const opacity =
                            selectedLecture != null &&
                            selectedLecture.courseId !== courseId
                                ? 0.3
                                : 1
                        return (
                            <CourseItemWrapper
                                isSelected={selectedLecture?.courseId === courseId}
                                key={idx}
                                style={{ opacity: opacity }}
                            >
                                <CourseTitleWrapper>
                                    <FlexWrapper
                                        direction="row"
                                        gap={6}
                                        style={{ opacity: course.completed ? 0.3 : 1 }}
                                    >
                                        <Typography
                                            type={"NormalBold"}
                                            color={"Text.default"}
                                        >
                                            {course.name}
                                        </Typography>
                                        <Typography
                                            type={"Normal"}
                                            color={"Text.default"}
                                        >
                                            {course.code}
                                        </Typography>
                                    </FlexWrapper>
                                    {course.completed ? (
                                        <Typography
                                            type={"Normal"}
                                            color={"Text.default"}
                                        >
                                            {t("common.completedCourse")}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            type={"Normal"}
                                            color={"Highlight.default"}
                                        >
                                            {course.type}
                                        </Typography>
                                    )}
                                </CourseTitleWrapper>
                                <Divider />
                                {course.lectures.map((lecture, idx) => {
                                    const wish = isInWish.includes(lecture.id)
                                    return (
                                        <React.Fragment key={idx}>
                                            <LectureItemWrapper
                                                key={idx}
                                                onMouseEnter={() => {
                                                    setHoveredLecture([lecture])
                                                }}
                                                onMouseLeave={() => {
                                                    setHoveredLecture(null)
                                                }}
                                                onClick={() => {
                                                    if (
                                                        lecture.id === selectedLecture?.id
                                                    ) {
                                                        setSelectedLecture(null)
                                                        return
                                                    }
                                                    setSelectedLecture(lecture)
                                                }}
                                                isHighlighted={
                                                    selectedLecture?.id === lecture.id ||
                                                    hoveredLecture?.some(
                                                        (lec) => lec.id === lecture.id,
                                                    ) === true
                                                }
                                            >
                                                <FlexWrapper
                                                    direction="row"
                                                    gap={6}
                                                    style={{
                                                        opacity: course.completed
                                                            ? 0.3
                                                            : 1,
                                                    }}
                                                >
                                                    <Typography
                                                        type={"NormalBold"}
                                                        color={"Text.default"}
                                                    >
                                                        {lecture.classNo}
                                                    </Typography>
                                                    <Typography
                                                        type={"Normal"}
                                                        color={"Text.default"}
                                                    >
                                                        {formatProfessorName(
                                                            lecture.professors,
                                                        )}
                                                    </Typography>
                                                </FlexWrapper>
                                                <FlexWrapper
                                                    direction="row"
                                                    gap={6}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {/* TODO: 클릭 시 이벤트 추가하기 */}
                                                    {wish || isWishlist ? (
                                                        <Icon
                                                            size={15}
                                                            color="#E54C65"
                                                            onClick={() =>
                                                                handleLikeClick(
                                                                    wish,
                                                                    lecture.id,
                                                                )
                                                            }
                                                        >
                                                            <FavoriteIcon />
                                                        </Icon>
                                                    ) : (
                                                        <Icon
                                                            size={15}
                                                            onClick={() =>
                                                                handleLikeClick(
                                                                    wish,
                                                                    lecture.id,
                                                                )
                                                            }
                                                        >
                                                            <FavoriteBorderIcon />
                                                        </Icon>
                                                    )}
                                                    <span
                                                        style={{
                                                            opacity:
                                                                currentTimetableId == null
                                                                    ? 0.3
                                                                    : 1,
                                                            cursor: addTimetable.isPending
                                                                ? "wait"
                                                                : "pointer",
                                                        }}
                                                    >
                                                        <Icon
                                                            size={15}
                                                            onClick={() =>
                                                                handleAddToTimetable(
                                                                    lecture.id,
                                                                )
                                                            }
                                                        >
                                                            <AddIcon />
                                                        </Icon>
                                                    </span>
                                                </FlexWrapper>
                                            </LectureItemWrapper>
                                            {idx !== course.lectures.length - 1 && (
                                                <Divider />
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </CourseItemWrapper>
                        )
                    })}

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
