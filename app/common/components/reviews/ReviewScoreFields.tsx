import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import GradeWrap from "@/common/components/GradeWrap"
import type { ScoreEnum } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const GradesWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;
`

interface ReviewScoreFieldsProps {
    grade: ScoreEnum
    load: ScoreEnum
    speech: ScoreEnum
    setGrade: (score: ScoreEnum) => void
    setLoad: (score: ScoreEnum) => void
    setSpeech: (score: ScoreEnum) => void
    disabled?: boolean
}

export default function ReviewScoreFields({
    grade,
    load,
    speech,
    setGrade,
    setLoad,
    setSpeech,
    disabled = false,
}: ReviewScoreFieldsProps) {
    const { t } = useTranslation()
    const entries: [string, ScoreEnum, (score: ScoreEnum) => void][] = [
        [t("common.grade"), grade, setGrade],
        [t("common.load"), load, setLoad],
        [t("common.speech"), speech, setSpeech],
    ]

    return (
        <GradesWrapper direction="row" gap={12} inert={disabled}>
            {entries.map(([tag, currentScore, setScore]) => (
                <FlexWrapper direction="row" gap={6} align="center" key={tag}>
                    <Typography type="Normal" color="Text.default">
                        {tag}
                    </Typography>
                    <GradeWrap score={currentScore} setScore={setScore} />
                </FlexWrapper>
            ))}
        </GradesWrapper>
    )
}
