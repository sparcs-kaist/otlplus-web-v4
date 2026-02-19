import React, { memo, useEffect } from "react"

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

    :not([data-selected-lecture=""]) & {
        opacity: 0.3;
    }

    &: [data-is-selected= "true"] {
        opacity: 1;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`

const CourseTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    justify-content: space-between;
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
    [data-selected-lecture="${({ lectureId }) => lectureId}"] &,
    [data-hovered-lectures~="${({ lectureId }) => lectureId}"]:not(:hover) & {
        background-color: ${({ theme }) => theme.colors.Background.Block.dark};
    }
`

const Divider = styled.div`
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.dark};
    align-self: center;
`

interface LectureListBlockProps {
    course: GETLecturesResponse["courses"][number]
    wishlist: number[]
    currentTimetableId: number | null
    timetableLectures: Lecture[]
    isAddTimetablePending: boolean
    selectedLecture: Lecture | null
    hoveredLecture: Lecture[] | null
    handleSetHoveredLecture: (lecture: Lecture) => void
    handleClearHoveredLecture: () => void
    handleSetSelectedLecture: (lecture: Lecture) => void
    handleLikeClick: (wish: boolean, lectureId: number) => void
    handleAddToTimetable: (lecture: Lecture) => void
    t: (key: string) => string
}

const LectureListBlock: React.FC<LectureListBlockProps> = ({
    course,
    wishlist,
    currentTimetableId,
    timetableLectures,
    isAddTimetablePending,
    handleSetHoveredLecture,
    handleClearHoveredLecture,
    handleSetSelectedLecture,
    selectedLecture,
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
            selectedLecture?.id != null &&
                course.lectures.some((lec) => lec.id === selectedLecture.id)
                ? "true"
                : "false",
        )
    }, [selectedLecture, course])

    return (
        <CourseItemWrapper ref={wrapperRef} data-is-selected="">
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
                const wish = wishlist.includes(lecture.id)
                return (
                    <React.Fragment key={lecture.id}>
                        <LectureItemWrapper
                            data-lecture-id={lecture.id}
                            onMouseEnter={() => handleSetHoveredLecture(lecture)}
                            onMouseLeave={handleClearHoveredLecture}
                            onClick={() => handleSetSelectedLecture(lecture)}
                            lectureId={lecture.id}
                        >
                            <FlexWrapper direction="column" gap={0}>
                                {isTablet && (
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
                                    <Typography type="NormalBold" color="Text.default">
                                        {lecture.classNo} {lecture.subtitle}
                                    </Typography>
                                    <Typography type="Normal" color="Text.default">
                                        {formatProfessorName(lecture.professors)}
                                    </Typography>
                                </FlexWrapper>
                                {isTablet && (
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
        prev.wishlist !== next.wishlist || // Assuming array ref changes if content changes, or use deep compare if necessary (usually ref change from state)
        prev.currentTimetableId !== next.currentTimetableId ||
        prev.timetableLectures !== next.timetableLectures ||
        prev.isAddTimetablePending !== next.isAddTimetablePending
    ) {
        return false
    }

    return true
})
