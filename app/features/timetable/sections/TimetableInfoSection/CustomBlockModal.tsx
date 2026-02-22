import { useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

const FormWrapper = styled(FlexWrapper)`
    width: 100%;
    max-width: 400px;
`

const Label = styled(Typography)`
    margin-bottom: 8px;
`

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.Line.block};
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: 14px;
    outline: none;
`

interface CustomBlockModalProps {
    isOpen: boolean
    onClose: () => void
    timetableId: number
}

const generateTimeOptions = (startMin: number, endMin: number) => {
    const options = []
    for (let i = startMin; i <= endMin; i += 30) {
        const hours = Math.floor(i / 60)
        const mins = i % 60
        options.push({
            value: i,
            label: `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`,
        })
    }
    return options
}

const BEGIN_OPTIONS = generateTimeOptions(480, 1410) // 08:00 ~ 23:30
const END_OPTIONS = generateTimeOptions(510, 1440) // 08:30 ~ 24:00

export default function CustomBlockModal({
    isOpen,
    onClose,
    timetableId,
}: CustomBlockModalProps) {
    const { t } = useTranslation()
    const queryClient = useQueryClient()

    const [blockName, setBlockName] = useState("")
    const [place, setPlace] = useState("")
    const [day, setDay] = useState<number>(WeekdayEnum.Mon)
    const [begin, setBegin] = useState<number>(480)
    const [end, setEnd] = useState<number>(540) // Default 1 hour duration

    const { requestFunction: addCustomBlock, mutation } = useAPI(
        "POST",
        `/timetables/${timetableId}/custom-blocks` as any,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [`/timetables/${timetableId}/custom-blocks`],
                })
                onClose()
                setBlockName("")
                setPlace("")
                setDay(WeekdayEnum.Mon)
                setBegin(480)
                setEnd(540)
            },
        },
    )

    const handleSubmit = async () => {
        if (!blockName.trim()) {
            alert(
                t("timetable.customBlock.errorNameRequired", "일정 이름을 입력해주세요."),
            )
            return
        }
        if (begin >= end) {
            alert(
                t(
                    "timetable.customBlock.errorTimeInvalid",
                    "종료 시간은 시작 시간보다 늦어야 합니다.",
                ),
            )
            return
        }

        ;(addCustomBlock as any)({
            block_name: blockName.trim(),
            place,
            day,
            begin,
            end,
        })
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t("timetable.customBlock.title", "커스텀 블록 추가")}
        >
            <FormWrapper direction="column" gap={16}>
                <FlexWrapper
                    direction="column"
                    gap={0}
                    align="stretch"
                    style={{ width: "100%" }}
                >
                    <Label type="NormalBold" color="Text.default">
                        {t("timetable.customBlock.name", "일정 이름")}
                    </Label>
                    <TextInputArea
                        value={blockName}
                        onChange={(e) => setBlockName(e.target.value)}
                        placeholder="예: 동아리 회의"
                        maxLength={50}
                    />
                </FlexWrapper>

                <FlexWrapper
                    direction="column"
                    gap={0}
                    align="stretch"
                    style={{ width: "100%" }}
                >
                    <Label type="NormalBold" color="Text.default">
                        {t("timetable.customBlock.place", "장소")}
                    </Label>
                    <TextInputArea
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        placeholder="예: N1 101호"
                        maxLength={50}
                    />
                </FlexWrapper>

                <FlexWrapper
                    direction="column"
                    gap={0}
                    align="stretch"
                    style={{ width: "100%" }}
                >
                    <Label type="NormalBold" color="Text.default">
                        {t("timetable.customBlock.day", "요일")}
                    </Label>
                    <Select value={day} onChange={(e) => setDay(Number(e.target.value))}>
                        <option value={WeekdayEnum.Mon}>{t("common.days.monday")}</option>
                        <option value={WeekdayEnum.Tue}>
                            {t("common.days.tuesday")}
                        </option>
                        <option value={WeekdayEnum.Wed}>
                            {t("common.days.wednesday")}
                        </option>
                        <option value={WeekdayEnum.Thu}>
                            {t("common.days.thursday")}
                        </option>
                        <option value={WeekdayEnum.Fri}>{t("common.days.friday")}</option>
                    </Select>
                </FlexWrapper>

                <FlexWrapper
                    direction="row"
                    gap={12}
                    align="stretch"
                    style={{ width: "100%" }}
                >
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="stretch"
                        style={{ flex: 1 }}
                    >
                        <Label type="NormalBold" color="Text.default">
                            {t("timetable.customBlock.begin", "시작 시간")}
                        </Label>
                        <Select
                            value={begin}
                            onChange={(e) => setBegin(Number(e.target.value))}
                        >
                            {BEGIN_OPTIONS.map((opt) => (
                                <option key={`begin-${opt.value}`} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </Select>
                    </FlexWrapper>
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="stretch"
                        style={{ flex: 1 }}
                    >
                        <Label type="NormalBold" color="Text.default">
                            {t("timetable.customBlock.end", "종료 시간")}
                        </Label>
                        <Select
                            value={end}
                            onChange={(e) => setEnd(Number(e.target.value))}
                        >
                            {END_OPTIONS.map((opt) => (
                                <option
                                    key={`end-${opt.value}`}
                                    value={opt.value}
                                    disabled={opt.value <= begin}
                                >
                                    {opt.label}
                                </option>
                            ))}
                        </Select>
                    </FlexWrapper>
                </FlexWrapper>

                <Button
                    onClick={handleSubmit}
                    type="highlighted"
                    style={{ padding: "12px" }}
                >
                    {mutation.isPending
                        ? t("common.button.adding", "추가 중...")
                        : t("common.button.add", "추가")}
                </Button>
            </FormWrapper>
        </Modal>
    )
}
