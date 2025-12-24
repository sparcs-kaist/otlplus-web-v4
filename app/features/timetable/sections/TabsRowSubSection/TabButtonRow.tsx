import { useEffect, useMemo, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { useTranslation } from "react-i18next"

import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { Timetables } from "@/common/schemas/timetables"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import TabButton from "./TabButton"

const TabRow = styled(FlexWrapper)`
    overflow-x: auto;
    scrollbar-width: none;
    min-width: 0;

    &::-webkit-scrollbar {
        display: none;
    }
`

const TimetableName = styled.span`
    outline: none;
    user-select: none;
`

const SemesterButton = styled(FlexWrapper)`
    width: 136px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 6px;
    padding: 8px 10px;
    flex-shrink: 0;
`

interface TabButtonRowProps {
    timeTableLectures: Lecture[]
    currentTimetableId: number | null
    setCurrentTimetableId: React.Dispatch<React.SetStateAction<number | null>>
    setCurrentTimetableName: React.Dispatch<React.SetStateAction<string>>
    year: number
    semester: SemesterEnum
    setYear: React.Dispatch<React.SetStateAction<number>>
    setSemester: React.Dispatch<React.SetStateAction<SemesterEnum>>
}

const TabButtonRow: React.FC<TabButtonRowProps> = ({
    timeTableLectures,
    currentTimetableId,
    setCurrentTimetableId,
    setCurrentTimetableName,
    year,
    semester,
    setYear,
    setSemester,
}) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const { status } = useUserStore()

    const { query: timetables, setParams } = useAPI("GET", "/timetables")
    const { query: semestersRequest } = useAPI("GET", "/semesters")
    const { requestFunction: addTimetable } = useAPI("POST", "/timetables", {
        onSuccess: (data) => {
            timetables.refetch()
            setCurrentTimetableId(data.id)
        },
    })
    const { requestFunction: deleteTimetable } = useAPI("DELETE", "/timetables", {
        onSuccess: (data, variables) => {
            if (currentTimetableId === variables.id) {
                setCurrentTimetableId(null)
            }
            timetables.refetch()
        },
    })
    const { requestFunction: changeTimetableMetaData } = useAPI("PATCH", "/timetables", {
        onSuccess: () => {
            timetables.refetch()
        },
    })

    const [localTimetables, setLocalTimetables] = useState<Timetables[]>([])

    useEffect(() => {
        let list = timetables.data?.timetables ?? []
        list = list.filter((t) => t.year === year && t.semester === semester)
        setLocalTimetables(
            list.slice().sort((a, b) => a.timeTableOrder - b.timeTableOrder),
        )
    }, [timetables.data, year, semester])

    useEffect(() => {
        const semesters = semestersRequest.data?.semesters
        if (semesters && semesters.length > 0) {
            const lastSemester = semesters[semesters.length - 1]
            if (lastSemester) {
                setYear(lastSemester.year)
                setSemester(lastSemester.semester)

                if (status === "success") {
                    setParams({
                        year: lastSemester.year,
                        semester: lastSemester.semester,
                    })
                }
            }
        }
    }, [semestersRequest.data, status])

    useEffect(() => {
        if (status === "success") {
            setParams({
                year: year,
                semester: semester,
            })
        }
    }, [year, semester])

    useEffect(() => {
        setCurrentTimetableName(
            currentTimetableId == null
                ? t("timetable.myTimetable")
                : localTimetables.find((t) => t.id === currentTimetableId)?.name || "",
        )
    }, [currentTimetableId])

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

    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY === 0) return
        const target = e.currentTarget as HTMLDivElement
        target.scrollLeft = target.scrollLeft + e.deltaY
    }

    return (
        <FlexWrapper
            direction="row"
            justify="space-between"
            align="center"
            gap={0}
            style={{ maxWidth: "890px", width: "100%", overflow: "hidden" }}
        >
            <FlexWrapper direction="row" gap={3} flex="1 1 auto" style={{ minWidth: 0 }}>
                <TabButton
                    key="my-timetable"
                    type={currentTimetableId == null ? "selected" : "default"}
                    onClick={() => {
                        setCurrentTimetableId(null)
                    }}
                >
                    {t("timetable.myTimetable")}
                    {currentTimetableId === null && (
                        <Icon
                            size={15}
                            onClick={(e) => {
                                e.stopPropagation()
                                addTimetable({
                                    year: year,
                                    semester: semester,
                                    lectureIds: timeTableLectures.map((lec) => lec.id),
                                })
                            }}
                        >
                            <ContentCopyIcon />
                        </Icon>
                    )}
                </TabButton>
                <TabRow direction="row" gap={3} flex="1 1 auto" onWheel={onWheel}>
                    {localTimetables.map((timetable) => (
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
                            style={{ touchAction: "none" }}
                        >
                            <TimetableName
                                onClick={(e) => {
                                    if (currentTimetableId === timetable.id) {
                                        e.stopPropagation()
                                        e.currentTarget.contentEditable = "true"
                                        e.currentTarget.focus()
                                    }
                                }}
                                onBlur={(e) => {
                                    const newName = e.currentTarget.textContent || ""
                                    setLocalTimetables((prev) =>
                                        prev.map((t) =>
                                            t.id === timetable.id
                                                ? {
                                                      ...t,
                                                      name: newName,
                                                  }
                                                : t,
                                        ),
                                    )
                                    e.currentTarget.contentEditable = "false"
                                    changeTimetableMetaData({
                                        id: timetable.id,
                                        name: newName,
                                    })
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault()
                                        e.currentTarget.blur()
                                    }
                                }}
                                contentEditable={false}
                                suppressContentEditableWarning={true}
                            >
                                {timetable.name ? timetable.name : "No Title"}
                            </TimetableName>
                            {currentTimetableId === timetable.id && (
                                <Icon
                                    size={15}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        addTimetable({
                                            year: year,
                                            semester: semester,
                                            lectureIds: timeTableLectures.map(
                                                (lec) => lec.id,
                                            ),
                                        })
                                    }}
                                >
                                    <ContentCopyIcon />
                                </Icon>
                            )}
                            <Icon
                                size={17.5}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    deleteTimetable({ id: timetable.id })
                                }}
                            >
                                <CloseIcon />
                            </Icon>
                        </TabButton>
                    ))}
                    <TabButton>
                        <Icon
                            size={17.5}
                            onClick={() =>
                                addTimetable({
                                    year: year,
                                    semester: semester,
                                    lectureIds: [],
                                })
                            }
                        >
                            <AddIcon />
                        </Icon>
                    </TabButton>
                </TabRow>
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
