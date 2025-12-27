import { useEffect } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Close } from "@mui/icons-material"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type TimeBlock } from "@/common/schemas/timeblock"
import { formatTimeAreaToString } from "@/utils/timetable/formatTimeblockToString"

const TimeFilterInner = styled(FlexWrapper)``

interface TimeFilterProps {
    timeFilter: TimeBlock | null
    setTimeFilter: (timeFilter: TimeBlock | null) => void
}

function TimeFilterArea({ timeFilter, setTimeFilter }: TimeFilterProps) {
    const theme = useTheme()

    useEffect(() => {
        console.log(timeFilter)
    }, [timeFilter])

    return (
        <FlexWrapper direction="column" gap={0}>
            <TimeFilterInner direction="row" gap={0}>
                {!timeFilter ? (
                    <Typography color="Text.default" type="Normal">
                        클릭 후 시간표에서 드래그하여 선택
                    </Typography>
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
                        <Icon
                            size={15}
                            onClick={() => {
                                setTimeFilter(null)
                            }}
                            color={theme.colors.Text.default}
                        >
                            <Close />
                        </Icon>
                    </FlexWrapper>
                )}
            </TimeFilterInner>
        </FlexWrapper>
    )
}

export default TimeFilterArea
