import { useEffect, useMemo, useRef, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import type { PlannerDetail, PlannerSemester } from "@/common/schemas/planner"
import { ActionButton, StatusNotice } from "@/features/planner/components/PlannerControls"
import { isPastSlot } from "@/features/planner/domain/timeUtils"
import { usePlannerController } from "@/features/planner/hooks/usePlannerController"
import { CourseSearchPanel } from "@/features/planner/sections/CourseSearchPanel"
import { CurriculumRoadmap } from "@/features/planner/sections/CurriculumRoadmap"
import { PlannerSidebar } from "@/features/planner/sections/PlannerSidebar"
import { PlannerSummary } from "@/features/planner/sections/PlannerSummary"
import { ScenarioComparison } from "@/features/planner/sections/ScenarioComparison"
import { SemesterGrid } from "@/features/planner/sections/SemesterGrid"
import { TermConfirmWizard } from "@/features/planner/sections/TermConfirmWizard"
import { TrackSettings } from "@/features/planner/sections/TrackSettings"
import { RequireFeatureFlag } from "@/libs/featureFlags"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"
import {
    computeTracksSignature,
    resolveTracksNotice,
    storeTracksVersion,
} from "@/utils/tracksChange"

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
    const [tracksNoticeShown, setTracksNoticeShown] = useState(false)
    const [drillTypeKo, setDrillTypeKo] = useState<string | null>(null)

    useEffect(() => {
        const tracks = controller.tracks
        if (tracks === undefined) return
        const outcome = resolveTracksNotice(tracks, window.localStorage)
        setTracksNoticeShown(outcome.show)
    }, [controller.tracks])

    const dismissTracksNotice = () => {
        const tracks = controller.tracks
        if (tracks !== undefined) {
            storeTracksVersion(computeTracksSignature(tracks), window.localStorage)
        }
        setTracksNoticeShown(false)
    }
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

    const hasPastItems = useMemo(() => {
        const planner = controller.selectedPlanner
        if (planner === null) return false
        return planner.future_items.some((item) =>
            isPastSlot({ year: item.year, semester: item.semester }, new Date()),
        )
    }, [controller.selectedPlanner])

    const handleConfirmPastItems = async (
        items: readonly PlannerDetail["future_items"][number][],
    ): Promise<void> => {
        for (const item of items) {
            await controller.addArbitrary({
                year: item.year,
                semester: item.semester,
                department: item.course.department,
                type: item.course.type,
                typeEn: item.course.type_en,
                credit: item.course.credit,
                creditAU: item.course.credit_au,
            })
            await controller.removeItem(item)
        }
    }

    const handleSelectCategory = (typeKo: string): void => {
        setDrillTypeKo(typeKo)
        requestAnimationFrame(() => {
            const input = searchInputRef.current
            input?.scrollIntoView({ behavior: "smooth", block: "center" })
            input?.focus({ preventScroll: true })
        })
    }

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
            {tracksNoticeShown && (
                <StatusNotice role="status">
                    {t("planner.notice.tracksUpdated")}
                    <FlexWrapper direction="row" justify="flex-end" gap={6}>
                        <ActionButton type="button" onClick={dismissTracksNotice}>
                            {t("planner.notice.dismiss")}
                        </ActionButton>
                    </FlexWrapper>
                </StatusNotice>
            )}
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
                        {hasPastItems && (
                            <Panel direction="column" gap={12}>
                                <TermConfirmWizard
                                    planner={controller.selectedPlanner}
                                    busy={controller.isBusy}
                                    onConfirm={handleConfirmPastItems}
                                />
                            </Panel>
                        )}
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
                            <CurriculumRoadmap planner={controller.selectedPlanner} />
                        </Panel>
                        <Panel direction="column" gap={12}>
                            <CourseSearchPanel
                                planner={controller.selectedPlanner}
                                departments={departments}
                                busy={controller.isBusy}
                                drillTypeKo={drillTypeKo}
                                onDrillTypeClear={() => setDrillTypeKo(null)}
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
                            <PlannerSummary
                                planner={controller.selectedPlanner}
                                onSelectCategory={handleSelectCategory}
                            />
                        </Panel>
                        {controller.planners.length >= 2 && (
                            <Panel direction="column" gap={12}>
                                <ScenarioComparison
                                    planners={controller.planners}
                                    selectedId={controller.selectedPlanner.id}
                                />
                            </Panel>
                        )}
                    </SupportRail>
                </Workspace>
            )}
        </PlannerPage>
    )
}
