import { useCallback, useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { Trans } from "react-i18next"
import { useNavigate } from "react-router"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { timetableCache, useNetworkStatus } from "@/libs/offline"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import Widget from "../../../../common/primitives/Widget"
import CustomTimeTableGrid from "../../components/CustomTimeTableGrid"

const StyledWidget = styled(Widget)`
    width: 856px;

    ${media.laptop} {
        width: 100%;
    }
`

const TimeTableInner = styled(FlexWrapper)`
    flex-grow: 1;
    width: 100%;
`

const OfflineIndicator = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.Highlight.default};
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;

    &::before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
    }
`

const TimeTableSection = () => {
    const { user, status } = useUserStore()
    const { isOnline } = useNetworkStatus()
    const navigate = useNavigate()

    const totalRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    const [selected, setSelected] = useState<Lecture | null>(null)
    const [hover, setHover] = useState<Lecture[] | null>(null)

    const [cachedLectures, setCachedLectures] = useState<Lecture[]>([])
    const [isUsingCache, setIsUsingCache] = useState(false)

    const { query: myTimetable, setParams: setMyTimetableParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        {
            enabled: status === "success" && isOnline,
        },
    )
    const { query: semesters } = useAPI("GET", "/semesters", {
        enabled: isOnline,
    })

    const currentYear = semesters.data?.semesters?.at(-1)?.year
    const currentSemester = semesters.data?.semesters?.at(-1)?.semester

    const syncToCache = useCallback(async () => {
        if (user?.id && myTimetable.data?.lectures && currentYear && currentSemester) {
            await timetableCache.save(
                user.id,
                currentYear,
                String(currentSemester),
                myTimetable.data.lectures,
            )
        }
    }, [user?.id, myTimetable.data?.lectures, currentYear, currentSemester])

    const loadFromCache = useCallback(async () => {
        if (!user?.id) return

        const cached = await timetableCache.getLatestForUser(user.id)
        if (cached) {
            setCachedLectures(cached.lectures)
            setIsUsingCache(true)
        }
    }, [user?.id])

    useEffect(() => {
        if (semesters.data && semesters.data.semesters.length > 0) {
            const latestSemester =
                semesters.data.semesters[semesters.data.semesters.length - 1]
            if (!latestSemester) return
            setMyTimetableParams({
                year: latestSemester.year,
                semester: latestSemester.semester,
            } as never)
        }
    }, [semesters.data, setMyTimetableParams])

    useEffect(() => {
        if (isOnline && myTimetable.data?.lectures && user?.id) {
            syncToCache()
            setIsUsingCache(false)
        }
    }, [isOnline, myTimetable.data?.lectures, user?.id, syncToCache])

    useEffect(() => {
        if (!isOnline && user?.id) {
            loadFromCache()
        }
    }, [isOnline, user?.id, loadFromCache])

    useEffect(() => {
        const handleResize = () => {
            if (totalRef.current) {
                setWidth(totalRef.current.clientWidth)
            }
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleOfflineClick = () => {
        navigate("/timetable/offline")
    }

    const lectures = isUsingCache ? cachedLectures : (myTimetable.data?.lectures ?? [])

    return (
        <StyledWidget direction="column" gap={0} padding="30px" flex="1 1 auto">
            {status === "loading" ? (
                <Typography type="BiggerBold" color="Text.default">
                    Loading...
                </Typography>
            ) : status === "idle" ? (
                <Typography type="BiggerBold" color="Text.default">
                    로그인을 해주세요
                </Typography>
            ) : (
                <TimeTableInner
                    direction="column"
                    align="stretch"
                    gap={16}
                    ref={totalRef}
                >
                    <FlexWrapper
                        direction="row"
                        justify="space-between"
                        align="center"
                        gap={0}
                    >
                        <FlexWrapper direction="row" gap={0}>
                            <Trans
                                i18nKey="main.hisTimeTable"
                                values={{ name: user?.name }}
                                components={{
                                    name: (
                                        <Typography
                                            type="BiggerBold"
                                            color="Highlight.default"
                                            children={undefined}
                                        />
                                    ),
                                    normal: (
                                        <Typography
                                            type="BiggerBold"
                                            color="Text.dark"
                                            children={undefined}
                                        />
                                    ),
                                    space: <>&nbsp;</>,
                                }}
                            />
                        </FlexWrapper>
                        {(isUsingCache || !isOnline) && (
                            <OfflineIndicator onClick={handleOfflineClick}>
                                오프라인
                            </OfflineIndicator>
                        )}
                    </FlexWrapper>
                    <CustomTimeTableGrid
                        cellWidth={(width - 30) / 5}
                        lectureSummary={lectures}
                        hover={hover}
                        setHover={setHover}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </TimeTableInner>
            )}
        </StyledWidget>
    )
}

export default TimeTableSection
