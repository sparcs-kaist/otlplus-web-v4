import React, { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import AddIcon from "@mui/icons-material/Add"
import CircleIcon from "@mui/icons-material/Circle"
import CloseIcon from "@mui/icons-material/Close"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import Button from "@/common/components/Button"
import Credits from "@/common/components/Credits"
import { flattenTimeTableColors } from "@/common/components/timetable/Tile"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { trackEvent } from "@/libs/mixpanel"
import { useAPI } from "@/utils/api/useAPI"
import checkOverlap from "@/utils/timetable/checkOverlap"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureInfoSubsection from "./LectureInfoSubsection"
import LectureReviewSubsection from "./LectureReviewSubsection"

const LectureDetailSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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
    text-align: center;
`

const LectureActionsWrapper = styled(FlexWrapper)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledAnchor = styled.a`
    text-decoration: none;
`

const MultipleSelectWrapper = styled(FlexWrapper)`
    width: 100%;
    text-align: center;
`
const MultipleSelectLectureBlock = styled(FlexWrapper)`
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

interface LectureDetailSectionProps {
    addLectures: (lectures: Lecture[]) => void
    removeLectures?: (lectureId: number) => void
    onMobileModalClose?: () => void
    currentTimetableId?: number | null
    timetableLectures: Lecture[]
}

const LectureDetailSection: React.FC<LectureDetailSectionProps> = ({
    addLectures,
    removeLectures,
    onMobileModalClose,
    currentTimetableId,
    timetableLectures,
}) => {
    const queryClient = useQueryClient()
    const theme = useTheme()
    const { t } = useTranslation()
    const { user, status } = useUserStore()
    const isTablet = useIsDevice("tablet")

    const selectedLectures = useTimetableUIStore((s) => s.selectedLectures)
    const hoveredLectures = useTimetableUIStore((s) => s.hoveredLectures)
    const year = useTimetableUIStore((s) => s.year)
    const semester = useTimetableUIStore((s) => s.semesterEnum)

    const selectedLecture =
        selectedLectures.length === 1
            ? selectedLectures[0]
            : hoveredLectures.length === 1
              ? hoveredLectures[0]
              : null

    const [wishListIds, setWishListIds] = useState<number[]>([])

    const { query: wishListQuery, setParams: setWishListQuery } = useAPI(
        "GET",
        `/users/${user?.id}/wishlist`,
        {
            enabled: status === "success" && year !== -1,
        },
    )

    useEffect(() => {
        if (year === -1) return
        setWishListQuery({ year: year, semester: semester })
    }, [year, semester, currentTimetableId])
    useEffect(() => {
        if (wishListQuery.data) {
            setWishListIds(
                wishListQuery.data.courses
                    .flatMap((course) => course.lectures)
                    .map((lecture) => lecture.id),
            )
        }
    }, [wishListQuery.data])

    const { requestFunction: patchUserWishlistFunction } = useAPI(
        "PATCH",
        `/users/${user?.id}/wishlist`,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [`/users/${user?.id}/wishlist`],
                })
            },
        },
    )

    const reviewSectionRef = useRef<HTMLDivElement>(null)

    const getSyllabusUrl = (lecture: Lecture) => {
        const payload = {
            syy: String(year),
            smtDivCd: String(semester),
            subjtCd: lecture.code,
            syllabusOpenYn: "0",
        }
        const encodedLecture = btoa(JSON.stringify(payload))
        return `https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${encodedLecture}`
    }

    const handleAddToTimetable = (lecture: Lecture) => {
        if (!timetableLectures) return
        if (timetableLectures.some((lec) => checkOverlap(lec.classes, lecture.classes))) {
            alert(t("timetable.addLectureConflict"))
            return
        }
        addLectures([lecture])
        trackEvent("Add Lecture to Timetable", {
            lectureId: lecture.id,
            lectureCode: lecture.code,
            courseName: lecture.name,
            timetableId: currentTimetableId,
            source: "LectureDetail",
        })
    }

    const handleLikeClick = (wish: boolean, lectureId: number) => {
        if (status === "idle") return

        const action = wish ? "delete" : "add"
        trackEvent("Update Wishlist", {
            action,
            lectureId,
            source: "LectureDetail",
        })

        patchUserWishlistFunction({
            lectureId: lectureId,
            mode: action,
        })
    }

    return (
        <LectureDetailSectionInner
            direction="column"
            gap={12}
            align={"center"}
            justify={!selectedLecture && !selectedLectures.length ? "center" : "start"}
        >
            {selectedLectures.length > 1 ? (
                <MultipleSelectWrapper
                    direction="column"
                    gap={16}
                    align="stretch"
                    justify="flex-start"
                >
                    <Typography type="Bigger" color="Text.default">
                        {selectedLectures.length}
                        {t("timetable.numSelected")}
                    </Typography>
                    {selectedLectures.map((l) => {
                        const tileColors = flattenTimeTableColors(
                            theme.colors.Tile.TimeTable.default,
                        )
                        const color = tileColors[l.courseId % tileColors.length]
                        return (
                            <MultipleSelectLectureBlock
                                key={l.id}
                                direction="row"
                                gap={12}
                                align="center"
                            >
                                <Icon size={14} color={color as string}>
                                    <CircleIcon />
                                </Icon>
                                <FlexWrapper direction="column" gap={4} flex="1 1 auto">
                                    <Typography type="BigBold" color="Text.default">
                                        {l.name} {l.subtitle}
                                    </Typography>
                                    <Typography type="Small" color="Text.dark">
                                        {l.professors[0]?.name}{" "}
                                        {l.professors.length > 1
                                            ? `${t("common.professors.over")} ${l.professors.length - 1}${t("common.professors.people")} `
                                            : " "}
                                        | {l.department.name} | {l.credit}
                                        {t("common.credit")}
                                    </Typography>
                                </FlexWrapper>
                            </MultipleSelectLectureBlock>
                        )
                    })}
                </MultipleSelectWrapper>
            ) : selectedLecture ? (
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
                            justify={isTablet ? "space-between" : "center"}
                            style={{ width: "100%" }}
                        >
                            {isTablet && <div style={{ width: 20 }}></div>}
                            <Typography type={"Bigger"} color={"Text.default"}>
                                {selectedLecture.name + selectedLecture.subtitle}
                            </Typography>
                            {isTablet && (
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
                            {selectedLecture.code +
                                " " +
                                (selectedLecture.classNo !== ""
                                    ? `(${selectedLecture.classNo})`
                                    : "")}
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
                    {isTablet && (
                        <LectureActionsWrapper
                            direction="row"
                            gap={12}
                            justify="flex-end"
                        >
                            {status === "success" && (
                                <Button
                                    onClick={() => {
                                        handleLikeClick(
                                            wishListIds.includes(selectedLecture.id),
                                            selectedLecture.id,
                                        )
                                        if (onMobileModalClose) onMobileModalClose()
                                    }}
                                >
                                    <Icon size={15}>
                                        <FavoriteIcon />
                                    </Icon>
                                    <Typography type="NormalBold">
                                        {wishListIds.includes(selectedLecture.id)
                                            ? t("timetable.removeFromWishlist")
                                            : t("timetable.addToWishlist")}
                                    </Typography>
                                </Button>
                            )}

                            {(currentTimetableId || status !== "success") &&
                                (!timetableLectures?.some(
                                    (lec) => lec.id === selectedLecture.id,
                                ) ? (
                                    <Button
                                        type="selected"
                                        onClick={() => {
                                            handleAddToTimetable(selectedLecture)
                                            if (onMobileModalClose) onMobileModalClose()
                                        }}
                                    >
                                        <Icon size={15}>
                                            <AddIcon />
                                        </Icon>
                                        <Typography type="NormalBold">
                                            {t("timetable.addToTimetable")}
                                        </Typography>
                                    </Button>
                                ) : (
                                    <Button
                                        type="selected"
                                        onClick={() => {
                                            if (removeLectures) {
                                                removeLectures(selectedLecture.id)
                                            }
                                            if (onMobileModalClose) onMobileModalClose()
                                        }}
                                    >
                                        <Icon size={15}>
                                            <CloseIcon />
                                        </Icon>
                                        <Typography type="NormalBold">
                                            {t("timetable.removeFromTimetable")}
                                        </Typography>
                                    </Button>
                                ))}
                        </LectureActionsWrapper>
                    )}
                </>
            ) : (
                <Credits />
            )}
        </LectureDetailSectionInner>
    )
}

export default LectureDetailSection
