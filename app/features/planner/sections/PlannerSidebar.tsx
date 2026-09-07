import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useTranslation } from "react-i18next"

import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { PlannerDetail } from "@/common/schemas/planner"
import { media } from "@/styles/themes/media"

import { ActionButton, SectionTitle } from "../components/PlannerControls"

const Sidebar = styled.nav`
    display: flex;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    box-shadow: ${({ theme }) => theme.elevation.surface};

    ${media.tablet} {
        gap: 6px;
        padding: 12px;
    }
`

const NavigationRow = styled.div`
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;

    ${media.mobile} {
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
    }
`

const PlannerList = styled.div`
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    gap: 6px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x proximity;
`

const ActionCluster = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 6px;
`

const PlannerButton = styled.button<{ $selected: boolean }>`
    min-width: 0;
    border: 1px solid
        ${({ $selected, theme }) =>
            $selected ? theme.colors.Highlight.default : theme.colors.Line.default};
    border-radius: 6px;
    padding: 10px 12px;
    color: ${({ $selected, theme }) =>
        $selected ? theme.colors.Highlight.default : theme.colors.Text.default};
    background: ${({ $selected, theme }) =>
        $selected
            ? theme.colors.Background.Button.highlight
            : theme.colors.Background.Button.default};
    font: inherit;
    text-align: start;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background-color 120ms ease;

    flex: 0 0 min(180px, 42vw);
    scroll-snap-align: start;

    &:hover:not(:disabled) {
        background-color: ${({ $selected, theme }) =>
            $selected
                ? theme.colors.Background.Button.highlightDark
                : theme.colors.Background.Block.darker};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

type Props = {
    readonly planners: readonly PlannerDetail[]
    readonly selectedPlannerId: number | null
    readonly busy: boolean
    readonly onSelect: (id: number) => void
    readonly onCreate: (copy: boolean) => Promise<void>
    readonly onDelete: () => Promise<void>
    readonly onReorder: (direction: -1 | 1) => Promise<void>
}

export function PlannerSidebar({
    planners,
    selectedPlannerId,
    busy,
    onSelect,
    onCreate,
    onDelete,
    onReorder,
}: Props) {
    const { t } = useTranslation()
    const selectedIndex = planners.findIndex(
        (planner) => planner.id === selectedPlannerId,
    )

    return (
        <Sidebar aria-label={t("planner.list.title")}>
            <SectionTitle>{t("planner.list.title")}</SectionTitle>
            <NavigationRow>
                <PlannerList>
                    {planners.map((planner, index) => (
                        <PlannerButton
                            key={planner.id}
                            $selected={planner.id === selectedPlannerId}
                            aria-pressed={planner.id === selectedPlannerId}
                            onClick={() => onSelect(planner.id)}
                        >
                            {t("planner.list.item", { index: index + 1 })}
                        </PlannerButton>
                    ))}
                    {planners.length === 0 && (
                        <Typography type="Small" color="Text.placeholder">
                            {t("planner.list.empty")}
                        </Typography>
                    )}
                </PlannerList>
                <ActionCluster>
                    <ActionButton
                        $primary
                        disabled={busy}
                        onClick={() => void onCreate(false)}
                        aria-label={t("planner.actions.create")}
                    >
                        <Icon size={16} color="inherit">
                            <AddIcon />
                        </Icon>
                    </ActionButton>
                    <ActionButton
                        disabled={busy || selectedPlannerId === null}
                        onClick={() => void onCreate(true)}
                        aria-label={t("planner.actions.copy")}
                    >
                        <Icon size={16} color="inherit">
                            <ContentCopyIcon />
                        </Icon>
                    </ActionButton>
                    <ActionButton
                        disabled={busy || selectedIndex <= 0}
                        onClick={() => void onReorder(-1)}
                        aria-label={t("planner.actions.moveUp")}
                    >
                        <Icon size={16} color="inherit">
                            <KeyboardArrowUpIcon />
                        </Icon>
                    </ActionButton>
                    <ActionButton
                        disabled={
                            busy ||
                            selectedIndex < 0 ||
                            selectedIndex >= planners.length - 1
                        }
                        onClick={() => void onReorder(1)}
                        aria-label={t("planner.actions.moveDown")}
                    >
                        <Icon size={16} color="inherit">
                            <KeyboardArrowDownIcon />
                        </Icon>
                    </ActionButton>
                    <ActionButton
                        $danger
                        disabled={busy || selectedPlannerId === null}
                        onClick={() => {
                            if (window.confirm(t("planner.actions.deleteConfirm"))) {
                                void onDelete()
                            }
                        }}
                        aria-label={t("planner.actions.delete")}
                    >
                        <Icon size={16} color="inherit">
                            <DeleteOutlineIcon />
                        </Icon>
                    </ActionButton>
                </ActionCluster>
            </NavigationRow>
        </Sidebar>
    )
}
