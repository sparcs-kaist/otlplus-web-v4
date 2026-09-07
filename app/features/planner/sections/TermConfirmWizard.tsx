import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { PlannerDetail } from "@/common/schemas/planner"

import { ActionButton } from "../components/PlannerControls"
import { isPastSlot } from "../domain/timeUtils"

type FutureItem = PlannerDetail["future_items"][number]

type Props = {
    readonly planner: PlannerDetail
    readonly busy: boolean
    readonly onConfirm: (items: readonly FutureItem[]) => Promise<void>
}

export function TermConfirmWizard({ planner, busy, onConfirm }: Props) {
    const { t, i18n } = useTranslation()
    const [unchecked, setUnchecked] = useState<ReadonlySet<number>>(new Set())
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        setUnchecked(new Set())
    }, [planner.id])

    const pastItems = planner.future_items.filter((item) =>
        isPastSlot({ year: item.year, semester: item.semester }, new Date()),
    )

    if (pastItems.length === 0) return null

    const checkedItems = pastItems.filter((item) => !unchecked.has(item.id))
    const disabled = busy || submitting || checkedItems.length === 0

    const toggle = (id: number) => {
        setUnchecked((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    const confirm = () => {
        setSubmitting(true)
        void onConfirm(checkedItems).finally(() => setSubmitting(false))
    }

    const localizeCourse = (course: { title: string; title_en: string }) =>
        i18n.resolvedLanguage === "en" ? course.title_en : course.title

    return (
        <FlexWrapper direction="column" gap={8}>
            <Typography type="NormalBold" color="Text.default">
                {t("planner.wizard.title")}
            </Typography>
            <Typography type="Small" color="Text.light">
                {t("planner.wizard.description", { count: pastItems.length })}
            </Typography>
            <FlexWrapper direction="column" gap={4}>
                {pastItems.map((item) => (
                    <label key={item.id}>
                        <input
                            type="checkbox"
                            checked={!unchecked.has(item.id)}
                            onChange={() => toggle(item.id)}
                        />{" "}
                        {t("planner.wizard.item", {
                            year: item.year,
                            semester: t(`planner.semesters.${item.semester}`),
                            course: localizeCourse(item.course),
                        })}
                    </label>
                ))}
            </FlexWrapper>
            <FlexWrapper direction="row" justify="flex-end" gap={8}>
                <ActionButton
                    type="button"
                    $primary
                    disabled={disabled}
                    onClick={confirm}
                >
                    {t("planner.wizard.confirm")}
                </ActionButton>
            </FlexWrapper>
        </FlexWrapper>
    )
}
