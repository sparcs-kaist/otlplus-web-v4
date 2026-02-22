import { useState } from "react"

import styled from "@emotion/styled"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import Modal from "@/common/components/Modal"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import { axiosClient } from "@/libs/axios"

const FormWrapper = styled(FlexWrapper)`
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
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

const ScheduleBlock = styled(FlexWrapper)`
    width: 100%;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.colors.Line.block};
    border-radius: 8px;
    position: relative;
`

const RemoveButtonWrapper = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
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
    const [schedules, setSchedules] = useState<
        { day: number; begin: number; end: number }[]
    >([{ day: WeekdayEnum.Mon, begin: 480, end: 540 }])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async () => {
        if (!blockName.trim()) {
            alert(t("timetable.customBlock.errorNameRequired"))
            return
        }

        for (const schedule of schedules) {
            if (schedule.begin >= schedule.end) {
                alert(t("timetable.customBlock.errorTimeInvalid"))
                return
            }
        }

        setIsSubmitting(true)
        try {
            await Promise.all(
                schedules.map((schedule) =>
                    axiosClient.request({
                        method: "POST",
                        url: `/timetables/${timetableId}/custom-blocks`,
                        data: {
                            block_name: blockName.trim(),
                            place,
                            day: schedule.day,
                            begin: schedule.begin,
                            end: schedule.end,
                        },
                    }),
                ),
            )

            queryClient.invalidateQueries({
                queryKey: [`/timetables/${timetableId}/custom-blocks`],
            })
            onClose()
            setBlockName("")
            setPlace("")
            setSchedules([{ day: WeekdayEnum.Mon, begin: 480, end: 540 }])
        } catch (error) {
            console.error(error)
            alert("Failed to add custom blocks.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const addSchedule = () => {
        setSchedules((prev) => [...prev, { day: WeekdayEnum.Mon, begin: 480, end: 540 }])
    }

    const removeSchedule = (index: number) => {
        setSchedules((prev) => prev.filter((_, i) => i !== index))
    }

    const updateSchedule = (
        index: number,
        field: "day" | "begin" | "end",
        value: number,
    ) => {
        setSchedules((prev) =>
            prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
        )
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t("timetable.customBlock.title")}>
            <FormWrapper direction="column" gap={16}>
                <FlexWrapper
                    direction="column"
                    gap={0}
                    align="stretch"
                    style={{ width: "100%" }}
                >
                    <Label type="NormalBold" color="Text.default">
                        {t("timetable.customBlock.name")}
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
                        {t("timetable.customBlock.place")}
                    </Label>
                    <TextInputArea
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        placeholder="예: N1 101호"
                        maxLength={50}
                    />
                </FlexWrapper>

                {schedules.map((schedule, idx) => (
                    <ScheduleBlock key={idx} direction="column" gap={12}>
                        {schedules.length > 1 && (
                            <RemoveButtonWrapper>
                                <IconButton onClick={() => removeSchedule(idx)}>
                                    <Icon size={20}>
                                        <RemoveCircleOutlineIcon color="error" />
                                    </Icon>
                                </IconButton>
                            </RemoveButtonWrapper>
                        )}
                        <FlexWrapper
                            direction="column"
                            gap={0}
                            align="stretch"
                            style={{
                                width: "100%",
                                paddingRight: schedules.length > 1 ? "24px" : "0",
                            }}
                        >
                            <Label type="NormalBold" color="Text.default">
                                {t("timetable.customBlock.day")}
                            </Label>
                            <Select
                                value={schedule.day}
                                onChange={(e) =>
                                    updateSchedule(idx, "day", Number(e.target.value))
                                }
                            >
                                <option value={WeekdayEnum.Mon}>
                                    {t("common.days.monday")}
                                </option>
                                <option value={WeekdayEnum.Tue}>
                                    {t("common.days.tuesday")}
                                </option>
                                <option value={WeekdayEnum.Wed}>
                                    {t("common.days.wednesday")}
                                </option>
                                <option value={WeekdayEnum.Thu}>
                                    {t("common.days.thursday")}
                                </option>
                                <option value={WeekdayEnum.Fri}>
                                    {t("common.days.friday")}
                                </option>
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
                                    {t("timetable.customBlock.begin")}
                                </Label>
                                <Select
                                    value={schedule.begin}
                                    onChange={(e) =>
                                        updateSchedule(
                                            idx,
                                            "begin",
                                            Number(e.target.value),
                                        )
                                    }
                                >
                                    {BEGIN_OPTIONS.map((opt) => (
                                        <option
                                            key={`begin-${opt.value}`}
                                            value={opt.value}
                                        >
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
                                    {t("timetable.customBlock.end")}
                                </Label>
                                <Select
                                    value={schedule.end}
                                    onChange={(e) =>
                                        updateSchedule(idx, "end", Number(e.target.value))
                                    }
                                >
                                    {END_OPTIONS.map((opt) => (
                                        <option
                                            key={`end-${opt.value}`}
                                            value={opt.value}
                                            disabled={opt.value <= schedule.begin}
                                        >
                                            {opt.label}
                                        </option>
                                    ))}
                                </Select>
                            </FlexWrapper>
                        </FlexWrapper>
                    </ScheduleBlock>
                ))}

                <Button
                    onClick={addSchedule}
                    type="default"
                    style={{
                        padding: "10px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    + {t("timetable.customBlock.title")}
                </Button>

                <Button
                    onClick={handleSubmit}
                    type="highlighted"
                    style={{ padding: "12px" }}
                >
                    {isSubmitting ? t("common.button.adding") : t("common.button.add")}
                </Button>
            </FormWrapper>
        </Modal>
    )
}
