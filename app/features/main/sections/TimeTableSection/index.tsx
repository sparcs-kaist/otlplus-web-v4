import { useEffect, useRef, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import exampleLectures from "@/api/example/Lectures"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimeBlock } from "@/common/schemas/timeblock"
import { media } from "@/styles/themes/media"
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

    // needs remove
    const totalRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    const [selected, setSelected] = useState<Lecture | null>(null)
    const [hover, setHover] = useState<Lecture | null>(null)
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null)

    const [selectedOption, setSelectedOption] = useState<number>(0)

    const [lectureSummary, setLectureSummary] = useState<Lecture[]>(exampleLectures)

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
                    </FlexWrapper>
                    <CustomTimeTableGrid
                        cellWidth={width === 0 ? 150 : (width - 25) / 5}
                        lectureSummary={lectureSummary || []}
                        setTimeFilter={setTimeFilter}
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
