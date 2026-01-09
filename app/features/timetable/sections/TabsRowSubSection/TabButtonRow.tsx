import { useEffect, useState } from "react"

import {
    DndContext,
    type DragEndEvent,
    type DragStartEvent,
    PointerSensor,
    TouchSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import { restrictToHorizontalAxis, restrictToParentElement } from "@dnd-kit/modifiers"
import {
    SortableContext,
    arrayMove,
    horizontalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { useTranslation } from "react-i18next"

import { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { Timetables } from "@/common/schemas/timetables"
import SemesterButton from "@/features/timetable/sections/TabsRowSubSection/SemesterButton"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import TabButton from "./TabButton"

const TabButtonRowWrapper = styled(FlexWrapper)`
    width: 100%;
    max-width: 890px;

    ${media.laptop} {
        max-width: 565px;
    }

    ${media.tablet} {
        max-width: 100%;
    }
`

const TabRow = styled(FlexWrapper)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const TimetableName = styled(Typography)`
    outline: none;
    user-select: none;
`

interface SortableTimetableTabProps {
    timetable: Timetables
    isSelected: boolean
    onClick: () => void
    onCopy: (e: React.MouseEvent) => void
    onDelete: (e: React.MouseEvent) => void
    onNameChange: (id: number, newName: string) => void
    isDragging?: boolean
}

const SortableTimetableTab: React.FC<SortableTimetableTabProps> = ({
    timetable,
    isSelected,
    onClick,
    onCopy,
    onDelete,
    onNameChange,
    isDragging,
}) => {
    const theme = useTheme()

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: timetable.id,
    })

    const getTransformString = (
        transform: { x: number; y: number; scaleX?: number; scaleY?: number } | null,
    ): string => {
        if (!transform) return ""
        const { x, y } = transform
        return `translate3d(${x}px, ${y}px, 0)`
    }

    const style = {
        transform: getTransformString(transform),
        transition,
        touchAction: "none" as const,
        opacity: isDragging ? 0.5 : 1,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TabButton type={isSelected ? "selected" : "default"} onClick={onClick}>
                <TimetableName
                    onClick={(e) => {
                        if (isSelected) {
                            e.stopPropagation()
                            e.currentTarget.contentEditable = "true"
                            e.currentTarget.focus()
                        }
                    }}
                    onBlur={(e) => {
                        const newName = e.currentTarget.textContent || ""
                        e.currentTarget.contentEditable = "false"
                        onNameChange(timetable.id, newName)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault()
                            e.currentTarget.blur()
                        }
                    }}
                    contentEditable={false}
                    suppressContentEditableWarning={true}
                    type="Normal"
                    color={isSelected ? "Highlight.default" : "Text.lighter"}
                    style={{ paddingTop: 4, paddingBottom: 3.5 }}
                >
                    {timetable.name ? timetable.name : "No Title"}
                </TimetableName>
                <FlexWrapper direction="row" gap={0} align="center">
                    {isSelected && (
                        <IconButton onClick={onCopy} styles={{ padding: 5 }}>
                            <Icon
                                size={15}
                                onClick={() => {}}
                                color={
                                    isSelected
                                        ? theme.colors.Highlight.default
                                        : theme.colors.Text.lighter
                                }
                            >
                                <ContentCopyIcon />
                            </Icon>
                        </IconButton>
                    )}
                    <IconButton onClick={onDelete} styles={{ padding: 3.75 }}>
                        <Icon
                            size={17.5}
                            onClick={() => {}}
                            color={
                                isSelected
                                    ? theme.colors.Highlight.default
                                    : theme.colors.Text.lighter
                            }
                        >
                            <CloseIcon />
                        </Icon>
                    </IconButton>
                </FlexWrapper>
            </TabButton>
        </div>
    )
}

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
    const { status } = useUserStore()
    const theme = useTheme()

    const { query: timetables, setParams } = useAPI("GET", "/timetables")
    const { requestFunction: addTimetable } = useAPI("POST", "/timetables", {
        onSuccess: (data) => {
            timetables.refetch()
            setCurrentTimetableId(data.id)
        },
    })
    const { requestFunction: deleteTimetable } = useAPI("DELETE", "/timetables", {
        onMutate: (variables) => {
            if (currentTimetableId === variables.id) {
                setCurrentTimetableId(null)
            }
        },
        onSuccess: () => {
            timetables.refetch()
        },
    })
    const { requestFunction: changeTimetableMetaData } = useAPI("PATCH", "/timetables", {
        onSuccess: () => {
            timetables.refetch()
        },
    })

    const [localTimetables, setLocalTimetables] = useState<Timetables[]>([])
    const [activeId, setActiveId] = useState<number | null>(null)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // 8px 이동해야 드래그 시작 (클릭과 구분)
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 500, // 500ms 롱터치
                tolerance: 5, // 5px 이내 움직임 허용
            },
        }),
    )

    useEffect(() => {
        let list = timetables.data?.timetables ?? []
        list = list.filter((t) => t.year === year && t.semester === semester)
        setLocalTimetables(
            list.slice().sort((a, b) => a.timeTableOrder - b.timeTableOrder),
        )

        if (currentTimetableId != null) {
            timetables.data?.timetables.forEach((timetable) => {
                if (timetable.id === currentTimetableId) {
                    setCurrentTimetableName(timetable.name)
                }
            })
        }
    }, [timetables.data, year, semester])

    useEffect(() => {
        if (status === "success" && year !== -1 && semester > 0) {
            setParams({
                year: year,
                semester: semester,
            })
        }
    }, [year, semester, status])

    useEffect(() => {
        setCurrentTimetableName(
            currentTimetableId == null
                ? t("timetable.myTimetable")
                : localTimetables.find((t) => t.id === currentTimetableId)?.name || "",
        )
    }, [currentTimetableId])

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as number)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        setActiveId(null)

        if (over && active.id !== over.id) {
            const oldIndex = localTimetables.findIndex((item) => item.id === active.id)
            const newIndex = localTimetables.findIndex((item) => item.id === over.id)

            const newItems = arrayMove(localTimetables, oldIndex, newIndex)
            setLocalTimetables(newItems)

            const movedTimetableId = active.id as number
            changeTimetableMetaData({
                id: movedTimetableId,
                order: newIndex,
            })
        }
    }

    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY === 0) return
        const target = e.currentTarget as HTMLDivElement
        target.scrollLeft = target.scrollLeft + e.deltaY
    }

    return (
        <TabButtonRowWrapper
            direction="row"
            justify="space-between"
            align="stretch"
            flex="0 1 auto"
            gap={4}
            style={{ overflowX: "hidden" }}
        >
            <FlexWrapper
                direction="row"
                gap={3}
                flex="0 1 auto"
                style={{ overflowX: "auto" }}
            >
                <TabButton
                    key="my-timetable"
                    type={currentTimetableId == null ? "selected" : "default"}
                    onClick={() => {
                        setCurrentTimetableId(null)
                    }}
                >
                    <Typography
                        type="Normal"
                        color={
                            currentTimetableId === null
                                ? "Highlight.default"
                                : "Text.lighter"
                        }
                        style={{ paddingTop: 4, paddingBottom: 3.5 }}
                    >
                        {t("timetable.myTimetable")}
                    </Typography>
                    {currentTimetableId === null && status === "success" && (
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation()
                                addTimetable({
                                    year: year,
                                    semester: semester,
                                    lectureIds: timeTableLectures.map((lec) => lec.id),
                                })
                            }}
                            styles={{ padding: 5 }}
                        >
                            <Icon
                                size={15}
                                color={theme.colors.Highlight.default}
                                onClick={() => {}}
                            >
                                <ContentCopyIcon />
                            </Icon>
                        </IconButton>
                    )}
                </TabButton>
                {status === "success" && (
                    <TabRow direction="row" gap={3} flex="1 1 auto" onWheel={onWheel}>
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            modifiers={[
                                restrictToHorizontalAxis,
                                restrictToParentElement,
                            ]}
                        >
                            <SortableContext
                                items={localTimetables.map((t) => t.id)}
                                strategy={horizontalListSortingStrategy}
                            >
                                {localTimetables.map((timetable) => (
                                    <SortableTimetableTab
                                        key={timetable.id}
                                        timetable={timetable}
                                        isSelected={currentTimetableId === timetable.id}
                                        isDragging={activeId === timetable.id}
                                        onClick={() => {
                                            setCurrentTimetableId(timetable.id)
                                        }}
                                        onCopy={(e) => {
                                            e.stopPropagation()
                                            addTimetable({
                                                year: year,
                                                semester: semester,
                                                lectureIds: timeTableLectures.map(
                                                    (lec) => lec.id,
                                                ),
                                            })
                                        }}
                                        onDelete={(e) => {
                                            e.stopPropagation()
                                            deleteTimetable({ id: timetable.id })
                                        }}
                                        onNameChange={(id, newName) => {
                                            setLocalTimetables((prev) =>
                                                prev.map((t) =>
                                                    t.id === id
                                                        ? {
                                                              ...t,
                                                              name: newName,
                                                          }
                                                        : t,
                                                ),
                                            )
                                            changeTimetableMetaData({
                                                id: id,
                                                name: newName,
                                            })
                                        }}
                                    />
                                ))}
                            </SortableContext>
                        </DndContext>
                        <TabButton
                            onClick={() => {
                                addTimetable({
                                    year: year,
                                    semester: semester,
                                    lectureIds: [],
                                })
                            }}
                        >
                            <IconButton onClick={(e) => {}} styles={{ padding: 3.75 }}>
                                <Icon
                                    size={17.5}
                                    color={theme.colors.Text.default}
                                    onClick={() => {}}
                                >
                                    <AddIcon />
                                </Icon>
                            </IconButton>
                        </TabButton>
                    </TabRow>
                )}
            </FlexWrapper>
            <FlexWrapper direction="row" gap={0} align="center">
                <SemesterButton
                    year={year}
                    semester={semester}
                    setYear={setYear}
                    setSemester={setSemester}
                    setCurrentTimetableId={setCurrentTimetableId}
                />
            </FlexWrapper>
        </TabButtonRowWrapper>
    )
}

export default TabButtonRow
