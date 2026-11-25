import styled from "@emotion/styled"

import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const SummaryWrapper = styled(FlexWrapper)<{ $fluid: boolean }>`
    width: ${({ $fluid }) => ($fluid ? "100%" : "300px")};
    max-width: 300px;
    padding: 10px;
`

const SummaryItem = styled(FlexWrapper)`
    flex: 1 0 0;
`

interface ReviewScoreSummaryProps {
    averageGrade: number | undefined
    averageLoad: number | undefined
    averageSpeech: number | undefined
    reviewCount: number | undefined
    labels: {
        grade: string
        load: string
        speech: string
    }
    fluid?: boolean
}

export default function ReviewScoreSummary({
    averageGrade,
    averageLoad,
    averageSpeech,
    reviewCount,
    labels,
    fluid = false,
}: ReviewScoreSummaryProps) {
    const scores = [
        [getAverageScoreLabel(averageGrade, reviewCount), labels.grade],
        [getAverageScoreLabel(averageLoad, reviewCount), labels.load],
        [getAverageScoreLabel(averageSpeech, reviewCount), labels.speech],
    ] as const

    return (
        <SummaryWrapper
            direction="row"
            gap={0}
            justify="space-between"
            align="center"
            $fluid={fluid}
        >
            {scores.map(([value, label]) => (
                <SummaryItem key={label} direction="column" gap={0} align="center">
                    <Typography type="Bigger" color="Text.default">
                        {value}
                    </Typography>
                    <Typography type="Smaller" color="Text.default">
                        {label}
                    </Typography>
                </SummaryItem>
            ))}
        </SummaryWrapper>
    )
}
