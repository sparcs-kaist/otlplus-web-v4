import { useEffect, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import type { PlannerSemester } from "@/common/schemas/planner"
import { ActionButton } from "@/features/planner/components/PlannerControls"
import { usePlannerController } from "@/features/planner/hooks/usePlannerController"
import { CourseSearchPanel } from "@/features/planner/sections/CourseSearchPanel"
import { PlannerSidebar } from "@/features/planner/sections/PlannerSidebar"
import { PlannerSummary } from "@/features/planner/sections/PlannerSummary"
import { SemesterGrid } from "@/features/planner/sections/SemesterGrid"
import { TrackSettings } from "@/features/planner/sections/TrackSettings"
import { RequireFeatureFlag } from "@/libs/featureFlags"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"

const PlannerPage = styled.main`
    display: flex;
    min-width: 0;
    min-height: 0;
    flex: 1 0 auto;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px 20px;

    ${media.tablet} {
        padding: 0 8px 12px;
    }
`

const Panel = styled(Widget)`
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    align-items: stretch;
    padding: 16px;

    ${media.mobile} {
        padding: 12px;
    }
`

const Workspace = styled.div`
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 340px);
    align-items: start;
    gap: 12px;

    ${media.tablet} {
        grid-template-columns: minmax(0, 1fr);
    }
`

const PrimaryFlow = styled.div`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`

const SupportRail = styled.aside`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`

const StatusPanel = styled(Widget)`
    min-height: 240px;
    padding: 24px;
`

export default function PlannerRoute() {
    return (
        <RequireFeatureFlag flag="planner-enabled">
            <GraduationPlannerPage />
        </RequireFeatureFlag>
    )
}

export function GraduationPlannerPage() {
    const { t } = useTranslation()
    const controller = usePlannerController()

    const selectedId = controller.selectedPlanner?.id ?? null
    const plannersRef = useRef(controller.planners)
    plannersRef.current = controller.planners
    const searchInputRef = useRef<HTMLInputElement>(null)
    const [targetSlot, setTargetSlot] = useState<{
        year: number
        semester: PlannerSemester
    }>({ year: new Date().getFullYear(), semester: 1 })

    useEffect(() => {
        trackEvent("Page View", { page: "Planner" })
    }, [])

    useEffect(() => {
        if (selectedId === null) return
        const selected = plannersRef.current.find((planner) => planner.id === selectedId)
        if (selected !== undefined) {
            setTargetSlot({ year: selected.start_year, semester: 1 })
        }
    }, [selectedId])

    const handleRequestAdd = (year: number, semester: PlannerSemester): void => {
        setTargetSlot({ year, semester })
        requestAnimationFrame(() => {
            const input = searchInputRef.current
            input?.scrollIntoView({ behavior: "smooth", block: "center" })
            input?.focus({ preventScroll: true })
        })
    }

    const departments = useMemo(() => {
        const candidates = [
            ...(controller.tracks?.major.map((track) => track.department) ?? []),
            ...(controller.tracks?.additional.flatMap((track) =>
                track.department === null ? [] : [track.department],
            ) ?? []),
        ]
        return candidates.filter(
            (department, index) =>
                candidates.findIndex((candidate) => candidate.id === department.id) ===
                index,
        )
    }, [controller.tracks])

    if (controller.isLoading) {
        return (
            <PlannerPage>
                <StatusPanel direction="column" align="center" justify="center" gap={12}>
                    <LoadingCircle />
                    <Typography type="Normal" color="Text.placeholder">
                        {t("planner.status.loading")}
                    </Typography>
                </StatusPanel>
            </PlannerPage>
        )
    }

    return (
        <PlannerPage>
            <PlannerSidebar
                planners={controller.planners}
                selectedPlannerId={controller.selectedPlannerId}
                busy={controller.isBusy}
                onSelect={controller.setSelectedPlannerId}
                onCreate={controller.createPlanner}
                onDelete={controller.deletePlanner}
                onReorder={controller.reorderPlanner}
            />
            {controller.error !== null && controller.error !== undefined && (
                <Panel direction="column" gap={6}>
                    <Typography type="NormalBold" color="Highlight.dark">
                        {t("planner.status.error")}
                    </Typography>
                    <Typography type="Small" color="Text.light">
                        {controller.error.message}
                    </Typography>
                </Panel>
            )}
            {controller.selectedPlanner === null || controller.tracks === undefined ? (
                <StatusPanel direction="column" align="center" justify="center" gap={12}>
                    <Typography type="BiggerBold" color="Text.default">
                        {t("planner.empty.title")}
                    </Typography>
                    <Typography type="Normal" color="Text.placeholder">
                        {t("planner.empty.description")}
                    </Typography>
                    <ActionButton
                        $primary
                        disabled={controller.isBusy || controller.tracks === undefined}
                        onClick={() => void controller.createPlanner(false)}
                    >
                        {t("planner.actions.create")}
                    </ActionButton>
                </StatusPanel>
            ) : (
                <Workspace>
                    <PrimaryFlow>
                        <Panel direction="column" gap={12}>
                            <SemesterGrid
                                planner={controller.selectedPlanner}
                                busy={controller.isBusy}
                                onUpdate={controller.updateItem}
                                onRemove={controller.removeItem}
                                onRequestAdd={handleRequestAdd}
                            />
                        </Panel>
                        <Panel direction="column" gap={12}>
                            <CourseSearchPanel
                                planner={controller.selectedPlanner}
                                departments={departments}
                                busy={controller.isBusy}
                                year={targetSlot.year}
                                semester={targetSlot.semester}
                                onYearChange={(year) =>
                                    setTargetSlot((slot) => ({ ...slot, year }))
                                }
                                onSemesterChange={(semester) =>
                                    setTargetSlot((slot) => ({ ...slot, semester }))
                                }
                                keywordInputRef={searchInputRef}
                                onAddFuture={controller.addFuture}
                                onAddArbitrary={controller.addArbitrary}
                            />
                        </Panel>
                    </PrimaryFlow>
                    <SupportRail aria-label={t("planner.settings.title")}>
                        <Panel direction="column" gap={12}>
                            <TrackSettings
                                planner={controller.selectedPlanner}
                                tracks={controller.tracks}
                                busy={controller.isBusy}
                                onSave={controller.updateTracks}
                            />
                        </Panel>
                        <Panel direction="column" gap={12}>
                            <PlannerSummary planner={controller.selectedPlanner} />
                        </Panel>
                    </SupportRail>
                </Workspace>
            )}
        </PlannerPage>
    )
}
