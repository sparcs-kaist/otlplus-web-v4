import { memo, useCallback } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CircleIcon from "@mui/icons-material/Circle"
import { useTranslation } from "react-i18next"

import type { GETCoursesResponse } from "@/api/courses"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { trackEvent } from "@/libs/mixpanel"

interface CourseBlockProps {
    readonly course: GETCoursesResponse["courses"][number]
    readonly isSelected: boolean
    readonly selectCourseId: (courseId: number | null) => void
}

const CourseBlockInner = styled.button<{ selected: boolean }>`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme, selected }) =>
            selected
                ? theme.colors.Background.Block.darker
                : theme.colors.Background.Block.dark};
    }
    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
    background-color: ${({ selected, theme }) =>
        selected
            ? theme.colors.Background.Block.darker
            : theme.colors.Background.Block.default};
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.default};
    margin: 6px 0;
`

const DetailHeader = styled(Typography)`
    white-space: nowrap;
`

const CourseBlock: React.FC<CourseBlockProps> = ({
    course,
    isSelected,
    selectCourseId,
}) => {
    const { t } = useTranslation()
    const theme = useTheme()

    const handleClick = useCallback(() => {
        if (isSelected) {
            selectCourseId(null)
        } else {
            selectCourseId(course.id)
            trackEvent("Select Course", {
                courseId: course.id,
                courseCode: course.code,
                courseName: course.name,
                department: course.department.name,
            })
        }
    }, [isSelected, course.id, selectCourseId])

    return (
        <CourseBlockInner
            type="button"
            aria-pressed={isSelected}
            onClick={handleClick}
            selected={isSelected}
        >
            <FlexWrapper direction="row" gap={0} justify="space-between" align="center">
                <FlexWrapper direction="row" gap={6} align={"center"}>
                    <Icon
                        size={12}
                        color={
                            course.open
                                ? theme.colors.Highlight.default
                                : theme.colors.Text.disable
                        }
                    >
                        <CircleIcon />
                    </Icon>
                    <Typography type={"NormalBold"} color={"Text.default"}>
                        {course.name}
                    </Typography>
                    <Typography type={"Normal"} color={"Text.placeholder"}>
                        {course.code}
                    </Typography>
                </FlexWrapper>
                {course.completed && (
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.completedCourse")}
                    </Typography>
                )}
            </FlexWrapper>
            <Divider />
            <FlexWrapper direction="column" gap={4}>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeader type={"NormalBold"} color={"Text.default"}>
                        {t("common.class")}
                    </DetailHeader>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {course.department.name}, {course.type}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeader type={"NormalBold"} color={"Text.default"}>
                        {t("common.professor")}
                    </DetailHeader>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {course.professors.map((professor) => professor.name).join(", ")}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeader type={"NormalBold"} color={"Text.default"}>
                        {t("common.description")}
                    </DetailHeader>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {course.summary}
                    </Typography>
                </FlexWrapper>
            </FlexWrapper>
        </CourseBlockInner>
    )
}

export default memo(CourseBlock)
