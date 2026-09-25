import styled from "@emotion/styled"
import Close from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type TimeBlock } from "@/common/schemas/timeblock"
import { formatTimeAreaToString } from "@/utils/timetable/formatTimeblockToString"

const TimeFilterInner = styled(FlexWrapper)`
    width: 100%;
`

const TimeFilterPlaceholder = styled(Typography)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({ theme }) => theme.colors.Background.Button.default};
`

const RemoveButton = styled.button`
    display: flex;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

interface TimeFilterProps {
    timeFilter: TimeBlock | undefined | null
    setTimeFilter: ((timeFilter: TimeBlock | null) => void) | undefined
    removeLabel?: string
    disabled?: boolean
}

function TimeFilterArea({
    timeFilter,
    setTimeFilter,
    removeLabel,
    disabled,
}: TimeFilterProps) {
    const { t } = useTranslation()

    return (
        <FlexWrapper direction="column" gap={0} style={{ width: "100%" }}>
            <TimeFilterInner direction="row" gap={0}>
                {!timeFilter ? (
                    <TimeFilterPlaceholder color="Text.light" type="Normal">
                        {t("common.search.timeFilterPlaceholder")}
                    </TimeFilterPlaceholder>
                ) : (
                    <FlexWrapper
                        direction="row"
                        justify="space-between"
                        gap={10}
                        align="center"
                    >
                        <Typography
                            color="Text.default"
                            type="Normal"
                        >{`${formatTimeAreaToString(timeFilter)}`}</Typography>
                        {setTimeFilter && (
                            <RemoveButton
                                type="button"
                                aria-label={removeLabel ?? t("common.search.reset")}
                                disabled={disabled}
                                onClick={() => setTimeFilter(null)}
                            >
                                <Icon size={15} style={{ cursor: "inherit" }}>
                                    <Close />
                                </Icon>
                            </RemoveButton>
                        )}
                    </FlexWrapper>
                )}
            </TimeFilterInner>
        </FlexWrapper>
    )
}

export default TimeFilterArea
