import React, { useEffect } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import type { GETCourseDetailResponse } from "@/api/courses/$courseId"
import exampleCourse from "@/api/example/Course"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { getAPIResponseType } from "@/utils/api/getAPIType"

import formatProfessorName from "../LectureListSection/formatProfessorName"
import formatExamTime from "./formatExamTime"
import formatRoomName from "./formatRoomName"

const LectureInfo = styled(FlexWrapper)`
    width: 100%;
`

const NumberWrapper = styled(FlexWrapper)`
    width: 300px;
    padding: 10px;
`

const NumberContent = styled(FlexWrapper)`
    flex: 1 0 0;
`

const DetailHeaderText = styled(Typography)`
    white-space: nowrap;
`

interface LectureInfoSubsectionProps {
    selectedLecture: Lecture | null
}

const LectureInfoSubsection: React.FC<LectureInfoSubsectionProps> = ({
    selectedLecture,
}) => {
    const { t } = useTranslation()
    // /courses/{courseId} 호출 => lecture.
    const [courseDetail, setCourseDetail] = React.useState<getAPIResponseType<
        "GET",
        "/courses/:courseId"
    > | null>(null)

    return (
        <>
            <LectureInfo direction="column" gap={8}>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                        {t("common.search.type")}
                    </DetailHeaderText>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {selectedLecture?.type}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                        {t("common.search.department")}
                    </DetailHeaderText>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {selectedLecture?.department.name}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                        {t("common.professor")}
                    </DetailHeaderText>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {formatProfessorName(selectedLecture?.professors || [])}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                        {t("common.room")}
                    </DetailHeaderText>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {formatRoomName(selectedLecture?.classes || [])}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                        {t("common.limit")}
                    </DetailHeaderText>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {selectedLecture?.limitPeople}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={6}>
                    <DetailHeaderText type={"NormalBold"} color={"Text.default"}>
                        {t("common.exam")}
                    </DetailHeaderText>
                    <Typography type={"Normal"} color={"Text.default"}>
                        {formatExamTime(selectedLecture?.examTimes || [])}
                    </Typography>
                </FlexWrapper>
            </LectureInfo>
            <NumberWrapper
                direction="row"
                gap={0}
                justify={"space-around"}
                align={"center"}
            >
                {[
                    [courseDetail?.classDuration, t("common.numClasses")],
                    [courseDetail?.expDuration, t("common.numLabs")],
                    [courseDetail?.credit, t("common.credit")],
                ].map(([value, label], index) => (
                    <NumberContent
                        key={index}
                        direction="column"
                        gap={0}
                        align={"center"}
                    >
                        <Typography type={"Bigger"} color={"Text.default"}>
                            {value}
                        </Typography>
                        <Typography type={"Smaller"} color={"Text.default"}>
                            {label}
                        </Typography>
                    </NumberContent>
                ))}
            </NumberWrapper>
        </>
    )
}

export default LectureInfoSubsection
