import { memo, useCallback, useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import Close from "@mui/icons-material/Close"
import Delete from "@mui/icons-material/Delete"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import TextInput from "@/common/components/search/TextInput"
import TimeFilterArea from "@/common/components/search/TimeFilterArea"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"

const CustomBlockSectionInner = styled(FlexWrapper)`
    ::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`

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

    const closeEditor = useCallback(() => {
        setIsCustomBlockSectionOpen(false)
        setSelectedCustomBlock(null)
        setTimeBlock(null)
    }, [setIsCustomBlockSectionOpen, setSelectedCustomBlock, setTimeBlock])

    useEffect(() => {
        setTitle(customBlock?.block_name ?? "")
        setPlace(customBlock?.place ?? "")
        if (customBlock) {
            setTimeBlock({
                day: customBlock.day,
                begin: customBlock.begin,
                end: customBlock.end,
            })
        }
    }, [customBlock, setTimeBlock])

    const validate = useCallback(() => {
        if (!title.trim()) {
            alert(t("timetable.customBlock.errorNameRequired"))
            return false
        }
        if (!timeBlock || timeBlock.begin >= timeBlock.end) {
            alert(t("timetable.customBlock.errorTimeInvalid"))
            return false
        }
        return true
    }, [t, timeBlock, title])

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
        if (isPending || !timeBlock || !validate()) return
        const data = {
            block_name: title.trim(),
            place: place.trim(),
            day: timeBlock.day,
            begin: timeBlock.begin,
            end: timeBlock.end,
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
        timeBlock,
        title,
        updateCustomBlock,
        validate,
    ])

    const handleDelete = useCallback(async () => {
        if (!customBlock || isPending) return
        if (await removeItems([{ kind: TimetableItemKind.CUSTOM, data: customBlock }]))
            closeAfterSuccess()
    }, [closeAfterSuccess, customBlock, isPending, removeItems])

    const canSubmit = Boolean(title.trim() && timeBlock && !isPending)

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
                    <FlexWrapper direction="row" gap={20} align="stretch">
                        <Typography type="NormalBold" color="Text.light">
                            {t("timetable.customBlock.time")}
                        </Typography>
                        <TimeFilterArea
                            timeFilter={timeBlock}
                            setTimeFilter={setTimeBlock}
                        />
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
