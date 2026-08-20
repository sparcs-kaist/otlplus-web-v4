import React, { memo, useEffect } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

import type { GETLecturesResponse } from "@/api/lectures"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { getLectureAddBlockReason } from "@/features/timetable/utils/isLectureAddDisabled"
import { media } from "@/styles/themes/media"
import checkOverlap from "@/utils/timetable/checkOverlap"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureAddButton from "./LectureAddButton"
import LectureCourseHeader from "./LectureCourseHeader"
import LectureLabel from "./LectureLabel"
import formatProfessorName from "./formatProfessorName"

const CourseItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    transition: all 0.2s ease;
    transform: none;
    box-shadow: none;
    overflow: hidden;
    flex-shrink: 0;
    opacity: 0.2;

    [data-selected-lectures=""] & {
        opacity: 1;
    }

    &[data-is-selected="true"] {
        opacity: 1;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`

const LectureItemWrapper = styled.div<{ lectureId: number }>`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    cursor: pointer;

    &:hover,
    &[data-is-hovered="true"],
    &[data-is-selected="true"] {
        background-color: ${({ theme }) => theme.colors.Background.Block.dark};
    }

    ${media.tablet} {
        &:hover,
        &[data-is-hovered="true"],
        &[data-is-selected="true"] {
            background-color: ${({ theme }) => theme.colors.Background.Block.dark};
        }
    }
`

const Divider = styled.div`
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.block};
    align-self: center;
`

interface LectureListBlockProps {
    course: GETLecturesResponse["courses"][number]
    wishlist: number[]
    currentTimetableId: number | null
    timetableLectures: Lecture[]
    selectedLectures: Lecture[] | null
    hoveredLecture: Lecture[] | null
    handleSetHoveredLecture: (lecture: Lecture) => void
    handleClearHoveredLecture: () => void
    handleSetSelectedLecture: (lecture: Lecture, e?: React.MouseEvent) => void
    handleLikeClick: (wish: boolean, lectureId: number) => void
    handleAddToTimetable: (lecture: Lecture) => void
    t: (key: string) => string
}

const LectureListBlock: React.FC<LectureListBlockProps> = ({
    course,
    wishlist,
    currentTimetableId,
    timetableLectures,
    handleSetHoveredLecture,
    handleClearHoveredLecture,
    handleSetSelectedLecture,
    selectedLectures,
    hoveredLecture,
    handleLikeClick,
    handleAddToTimetable,
    t,
}) => {
    const { status } = useUserStore()
    const theme = useTheme()
    const isTablet = useIsDevice("tablet")

    const wrapperRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        wrapperRef.current?.setAttribute(
            "data-is-selected",
            selectedLectures != null &&
                selectedLectures.length > 0 &&
                course.lectures.some((lec) =>
                    selectedLectures.some((sl) => sl.id === lec.id),
                )
                ? "true"
                : "false",
        )
    }, [selectedLectures, course])

    return (
        <CourseItemWrapper ref={wrapperRef} data-is-selected="">
            <LectureCourseHeader
                course={course}
                completedLabel={t("common.completedCourse")}
            />
            <Divider />
            {course.lectures.map((lecture, idx) => {
                const wish = wishlist.includes(lecture.id)
                const isHovered = hoveredLecture?.some((lec) => lec.id === lecture.id)
                const isSelected = selectedLectures?.some((lec) => lec.id === lecture.id)
                const hasOverlap = timetableLectures.some((timetableLecture) =>
                    checkOverlap(timetableLecture.classes, lecture.classes),
                )
                const addBlockReason = getLectureAddBlockReason({
                    status,
                    currentTimetableId,
                    hasOverlap,
                })
                return (
                    <React.Fragment key={lecture.id}>
                        <LectureItemWrapper
                            data-lecture-id={lecture.id}
                            data-search-lecture-id={lecture.id}
                            data-is-hovered={isHovered}
                            data-is-selected={isSelected}
                            onPointerEnter={() => handleSetHoveredLecture(lecture)}
                            onPointerLeave={handleClearHoveredLecture}
                            onClick={(e) => handleSetSelectedLecture(lecture, e)}
                            lectureId={lecture.id}
                        >
                            <FlexWrapper direction="column" gap={0}>
                                {isTablet && isHovered && (
                                    <Typography
                                        type="Small"
                                        color="Text.placeholder"
                                        className="onTablet"
                                    >
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
                                    <LectureLabel
                                        classNo={lecture.classNo}
                                        subtitle={lecture.subtitle}
                                    />
                                    <Typography type="Normal" color="Text.default">
                                        {formatProfessorName(lecture.professors)}
                                    </Typography>
                                </FlexWrapper>
                                {isTablet && isHovered && (
                                    <Typography
                                        type="Small"
                                        color="Text.placeholder"
                                        className="onTablet"
                                    >
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
                                    (wish ? (
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
                                {(!isTablet || isHovered) && (
                                    <LectureAddButton
                                        ariaDisabled={addBlockReason !== null}
                                        ariaLabel={t("timetable.addToTimetable")}
                                        color={theme.colors.Text.default}
                                        disabled={addBlockReason === "loading"}
                                        onClick={() => handleAddToTimetable(lecture)}
                                        size={isTablet ? 30 : 15}
                                        title={
                                            addBlockReason === "myTimetable"
                                                ? t(
                                                      "timetable.myTimeTableLectureAddWarning",
                                                  )
                                                : addBlockReason === "overlap"
                                                  ? t("timetable.addLectureConflict")
                                                  : undefined
                                        }
                                    />
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
        prev.wishlist !== next.wishlist || // Assuming array ref changes if content changes, or use deep compare if necessary (usually ref change from state)
        prev.currentTimetableId !== next.currentTimetableId ||
        prev.timetableLectures !== next.timetableLectures ||
        prev.selectedLectures !== next.selectedLectures ||
        prev.hoveredLecture !== next.hoveredLecture
    ) {
        return false
    }

    return true
})
