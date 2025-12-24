import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

import Widget from "../../../../common/primitives/Widget"
import CustomTimeTableGrid from "../../components/CustomTimeTableGrid"

const TimeTableInner = styled(FlexWrapper)`
    flex-grow: 1;
    width: 100%;
`

const TimeTableSection = () => {
    const { user, status } = useUserStore()

    const [selected, setSelected] = useState<Lecture | null>(null)
    const [hover, setHover] = useState<Lecture | null>(null)

    const { query: myTimetable, setParams: setMyTimetableParams } = useAPI(
        "GET",
        "/timetables/my-timetable",
    )
    const { query: semesters } = useAPI("GET", "/semesters")

    const { t } = useTranslation()

    useEffect(() => {
        if (semesters.data && semesters.data.semesters.length > 0) {
            const latestSemester =
                semesters.data.semesters[semesters.data.semesters.length - 1]
            if (!latestSemester) return
            setMyTimetableParams({
                year: latestSemester.year,
                semester: latestSemester.semester,
            })
        }
    }, [semesters.data])

    return (
        <Widget width={856} direction="column" gap={0} padding="30px" flex="1 1 auto">
            {status === "idle" ? (
                <Typography type="BiggerBold" color="Text.default">
                    로그인을 해주세요
                </Typography>
            ) : (
                <TimeTableInner direction="column" align="stretch" gap={16}>
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
                    </FlexWrapper>
                    <CustomTimeTableGrid
                        cellWidth={150}
                        lectureSummary={myTimetable.data?.lectures ?? []}
                        hover={hover}
                        setHover={setHover}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </TimeTableInner>
            )}
        </Widget>
    )
}

export default TimeTableSection
