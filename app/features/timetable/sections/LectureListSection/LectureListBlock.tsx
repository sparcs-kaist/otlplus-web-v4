import React, { memo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

import type { GETLecturesResponse } from "@/api/lectures"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import checkOverlap from "@/utils/timetable/checkOverlap"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import formatProfessorName from "./formatProfessorName"

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

interface LectureListBlockProps {
    course: GETLecturesResponse["courses"][number]
    selectedLecture: Lecture | null
    hoveredLecture: Lecture[] | null
    isInWish: number[]
    isWishlist: boolean
    currentTimetableId: number | null
    timetableLectures: Lecture[]
    isAddTimetablePending: boolean
    setHoveredLecture: (lecture: Lecture[] | null) => void
    setSelectedLecture: (lecture: Lecture | null) => void
    handleLikeClick: (wish: boolean, lectureId: number) => void
    handleAddToTimetable: (lecture: Lecture) => void
    t: (key: string) => string
}

const LectureListBlock: React.FC<LectureListBlockProps> = ({
    course,
    selectedLecture,
    hoveredLecture,
    isInWish,
    isWishlist,
    currentTimetableId,
    timetableLectures,
    isAddTimetablePending,
    setHoveredLecture,
    setSelectedLecture,
    handleLikeClick,
    handleAddToTimetable,
    t,
}) => {
    const { status } = useUserStore()
    const theme = useTheme()
    const isTablet = useIsDevice("tablet")

    const courseId = course.lectures[0]?.courseId ?? -1
    const opacity =
        selectedLecture != null && selectedLecture.courseId !== courseId ? 0.3 : 1

    return (
        <CourseItemWrapper
            isSelected={selectedLecture?.courseId === courseId}
            style={{ opacity: opacity }}
        >
            <CourseTitleWrapper>
                <FlexWrapper
                    direction="row"
                    gap={6}
                    style={{ opacity: course.completed ? 0.3 : 1 }}
                >
                    <Typography type={"NormalBold"} color={"Text.default"}>
                        {course.name}
                    </Typography>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {course.code}
                    </Typography>
                </FlexWrapper>
                {course.completed ? (
                    <Typography type={"Normal"} color={"Text.default"}>
                        {t("common.completedCourse")}
                    </Typography>
                ) : (
                    <Typography type={"Normal"} color={"Highlight.default"}>
                        {course.type}
                    </Typography>
                )}
            </CourseTitleWrapper>
            <Divider />
            {course.lectures.map((lecture, idx) => {
                const wish = isInWish.includes(lecture.id)
                const isHovered =
                    hoveredLecture?.some((lec) => lec.id === lecture.id) === true
                return (
                    <React.Fragment key={lecture.id}>
                        <LectureItemWrapper
                            data-lecture-id={lecture.id}
                            onMouseEnter={() => {
                                if (isTablet) return
                                setHoveredLecture([lecture])
                            }}
                            onMouseLeave={() => {
                                if (isTablet) return
                                setHoveredLecture(null)
                            }}
                            onClick={() => {
                                if (lecture.id === selectedLecture?.id) {
                                    setSelectedLecture(null)
                                    return
                                }
                                setSelectedLecture(lecture)
                            }}
                            isHighlighted={
                                selectedLecture?.id === lecture.id || isHovered
                            }
                        >
                            <FlexWrapper direction="column" gap={0}>
                                {isTablet && isHovered && (
                                    <Typography type="Small" color="Text.placeholder">
                                        {lecture.department.name} / {lecture.type}
                                    </Typography>
                                )}
                                <FlexWrapper
                                    direction="row"
                                    gap={6}
                                    style={{
                                        opacity: course.completed ? 0.3 : 1,
                                    }}
                                >
                                    <Typography type="NormalBold" color="Text.default">
                                        {lecture.classNo}
                                    </Typography>
                                    <Typography type="Normal" color="Text.default">
                                        {formatProfessorName(lecture.professors)}
                                    </Typography>
                                </FlexWrapper>
                                {isTablet && isHovered && (
                                    <Typography type="Small" color="Text.placeholder">
                                        {lecture.classes[0]?.buildingName}{" "}
                                        {lecture.classes[0]?.roomName} /{" "}
                                        {lecture.limitPeople}
                                    </Typography>
                                )}
                            </FlexWrapper>
                            <FlexWrapper
                                direction="row"
                                gap={6}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {!isTablet &&
                                    status === "success" &&
                                    (wish || isWishlist ? (
                                        <Icon
                                            size={15}
                                            color={theme.colors.Highlight.default}
                                            onClick={() =>
                                                handleLikeClick(wish, lecture.id)
                                            }
                                        >
                                            <FavoriteIcon />
                                        </Icon>
                                    ) : (
                                        <Icon
                                            size={15}
                                            color={theme.colors.Text.default}
                                            onClick={() =>
                                                handleLikeClick(wish, lecture.id)
                                            }
                                        >
                                            <FavoriteBorderIcon />
                                        </Icon>
                                    ))}
                                {(!isTablet ||
                                    hoveredLecture?.some(
                                        (lec) => lec.id === lecture.id,
                                    )) && (
                                    <span
                                        title={
                                            currentTimetableId == null &&
                                            status === "success"
                                                ? t(
                                                      "timetable.myTimeTableLectureAddWarning",
                                                  )
                                                : ""
                                        }
                                        style={{
                                            opacity:
                                                (currentTimetableId == null &&
                                                    status === "success") ||
                                                timetableLectures.some((lec) =>
                                                    checkOverlap(
                                                        lec.classes,
                                                        lecture.classes,
                                                    ),
                                                )
                                                    ? 0.3
                                                    : 1,
                                            cursor: isAddTimetablePending
                                                ? "wait"
                                                : "pointer",
                                        }}
                                    >
                                        <Icon
                                            size={isTablet ? 30 : 15}
                                            color={theme.colors.Text.default}
                                            onClick={() => handleAddToTimetable(lecture)}
                                        >
                                            <AddIcon />
                                        </Icon>
                                    </span>
                                )}
                            </FlexWrapper>
                        </LectureItemWrapper>
                        {idx !== course.lectures.length - 1 && <Divider />}
                    </React.Fragment>
                )
            })}
        </CourseItemWrapper>
    )
}

export default memo(LectureListBlock, (prev, next) => {
    // Basic props comparison
    if (
        prev.course !== next.course ||
        prev.isInWish !== next.isInWish || // Assuming array ref changes if content changes, or use deep compare if necessary (usually ref change from state)
        prev.isWishlist !== next.isWishlist ||
        prev.currentTimetableId !== next.currentTimetableId ||
        prev.timetableLectures !== next.timetableLectures ||
        prev.isAddTimetablePending !== next.isAddTimetablePending ||
        prev.selectedLecture !== next.selectedLecture // If selected lecture changes, we might need to re-render if it affects opacity/highlight
    ) {
        return false
    }

    // Smart Hover Comparison
    const prevHovered = prev.hoveredLecture
    const nextHovered = next.hoveredLecture

    if (prevHovered === nextHovered) return true

    const courseLectureIds = prev.course.lectures.map((l) => l.id)
    const isPrevIn = prevHovered?.some((h) => courseLectureIds.includes(h.id)) ?? false
    const isNextIn = nextHovered?.some((h) => courseLectureIds.includes(h.id)) ?? false

    // If neither the previous hover nor the next hover involves any lecture in this course,
    // then the hover change is irrelevant to this block.
    if (!isPrevIn && !isNextIn) return true

    return false
})
