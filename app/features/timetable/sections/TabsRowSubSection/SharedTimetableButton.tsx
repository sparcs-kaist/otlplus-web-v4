import { useTheme } from "@emotion/react"
import PeopleIcon from "@mui/icons-material/People"
import { useTranslation } from "react-i18next"

import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Tooltip from "@/common/primitives/Tooltip"

type Props = {
    selected: boolean
    shared: boolean
    disabled: boolean
    onClick: () => void
}

export default function SharedTimetableButton({
    selected,
    shared,
    disabled,
    onClick,
}: Props) {
    const theme = useTheme()
    const { t } = useTranslation()
    const label = t(shared ? "timetable.sharedTimetable" : "timetable.setSharedTimetable")

    if (selected) {
        return (
            <Tooltip title={label}>
                <IconButton
                    aria-label={label}
                    aria-pressed={shared}
                    disabled={disabled}
                    onClick={(event) => {
                        event.stopPropagation()
                        onClick()
                    }}
                    styles={{ padding: 3.75 }}
                >
                    <Icon size={17.5} color={theme.colors.Highlight.default} onClick={() => {}}>
                        <PeopleIcon
                            style={{
                                fill: shared ? "currentColor" : "none",
                                stroke: shared ? "none" : "currentColor",
                                strokeWidth: 1.5,
                                strokeLinejoin: "round",
                            }}
                        />
                    </Icon>
                </IconButton>
            </Tooltip>
        )
    }

    return shared ? (
        <Tooltip title={label}>
            <Icon
                size={17.5}
                color={theme.colors.Highlight.default}
                role="img"
                aria-label={label}
                style={{ margin: 3.75 }}
                onClick={() => {}}
            >
                <PeopleIcon />
            </Icon>
        </Tooltip>
    ) : null
}
