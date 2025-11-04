import { type Dispatch, type SetStateAction, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import GradeWrap from "@/common/components/GradeWrap"
import { ScoreEnum } from "@/common/enum/scoreEnum"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import type { Professor } from "@/common/schemas/professor"
import professorName from "@/utils/professorName"

const ReviewWrapper = styled(FlexWrapper)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
`

const ReviewBoxWrapper = styled(FlexWrapper)`
    height: 160px;
`

const GradesWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;
`

export interface ReviewWritingBlockProps {
    name: string
    lectureId: number
    professors: Professor[]
    year: number
    semester: SemesterEnum
}

function ReviewWritingBlock({
    name,
    lectureId,
    professors,
    year,
    semester,
}: ReviewWritingBlockProps) {
    const { t } = useTranslation()

    const [reviewText, setReviewText] = useState<string>("")

    const [reviewGrade, setReviewGrade] = useState<ScoreEnum>(0)
    const [reviewLoad, setReviewLoad] = useState<ScoreEnum>(0)
    const [reviewSpeech, setReviewSpeech] = useState<ScoreEnum>(0)

    function submitReview() {
        const submitData = {
            reviewText,
            reviewGrade,
            reviewLoad,
            reviewSpeech,
        }

        alert(JSON.stringify(submitData, null, 2))
    }

    return (
        <ReviewWrapper direction="column" gap={8} align="stretch">
            <FlexWrapper direction="row" gap={6} align={"center"}>
                <Typography type={"NormalBold"} color={"Text.default"}>
                    {name}
                </Typography>
                {[
                    professorName(professors),
                    year,
                    semesterToString(semester || SemesterEnum.SPRING),
                ].map((text, idx) => {
                    return (
                        <Typography type={"Normal"} color={"Text.lighter"} key={idx}>
                            {text}
                        </Typography>
                    )
                })}
            </FlexWrapper>
            <ReviewBoxWrapper
                direction="column"
                gap={0}
                justify="stretch"
                align="stretch"
            >
                <TextInputArea
                    placeholder={t("common.review.writingPlaceholder")}
                    value={reviewText}
                    handleChange={setReviewText}
                    area={true}
                />
            </ReviewBoxWrapper>
            <FlexWrapper direction="row" gap={20} justify="space-between" align="center">
                <GradesWrapper direction="row" gap={12}>
                    {(
                        [
                            [t("common.grade"), reviewGrade, setReviewGrade],
                            [t("common.load"), reviewLoad, setReviewLoad],
                            [t("common.speech"), reviewSpeech, setReviewSpeech],
                        ] as [string, ScoreEnum, Dispatch<SetStateAction<ScoreEnum>>][]
                    ).map(([tag, currentState, DispatchFunction]) => (
                        <FlexWrapper direction="row" gap={6} align="center" key={tag}>
                            <Typography type="Normal" color="Text.default">
                                {tag}
                            </Typography>
                            <GradeWrap score={currentState} setScore={DispatchFunction} />
                        </FlexWrapper>
                    ))}
                </GradesWrapper>
                <Button
                    type={
                        reviewText && reviewGrade && reviewSpeech && reviewLoad
                            ? "default"
                            : "disabled"
                    }
                    $paddingLeft={8}
                    $paddingTop={8}
                    onClick={submitReview}
                >
                    <Typography
                        type="Normal"
                        color={
                            reviewText && reviewGrade && reviewSpeech && reviewLoad
                                ? "Highlight.default"
                                : "Text.disable"
                        }
                    >
                        {t("common.upload")}
                    </Typography>
                </Button>
            </FlexWrapper>
        </ReviewWrapper>
    )
}

export default ReviewWritingBlock
