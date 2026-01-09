import { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import LockIcon from "@mui/icons-material/Lock"
import { Trans } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import { handleLogin } from "@/utils/handleLoginLogout"
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

const BlurWrapper = styled.div<{ blur: boolean }>`
    filter: ${(props) => (props.blur ? "blur(4px)" : "none")};
    width: 100%;
    height: 100%;
`

const LoginWrapper = styled(FlexWrapper)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`

const LockIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.colors.Highlight.default};
    padding: 8px;
`

const LoginButton = styled.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`

const TimeTableSection = () => {
    const theme = useTheme()
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
    }, [totalRef, status])

    const lectures = myTimetable.data?.lectures ?? []

    return (
        <StyledWidget direction="column" gap={0} padding="30px" flex="1 1 auto">
            {status === "loading" ? (
                <LoadingCircle />
            ) : (
                <TimeTableInner
                    direction="column"
                    align="stretch"
                    gap={16}
                    ref={totalRef}
                >
                    {status === "idle" ? (
                        <LoginWrapper direction="column" gap={12} align="center">
                            <LockIconWrapper>
                                <Icon size={30} color={theme.colors.Highlight.default}>
                                    <LockIcon />
                                </Icon>
                            </LockIconWrapper>
                            <LoginButton onClick={handleLogin}>
                                <Typography type="BigBold" style={{ color: "#FFFFFF" }}>
                                    로그인하러가기
                                </Typography>
                            </LoginButton>
                        </LoginWrapper>
                    ) : (
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
                    )}
                    <BlurWrapper blur={status === "idle"}>
                        <CustomTimeTableGrid
                            cellWidth={(width - 30) / 5}
                            lectureSummary={lectures}
                            hover={hover}
                            setHover={setHover}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </BlurWrapper>
                </TimeTableInner>
            )}
        </StyledWidget>
    )
}

export default TimeTableSection
