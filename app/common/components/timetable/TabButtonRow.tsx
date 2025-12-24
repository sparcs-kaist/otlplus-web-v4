import { useEffect, useMemo } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { useTranslation } from "react-i18next"

import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import TabButton from "./TabButton"

const SemesterButton = styled(FlexWrapper)`
    width: 136px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 6px;
    padding: 8px 10px;
`

interface TabButtonRowProps {
    isTimetable?: boolean
    currentTimetableId: number | null
    setCurrentTimetableId: React.Dispatch<React.SetStateAction<number | null>>
    year: number
    semester: SemesterEnum
    setYear: React.Dispatch<React.SetStateAction<number>>
    setSemester: React.Dispatch<React.SetStateAction<SemesterEnum>>
}

const TabButtonRow: React.FC<TabButtonRowProps> = ({
    isTimetable = true,
    currentTimetableId,
    setCurrentTimetableId,
    year,
    semester,
    setYear,
    setSemester,
}) => {
    const { t } = useTranslation()
    const theme = useTheme()

    const { query: timetables, setParams } = useAPI("GET", "/timetables")
    const { query: semestersRequest } = useAPI("GET", "/semesters")
    const { user, status } = useUserStore()

    useEffect(() => {
        if (status === "success") {
            setParams({ userId: user?.id ?? -1 })
        }
    }, [status])

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
        <FlexWrapper
            direction="row"
            justify="space-between"
            align="center"
            gap={0}
            style={{ width: "100%" }}
        >
            <FlexWrapper direction="row" gap={3}>
                <TabButton
                    key="my-timetable"
                    type={currentTimetableId == null ? "selected" : "default"}
                    onClick={() => {
                        setCurrentTimetableId(null)
                    }}
                >
                    {t("timetable.myTimetable")}
                </TabButton>
                {timetables.data?.timetables.map((timetable) => {
                    if (timetable.year != year || timetable.semester != semester) {
                        return null
                    }
                    return (
                        <TabButton
                            key={timetable.id}
                            type={
                                currentTimetableId == timetable.id
                                    ? "selected"
                                    : "default"
                            }
                            onClick={() => {
                                setCurrentTimetableId(timetable.id)
                            }}
                        >
                            {timetable.name ? timetable.name : "No Title"}
                        </TabButton>
                    )
                })}
                {isTimetable && (
                    <TabButton>
                        <Icon size={17.5}>
                            <AddIcon />
                        </Icon>
                    </TabButton>
                )}
            </FlexWrapper>
            <SemesterButton
                direction={"row"}
                gap={0}
                justify="space-between"
                align="center"
            >
                <Icon
                    size={20}
                    color={
                        isFirstSemester
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    onClick={onClickPreviousSemester}
                >
                    <NavigateBeforeIcon />
                </Icon>
                <Typography color="Highlight.default">{year}</Typography>
                <Typography color="Highlight.default">
                    {semesterToString(semester)}
                </Typography>
                <Icon
                    size={20}
                    color={
                        isLastSemester
                            ? theme.colors.Text.disable
                            : theme.colors.Highlight.default
                    }
                    onClick={onClickNextSemester}
                >
                    <NavigateNextIcon />
                </Icon>
            </SemesterButton>
        </FlexWrapper>
    )
}

export default TabButtonRow
