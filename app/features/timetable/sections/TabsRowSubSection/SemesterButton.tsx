import { useEffect, useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { useTranslation } from "react-i18next"

import { type SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

const SemesterButtonWrapper = styled(FlexWrapper)`
    width: 150px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`

interface SemesterButtonProps {
    year: number
    semester: SemesterEnum
    onChange: (year: number, semester: SemesterEnum) => void
}

export default function SemesterButton({
    year,
    semester,
    onChange,
}: SemesterButtonProps) {
    const theme = useTheme()
    const { t } = useTranslation()

    const { query: semestersRequest } = useAPI("GET", "/semesters")

    const { query: currentSemesterRequest } = useAPI("GET", "/semesters/current")

    useEffect(() => {
        if (year >= 0) return
        const currentSemester = currentSemesterRequest.data
        if (currentSemester) {
            onChange(currentSemester.year, currentSemester.semester)
        }
    }, [currentSemesterRequest.data, year, onChange])

    const { previousSemester, nextSemester } = useMemo(() => {
        const semesters = semestersRequest.data?.semesters
        const currentIndex = semesters?.findIndex(
            (item) => item.year === year && item.semester === semester,
        )
        if (currentIndex === undefined || currentIndex === -1) {
            return { previousSemester: undefined, nextSemester: undefined }
        }
        return {
            previousSemester: semesters?.[currentIndex - 1],
            nextSemester: semesters?.[currentIndex + 1],
        }
    }, [semestersRequest.data, year, semester])
    const isFirstSemester = !previousSemester
    const isLastSemester = !nextSemester

    const onClickPreviousSemester = () => {
        if (previousSemester) onChange(previousSemester.year, previousSemester.semester)
    }
    const onClickNextSemester = () => {
        if (nextSemester) onChange(nextSemester.year, nextSemester.semester)
    }

    return (
        <SemesterButtonWrapper
            direction={"row"}
            gap={0}
            justify="space-between"
            align="center"
        >
            <IconButton
                aria-label={t("friends.previousSemester")}
                onClick={isFirstSemester ? undefined : onClickPreviousSemester}
                styles={{ padding: 2.5 }}
            >
                <Icon
                    size={20}
                    color={
                        isFirstSemester
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    onClick={isFirstSemester ? undefined : () => {}}
                >
                    <NavigateBeforeIcon />
                </Icon>
            </IconButton>
            <Typography color="Highlight.default">{year}</Typography>
            <Typography color="Highlight.default">
                {semesterToString(semester)}
            </Typography>
            <IconButton
                aria-label={t("friends.nextSemester")}
                onClick={isLastSemester ? undefined : onClickNextSemester}
                styles={{ padding: 2.5 }}
            >
                <Icon
                    size={20}
                    color={
                        isLastSemester
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    onClick={isLastSemester ? undefined : () => {}}
                >
                    <NavigateNextIcon />
                </Icon>
            </IconButton>
        </SemesterButtonWrapper>
    )
}
