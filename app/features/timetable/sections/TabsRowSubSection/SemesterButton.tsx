import { useEffect, useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
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
    setYear: React.Dispatch<React.SetStateAction<number>>
    setSemester: React.Dispatch<React.SetStateAction<SemesterEnum>>
    setCurrentTimetableId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function SemesterButton({
    year,
    semester,
    setYear,
    setSemester,
    setCurrentTimetableId,
}: SemesterButtonProps) {
    const theme = useTheme()

    const { query: semestersRequest } = useAPI("GET", "/semesters")

    useEffect(() => {
        const semesters = semestersRequest.data?.semesters
        if (semesters && semesters.length > 0) {
            const lastSemester = semesters[semesters.length - 1]
            if (lastSemester) {
                setYear(lastSemester.year)
                setSemester(lastSemester.semester)
            }
        }
    }, [semestersRequest.data])

    const { isFirstSemester, isLastSemester } = useMemo(() => {
        if (!semestersRequest.data) {
            return { isFirstSemester: false, isLastSemester: false }
        }
        const semestersList = semestersRequest.data.semesters
        const firstSemester = semestersList[0]
        const lastSemester = semestersList[semestersList.length - 1]

        if (!firstSemester || !lastSemester) {
            return { isFirstSemester: true, isLastSemester: true }
        }

        return {
            isFirstSemester:
                year === firstSemester.year && semester === firstSemester.semester,
            isLastSemester:
                year === lastSemester.year && semester === lastSemester.semester,
        }
    }, [semestersRequest.data, year, semester])

    const onClickPreviousSemester = () => {
        if (isFirstSemester) return
        if (semester === SemesterEnum.SPRING) {
            setSemester(SemesterEnum.FALL)
            setYear(year - 1)
        } else {
            setSemester(SemesterEnum.SPRING)
        }
        setCurrentTimetableId(null)
    }
    const onClickNextSemester = () => {
        if (isLastSemester) return
        if (semester === SemesterEnum.FALL) {
            setSemester(SemesterEnum.SPRING)
            setYear(year + 1)
        } else {
            setSemester(SemesterEnum.FALL)
        }
        setCurrentTimetableId(null)
    }

    return (
        <SemesterButtonWrapper
            direction={"row"}
            gap={0}
            justify="space-between"
            align="center"
        >
            <IconButton
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
