import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"

import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import { WeekdayEnum } from "@/common/enum/weekdayEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { type Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { useAPI } from "@/utils/api/useAPI"
import { formatTimeAreaToString } from "@/utils/timetable/formatTimeblockToString"
import useUserStore from "@/utils/zustand/useUserStore"

const Box = styled(FlexWrapper)`
    width: 600px;
    height: 800px;
    background: ${({ theme }) => theme.colors.Background.Section};
`

function Test() {
    const { status } = useUserStore()
    const { query, setParams } = useAPI("GET", `/timetables/my-timetable`, {
        enabled: status === "success",
    })

    const semesterRef = useRef<number>(3)

    const [hovered, setHovered] = useState<Lecture[]>([])
    const [selected, setSelected] = useState<Lecture[]>([])

    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

    function tick() {
        setParams({ year: 2025, semester: semesterRef.current == 1 ? 3 : 1 })
        semesterRef.current = semesterRef.current == 1 ? 3 : 1
    }

    function deleteLecture(lecture: Lecture) {
        console.log("Delete lecture:", lecture)
    }

    useEffect(() => {
        //console.log(hovered)
    }, [hovered])

    useEffect(() => {
        if (status === "success") {
            tick()
            // const interval = setInterval(tick, 10000)
            // return () => clearInterval(interval)
        }
    }, [status])

    useEffect(() => {
        console.log("Time filter changed:", timeFilter)
    }, [timeFilter])

    return (
        <FlexWrapper
            direction="row"
            gap={0}
            align="stretch"
            justify="center"
            flex="1 1 auto"
        >
            <FlexWrapper direction="row" gap={0} justify="center" align="stretch">
                <FlexWrapper
                    direction="column"
                    gap={0}
                    style={{ width: 200 }}
                    align="flex-start"
                    padding="100px 0"
                >
                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="flex-start"
                        padding="0px 16px"
                    >
                        <Typography type="Big">Hovered Lectures</Typography>
                        <Typography type="Normal" color="Text.default">
                            {hovered[0]?.name || ""}
                        </Typography>
                    </FlexWrapper>

                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="flex-start"
                        padding="0px 16px"
                    >
                        <Typography type="Big">Selected Lectures</Typography>
                        <Typography type="Normal" color="Text.default">
                            {selected[0]?.name || ""}
                        </Typography>
                    </FlexWrapper>

                    <FlexWrapper
                        direction="column"
                        gap={0}
                        align="flex-start"
                        padding="0px 16px"
                    >
                        <Typography type="Big">Time Filter</Typography>
                        <Typography type="Normal" color="Text.default">
                            {timeFilter ? formatTimeAreaToString(timeFilter) : ""}
                        </Typography>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper
                    direction="column"
                    gap={0}
                    align="center"
                    justify="center"
                    flex="1 1 auto"
                >
                    <Box direction="column" gap={0} align="stretch">
                        <CustomTimeTableGrid
                            lectures={query.data?.lectures || []}
                            hoveredLectures={hovered}
                            selectedLectures={selected}
                            setHoveredLectures={setHovered}
                            setSelectedLectures={setSelected}
                            deleteLecture={deleteLecture}
                            setTimeFilter={setTimeFilter}
                        />
                    </Box>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Test
