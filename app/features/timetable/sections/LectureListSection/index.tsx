import React, { useCallback, useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

import type { GETLecturesResponse } from "@/api/lectures"
import LoadingCircle from "@/common/components/LoadingCircle"
import { type SearchParamsType } from "@/common/components/search/SearchArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"
import type { getAPIResponseType } from "@/utils/api/getAPIType"
import { useAPI } from "@/utils/api/useAPI"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"
import checkEmpty from "@/utils/search/checkEmpty"
import checkOverlap from "@/utils/timetable/checkOverlap"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureListBlock from "./LectureListBlock"
import LectureSearchSubSection from "./LectureSearchSubSection"

const LectureListSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const NoResultText = styled(Typography)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CourseFadeOverlayWrapper = styled(FlexWrapper)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

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
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${media.tablet} {
        padding-right: 4px;
    }
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

const mergeCoursesById = (response?: GETLecturesResponse) => {
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
}

interface LectureListSectionProps {
    timetableLectures: Lecture[]
    addLectures: (lectures: Lecture[]) => void
    onLectureSelect?: (lecture: Lecture, e?: React.MouseEvent) => void
}

const SEARCH_LIMIT = 50

const LectureListSection: React.FC<LectureListSectionProps> = ({
    timetableLectures,
    addLectures,
    onLectureSelect,
}) => {
    const { t } = useTranslation()
    const { user, status } = useUserStore()
    const queryClient = useQueryClient()

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const year = useTimetableUIStore((s) => s.year)
    const semester = useTimetableUIStore((s) => s.semesterEnum)
    const hoveredLecture = useTimetableUIStore((s) => s.hoveredLectures)
    const setHoveredLecture = useTimetableUIStore((s) => s.setHoveredLectures)
    const selectedLectures = useTimetableUIStore((s) => s.selectedLectures)
    const setSelectedLectures = useTimetableUIStore((s) => s.setSelectedLectures)
    const timeFilter = useTimetableUIStore((s) => s.timeFilter)
    const setTimeFilter = useTimetableUIStore((s) => s.setTimeFilter)
    const onSearchLecturesChange = useTimetableUIStore((s) => s.setSearchLectures)
    const onClearSelection = useCallback(
        () => setSelectedLectures([]),
        [setSelectedLectures],
    )

    const { ref, inView } = useInView({ threshold: 0 })

    const isTablet = useIsDevice("tablet")

    const wrapperRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)
    const courseResultRef = useRef<HTMLDivElement>(null)

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

    const [enabled, setEnabled] = useState(false)

    const [searchResult, setSearchResult] = useState<
        getAPIResponseType<"GET", "/lectures">
    >({ courses: [] })
    const [isWishlist, setIsWishlist] = useState<boolean>(false)
    const [wishlist, setWishlist] = useState<number[]>([])

    const [sortOption, setSortOption] = useState<number>(0)

    const { query, setParams, data } = useInfiniteAPI("GET", "/lectures", {
        infinites: ["courses"],
        limit: SEARCH_LIMIT,
        gcTime: 0,
        select: mergeCoursesById,
        enabled: enabled,
        iterate: (data) => {
            let n = 0
            data.courses.forEach((course) => {
                n += course.lectures.length
            })
            if (n < SEARCH_LIMIT) return 0
            return n
        },
    })

    const handleSearch = useCallback(
        (param: SearchParamsType) => {
            if (checkEmpty(param)) {
                alert(t("common.search.empty"))
                return
            }
            setIsWishlist(false)
            const fullParam = {
                year: year,
                semester: semester,
                ...param,
                order:
                    (["code", "popular", "studentCount"] as const)[sortOption] ?? "code",
                offset: 0,
                limit: SEARCH_LIMIT,
                day: param.time?.day ?? undefined,
                begin: param.time?.begin ?? undefined,
                end: param.time?.end ?? undefined,
            }
            setParams(fullParam)
            setEnabled(true)
            trackEvent("Search Lectures", {
                year,
                semester,
                keyword: param.keyword ?? "",
                department: param.department ?? "",
                type: param.type ?? "",
                level: param.level ?? "",
            })
        },
        [year, semester, sortOption],
    )

    useEffect(() => {
        setIsWishlist(false)
        setParams((prev) => ({
            ...prev,
            order: (["code", "popular", "studentCount"] as const)[sortOption] ?? "code",
            offset: 0,
        }))
    }, [sortOption])

    useEffect(() => {
        if (inView && query.hasNextPage && !query.isFetchingNextPage) {
            query.fetchNextPage()
        }
    }, [inView, query])

    useEffect(() => {
        const handleRequestNextPage = () => {
            if (query.hasNextPage && !query.isFetchingNextPage) {
                query.fetchNextPage()
            }
        }
        window.addEventListener("request-next-page", handleRequestNextPage)
        return () =>
            window.removeEventListener("request-next-page", handleRequestNextPage)
    }, [query])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node) &&
                outerRef.current &&
                outerRef.current.contains(event.target as Node)
            ) {
                onClearSelection?.()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // 모든 lectures를 flat 배열로 만들어 인덱스로 접근
    const allLectures = React.useMemo(() => {
        return searchResult.courses.flatMap((course) => course.lectures)
    }, [searchResult.courses])

    useEffect(() => {
        onSearchLecturesChange?.(allLectures)
    }, [allLectures, onSearchLecturesChange])

    // 태블릿에서 스크롤 시 MobileLectureSelector 위치의 lecture를 hoveredLecture로 설정
    const handleMobileScroll = useCallback(() => {
        if (!isTablet) return
        if (!courseResultRef.current) {
            setHoveredLecture([])
            return
        }

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
            } else {
                setHoveredLecture([])
            }
        }
    }, [isTablet, allLectures, setHoveredLecture])

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
        if (!isTablet || query.isFetching) return
        if (selectedLectures && selectedLectures.length > 0) return

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
    }, [query.isFetching, isTablet, handleMobileScroll, selectedLectures])

    const handleLikeClick = (wish: boolean, lectureId: number) => {
        if (status === "idle") return

        const action = wish ? "delete" : "add"
        trackEvent("Update Wishlist", {
            action,
            lectureId,
        })

        // Optimistic update
        if (wish) {
            setWishlist((prev) => prev.filter((id) => id !== lectureId))
        } else {
            setWishlist((prev) => [...prev, lectureId])
        }

        patchUserWishlistFunction({
            lectureId: lectureId,
            mode: action,
        })
    }

    const handleAddToTimetable = (lecture: Lecture) => {
        if (status === "success") {
            if (!currentTimetableId) {
                console.warn("No timetable selected")
                return
            }
            if (
                timetableLectures.some((lec) =>
                    checkOverlap(lec.classes, lecture.classes),
                )
            ) {
                alert(t("timetable.addLectureConflict"))
                return
            }

            addLectures([lecture])
            trackEvent("Add Lecture to Timetable", {
                lectureId: lecture.id,
                lectureCode: lecture.code,
                courseName: lecture.name,
                timetableId: currentTimetableId,
            })
        } else {
            if (
                timetableLectures.some((lec) =>
                    checkOverlap(lec.classes, lecture.classes),
                )
            ) {
                alert(t("timetable.addLectureConflict"))
                return
            }
            addLectures([lecture])
            trackEvent("Add Lecture to Timetable", {
                lectureId: lecture.id,
                lectureCode: lecture.code,
                courseName: lecture.name,
                timetableId: null,
                isGuest: true,
            })
        }
    }

    const handleSetHoveredLecture = useCallback(
        (lecture: Lecture) => {
            if (isTablet) return
            if (useTimetableUIStore.getState().isKeyboardNavigating) return
            setHoveredLecture((prev) => {
                if (prev.length === 1 && prev[0]?.id === lecture.id) return prev
                return [lecture]
            })
        },
        [isTablet, setHoveredLecture],
    )

    const handleClearHoveredLecture = useCallback(() => {
        if (isTablet) return
        if (useTimetableUIStore.getState().isKeyboardNavigating) return
        setHoveredLecture([])
    }, [isTablet, setHoveredLecture])

    const handleSetSelectedLecture = useCallback(
        (lecture: Lecture, e?: React.MouseEvent) => {
            onLectureSelect?.(lecture, e)
        },
        [onLectureSelect],
    )

    useEffect(() => {
        courseResultRef.current?.setAttribute(
            "data-hovered-lectures",
            hoveredLecture.map((lec) => lec.id).join(" "),
        )
    }, [hoveredLecture, searchResult])

    useEffect(() => {
        courseResultRef.current?.setAttribute(
            "data-selected-lectures",
            selectedLectures ? selectedLectures.map((l) => l.id).join(" ") : "",
        )
    }, [selectedLectures, searchResult])

    return (
        <LectureListSectionInner
            direction="column"
            justify="stretch"
            align="stretch"
            gap={8}
            ref={outerRef}
        >
            <LectureSearchSubSection
                year={year}
                semester={semester}
                timeFilter={timeFilter}
                setTimeFilter={setTimeFilter}
                sortOption={sortOption}
                setSortOption={setSortOption}
                data={data}
                isWishlist={isWishlist}
                setIsWishlist={setIsWishlist}
                setWishlist={setWishlist}
                setSearchResult={setSearchResult}
                t={t}
                handleSearch={handleSearch}
            />
            {searchResult.courses.length !== 0 ? (
                <CourseFadeOverlayWrapper
                    direction="column"
                    gap={0}
                    ref={courseResultRef}
                    data-hovered-lectures=""
                    data-selected-lectures=""
                >
                    <CourseResultWrapper direction="row" gap={0}>
                        <CourseBlockWrapper direction="column" gap={12} ref={wrapperRef}>
                            {searchResult.courses.map((course) => (
                                <LectureListBlock
                                    key={course.id}
                                    course={course}
                                    hoveredLecture={hoveredLecture}
                                    selectedLectures={selectedLectures}
                                    wishlist={wishlist}
                                    currentTimetableId={currentTimetableId}
                                    timetableLectures={timetableLectures}
                                    handleSetHoveredLecture={handleSetHoveredLecture}
                                    handleClearHoveredLecture={handleClearHoveredLecture}
                                    handleSetSelectedLecture={handleSetSelectedLecture}
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

const LectureListSectionMemo = React.memo(LectureListSection, (prev, next) => {
    return (
        prev.timetableLectures === next.timetableLectures &&
        prev.addLectures === next.addLectures &&
        prev.onLectureSelect === next.onLectureSelect
    )
})

export default LectureListSectionMemo
