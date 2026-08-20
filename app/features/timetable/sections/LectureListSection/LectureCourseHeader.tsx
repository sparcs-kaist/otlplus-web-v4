import styled from "@emotion/styled"

import type { GETLecturesResponse } from "@/api/lectures"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const HeaderWrapper = styled(FlexWrapper)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`

type LectureCourseHeaderProps = {
    readonly course: GETLecturesResponse["courses"][number]
    readonly completedLabel: string
}

export default function LectureCourseHeader({
    course,
    completedLabel,
}: LectureCourseHeaderProps) {
    return (
        <HeaderWrapper direction="row" gap={6} align="center" justify="space-between">
            <FlexWrapper
                direction="row"
                gap={6}
                align="center"
                style={{ opacity: course.completed ? 0.3 : 1 }}
            >
                <Typography type="NormalBold" color="Text.default">
                    {course.name}
                </Typography>
                <Typography type="Normal" color="Text.default">
                    {course.code}
                </Typography>
            </FlexWrapper>
            <Typography
                type="Normal"
                color={course.completed ? "Text.default" : "Highlight.default"}
                style={{ textAlign: "end" }}
            >
                {course.completed ? completedLabel : course.type}
            </Typography>
        </HeaderWrapper>
    )
}
