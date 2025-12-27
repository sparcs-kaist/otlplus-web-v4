import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { Trans } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
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

const TimeTableSection = () => {
    const { user, status } = useUserStore()

    const totalRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    const [selected, setSelected] = useState<Lecture | null>(null)
    const [hover, setHover] = useState<Lecture[] | null>(null)

    const { query: myTimetable, setParams: setMyTimetableParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
        {
            enabled: status === "success",
        },
    )
    const { query: semesters } = useAPI("GET", "/semesters")

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

    const lectures = myTimetable.data?.lectures ?? []

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
