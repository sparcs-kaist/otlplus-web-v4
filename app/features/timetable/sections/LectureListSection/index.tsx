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
import { media } from "@/styles/themes/media"
import type { getAPIResponseType } from "@/utils/api/getAPIType"
import { useAPI } from "@/utils/api/useAPI"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"
import checkEmpty from "@/utils/search/checkEmpty"
import checkOverlap from "@/utils/timetable/checkOverlap"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureListBlock from "./LectureListBlock"

const LectureListSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const SearchSubSection = styled(FlexWrapper)`
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

const CourseFadeOverlayWrapper = styled(FlexWrapper)`
    height: fit-content;
    overflow-y: auto;
    position: relative;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${media.tablet} {
        &::before,
        &::after {
            width: 100%;
            content: "";
            position: sticky;
            left: 0;
            right: 0;
            min-height: 40%;
            pointer-events: none; /* 클릭을 막지 않도록 */
            z-index: 1;
        }
        &::before {
            top: 0;
            /* 현재 배경색 기준으로 페이드 */
            background: linear-gradient(
                to bottom,
                ${({ theme }) => theme.colors.Background.Section.default} 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }
        &::after {
            bottom: 0;
            background: linear-gradient(
                to top,
                ${({ theme }) => theme.colors.Background.Section.default} 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }
`

const CourseResultWrapper = styled(FlexWrapper)`
    width: 100%;
`

const CourseBlockWrapper = styled(FlexWrapper)`
    height: 100%;
    flex-grow: 1;

    ${media.tablet} {
        padding-right: 4px;
    }
`

const MobileEmptyDiv = styled.div`
    flex: 1 0 0;
    width: 100%;
`

const MobileLectureSelector = styled.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
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
    hoveredLecture: Lecture[]
    setHoveredLecture: React.Dispatch<React.SetStateAction<Lecture[]>>
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

    const isTablet = useIsDevice("tablet")

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
    const courseResultRef = useRef<HTMLDivElement>(null)

    const [isWishlist, setIsWishlist] = useState<boolean>(false)

    const { query: wishListQuery, setParams: setWishListQuery } = useAPI(
        "GET",
        `/users/${user?.id}/wishlist`,
        {
            enabled: status === "success" && year != -1,
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
        if (year === -1) return
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

    // 모든 lectures를 flat 배열로 만들어 인덱스로 접근
    const allLectures = React.useMemo(() => {
        return searchResult.courses.flatMap((course) => course.lectures)
    }, [searchResult.courses])

    // 태블릿에서 스크롤 시 MobileLectureSelector 위치의 lecture를 hoveredLecture로 설정
    const handleMobileScroll = useCallback(() => {
        if (!isTablet || !courseResultRef.current) return

        const container = courseResultRef.current
        const containerRect = container.getBoundingClientRect()
        const selectorY = containerRect.top + containerRect.height / 2

        // MobileLectureSelector 위치에서 왼쪽으로 조금 이동한 지점에서 요소 찾기
        const element = document.elementFromPoint(containerRect.left + 50, selectorY)

        if (!element) return

        // data-lecture-id 속성을 가진 가장 가까운 부모 요소 찾기
        const lectureElement = element.closest("[data-lecture-id]")
        if (lectureElement) {
            const lectureId = parseInt(
                lectureElement.getAttribute("data-lecture-id") || "",
                10,
            )
            const lecture = allLectures.find((lec) => lec.id === lectureId)
            if (lecture) {
                setHoveredLecture([lecture])
            }
        }
    }, [isTablet, allLectures, setHoveredLecture, setSelectedLecture])

    useEffect(() => {
        if (!isTablet || !courseResultRef.current) return

        const container = courseResultRef.current
        container.addEventListener("scroll", handleMobileScroll)

        return () => {
            container.removeEventListener("scroll", handleMobileScroll)
        }
    }, [isTablet, handleMobileScroll])

    // 검색 결과가 로드되면 초기 감지 실행
    useEffect(() => {
        if (!isTablet || searchResult.courses.length === 0) return

        // DOM이 렌더링된 후 실행되도록 requestAnimationFrame 두 번 사용
        let rafId2: number

        const rafId1 = requestAnimationFrame(() => {
            rafId2 = requestAnimationFrame(() => {
                handleMobileScroll()
            })
        })

        return () => {
            cancelAnimationFrame(rafId1)
            cancelAnimationFrame(rafId2)
        }
    }, [isTablet, searchResult.courses, handleMobileScroll])

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
            <SearchSubSection direction="row" justify="stretch" gap={0}>
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
                    style={{ paddingBlock: 10 }}
                >
                    <Icon size={15} color={theme.colors.Highlight.default}>
                        {isWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Icon>
                    <Typography type={"Normal"} color={"Highlight.default"}>
                        {t("common.wishlist")}
                    </Typography>
                </Chip>
                {searchResult.courses.length !== 0 && (
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
                )}
            </FlexWrapper>
            {searchResult.courses.length !== 0 ? (
                <CourseFadeOverlayWrapper
                    direction="column"
                    gap={0}
                    ref={courseResultRef}
                >
                    <CourseResultWrapper direction="row" gap={0}>
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

                            {!isWishlist && query.hasNextPage && (
                                <LoadingCircle ref={ref} />
                            )}
                        </CourseBlockWrapper>
                        {isTablet && <MobileLectureSelector />}
                    </CourseResultWrapper>
                </CourseFadeOverlayWrapper>
            ) : (
                <NoResultText type={"Bigger"} color={"Text.placeholder"}>
                    {t("dictionary.noResults")}
                </NoResultText>
            )}
        </LectureListSectionInner>
    )
}

export default LectureListSection
