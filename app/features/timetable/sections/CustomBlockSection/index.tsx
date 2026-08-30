import { memo, useCallback, useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Close, Delete } from "@mui/icons-material"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import TextInput from "@/common/components/search/TextInput"
import TimeFilterArea from "@/common/components/search/TimeFilterArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { useAPI } from "@/utils/api/useAPI"

const CustomBlockSectionInner = styled(FlexWrapper)`
    ::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`

function CustomBlockSection({ customBlocks }: { customBlocks: CustomBlock[] }) {
    const { t } = useTranslation()
    const theme = useTheme()
    const queryClient = useQueryClient()

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

    const refreshAndClose = useCallback(() => {
        void queryClient.invalidateQueries({
            queryKey: ["/api/v2", `/timetables/${currentTimetableId}/custom-blocks`],
        })
        closeEditor()
    }, [closeEditor, currentTimetableId, queryClient])

    const { mutation: postMutation, requestFunction: postCustomBlock } = useAPI(
        "POST",
        `/timetables/${currentTimetableId}/custom-blocks`,
        { onSuccess: refreshAndClose },
    )
    const { mutation: patchMutation, requestFunction: patchCustomBlock } = useAPI(
        "PATCH",
        `/timetables/${currentTimetableId}/custom-blocks/${customBlock?.id}`,
        { onSuccess: refreshAndClose },
    )
    const { mutation: deleteMutation, requestFunction: deleteCustomBlock } = useAPI(
        "DELETE",
        `/timetables/${currentTimetableId}/custom-blocks/${customBlock?.id}`,
        { onSuccess: refreshAndClose },
    )

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
        if (
            customBlocks.some(
                (block) =>
                    block.id !== customBlock?.id &&
                    block.day === timeBlock.day &&
                    block.begin < timeBlock.end &&
                    timeBlock.begin < block.end,
            )
        ) {
            alert(t("timetable.customBlock.overlap"))
            return false
        }
        return true
    }, [customBlock?.id, customBlocks, t, timeBlock, title])

    const handleSave = useCallback(() => {
        if (!timeBlock || !validate()) return
        patchCustomBlock({
            block_name: title.trim(),
            place: place.trim(),
            day: timeBlock.day,
            begin: timeBlock.begin,
            end: timeBlock.end,
        })
    }, [patchCustomBlock, place, timeBlock, title, validate])

    const handlePost = useCallback(() => {
        if (!timeBlock || !validate()) return
        postCustomBlock({
            block_name: title.trim(),
            place: place.trim(),
            day: timeBlock.day,
            begin: timeBlock.begin,
            end: timeBlock.end,
        })
    }, [place, postCustomBlock, timeBlock, title, validate])

    const isPending =
        postMutation.isPending || patchMutation.isPending || deleteMutation.isPending
    const canSubmit = Boolean(title.trim() && timeBlock && !isPending)

    return (
        <CustomBlockSectionInner
            direction="column"
            gap={0}
            align="stretch"
            justify="stretch"
            flex="1 1 auto"
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
                                        ? () => deleteCustomBlock({})
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
                            value={place}
                        />
                    </FlexWrapper>
                </FlexWrapper>
                <Button
                    type={canSubmit ? "selected" : "disabled"}
                    onClick={customBlock ? handleSave : handlePost}
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
