import {
    type Dispatch,
    type SetStateAction,
    memo,
    useCallback,
    useEffect,
    useState,
} from "react"

import styled from "@emotion/styled"
import { Close, Delete } from "@mui/icons-material"

import Button from "@/common/components/Button"
import TextInput from "@/common/components/search/TextInput"
import TimeFilterArea from "@/common/components/search/TimeFilterArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import { type CustomBlock } from "@/common/schemas/customBlock"
import { type TimeBlock } from "@/common/schemas/timeblock"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

const CustomBlockSectionInner = styled(FlexWrapper)`
    ::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`

interface CustomBlockSectionProps {
    customBlocks: CustomBlock[]
    customBlock: CustomBlock | null
    currentTimetableId: number | null
    currentTimetableName: string
    timeBlocks: TimeBlock[] | null
    setTimeBlocks: Dispatch<SetStateAction<TimeBlock[] | null>>
    setIsCustomBlockSectionOpen?: Dispatch<SetStateAction<boolean>>
}

function CustomBlockSection({
    customBlocks,
    customBlock,
    currentTimetableId,
    currentTimetableName,
    timeBlocks,
    setTimeBlocks,
    setIsCustomBlockSectionOpen,
}: CustomBlockSectionProps) {
    const [title, setTitle] = useState(customBlock?.name ?? "")
    const [place, setPlace] = useState(customBlock?.place ?? "")
    const [description, setDescription] = useState("")

    const { status } = useUserStore()

    const { requestFunction: postCustomBlock } = useAPI(
        "POST",
        `/timetables/${currentTimetableId}/custom-blocks`,
        {
            enabled: currentTimetableId !== null && status === "success",
        },
    )

    const { requestFunction: patchCustomBlock } = useAPI(
        "PATCH",
        `/timetables/${currentTimetableId}/custom-blocks/${customBlock?.id}`,
        {
            enabled:
                currentTimetableId !== null &&
                customBlock?.id !== null &&
                status === "success",
        },
    )

    useEffect(() => {
        setTitle(customBlock?.name ?? "")
        setPlace(customBlock?.place ?? "")
        setDescription("")
    }, [customBlock])

    useEffect(() => {
        console.log("timeBlocks", timeBlocks)
    }, [timeBlocks])

    const handleDelete = useCallback(() => {
        setIsCustomBlockSectionOpen?.(false)
    }, [setIsCustomBlockSectionOpen])

    const handleClose = useCallback(() => {
        setIsCustomBlockSectionOpen?.(false)
    }, [setIsCustomBlockSectionOpen])

    const handleSave = useCallback(() => {
        setIsCustomBlockSectionOpen?.(false)
        patchCustomBlock({
            block_name: title,
            place: place,
        })
    }, [setIsCustomBlockSectionOpen])

    const handlePost = useCallback(() => {
        setIsCustomBlockSectionOpen?.(false)
        customBlocks.forEach((block) => {
            if (
                block.day === timeBlocks?.[0]?.day &&
                block.begin < timeBlocks?.[0]?.end &&
                block.end > timeBlocks?.[0]?.begin
            ) {
                alert("해당시간과 겹치는 커스텀 블록이 있습니다.")
                return
            }
        })
        postCustomBlock({
            block_name: title,
            place: place,
            day: timeBlocks?.[0]?.day ?? 0,
            begin: timeBlocks?.[0]?.begin ?? 0,
            end: timeBlocks?.[0]?.end ?? 0,
        })
    }, [setIsCustomBlockSectionOpen])

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
                            placeholder="제목 추가"
                            value={title}
                            handleChange={setTitle}
                            style={{ fontSize: "20px", paddingLeft: "0px" }}
                        />
                        <FlexWrapper direction="row" gap={0}>
                            <IconButton
                                styles={
                                    customBlock
                                        ? undefined
                                        : {
                                              color: "rgba(0, 0, 0, 0.2)",
                                              pointerEvents: "none",
                                          }
                                }
                                onClick={customBlock ? handleDelete : undefined}
                            >
                                <Icon
                                    disabled={!customBlock}
                                    size={20}
                                    onClick={customBlock ? () => {} : undefined}
                                >
                                    <Delete />
                                </Icon>
                            </IconButton>
                            <IconButton onClick={handleClose}>
                                <Icon size={20} onClick={() => {}}>
                                    <Close />
                                </Icon>
                            </IconButton>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="row" gap={10}>
                        <FlexWrapper direction="column" padding="4px 0px" gap={0}>
                            <Typography type="NormalBold" color="Text.light">
                                시간표
                            </Typography>
                        </FlexWrapper>
                        <FlexWrapper direction="column" padding="4px 0px" gap={0}>
                            <Typography type="NormalMedium" color="Highlight.default">
                                {currentTimetableName}
                            </Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper
                        direction="row"
                        gap={20}
                        flex="1 1 auto"
                        align="stretch"
                        justify="stretch"
                    >
                        <FlexWrapper direction="column" padding="4px 0px" gap={0}>
                            <Typography type="NormalBold" color="Text.light">
                                시간
                            </Typography>
                        </FlexWrapper>
                        <FlexWrapper
                            direction="column"
                            align="stretch"
                            justify="stretch"
                            flex="1 1 auto"
                            gap={0}
                        >
                            <TimeFilterArea
                                timeFilters={timeBlocks}
                                setTimeFilters={setTimeBlocks}
                            />
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="row" gap={20} align="center">
                        <FlexWrapper direction="column" padding="4px 0px" gap={0}>
                            <Typography type="NormalBold" color="Text.light">
                                장소
                            </Typography>
                        </FlexWrapper>
                        <TextInputArea
                            placeholder="장소를 입력해주세요"
                            style={{ border: "1px solid #ccc", padding: "8px" }}
                            handleChange={setPlace}
                            value={place}
                        />
                    </FlexWrapper>
                    <FlexWrapper direction="row" gap={20}>
                        <FlexWrapper direction="column" padding="8px 0px" gap={0}>
                            <Typography type="NormalBold" color="Text.light">
                                설명
                            </Typography>
                        </FlexWrapper>
                        <TextInputArea
                            area={true}
                            placeholder="설명을 입력해주세요"
                            value={description}
                            handleChange={setDescription}
                        />
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper
                    direction="row"
                    gap={0}
                    align="stretch"
                    justify="stretch"
                    flex="1 1 auto"
                >
                    <Button
                        type="selected"
                        onClick={customBlock?.id === null ? handlePost : handleSave}
                        $isFlexRow={true}
                    >
                        {customBlock ? "저장하기" : "시간표에 추가하기"}
                    </Button>
                </FlexWrapper>
            </FlexWrapper>
        </CustomBlockSectionInner>
    )
}

const memoizedCustomBlockSection = memo(CustomBlockSection, (prevProps, nextProps) => {
    return (
        prevProps.customBlock === nextProps.customBlock &&
        prevProps.currentTimetableId === nextProps.currentTimetableId &&
        prevProps.currentTimetableName === nextProps.currentTimetableName &&
        prevProps.timeBlocks === nextProps.timeBlocks &&
        prevProps.setTimeBlocks === nextProps.setTimeBlocks
    )
})

export default memoizedCustomBlockSection
