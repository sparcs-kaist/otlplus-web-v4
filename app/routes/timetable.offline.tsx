import { useMemo, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import Button from "@/common/components/Button"
import { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import CustomTimeTableGrid from "@/features/main/components/CustomTimeTableGrid"
import { useAllCachedTimetables } from "@/libs/offline/useTimetableOffline"
import useUserStore from "@/utils/zustand/useUserStore"

const PageContainer = styled(FlexWrapper)`
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.Background.Page.default};
    margin: 0 auto;
    max-width: 1298px;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`

const Header = styled(FlexWrapper)`
    width: 100%;
    margin-bottom: 24px;
`

const OfflineBadge = styled.div`
    background-color: ${({ theme }) => theme.colors.Highlight.default};
    color: ${({ theme }) => theme.colors.Text.default};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    &::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
    }
`

const Card = styled(Widget)`
    width: 100%;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`

const MetaInfo = styled(FlexWrapper)`
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Background.Block.default};
`

const EmptyStateContainer = styled(FlexWrapper)`
    height: 400px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    border-radius: 16px;
    text-align: center;
    border: 2px dashed ${({ theme }) => theme.colors.Background.Block.default};
`

function formatTimeAgo(dateString: string, t: (key: string) => string) {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) {
        return t("common.time.just_now") || "Just now"
    }
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
        return `${diffInMinutes} ${t("common.time.minutes_ago") || "minutes ago"}`
    }
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
        return `${diffInHours} ${t("common.time.hours_ago") || "hours ago"}`
    }
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays} ${t("common.time.days_ago") || "days ago"}`
}

function getSemesterName(semester: string, t: (key: string) => string) {
    const semNum = parseInt(semester, 10)
    if (!isNaN(semNum)) {
        if (semNum === SemesterEnum.SPRING) return t("common.semesters.spring")
        if (semNum === SemesterEnum.SUMMER) return t("common.semesters.summer")
        if (semNum === SemesterEnum.FALL) return t("common.semesters.fall")
        if (semNum === SemesterEnum.WINTER) return t("common.semesters.winter")
    }
    return semester
}

export default function OfflineTimetablePage() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { user } = useUserStore()

    const [selected, setSelected] = useState<Lecture | null>(null)
    const [hover, setHover] = useState<Lecture | null>(null)
    const [, setTimeFilter] = useState<TimeBlock | null>(null)

    const cachedTimetables = useAllCachedTimetables(user?.id)

    const activeTimetable = useMemo(() => {
        if (!cachedTimetables || cachedTimetables.length === 0) return null
        return [...cachedTimetables].sort(
            (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
        )[0]
    }, [cachedTimetables])

    const hasData = !!activeTimetable

    return (
        <PageContainer direction="column" align="center" gap={24}>
            <Header direction="row" align="center" justify="space-between" gap={16}>
                <FlexWrapper direction="column" gap={4}>
                    <Typography
                        type="BiggerBold"
                        color="Text.default"
                        style={{ fontSize: "24px" }}
                    >
                        {t("common.offline.title") || "Offline Mode"}
                    </Typography>
                    <Typography type="Normal" color="Text.placeholder">
                        {t("common.offline.description") ||
                            "View your saved timetable without internet connection"}
                    </Typography>
                </FlexWrapper>
                <OfflineBadge>{t("common.offline.badge") || "Offline"}</OfflineBadge>
            </Header>

            <Card direction="column" gap={20}>
                {hasData ? (
                    <>
                        <MetaInfo
                            direction="row"
                            align="center"
                            justify="space-between"
                            gap={16}
                        >
                            <FlexWrapper direction="row" align="baseline" gap={8}>
                                <Typography
                                    type="BigBold"
                                    color="Text.default"
                                    style={{ fontSize: "20px" }}
                                >
                                    {activeTimetable.year}{" "}
                                    {getSemesterName(activeTimetable.semester, t)}
                                </Typography>
                            </FlexWrapper>
                            <Typography type="Small" color="Text.placeholder">
                                {t("common.offline.last_synced") || "Last synced"}:{" "}
                                {formatTimeAgo(activeTimetable.syncedAt, t)}
                            </Typography>
                        </MetaInfo>

                        <FlexWrapper
                            direction="column"
                            style={{ width: "100%", overflowX: "auto" }}
                            gap={0}
                        >
                            <CustomTimeTableGrid
                                lectureSummary={activeTimetable.lectures}
                                setTimeFilter={setTimeFilter}
                                hover={hover}
                                setHover={setHover}
                                selected={selected}
                                setSelected={setSelected}
                                cellWidth={120}
                            />
                        </FlexWrapper>
                    </>
                ) : (
                    <EmptyStateContainer
                        direction="column"
                        align="center"
                        justify="center"
                        gap={16}
                    >
                        <Typography type="BigBold" color="Text.disable">
                            {t("common.offline.no_data") || "No cached timetable found"}
                        </Typography>
                        <Typography type="Normal" color="Text.placeholder">
                            {t("common.offline.no_data_desc") ||
                                "Connect to the internet and view your timetable to save it for offline use."}
                        </Typography>
                    </EmptyStateContainer>
                )}
            </Card>

            <FlexWrapper
                direction="row"
                justify="center"
                style={{ marginTop: "40px", width: "100%" }}
                gap={0}
            >
                <Button
                    type="default"
                    onClick={() => navigate("/")}
                    style={{ minWidth: "200px" }}
                >
                    {t("common.offline.go_home") || "Back to Home"}
                </Button>
            </FlexWrapper>
        </PageContainer>
    )
}
