import { useEffect, useMemo } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import { ActionButton } from "@/features/planner/components/PlannerControls"
import { usePlannerController } from "@/features/planner/hooks/usePlannerController"
import { CourseSearchPanel } from "@/features/planner/sections/CourseSearchPanel"
import { PlannerSidebar } from "@/features/planner/sections/PlannerSidebar"
import { PlannerSummary } from "@/features/planner/sections/PlannerSummary"
import { SemesterGrid } from "@/features/planner/sections/SemesterGrid"
import { TrackSettings } from "@/features/planner/sections/TrackSettings"
import { trackEvent } from "@/libs/mixpanel"
import { media } from "@/styles/themes/media"

const PlannerPage = styled.main`
    display: grid;
    min-height: 0;
    flex: 1 0 auto;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 12px;
    padding: 0 20px 20px;

    ${media.tablet} {
        grid-template-columns: minmax(0, 1fr);
        padding: 0 8px 12px;
    }
`

const Content = styled.div`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
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

const OverviewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    ${media.laptop} {
        grid-template-columns: minmax(0, 1fr);
    }
`

const StatusPanel = styled(Widget)`
    min-height: 240px;
    padding: 24px;
`

export default function GraduationPlannerPage() {
    const { t } = useTranslation()
    const controller = usePlannerController()

    useEffect(() => {
        trackEvent("Page View", { page: "Planner" })
    }, [])

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
            <Content>
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
                {controller.selectedPlanner === null ||
                controller.tracks === undefined ? (
                    <StatusPanel
                        direction="column"
                        align="center"
                        justify="center"
                        gap={12}
                    >
                        <Typography type="BiggerBold" color="Text.default">
                            {t("planner.empty.title")}
                        </Typography>
                        <Typography type="Normal" color="Text.placeholder">
                            {t("planner.empty.description")}
                        </Typography>
                        <ActionButton
                            $primary
                            disabled={
                                controller.isBusy || controller.tracks === undefined
                            }
                            onClick={() => void controller.createPlanner(false)}
                        >
                            {t("planner.actions.create")}
                        </ActionButton>
                    </StatusPanel>
                ) : (
                    <>
                        <OverviewGrid>
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
                        </OverviewGrid>
                        <Panel direction="column" gap={12}>
                            <CourseSearchPanel
                                planner={controller.selectedPlanner}
                                departments={departments}
                                busy={controller.isBusy}
                                onAddFuture={controller.addFuture}
                                onAddArbitrary={controller.addArbitrary}
                            />
                        </Panel>
                        <Panel direction="column" gap={12}>
                            <SemesterGrid
                                planner={controller.selectedPlanner}
                                busy={controller.isBusy}
                                onUpdate={controller.updateItem}
                                onRemove={controller.removeItem}
                            />
                        </Panel>
                    </>
                )}
            </Content>
        </PlannerPage>
    )
}
