import { Fragment, useEffect, useMemo, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTranslation } from "react-i18next"

import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import type { getAPIResponseType } from "@/utils/api/getAPIType"

const DropdownWrapper = styled.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`

const SelectedWrapper = styled(FlexWrapper)`
    padding: 5px 8px;
    color: ${({ theme }) => theme.colors.Text.default};
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    border-radius: 6px;
    height: 50px;
    cursor: pointer;
`

const OptionList = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    border: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-radius: 6px;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &::-webkit-scrollbar {
        width: 0;
    }
`

const SemesterHeader = styled(Typography)`
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    border-top: 1px solid ${({ theme }) => theme.colors.Line.default};
    border-bottom: 1px solid ${({ theme }) => theme.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`

const OptionItem = styled(FlexWrapper)<{ selected: boolean }>`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({ theme, selected }) =>
        selected
            ? theme.colors.Background.Section.transparent
            : theme.colors.Background.Section.default};
    color: ${({ theme, selected }) =>
        selected ? theme.colors.Highlight.default : theme.colors.Text.default};

    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Block.default};
    }
`

interface TakenLectureMobileDropdownProps {
    lecturesWrap:
        | getAPIResponseType<"GET", "/users/$userId/lectures">["lecturesWrap"]
        | undefined
    selectedLecture: WriteReviewsSelectedLectureType | null
    setSelectedLecture: (lecture: WriteReviewsSelectedLectureType | null) => void
    setSelectedLectureIndex?: (index: number[] | null) => void
}

export default function TakenLectureMobileDropdown({
    lecturesWrap,
    selectedLecture,
    setSelectedLecture,
    setSelectedLectureIndex,
}: TakenLectureMobileDropdownProps) {
    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    const [selectedCode, setSelectedCode] = useState("")
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!lecturesWrap) return
        let code = ""
        for (const wrap of lecturesWrap) {
            for (const lecture of wrap.lectures) {
                if (selectedLecture && lecture.lectureId === selectedLecture.lectureId) {
                    code = lecture.code
                    break
                }
            }
            if (code) break
        }
        setSelectedCode(code)
    }, [selectedLecture, lecturesWrap])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleSelect = (
        wrapIndex: number,
        lectureIndex: number,
        lecture: getAPIResponseType<
            "GET",
            "/users/$userId/lectures"
        >["lecturesWrap"][number]["lectures"][number],
        year: number,
        semester: number,
    ) => {
        setSelectedLecture({
            name: lecture.name,
            lectureId: lecture.lectureId,
            courseId: lecture.courseId,
            professors: lecture.professors,
            year: year,
            semester: semester,
        })
        setSelectedLectureIndex?.([wrapIndex, lectureIndex])
        setIsOpen(false)
        setSelectedCode(lecture.code)
    }

    return (
        <DropdownWrapper ref={dropdownRef}>
            <SelectedWrapper
                onClick={() => setIsOpen(!isOpen)}
                direction="row"
                gap={0}
                justify="center"
                align="center"
            >
                {selectedLecture ? (
                    <FlexWrapper direction="column" gap={0} align="center">
                        <Typography type="NormalBold">{selectedLecture?.name}</Typography>
                        <Typography type="Normal">{selectedCode}</Typography>
                    </FlexWrapper>
                ) : (
                    <Typography type="Big" color="Text.placeholder">
                        {t("writeReviews.mySummary.selectPlaceholder")}
                    </Typography>
                )}
                <FlexWrapper
                    direction="column"
                    gap={0}
                    style={{ position: "absolute", right: "8px" }}
                >
                    <Icon size={14}>
                        <ExpandLessIcon />
                    </Icon>
                    <Icon size={14}>
                        <ExpandMoreIcon />
                    </Icon>
                </FlexWrapper>
            </SelectedWrapper>

            {isOpen && lecturesWrap && (
                <OptionList>
                    {lecturesWrap.map((wrap, wrapIndex) => (
                        <Fragment key={`${wrap.year}-${wrap.semester}`}>
                            <SemesterHeader type="NormalMedium" color="Text.placeholder">
                                {wrap.year} {semesterToString(wrap.semester)}
                            </SemesterHeader>
                            {wrap.lectures.map((lecture, lectureIndex) => {
                                const isSelected =
                                    selectedLecture?.lectureId === lecture.lectureId &&
                                    selectedLecture?.year === wrap.year &&
                                    selectedLecture?.semester === wrap.semester

                                return (
                                    <OptionItem
                                        key={lecture.lectureId}
                                        selected={isSelected}
                                        onClick={() =>
                                            handleSelect(
                                                wrapIndex,
                                                lectureIndex,
                                                lecture,
                                                wrap.year,
                                                wrap.semester,
                                            )
                                        }
                                        direction="row"
                                        gap={8}
                                    >
                                        <Typography type="Small" color="Text.default">
                                            {lecture.code}
                                        </Typography>
                                        <Typography type="Small">
                                            {lecture.name}
                                        </Typography>
                                    </OptionItem>
                                )
                            })}
                        </Fragment>
                    ))}
                </OptionList>
            )}
        </DropdownWrapper>
    )
}
