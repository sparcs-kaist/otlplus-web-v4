import { memo, useCallback, useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import Close from "@mui/icons-material/Close"
import Delete from "@mui/icons-material/Delete"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import TextInput from "@/common/components/search/TextInput"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import { weekdayToString } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { getCustomBlockTimes } from "@/common/utils/timetableItems"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"

const CustomBlockSectionInner = styled(FlexWrapper)`
    ::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`

const TimeRangeRow = styled.fieldset`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr)) 24px;
    align-items: end;
    gap: 6px;
    margin: 0;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.Line.block};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: 12px;

    label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
    }
`

const TimeSelect = styled.select`
    width: 100%;
    min-width: 0;
    padding: 8px 2px;
    border: 1px solid ${({ theme }) => theme.colors.Line.block};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.Text.default};
    background: ${({ theme }) => theme.colors.Background.Button.default};
    font: inherit;
`

const TimeRangeButton = styled.button`
    border: 0;
    border-radius: 6px;
    padding: 8px 0;
    color: ${({ theme }) => theme.colors.Highlight.default};
    background: ${({ theme }) => theme.colors.Background.Button.default};
    font: inherit;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`

const timeOptions = Array.from({ length: 49 }, (_, index) => index * 30)
const formatTime = (minutes: number) =>
    `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`

interface CustomBlockSectionProps {
    addCustomBlock: (data: Omit<CustomBlock, "id">) => Promise<boolean>
    updateCustomBlock: (id: number, data: Omit<CustomBlock, "id">) => Promise<boolean>
    removeItems: (items: TimetableItem[]) => Promise<boolean>
    isPending: boolean
}

function CustomBlockSection({
    addCustomBlock,
    updateCustomBlock,
    removeItems,
    isPending,
}: CustomBlockSectionProps) {
    const { t } = useTranslation()
    const theme = useTheme()

    const currentTimetableId = useTimetableUIStore((s) => s.currentTimetableId)
    const currentTimetableName = useTimetableUIStore((s) => s.currentTimetableName)
    const customBlock = useTimetableUIStore((s) => s.selectedCustomBlock)
    const setSelectedCustomBlock = useTimetableUIStore((s) => s.setSelectedCustomBlock)
    const setIsCustomBlockSectionOpen = useTimetableUIStore(
        (s) => s.setIsCustomBlockSectionOpen,
    )
    const timeBlock = useTimetableUIStore((s) => s.timeFilter)
    const setTimeBlock = useTimetableUIStore((s) => s.setTimeFilter)

    const [title, setTitle] = useState(customBlock?.block_name ?? "")
    const [place, setPlace] = useState(customBlock?.place ?? "")
    const [times, setTimes] = useState<TimeBlock[]>(() =>
        customBlock ? getCustomBlockTimes(customBlock) : timeBlock ? [timeBlock] : [],
    )
    const consumedTimeBlock = useRef(timeBlock)

    const closeEditor = useCallback(() => {
        setIsCustomBlockSectionOpen(false)
        setSelectedCustomBlock(null)
        setTimeBlock(null)
    }, [setIsCustomBlockSectionOpen, setSelectedCustomBlock, setTimeBlock])

    useEffect(() => {
        setTitle(customBlock?.block_name ?? "")
        setPlace(customBlock?.place ?? "")
        const currentTime = useTimetableUIStore.getState().timeFilter
        consumedTimeBlock.current = currentTime
        setTimes(
            customBlock
                ? getCustomBlockTimes(customBlock)
                : currentTime
                  ? [currentTime]
                  : [],
        )
    }, [customBlock, currentTimetableId])

    useEffect(() => {
        if (consumedTimeBlock.current === timeBlock) return
        consumedTimeBlock.current = timeBlock
        if (!timeBlock || isPending) return
        setTimes((previous) =>
            previous.some(
                (time) =>
                    time.day === timeBlock.day &&
                    time.begin === timeBlock.begin &&
                    time.end === timeBlock.end,
            )
                ? previous
                : [...previous, timeBlock],
        )
    }, [timeBlock, isPending])

    const updateTime = (index: number, patch: Partial<TimeBlock>) => {
        setTimes((previous) =>
            previous.map((time, timeIndex) =>
                timeIndex === index ? { ...time, ...patch } : time,
            ),
        )
    }

    const validate = useCallback(() => {
        if (!title.trim()) {
            alert(t("timetable.customBlock.errorNameRequired"))
            return false
        }
        if (!times.length || times.some((time) => time.begin >= time.end)) {
            alert(t("timetable.customBlock.errorTimeInvalid"))
            return false
        }
        if (
            times.some((time, index) =>
                times
                    .slice(index + 1)
                    .some(
                        (other) =>
                            time.day === other.day &&
                            time.begin < other.end &&
                            other.begin < time.end,
                    ),
            )
        ) {
            alert(t("timetable.customBlock.errorTimeOverlap"))
            return false
        }
        return true
    }, [t, times, title])

    const closeAfterSuccess = useCallback(() => {
        const current = useTimetableUIStore.getState()
        if (
            current.currentTimetableId === currentTimetableId &&
            (current.selectedCustomBlock?.id === customBlock?.id ||
                !current.isCustomBlockSectionOpen)
        ) {
            closeEditor()
        }
    }, [closeEditor, currentTimetableId, customBlock?.id])

    const handleSubmit = useCallback(async () => {
        if (isPending || !times[0] || !validate()) return
        const data = {
            block_name: title.trim(),
            place: place.trim(),
            ...times[0],
            times,
        }
        const saved = customBlock
            ? await updateCustomBlock(customBlock.id, data)
            : await addCustomBlock(data)
        if (saved) closeAfterSuccess()
    }, [
        addCustomBlock,
        closeAfterSuccess,
        customBlock,
        isPending,
        place,
        times,
        title,
        updateCustomBlock,
        validate,
    ])

    const handleDelete = useCallback(async () => {
        if (!customBlock || isPending) return
        if (await removeItems([{ kind: TimetableItemKind.CUSTOM, data: customBlock }]))
            closeAfterSuccess()
    }, [closeAfterSuccess, customBlock, isPending, removeItems])

    const canSubmit = Boolean(title.trim() && times.length && !isPending)

    return (
        <CustomBlockSectionInner
            direction="column"
            gap={0}
            align="stretch"
            justify="stretch"
            flex="1 1 auto"
            onKeyDown={(event) => {
                if (event.nativeEvent.isComposing || event.keyCode === 229) return
                if (event.key === "Escape") {
                    event.preventDefault()
                    event.stopPropagation()
                    closeEditor()
                } else if (
                    event.key === "Enter" &&
                    event.target instanceof HTMLInputElement
                ) {
                    event.preventDefault()
                    event.stopPropagation()
                    void handleSubmit()
                }
            }}
        >
            <FlexWrapper direction="column" padding="12px" gap={12} align="space-between">
                <FlexWrapper direction="column" gap={12} align="stretch" flex="1 1 auto">
                    <FlexWrapper
                        direction="row"
                        gap={0}
                        justify="space-between"
                        align="center"
                    >
                        <TextInput
                            placeholder={t("timetable.customBlock.name")}
                            disabled={isPending}
                            value={title}
                            handleChange={setTitle}
                            style={{ fontSize: "20px", paddingLeft: "0px" }}
                        />
                        <FlexWrapper direction="row" gap={0}>
                            <IconButton
                                aria-label="Delete custom block"
                                styles={customBlock ? undefined : { display: "none" }}
                                onClick={
                                    customBlock && !isPending
                                        ? () => void handleDelete()
                                        : undefined
                                }
                            >
                                <Icon size={20} color={theme.colors.Text.default}>
                                    <Delete />
                                </Icon>
                            </IconButton>
                            <IconButton
                                aria-label="Close custom block editor"
                                onClick={closeEditor}
                            >
                                <Icon size={20} color={theme.colors.Text.default}>
                                    <Close />
                                </Icon>
                            </IconButton>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="row" gap={10}>
                        <Typography type="NormalBold" color="Text.light">
                            {t("timetable.customBlock.timetable")}
                        </Typography>
                        <Typography type="NormalMedium" color="Highlight.default">
                            {currentTimetableName}
                        </Typography>
                    </FlexWrapper>
                    <FlexWrapper direction="column" gap={8} align="stretch">
                        <Typography type="NormalBold" color="Text.light">
                            {t("timetable.customBlock.time")}
                        </Typography>
                        <Typography type="Small" color="Text.light">
                            {t("timetable.customBlock.timeHint")}
                        </Typography>
                        {times.map((time, index) => (
                            <TimeRangeRow key={index} disabled={isPending}>
                                <legend>
                                    {t("timetable.customBlock.timeRange", {
                                        index: index + 1,
                                    })}
                                </legend>
                                <label>
                                    {t("timetable.customBlock.day")}
                                    <TimeSelect
                                        value={time.day}
                                        onChange={(event) =>
                                            updateTime(index, {
                                                day: Number(event.target.value),
                                            })
                                        }
                                    >
                                        {Array.from({ length: 7 }, (_, day) => (
                                            <option key={day} value={day}>
                                                {weekdayToString(day, true)}
                                            </option>
                                        ))}
                                    </TimeSelect>
                                </label>
                                {(["begin", "end"] as const).map((field) => (
                                    <label key={field}>
                                        {t(
                                            field === "begin"
                                                ? "timetable.customBlock.startTime"
                                                : "timetable.customBlock.endTime",
                                        )}
                                        <TimeSelect
                                            value={time[field]}
                                            onChange={(event) =>
                                                updateTime(index, {
                                                    [field]: Number(event.target.value),
                                                })
                                            }
                                        >
                                            {[...new Set([...timeOptions, time[field]])]
                                                .filter((minutes) =>
                                                    field === "begin"
                                                        ? minutes < 1440
                                                        : minutes > 0,
                                                )
                                                .sort((left, right) => left - right)
                                                .map((minutes) => (
                                                    <option key={minutes} value={minutes}>
                                                        {formatTime(minutes)}
                                                    </option>
                                                ))}
                                        </TimeSelect>
                                    </label>
                                ))}
                                <TimeRangeButton
                                    type="button"
                                    aria-label={t("timetable.customBlock.removeTime", {
                                        index: index + 1,
                                    })}
                                    onClick={() => {
                                        setTimes((previous) =>
                                            previous.filter(
                                                (_, timeIndex) => timeIndex !== index,
                                            ),
                                        )
                                        setTimeBlock(null)
                                    }}
                                >
                                    ×
                                </TimeRangeButton>
                            </TimeRangeRow>
                        ))}
                        <TimeRangeButton
                            type="button"
                            disabled={isPending}
                            onClick={() =>
                                setTimes((previous) => {
                                    const last = previous.at(-1)
                                    return [
                                        ...previous,
                                        last
                                            ? {
                                                  day: (last.day + 1) % 7,
                                                  begin: last.begin,
                                                  end: last.end,
                                              }
                                            : { day: 0, begin: 540, end: 600 },
                                    ]
                                })
                            }
                        >
                            {t("timetable.customBlock.addTime")}
                        </TimeRangeButton>
                    </FlexWrapper>
                    <FlexWrapper direction="row" gap={20} align="center">
                        <Typography type="NormalBold" color="Text.light">
                            {t("timetable.customBlock.place")}
                        </Typography>
                        <TextInputArea
                            placeholder={t("timetable.customBlock.place")}
                            style={{ border: "1px solid #ccc", padding: "8px" }}
                            handleChange={setPlace}
                            disabled={isPending}
                            value={place}
                        />
                    </FlexWrapper>
                </FlexWrapper>
                <Button
                    role="button"
                    tabIndex={canSubmit ? 0 : -1}
                    aria-disabled={!canSubmit}
                    type={canSubmit ? "selected" : "disabled"}
                    onClick={() => void handleSubmit()}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault()
                            event.stopPropagation()
                            void handleSubmit()
                        }
                    }}
                    $isFlexRow={true}
                >
                    {t(
                        customBlock
                            ? "timetable.customBlock.save"
                            : "timetable.customBlock.add",
                    )}
                </Button>
            </FlexWrapper>
        </CustomBlockSectionInner>
    )
}

export default memo(CustomBlockSection)
