import { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import LockIcon from "@mui/icons-material/Lock"
import { useQueryClient } from "@tanstack/react-query"
import { Trans, useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import LoadingCircle from "@/common/components/LoadingCircle"
import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import { handleLogin } from "@/utils/handleLoginLogout"
import useUserStore from "@/utils/zustand/useUserStore"

import Widget from "../../../../common/primitives/Widget"

const StyledWidget = styled(Widget)`
    width: 856px;
    height: 1000px;

    ${media.laptop} {
        width: 100%;
    }
`

const TimeTableInner = styled(FlexWrapper)`
    flex-grow: 1;
    width: 100%;
`

const BlurWrapper = styled(FlexWrapper)<{ blur: boolean }>`
    filter: ${(props) => (props.blur ? "blur(4px)" : "none")};
    width: 100%;
    height: 100%;
    pointer-events: ${({ blur }) => (blur ? "none" : "auto")};
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

const TimeTableGridWrapper = styled.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const TimetableSelect = styled.select`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.Line.block};
    border-radius: 8px;
    padding: 8px 12px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    color: ${({ theme }) => theme.colors.Text.dark};
    font: inherit;
`

const TimeTableSection = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const queryClient = useQueryClient()
    const theme = useTheme()
    const { user, status } = useUserStore()

    const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null)

    const { query: homeTimetable, setParams: setHomeTimetableParams } = useAPI(
        "GET",
        "/timetables/home",
        {
            enabled: status === "success",
        },
    )
    const { query: currentSemester } = useAPI("GET", "/semesters/current")
    const { query: savedTimetables, setParams: setSavedTimetableParams } = useAPI(
        "GET",
        "/timetables",
        { enabled: status === "success" },
    )
    const { mutation: selectTimetable } = useAPI("PATCH", "/timetables/home", {
        onSettled: () =>
            queryClient.invalidateQueries({ queryKey: ["/timetables/home"] }),
    })

    useEffect(() => {
        if (selectedLecture) {
            const queryString = new URLSearchParams()
            if (selectedLecture.courseId) {
                queryString.append("courseId", selectedLecture.courseId.toString())
            }
            if (selectedLecture.professors) {
                const firstProfessor = selectedLecture.professors[0]
                if (firstProfessor) {
                    queryString.append("professorId", firstProfessor.id.toString())
                }
            }
            navigate(`/dictionary?${queryString.toString()}`)
        }
    }, [selectedLecture])
    useEffect(() => {
        if (currentSemester.data) {
            setHomeTimetableParams({
                year: currentSemester.data.year,
                semester: currentSemester.data.semester,
            })
            setSavedTimetableParams({
                year: currentSemester.data.year,
                semester: currentSemester.data.semester,
            })
        }
    }, [currentSemester.data, setHomeTimetableParams, setSavedTimetableParams])

    const timetableItems = homeTimetable.data?.timetableItems ?? []

    return (
        <StyledWidget direction="column" gap={0} padding="30px 23px" flex="1 1 auto">
            {status === "loading" ? (
                <LoadingCircle />
            ) : (
                <TimeTableInner
                    direction="column"
                    align="stretch"
                    gap={16}
                    style={{ overflow: "hidden" }}
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
                    {status === "success" && (
                        <>
                            <TimetableSelect
                                aria-label={t("main.homeTimetable.label")}
                                value={homeTimetable.data?.timetableId ?? ""}
                                disabled={
                                    !currentSemester.data ||
                                    homeTimetable.isPending ||
                                    selectTimetable.isPending
                                }
                                onChange={(event) => {
                                    if (!currentSemester.data) return
                                    selectTimetable.mutate({
                                        year: currentSemester.data.year,
                                        semester: currentSemester.data.semester,
                                        timetableId:
                                            event.target.value === ""
                                                ? null
                                                : Number(event.target.value),
                                    })
                                }}
                            >
                                <option value="">
                                    {t("main.homeTimetable.enrolled")}
                                </option>
                                {[...(savedTimetables.data?.timetables ?? [])]
                                    .sort((a, b) => a.timeTableOrder - b.timeTableOrder)
                                    .map((timetable) => (
                                        <option key={timetable.id} value={timetable.id}>
                                            {timetable.name}
                                        </option>
                                    ))}
                            </TimetableSelect>
                            {(homeTimetable.isError || selectTimetable.isError) && (
                                <Typography type="Small" role="alert">
                                    {t("main.homeTimetable.error")}
                                </Typography>
                            )}
                        </>
                    )}
                    <BlurWrapper
                        blur={status === "idle"}
                        direction="column"
                        gap={0}
                        align="stretch"
                        style={{ overflow: "hidden" }}
                    >
                        <TimeTableGridWrapper style={{ overflow: "hidden" }}>
                            <CustomTimeTableGrid
                                timetableItems={timetableItems}
                                needLectureDeletable={false}
                                needTimeFilter={false}
                                onLectureSelect={(lecture) => setSelectedLecture(lecture)}
                                needCurrentTimeBar={true}
                            />
                        </TimeTableGridWrapper>
                    </BlurWrapper>
                </TimeTableInner>
            )}
        </StyledWidget>
    )
}

export default TimeTableSection
