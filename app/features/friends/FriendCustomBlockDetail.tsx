import styled from "@emotion/styled"
import Close from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"

import TimeFilterArea from "@/common/components/search/TimeFilterArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import type { CustomBlock } from "@/common/schemas/customBlock"
import { getCustomBlockTimes } from "@/common/utils/timetableItems"

const Detail = styled(FlexWrapper)`
    color: ${({ theme }) => theme.colors.Text.default};
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
    overflow-wrap: anywhere;
`

const FieldLabel = styled(Typography)`
    flex-shrink: 0;
    min-width: 3em;
    white-space: nowrap;
`

export default function FriendCustomBlockDetail({
    block,
    timetableName,
    onClose,
}: {
    block: CustomBlock
    timetableName: string
    onClose?: () => void
}) {
    const { t } = useTranslation()

    return (
        <Detail
            direction="column"
            gap={12}
            align="stretch"
            role="region"
            aria-label={t("friends.customBlockDetail")}
        >
            <FlexWrapper direction="row" gap={8} justify="space-between" align="center">
                <Typography type="BigBold" color="Text.default">
                    {block.block_name}
                </Typography>
                {onClose && (
                    <IconButton aria-label={t("common.search.close")} onClick={onClose}>
                        <Icon size={20}>
                            <Close />
                        </Icon>
                    </IconButton>
                )}
            </FlexWrapper>
            <FlexWrapper direction="row" gap={10} align="flex-start">
                <FieldLabel type="NormalBold" color="Text.light">
                    {t("timetable.customBlock.timetable")}
                </FieldLabel>
                <Typography type="NormalMedium" color="Highlight.default">
                    {timetableName}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="row" gap={10} align="flex-start">
                <FieldLabel type="NormalBold" color="Text.light">
                    {t("timetable.customBlock.time")}
                </FieldLabel>
                <FlexWrapper
                    direction="column"
                    gap={8}
                    align="stretch"
                    flex="1"
                    style={{ minWidth: 0 }}
                >
                    {getCustomBlockTimes(block).map((time, index) => (
                        <TimeFilterArea
                            key={index}
                            timeFilter={time}
                            setTimeFilter={undefined}
                        />
                    ))}
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper direction="row" gap={10} align="flex-start">
                <FieldLabel type="NormalBold" color="Text.light">
                    {t("timetable.customBlock.place")}
                </FieldLabel>
                <Typography type="Normal" color="Text.default">
                    {block.place || "—"}
                </Typography>
            </FlexWrapper>
        </Detail>
    )
}
