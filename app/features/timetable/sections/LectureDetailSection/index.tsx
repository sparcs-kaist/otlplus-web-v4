import React, { useRef } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import Credits from "@/common/components/Credits"
import type { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"

import LectureInfoSubsection from "./LectureInfoSubsection"
import LectureReviewSubsection from "./LectureReviewSubsection"

const LectureDetailSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const LectureDetailWrapper = styled(FlexWrapper)`
    width: 100%;
`

const LectureTitle = styled(FlexWrapper)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledAnchor = styled.a`
    text-decoration: none;
`

interface LectureDetailSectionProps {
    selectedLecture: Lecture | undefined | null
    isMobileModal?: boolean
    onMobileModalClose?: () => void
    year: number
    semester: SemesterEnum
}

const LectureDetailSection: React.FC<LectureDetailSectionProps> = ({
    selectedLecture,
    isMobileModal = false,
    onMobileModalClose,
    year,
    semester,
}) => {
    const theme = useTheme()
    const { t } = useTranslation()

    const reviewSectionRef = useRef<HTMLDivElement>(null)

    const getSyllabusUrl = (lecture: Lecture) => {
        const payload = {
            syy: String(year),
            smtDivCd: String(semester),
            subjtCd: lecture.code,
            syllabusOpenYn: "1",
        }
        const encodedLecture = btoa(JSON.stringify(payload))
        return `https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${encodedLecture}`
    }

    return (
        <LectureDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={selectedLecture ? "start" : "center"}
        >
            {selectedLecture ? (
                <>
                    <LectureTitle
                        direction="column"
                        gap={2}
                        align={"center"}
                        justify={"center"}
                    >
                        <FlexWrapper
                            direction="row"
                            align="center"
                            gap={8}
                            justify={isMobileModal ? "space-between" : "center"}
                            style={{ width: "100%" }}
                        >
                            {isMobileModal && <div style={{ width: 20 }}></div>}
                            <Typography type={"Bigger"} color={"Text.default"}>
                                {selectedLecture.name}
                            </Typography>
                            {isMobileModal && (
                                <Icon
                                    size={20}
                                    onClick={onMobileModalClose}
                                    color={theme.colors.Text.default}
                                >
                                    <CloseIcon />
                                </Icon>
                            )}
                        </FlexWrapper>
                        <Typography type={"Big"} color={"Text.default"}>
                            {selectedLecture.code}
                        </Typography>
                    </LectureTitle>
                    <FlexWrapper
                        direction="row"
                        gap={8}
                        justify="flex-end"
                        style={{ width: "100%" }}
                    >
                        <StyledLink
                            to={`/dictionary?courseId=${selectedLecture.courseId}`}
                        >
                            <Typography
                                type={"Normal"}
                                color={"Highlight.default"}
                                style={{ cursor: "pointer" }}
                            >
                                {t("header.dictionary")}
                            </Typography>
                        </StyledLink>
                        <StyledAnchor
                            href={getSyllabusUrl(selectedLecture)}
                            target="_blank"
                        >
                            <Typography
                                type={"Normal"}
                                color={"Highlight.default"}
                                style={{ cursor: "pointer" }}
                            >
                                {t("header.syllabus")}
                            </Typography>
                        </StyledAnchor>
                    </FlexWrapper>
                    <LectureDetailWrapper direction="column" gap={10} align="center">
                        <LectureInfoSubsection selectedLecture={selectedLecture} />
                    </LectureDetailWrapper>
                    <LectureDetailWrapper
                        ref={reviewSectionRef}
                        direction="column"
                        gap={10}
                    >
                        <LectureReviewSubsection
                            selectedCourseId={selectedLecture.courseId}
                            selectedProfessorId={selectedLecture.professors[0]?.id ?? -1}
                        />
                    </LectureDetailWrapper>
                </>
            ) : (
                <Credits />
            )}
        </LectureDetailSectionInner>
    )
}

export default LectureDetailSection
