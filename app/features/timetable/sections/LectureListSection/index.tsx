import { useCallback, useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useTranslation } from "react-i18next"

import exampleLectureSearchResults from "@/api/example/LectureSearchResults"
import exampleUserWishlistResults from "@/api/example/UserWishList"
import type { GETLecturesResponse } from "@/api/lectures"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { clientEnv } from "@/env"
import { axiosClientWithAuth } from "@/libs/axios"
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
`

const Divider = styled.div`
    width: 95%;
    height: 0.5px;
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
    selectedLectureId: number | null
    setSelectedLectureId: React.Dispatch<React.SetStateAction<number | null>>
    timeFilter: TimeBlock | null
    setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
    currentTimetableId: number | null
    onLectureAdded?: () => void
}

const LectureListSection: React.FC<LectureListSectionProps> = ({
    selectedLectureId,
    setSelectedLectureId,
    timeFilter,
    setTimeFilter,
    currentTimetableId,
    onLectureAdded,
}) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const { user, status } = useUserStore()

    const [searchResult, setSearchResult] = useState<GETLecturesResponse>(
        exampleLectureSearchResults,
    )
    const [isInWish, setIsInWish] = useState<number[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [sortOption, setSortOption] = useState<number>(0)
    const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const outerRef = useRef<HTMLDivElement>(null)

    const [isWishlist, setIsWishlist] = useState<boolean>(false)

    // Fetch user wishlist to know which lectures are favorited
    const fetchWishlist = useCallback(async () => {
        if (status === "idle") return

        try {
            const response = await axiosClientWithAuth.get(
                `${clientEnv.VITE_APP_API_URL}/api/users/${user?.id}/wishlist`,
            )
            const wishlistLectureIds = response.data.courses.flatMap(
                (course: { lectures: { id: number }[] }) =>
                    course.lectures.map((lec) => lec.id),
            )
            setIsInWish(wishlistLectureIds)
        } catch (error) {
            console.error("Failed to fetch wishlist:", error)
            // Fallback to example data in case of error (e.g., mock mode)
            setIsInWish(
                exampleUserWishlistResults.courses.flatMap((course) =>
                    course.lectures.map((lec) => lec.id),
                ),
            )
        }
    }, [status])

    useEffect(() => {
        fetchWishlist()
    }, [fetchWishlist])

    useEffect(() => {
        if (selectedLectureId === null) {
            setSelectedCourseId(null)
        }
    }, [selectedLectureId])

    useEffect(() => {
        if (isWishlist) {
            setSearchResult(exampleUserWishlistResults)
        } else {
            setSearchResult(exampleLectureSearchResults)
        }
    }, [isWishlist])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node) &&
                outerRef.current &&
                outerRef.current.contains(event.target as Node)
            ) {
                setSelectedLectureId(null)
                setSelectedCourseId(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLikeClick = async (wish: boolean, lectureId: number) => {
        if (status === "idle") {
            console.warn("User not logged in")
            return
        }

        // Optimistic update
        if (wish) {
            setIsInWish((prev) => prev.filter((id) => id !== lectureId))
        } else {
            setIsInWish((prev) => [...prev, lectureId])
        }

        try {
            await axiosClientWithAuth.patch(
                `${clientEnv.VITE_APP_API_URL}/api/v2/users/${user?.id}/wishlist`,
                {
                    lectureId: lectureId,
                    action: wish ? "remove" : "add",
                },
            )
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

        setIsLoading(true)
        try {
            await axiosClientWithAuth.patch(
                `${clientEnv.VITE_APP_API_URL}/api/timetables/${currentTimetableId}`,
                {
                    lectureId: lectureId,
                    action: "add",
                },
            )
            onLectureAdded?.()
        } catch (error) {
            console.error("Failed to add lecture to timetable:", error)
        } finally {
            setIsLoading(false)
        }
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
                    onSearch={(params: SearchParamsType) => {
                        console.log("Search params:", params)
                        // TODO: Implement actual search API call
                    }}
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
                        setIsWishlist(!isWishlist)
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
                            selectedCourseId != null && selectedCourseId !== courseId
                                ? 0.3
                                : 1
                        return (
                            <CourseItemWrapper
                                isSelected={selectedCourseId === courseId}
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
                                        <>
                                            <LectureItemWrapper
                                                onClick={() => {
                                                    if (
                                                        lecture.id === selectedLectureId
                                                    ) {
                                                        setSelectedLectureId(null)
                                                        setSelectedCourseId(null)
                                                        return
                                                    }
                                                    setSelectedLectureId(lecture.id)
                                                    setSelectedCourseId(courseId)
                                                }}
                                                isHighlighted={
                                                    selectedLectureId === lecture.id
                                                }
                                                key={idx}
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
                                                    style={{
                                                        opacity: course.completed
                                                            ? 0.3
                                                            : 1,
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {/* TODO: 클릭 시 이벤트 추가하기 */}
                                                    {wish ? (
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
                                                            cursor: isLoading
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
                                        </>
                                    )
                                })}
                            </CourseItemWrapper>
                        )
                    })}
                    <div style={{ height: 4 }} />
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
