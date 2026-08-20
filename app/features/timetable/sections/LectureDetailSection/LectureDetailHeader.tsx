import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import useIsDevice from "@/utils/useIsDevice"

const LectureTitle = styled(FlexWrapper)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`

const DetailLinks = styled(FlexWrapper)`
    width: 100%;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledAnchor = styled.a`
    text-decoration: none;
`

const CloseButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({ theme }) => theme.colors.Text.default};
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.Highlight.default};
        outline-offset: 2px;
    }
`

interface LectureDetailHeaderProps {
    readonly lecture: Lecture
    readonly onMobileModalClose?: () => void
    readonly semester: number
    readonly year: number
}

function getSyllabusUrl(lecture: Lecture, year: number, semester: number): string {
    const payload = {
        syy: String(year),
        smtDivCd: String(semester),
        subjtCd: lecture.code,
        syllabusOpenYn: "0",
    }
    const encodedLecture = btoa(JSON.stringify(payload))
    return `https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${encodedLecture}`
}

export default function LectureDetailHeader({
    lecture,
    onMobileModalClose,
    semester,
    year,
}: LectureDetailHeaderProps) {
    const theme = useTheme()
    const { t } = useTranslation()
    const isTablet = useIsDevice("tablet")

    return (
        <>
            <LectureTitle direction="column" gap={2} align="center" justify="center">
                <FlexWrapper
                    direction="row"
                    align="center"
                    gap={8}
                    justify={isTablet ? "space-between" : "center"}
                    style={{ width: "100%" }}
                >
                    {isTablet && <div style={{ width: 44 }} />}
                    <Typography type="Bigger" color="Text.default">
                        {lecture.name + lecture.subtitle}
                    </Typography>
                    {isTablet && (
                        <CloseButton
                            type="button"
                            aria-label={t("common.search.close")}
                            title={t("common.search.close")}
                            onClick={onMobileModalClose}
                        >
                            <Icon size={20} color={theme.colors.Text.default}>
                                <CloseIcon />
                            </Icon>
                        </CloseButton>
                    )}
                </FlexWrapper>
                <Typography type="Big" color="Text.default">
                    {lecture.code + (lecture.classNo ? ` (${lecture.classNo})` : "")}
                </Typography>
            </LectureTitle>
            <DetailLinks direction="row" gap={8} justify="flex-end">
                <StyledLink to={`/dictionary?courseId=${lecture.courseId}`}>
                    <Typography type="Normal" color="Highlight.default">
                        {t("header.dictionary")}
                    </Typography>
                </StyledLink>
                <StyledAnchor
                    href={getSyllabusUrl(lecture, year, semester)}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Typography type="Normal" color="Highlight.default">
                        {t("header.syllabus")}
                    </Typography>
                </StyledAnchor>
            </DetailLinks>
        </>
    )
}
