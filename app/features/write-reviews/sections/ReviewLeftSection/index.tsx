import { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import LockIcon from "@mui/icons-material/Lock"

import Line from "@/common/components/Line"
import LoadingCircle from "@/common/components/LoadingCircle"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import TakenLectureMobileDropdown from "@/features/write-reviews/sections/ReviewLeftSection/TakenLectureMobileDropdown"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import { media } from "@/styles/themes/media"
import { useAPI } from "@/utils/api/useAPI"
import { handleLogin } from "@/utils/handleLoginLogout"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import MySummarySubSection from "./MySummarySubSection"
import TakenLectureSubSection from "./TakenLectureSubSection"

interface reviewLeftSectionType {
    selectedLecture: WriteReviewsSelectedLectureType | null
    setSelectedLecture: (lecture: WriteReviewsSelectedLectureType | null) => void
}

const TakenLecturesWrapper = styled(FlexWrapper)<{ scrollLock: boolean }>`
    min-height: 0;
    overflow: ${({ scrollLock }) => (scrollLock ? "hidden" : "auto")};
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const StyledWidget = styled(Widget)`
    width: 288px;
    flex: 0 0 auto;
    padding: 16px;

    ${media.tablet} {
        min-width: 240px;
        flex-shrink: 1;
    }

    ${media.mobile} {
        width: 100%;
        padding: 8px 16px;
        box-shadow: 0 4px 3px -3px rgba(237, 140, 156, 0.8);
        min-height: 65px;
    }
`

const BlurWrapper = styled(FlexWrapper)<{ blur: boolean }>`
    filter: ${(props) => (props.blur ? "blur(4px)" : "none")};
    width: 100%;
    height: 100%;
    user-select: ${(props) => (props.blur ? "none" : "auto")};
`

const LoginWrapper = styled(FlexWrapper)`
    width: 100%;
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

function ReviewLeftSection({
    selectedLecture,
    setSelectedLecture,
}: reviewLeftSectionType) {
    const isMobile = useIsDevice("mobile")
    const theme = useTheme()
    const { user, status } = useUserStore()

    const { query: takenLectures } = useAPI("GET", `/users/${user?.id}/lectures`, {
        enabled: status === "success",
    })
    const [selectedLectureIndex, setSelectedLectureIndex] = useState<number[] | null>(
        null,
    )

    useEffect(() => {
        if (takenLectures.isLoading) return
        if (takenLectures.data && takenLectures.data.lecturesWrap.length > 0) {
            const lectureWrap =
                takenLectures.data.lecturesWrap[selectedLectureIndex?.[0] ?? 0]
            const lecture = lectureWrap?.lectures[selectedLectureIndex?.[1] ?? 0]
            if (lectureWrap && lecture) {
                setSelectedLecture({
                    name: lecture.name,
                    lectureId: lecture.lectureId,
                    courseId: lecture.courseId,
                    professors: lecture.professors,
                    year: lectureWrap.year,
                    semester: lectureWrap.semester,
                })
            }
        }
    }, [takenLectures.data])

    const dummyLecturesWrap = {
        year: 2026,
        semester: 1,
        lectures: Array(30).fill({
            courseId: 1,
            lectureId: 1,
            name: "전산기조직개론",
            code: "CS311",
            professors: [],
            written: false,
        }),
    }

    return (
        <StyledWidget borderRadius={12} direction="column" gap={0}>
            {status === "loading" ? (
                <LoadingCircle />
            ) : (
                <>
                    {status === "idle" && (
                        <LoginWrapper
                            direction={isMobile ? "row" : "column"}
                            gap={12}
                            align="center"
                            justify={isMobile ? "space-evenly" : "center"}
                        >
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
                    )}
                    <BlurWrapper
                        blur={status === "idle"}
                        direction={isMobile ? "row" : "column"}
                        align={isMobile ? "center" : "stretch"}
                        justify={isMobile ? "space-between" : "stretch"}
                        gap={12}
                    >
                        <MySummarySubSection
                            totalLectures={
                                takenLectures.data
                                    ? takenLectures.data.totalLecturesCount
                                    : 0
                            }
                            reviewedLectures={
                                takenLectures.data
                                    ? takenLectures.data.reviewedLecturesCount
                                    : 0
                            }
                            totalLikes={
                                takenLectures.data
                                    ? takenLectures.data.totalLikesCount
                                    : 0
                            }
                        />

                        {!isMobile && <Line height={2} color="Line.divider" />}

                        {isMobile ? (
                            <TakenLectureMobileDropdown
                                lecturesWrap={takenLectures.data?.lecturesWrap}
                                selectedLecture={selectedLecture}
                                setSelectedLecture={setSelectedLecture}
                                setSelectedLectureIndex={setSelectedLectureIndex}
                            />
                        ) : (
                            <TakenLecturesWrapper
                                direction="column"
                                align="stretch"
                                gap={24}
                                scrollLock={status === "idle"}
                            >
                                {status === "idle" ? (
                                    <TakenLectureSubSection
                                        lectureWrapIndex={0}
                                        lecturesWrap={dummyLecturesWrap}
                                        selectedLecture={null}
                                        setSelectedLecture={() => {}}
                                        setSelectedLectureIndex={() => {}}
                                        last={true}
                                    />
                                ) : (
                                    takenLectures.data?.lecturesWrap.map(
                                        (lecturesWrap, idx) => (
                                            <TakenLectureSubSection
                                                key={idx}
                                                lectureWrapIndex={idx}
                                                lecturesWrap={lecturesWrap}
                                                selectedLecture={selectedLecture}
                                                setSelectedLecture={setSelectedLecture}
                                                setSelectedLectureIndex={
                                                    setSelectedLectureIndex
                                                }
                                                last={
                                                    idx ===
                                                    takenLectures.data!.lecturesWrap
                                                        .length -
                                                        1
                                                }
                                            />
                                        ),
                                    )
                                )}
                            </TakenLecturesWrapper>
                        )}
                    </BlurWrapper>
                </>
            )}
        </StyledWidget>
    )
}

export default ReviewLeftSection
