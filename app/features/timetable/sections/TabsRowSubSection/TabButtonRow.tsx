import { useEffect, useRef, useState } from "react"

import {
    DndContext,
    type DragEndEvent,
    type DragStartEvent,
    MeasuringStrategy,
    MouseSensor,
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
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { Timetables } from "@/common/schemas/timetables"
import SemesterButton from "@/features/timetable/sections/TabsRowSubSection/SemesterButton"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { queryKeys } from "@/libs/query/queryKeys"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import TabButton from "./TabButton"
import getSemesterTimetables from "./getSemesterTimetables"
import getTimetableAutoSelection from "./getTimetableAutoSelection"

const TabButtonRowWrapper = styled(FlexWrapper)`
    width: 100%;
    max-width: 992px;

    ${media.laptop} {
        max-width: 635px;
    }

    ${media.tablet} {
        max-width: 100%;
    }
`

const TabRow = styled(FlexWrapper)`
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;

    & > * {
        flex-shrink: 0;

        @media (prefers-reduced-motion: reduce) {
            transition: none !important;
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

const TimetableName = styled(Typography)`
    outline: none;
    user-select: none;
`

const AcademicTimetableName = styled(Typography)`
    ${media.mobile} {
        max-width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

interface SortableTimetableTabProps {
    timetable: Timetables
    isSelected: boolean
    isHome: boolean
    isSettingHome: boolean
    onClick: () => void
    onCopy: (e: React.MouseEvent) => void
    onSetHome: (e: React.MouseEvent) => void
    onDelete: (e: React.MouseEvent) => void
    onNameChange: (id: number, newName: string) => void
    isDragging?: boolean
}

const SortableTimetableTab: React.FC<SortableTimetableTabProps> = ({
    timetable,
    isSelected,
    isHome,
    isSettingHome,
    onClick,
    onCopy,
    onSetHome,
    onDelete,
    onNameChange,
    isDragging,
}) => {
    const theme = useTheme()
    const { t } = useTranslation()

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: timetable.id,
        disabled: isHome,
        animateLayoutChanges: () => true,
        transition: { duration: 350, easing: "ease-out" },
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
        touchAction: "manipulation" as const,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isHome ? 1 : undefined,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            aria-disabled={false}
            {...listeners}
        >
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
                    {isSelected ? (
                        <IconButton
                            aria-label={t(
                                isHome
                                    ? "timetable.homeTimetable"
                                    : "timetable.setHomeTimetable",
                            )}
                            aria-pressed={isHome}
                            disabled={isSettingHome}
                            onClick={onSetHome}
                            styles={{ padding: 3.75 }}
                        >
                            <Icon size={17.5} color={theme.colors.Highlight.default}>
                                {isHome ? <StarIcon /> : <StarBorderIcon />}
                            </Icon>
                        </IconButton>
                    ) : isHome ? (
                        <Icon
                            size={17.5}
                            color={theme.colors.Highlight.default}
                            role="img"
                            aria-label={t("timetable.homeTimetable")}
                            style={{ margin: 3.75 }}
                        >
                            <StarIcon />
                        </Icon>
                    ) : null}
                    {isSelected && (
                        <IconButton
                            aria-label={t("timetable.shortcuts.timetableDuplicate")}
                            onClick={onCopy}
                            styles={{ padding: 5 }}
                        >
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
                    {isSelected && (
                        <IconButton
                            aria-label={t("timetable.shortcuts.timetableDelete")}
                            onClick={onDelete}
                            styles={{ padding: 3.75 }}
                        >
                            <Icon size={17.5} color={theme.colors.Highlight.default}>
                                <CloseIcon />
                            </Icon>
                        </IconButton>
                    )}
                </FlexWrapper>
            </TabButton>
        </div>
    )
}

interface TabButtonRowProps {
    timeTableLectures: Lecture[]
    timetablesQuery: any
    homeTimetableId: number | null
}

const TabButtonRow: React.FC<TabButtonRowProps> = ({
    timeTableLectures,
    timetablesQuery: timetables,
    homeTimetableId,
}) => {
    const { t } = useTranslation()
    const { status } = useUserStore()
    const theme = useTheme()
    const queryClient = useQueryClient()

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const setCurrentTimetableId = useTimetableUIStore((s) => s.setCurrentTimetableId)
    const setCurrentTimetableName = useTimetableUIStore((s) => s.setCurrentTimetableName)
    const year = useTimetableUIStore((s) => s.year)
    const semester = useTimetableUIStore((s) => s.semesterEnum)
    const setYear = useTimetableUIStore((s) => s.setYear)
    const setSemester = useTimetableUIStore((s) => s.setSemesterEnum)
    const autoSelectedSemesterKeys = useTimetableUIStore(
        (s) => s.autoSelectedSemesterKeys,
    )
    const markSemesterAutoSelected = useTimetableUIStore(
        (s) => s.markSemesterAutoSelected,
    )
    const resetAutoSelectedSemesters = useTimetableUIStore(
        (s) => s.resetAutoSelectedSemesters,
    )
    const pendingMyTimetableSelection = useTimetableUIStore(
        (s) => s.pendingMyTimetableSelection,
    )
    const setPendingMyTimetableSelection = useTimetableUIStore(
        (s) => s.setPendingMyTimetableSelection,
    )
    const { requestFunction: addTimetable, mutation: createTimetable } = useAPI(
        "POST",
        "/timetables",
        {
            onSuccess: (data, variables) => {
                timetables.refetch()
                const current = useTimetableUIStore.getState()
                if (
                    current.year === variables.year &&
                    current.semesterEnum === variables.semester
                ) {
                    setCurrentTimetableId(data.id)
                }
            },
        },
    )
    const { requestFunction: deleteTimetable } = useAPI("DELETE", "/timetables", {
        onMutate: (variables) => {
            if (currentTimetableId === variables.id) {
                setCurrentTimetableId(null)
            }
        },
        onSuccess: () => {
            timetables.refetch()
            void queryClient.invalidateQueries({ queryKey: [queryKeys.homeTimetable] })
        },
    })
    const { requestFunction: changeTimetableMetaData } = useAPI("PATCH", "/timetables", {
        onSuccess: () => {
            timetables.refetch()
        },
    })
    const { mutation: setHomeTimetable } = useAPI("PATCH", "/timetables/home", {
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: [queryKeys.homeTimetable] }),
    })
    const isSettingHome = createTimetable.isPending || setHomeTimetable.isPending

    const handleSetHome = async (timetableId: number) => {
        if (isSettingHome || timetableId === homeTimetableId) return
        try {
            await setHomeTimetable.mutateAsync({ year, semester, timetableId })
        } catch {
            window.alert(t("timetable.homeTimetableError"))
        }
    }

    const [localTimetables, setLocalTimetables] = useState<Timetables[]>([])
    const [activeId, setActiveId] = useState<number | null>(null)
    const tabRowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (tabRowRef.current) tabRowRef.current.scrollLeft = 0
    }, [homeTimetableId])

    const sensors = useSensors(
        useSensor(MouseSensor, {
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
        const semesterTimetables = getSemesterTimetables(
            timetables.data?.timetables ?? [],
            year,
            semester,
            homeTimetableId,
        )
        setLocalTimetables(semesterTimetables)

        if (currentTimetableId != null) {
            timetables.data?.timetables.forEach((timetable: Timetables) => {
                if (timetable.id === currentTimetableId) {
                    setCurrentTimetableName(timetable.name)
                }
            })
        }

        if (status !== "success") {
            resetAutoSelectedSemesters()
            return
        }

        const semesterKey = `${year}-${semester}`
        if (pendingMyTimetableSelection) {
            if (year < 0) return
            markSemesterAutoSelected(semesterKey)
            setPendingMyTimetableSelection(false)
            return
        }

        const autoSelection = getTimetableAutoSelection({
            status,
            currentTimetableId,
            semesterKey,
            autoSelectedSemesterKeys,
            preserveMyTimetableSelection: false,
            timetables: semesterTimetables,
        })
        if (autoSelection == null) return

        markSemesterAutoSelected(autoSelection.semesterKey)

        // 학사 시간표는 편집 불가라 기본 선택으로 두면 과목 추가가 조용히 실패한다
        if (autoSelection.timetableId != null) {
            setCurrentTimetableId(autoSelection.timetableId)
        }
    }, [
        timetables.data,
        year,
        semester,
        homeTimetableId,
        status,
        currentTimetableId,
        autoSelectedSemesterKeys,
        markSemesterAutoSelected,
        resetAutoSelectedSemesters,
        pendingMyTimetableSelection,
        setPendingMyTimetableSelection,
        setCurrentTimetableId,
    ])

    useEffect(() => {
        setCurrentTimetableName(
            currentTimetableId == null
                ? t("timetable.myTimetable")
                : localTimetables.find((t) => t.id === currentTimetableId)?.name || "",
        )
    }, [currentTimetableId, localTimetables, setCurrentTimetableName, t])

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as number)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        setActiveId(null)

        if (
            over &&
            active.id !== over.id &&
            active.id !== homeTimetableId &&
            over.id !== homeTimetableId
        ) {
            const oldIndex = localTimetables.findIndex((item) => item.id === active.id)
            const newIndex = localTimetables.findIndex((item) => item.id === over.id)
            const target = localTimetables[newIndex]
            if (oldIndex < 0 || !target) return

            const newItems = arrayMove(localTimetables, oldIndex, newIndex)
            setLocalTimetables(newItems)

            const movedTimetableId = active.id as number
            changeTimetableMetaData({
                id: movedTimetableId,
                order: target.timeTableOrder,
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
            {status === "success" && (
                <TabRow
                    ref={tabRowRef}
                    direction="row"
                    gap={3}
                    flex="0 1 auto"
                    onWheel={onWheel}
                >
                    <DndContext
                        sensors={sensors}
                        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        modifiers={[restrictToHorizontalAxis, restrictToParentElement]}
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
                                    isHome={homeTimetableId === timetable.id}
                                    isSettingHome={isSettingHome}
                                    onSetHome={(e) => {
                                        e.stopPropagation()
                                        void handleSetHome(timetable.id)
                                    }}
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
                </TabRow>
            )}
            <TabButton
                style={{ flexShrink: 0 }}
                title={
                    status === "success" ? undefined : t("timetable.loginToAddTimetable")
                }
            >
                <IconButton
                    aria-label={t("timetable.shortcuts.timetableAdd")}
                    disabled={status !== "success" || createTimetable.isPending}
                    onClick={() => addTimetable({ year, semester, lectureIds: [] })}
                    styles={{ padding: 3.75 }}
                >
                    <Icon size={17.5} color={theme.colors.Text.default}>
                        <AddIcon />
                    </Icon>
                </IconButton>
            </TabButton>
            <FlexWrapper
                direction="row"
                gap={4}
                align="center"
                flex="0 0 auto"
                style={{ marginLeft: "auto" }}
            >
                <TabButton
                    key="my-timetable"
                    type={currentTimetableId == null ? "selected" : "default"}
                    onClick={() => {
                        setPendingMyTimetableSelection(true)
                        setCurrentTimetableId(null)
                    }}
                >
                    <AcademicTimetableName
                        title={t("timetable.myTimetable")}
                        type="Normal"
                        color={
                            currentTimetableId === null
                                ? "Highlight.default"
                                : "Text.lighter"
                        }
                        style={{ paddingTop: 4, paddingBottom: 3.5 }}
                    >
                        {t("timetable.myTimetable")}
                    </AcademicTimetableName>
                    {currentTimetableId === null && status === "success" && (
                        <IconButton
                            aria-label={t("timetable.shortcuts.timetableDuplicate")}
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
