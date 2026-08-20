import styled from "@emotion/styled"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined"
import { useTranslation } from "react-i18next"

import Icon from "@/common/primitives/Icon"
import {
    type PlannerDetail,
    type PlannerItem,
    type PlannerSemester,
    PlannerSemesterSchema,
} from "@/common/schemas/planner"

import { isActiveDuplicateItem } from "../domain/duplicates"
import { ActionButton, Select } from "./PlannerControls"

const ItemCard = styled.article<{ $excluded: boolean }>`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    opacity: ${({ $excluded }) => ($excluded ? 0.55 : 1)};
`

const ItemTitle = styled.strong`
    overflow: hidden;
    color: ${({ theme }) => theme.colors.Text.default};
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const ItemMeta = styled.span`
    color: ${({ theme }) => theme.colors.Text.placeholder};
    font-size: ${({ theme }) => theme.fonts.Small.fontSize}px;
`

const DuplicateBadge = styled.span`
    display: inline-flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.Text.onHighlight.default};
    background: ${({ theme }) => theme.colors.Highlight.dark};
    font-weight: 700;
`

const ItemActions = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const SEMESTERS = [1, 2, 3, 4] as const satisfies readonly PlannerSemester[]

function itemCredits(item: PlannerItem): {
    readonly credit: number
    readonly creditAU: number
} {
    if (item.item_type === "TAKEN") {
        return { credit: item.lecture.credit, creditAU: item.lecture.credit_au }
    }
    if (item.item_type === "FUTURE") {
        return { credit: item.course.credit, creditAU: item.course.credit_au }
    }
    return { credit: item.credit, creditAU: item.credit_au }
}

type Props = {
    readonly planner: PlannerDetail
    readonly item: PlannerItem
    readonly title: string
    readonly code: string
    readonly busy: boolean
    readonly onUpdate: (
        item: PlannerItem,
        patch: { readonly semester?: PlannerSemester; readonly isExcluded?: boolean },
    ) => Promise<void>
    readonly onRemove: (item: PlannerItem) => Promise<void>
}

export default function PlannerItemCard({
    planner,
    item,
    title,
    code,
    busy,
    onUpdate,
    onRemove,
}: Props) {
    const { t } = useTranslation()
    const credits = itemCredits(item)
    return (
        <ItemCard $excluded={item.is_excluded}>
            <ItemTitle title={title}>{title}</ItemTitle>
            <ItemMeta>
                {code} · {credits.credit}
                {t("planner.items.credits")}
                {credits.creditAU > 0 && (
                    <>
                        {" · "}
                        {credits.creditAU} {t("planner.items.au")}
                    </>
                )}
                {isActiveDuplicateItem(planner, item) && (
                    <DuplicateBadge
                        aria-label={t("planner.items.duplicate")}
                        title={t("planner.items.duplicate")}
                    >
                        !
                    </DuplicateBadge>
                )}
            </ItemMeta>
            <ItemActions>
                <ActionButton
                    type="button"
                    disabled={busy}
                    onClick={() =>
                        void onUpdate(item, {
                            isExcluded: !item.is_excluded,
                        })
                    }
                >
                    {t(
                        item.is_excluded
                            ? "planner.actions.include"
                            : "planner.actions.exclude",
                    )}
                </ActionButton>
                {item.item_type !== "TAKEN" && (
                    <Select
                        aria-label={t("planner.actions.changeSemester")}
                        value={item.semester}
                        disabled={busy}
                        onChange={(event) =>
                            void onUpdate(item, {
                                semester: PlannerSemesterSchema.parse(
                                    Number(event.target.value),
                                ),
                            })
                        }
                    >
                        {SEMESTERS.map((value) => (
                            <option key={value} value={value}>
                                {t(`planner.semesters.${value}`)}
                            </option>
                        ))}
                    </Select>
                )}
                {item.item_type !== "TAKEN" && (
                    <ActionButton
                        $danger
                        type="button"
                        disabled={busy}
                        aria-label={t("planner.actions.removeItem")}
                        onClick={() => {
                            if (window.confirm(t("planner.actions.removeItemConfirm"))) {
                                void onRemove(item)
                            }
                        }}
                    >
                        <Icon size={14} color="inherit">
                            <DeleteOutlineIcon />
                        </Icon>
                    </ActionButton>
                )}
            </ItemActions>
        </ItemCard>
    )
}
