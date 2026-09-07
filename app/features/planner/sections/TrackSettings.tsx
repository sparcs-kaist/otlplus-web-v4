import { useEffect, useMemo, useState } from "react"

import { useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { PlannerDetail, TracksResponse } from "@/common/schemas/planner"

import {
    ActionButton,
    Field,
    FieldLabel,
    PlannerFieldGrid,
    PlannerForm,
    SectionTitle,
    Select,
} from "../components/PlannerControls"
import type { PlannerTrackSelection } from "../domain/local"
import {
    PLANNER_DURATIONS,
    countIncompatibleTracks,
    countItemsOutsideRange,
    findAdditionalTrackIssue,
    isAdditionalTrackDisabled,
    isTrackCompatible,
    plannerStartYears,
} from "../domain/trackPolicy"

type Props = {
    readonly planner: PlannerDetail
    readonly tracks: TracksResponse
    readonly busy: boolean
    readonly onSave: (selection: PlannerTrackSelection) => Promise<void>
}

export function TrackSettings({ planner, tracks, busy, onSave }: Props) {
    const { t, i18n } = useTranslation()
    const currentYear = new Date().getFullYear()
    const plannerDuration = planner.end_year - planner.start_year + 1
    const [startYear, setStartYear] = useState(planner.start_year)
    const [duration, setDuration] = useState<number>(
        PLANNER_DURATIONS.includes(plannerDuration as (typeof PLANNER_DURATIONS)[number])
            ? plannerDuration
            : 4,
    )
    const [generalId, setGeneralId] = useState(planner.general_track.id)
    const [majorId, setMajorId] = useState(planner.major_track.id)
    const [additionalIds, setAdditionalIds] = useState<readonly number[]>(
        planner.additional_tracks.map((track) => track.id),
    )
    const [additionalQuery, setAdditionalQuery] = useState("")

    useEffect(() => {
        const nextDuration = planner.end_year - planner.start_year + 1
        setStartYear(planner.start_year)
        setDuration(
            PLANNER_DURATIONS.includes(nextDuration as (typeof PLANNER_DURATIONS)[number])
                ? nextDuration
                : 4,
        )
        setGeneralId(planner.general_track.id)
        setMajorId(planner.major_track.id)
        setAdditionalIds(planner.additional_tracks.map((track) => track.id))
    }, [planner])

    const years = useMemo(() => {
        const available = plannerStartYears(currentYear)
        return planner.start_year >= 2000 && planner.start_year <= currentYear
            ? [...new Set([planner.start_year, ...available])].sort((a, b) => a - b)
            : available
    }, [currentYear, planner.start_year])
    const generalOptions = tracks.general.filter(
        (track) => track.end_year >= 2020 || track.id === generalId,
    )
    const majorOptions = tracks.major.filter(
        (track) => track.end_year >= 2020 || track.id === majorId,
    )
    const additionalOptions = useMemo(() => {
        const base = tracks.additional.filter(
            (track) => track.end_year >= 2020 || additionalIds.includes(track.id),
        )
        const query = additionalQuery.trim().toLowerCase()
        if (query === "") return base
        return base.filter((track) => {
            const haystack = [
                track.department?.name ?? "",
                track.department?.name_en ?? "",
                track.type,
            ]
                .join(" ")
                .toLowerCase()
            return haystack.includes(query)
        })
    }, [tracks.additional, additionalIds, additionalQuery])
    const localizedDepartment = (department: {
        readonly name: string
        readonly name_en: string
    }) => (i18n.resolvedLanguage === "en" ? department.name_en : department.name)

    const submit = (event: React.FormEvent) => {
        event.preventDefault()
        const generalTrack = tracks.general.find((track) => track.id === generalId)
        const majorTrack = tracks.major.find((track) => track.id === majorId)
        if (generalTrack === undefined || majorTrack === undefined) return
        const additionalTracks = tracks.additional.filter((track) =>
            additionalIds.includes(track.id),
        )
        const issue = findAdditionalTrackIssue(additionalTracks, majorTrack)
        if (issue !== null) {
            window.alert(t(`planner.settings.errors.${issue}`))
            return
        }

        const selection: PlannerTrackSelection = {
            startYear,
            endYear: startYear + duration - 1,
            generalTrack,
            majorTrack,
            additionalTracks,
        }
        const removedItems = countItemsOutsideRange(
            planner,
            selection.startYear,
            selection.endYear,
        )
        if (
            removedItems > 0 &&
            !window.confirm(
                t("planner.settings.confirmRange", {
                    startYear: selection.startYear,
                    endYear: selection.endYear,
                    count: removedItems,
                }),
            )
        ) {
            return
        }
        const incompatibleTracks = countIncompatibleTracks(selection)
        if (
            incompatibleTracks > 0 &&
            !window.confirm(
                t("planner.settings.confirmIncompatible", {
                    startYear: selection.startYear,
                    count: incompatibleTracks,
                }),
            )
        ) {
            return
        }
        void onSave(selection)
    }

    return (
        <PlannerForm onSubmit={submit}>
            <SectionTitle>{t("planner.settings.title")}</SectionTitle>
            <PlannerFieldGrid>
                <FieldLabel>
                    {t("planner.settings.startYear")}
                    <Select
                        value={startYear}
                        onChange={(event) => setStartYear(Number(event.target.value))}
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
                <FieldLabel>
                    {t("planner.settings.duration")}
                    <Select
                        value={duration}
                        onChange={(event) => setDuration(Number(event.target.value))}
                    >
                        {PLANNER_DURATIONS.map((value) => (
                            <option key={value} value={value}>
                                {t("planner.settings.durationYears", { count: value })}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
                <FieldLabel>
                    {t("planner.settings.generalTrack")}
                    <Select
                        value={generalId}
                        onChange={(event) => setGeneralId(Number(event.target.value))}
                    >
                        {generalOptions.map((track) => (
                            <option
                                key={track.id}
                                value={track.id}
                                disabled={!isTrackCompatible(track, startYear)}
                            >
                                {track.is_foreign
                                    ? t("planner.settings.foreign")
                                    : t("planner.settings.domestic")}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
                <FieldLabel>
                    {t("planner.settings.majorTrack")}
                    <Select
                        value={majorId}
                        onChange={(event) => setMajorId(Number(event.target.value))}
                    >
                        {majorOptions.map((track) => (
                            <option
                                key={track.id}
                                value={track.id}
                                disabled={!isTrackCompatible(track, startYear)}
                            >
                                {localizedDepartment(track.department)}
                            </option>
                        ))}
                    </Select>
                </FieldLabel>
            </PlannerFieldGrid>
            <FieldLabel>
                {t("planner.settings.additionalTracks")}
                <Field
                    type="text"
                    value={additionalQuery}
                    onChange={(event) => setAdditionalQuery(event.target.value)}
                    aria-label={t("planner.settings.additionalFilter")}
                    placeholder={t("planner.settings.additionalFilterPlaceholder")}
                />
                <Select
                    multiple
                    size={6}
                    value={additionalIds.map(String)}
                    onChange={(event) =>
                        setAdditionalIds(
                            Array.from(event.target.selectedOptions, (option) =>
                                Number(option.value),
                            ),
                        )
                    }
                >
                    {additionalOptions.map((track) => (
                        <option
                            key={track.id}
                            value={track.id}
                            disabled={isAdditionalTrackDisabled(
                                track,
                                startYear,
                                tracks.major.find((item) => item.id === majorId) ??
                                    planner.major_track,
                            )}
                        >
                            {t(`planner.trackTypes.${track.type}`)}
                            {track.department === null
                                ? ""
                                : ` · ${localizedDepartment(track.department)}`}
                        </option>
                    ))}
                </Select>
            </FieldLabel>
            <FlexWrapper direction="row" justify="flex-end" gap={8}>
                <ActionButton $primary type="submit" disabled={busy}>
                    {t("planner.actions.save")}
                </ActionButton>
            </FlexWrapper>
        </PlannerForm>
    )
}
