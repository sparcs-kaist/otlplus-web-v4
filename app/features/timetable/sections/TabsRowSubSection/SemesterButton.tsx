import { useEffect, useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

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
    const { query: currentSemesterRequest } = useAPI("GET", "/semesters/current")

    useEffect(() => {
        const currentSemester = currentSemesterRequest.data
        if (currentSemester) {
            setYear(currentSemester.year)
            setSemester(currentSemester.semester)
        }
    }, [currentSemesterRequest.data])

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

    const onClickPreviousSemester = () => {
        if (!previousSemester) return
        setYear(previousSemester.year)
        setSemester(previousSemester.semester)
        setCurrentTimetableId(null)
    }
    const onClickNextSemester = () => {
        if (!nextSemester) return
        setYear(nextSemester.year)
        setSemester(nextSemester.semester)
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
                onClick={previousSemester ? onClickPreviousSemester : undefined}
                styles={{ padding: 2.5 }}
            >
                <Icon
                    size={20}
                    color={
                        !previousSemester
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    onClick={previousSemester ? () => {} : undefined}
                >
                    <NavigateBeforeIcon />
                </Icon>
            </IconButton>
            <Typography color="Highlight.default">{year}</Typography>
            <Typography color="Highlight.default">
                {semesterToString(semester)}
            </Typography>

            <IconButton
                onClick={nextSemester ? onClickNextSemester : undefined}
                styles={{ padding: 2.5 }}
            >
                <Icon
                    size={20}
                    color={
                        !nextSemester
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    onClick={nextSemester ? () => {} : undefined}
                >
                    <NavigateNextIcon />
                </Icon>
            </IconButton>
        </SemesterButtonWrapper>
    )
}
