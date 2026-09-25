import styled from "@emotion/styled"

import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const SummaryWrapper = styled(FlexWrapper)<{ $fluid: boolean; $compact: boolean }>`
    width: ${({ $fluid }) => ($fluid ? "100%" : "300px")};
    max-width: 300px;
    padding: ${({ $compact }) => ($compact ? "10px 0" : "10px")};
`

const SummaryItem = styled(FlexWrapper)<{ $compact: boolean }>`
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
    compact?: boolean
}

export default function ReviewScoreSummary({
    averageGrade,
    averageLoad,
    averageSpeech,
    reviewCount,
    labels,
    fluid = false,
    compact = false,
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
            $compact={compact}
        >
            {scores.map(([value, label]) => (
                <SummaryItem
                    key={label}
                    direction="column"
                    gap={0}
                    align="center"
                    $compact={compact}
                >
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
