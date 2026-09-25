import React from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"

import formatProfessorName from "../LectureListSection/formatProfessorName"
import formatCompetitionRate from "./formatCompetitionRate"
import formatExamTime from "./formatExamTime"
import formatRoomName from "./formatRoomName"

const LectureInfo = styled(FlexWrapper)`
    width: 100%;
`

const NumberWrapper = styled(FlexWrapper)<{ $compact: boolean }>`
    width: 100%;
    max-width: 300px;
    padding: ${({ $compact }) => ($compact ? "10px 0" : "10px")};
`

const NumberContent = styled(FlexWrapper)<{ $compact: boolean }>`
    flex: 1 0 0;
    ${({ $compact }) =>
        $compact &&
        `
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`

const DetailHeaderText = styled(Typography)`
    white-space: nowrap;
`

interface LectureInfoSubsectionProps {
    selectedLecture: Lecture | null
    metrics?: "enrollment" | "course"
}

const LectureInfoSubsection: React.FC<LectureInfoSubsectionProps> = ({
    selectedLecture,
    metrics = "enrollment",
}) => {
    const { t } = useTranslation()

    if (!selectedLecture) return null

    const competitionRate = formatCompetitionRate(
        selectedLecture.numPeople,
        selectedLecture.limitPeople,
    )

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
                $compact={metrics === "course"}
                direction="row"
                gap={0}
                justify={"space-around"}
                align={"center"}
            >
                {(metrics === "course"
                    ? [
                          [selectedLecture.classDuration, t("common.numClasses")],
                          [selectedLecture.expDuration, t("common.numLabs")],
                          selectedLecture.creditAU
                              ? [selectedLecture.creditAU, "AU"]
                              : [selectedLecture.credit, t("common.credit")],
                      ]
                    : [
                          [
                              selectedLecture.isEnglish ? "Eng" : "한",
                              t("common.language"),
                          ],
                          [selectedLecture.credit, t("common.credit")],
                          [competitionRate, t("timetable.competitionRate")],
                      ]
                ).map(([value, label], index) => (
                    <NumberContent
                        $compact={metrics === "course"}
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
