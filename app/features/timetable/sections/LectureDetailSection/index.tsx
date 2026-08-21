import React, { useEffect, useRef, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CircleIcon from "@mui/icons-material/Circle"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import Credits from "@/common/components/Credits"
import { flattenTimeTableColors } from "@/common/components/timetable/Tile"
import { LectureActionEnum } from "@/common/enum/lectureActionEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { Lecture } from "@/common/schemas/lecture"
import { useTimetableUIStore } from "@/features/timetable/store/useTimetableUIStore"
import { trackEvent } from "@/libs/mixpanel"
import { queryKeys } from "@/libs/query/queryKeys"
import { useAPI } from "@/utils/api/useAPI"
import useIsDevice from "@/utils/useIsDevice"
import useUserStore from "@/utils/zustand/useUserStore"

import LectureDetailActions from "./LectureDetailActions"
import LectureDetailHeader from "./LectureDetailHeader"
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

const MultipleSelectWrapper = styled(FlexWrapper)`
    width: 100%;
    text-align: center;
`
const MultipleSelectLectureBlock = styled(FlexWrapper)`
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.elevation.low};
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
                if (!user) return
                queryClient.invalidateQueries({
                    queryKey: [queryKeys.userWishlist(user.id)],
                })
            },
        },
    )

    const reviewSectionRef = useRef<HTMLDivElement>(null)

    const handleLikeClick = (wish: boolean, lectureId: number) => {
        if (status === "idle") return

        const action = wish ? LectureActionEnum.DELETE : LectureActionEnum.ADD
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
                    <LectureDetailHeader
                        lecture={selectedLecture}
                        onMobileModalClose={onMobileModalClose}
                        semester={semester}
                        year={year}
                    />
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
                        <LectureDetailActions
                            currentTimetableId={currentTimetableId}
                            lecture={selectedLecture}
                            onAdd={(lecture) => addLectures([lecture])}
                            onClose={onMobileModalClose}
                            onRemove={removeLectures}
                            onToggleWishlist={handleLikeClick}
                            status={status}
                            timetableLectures={timetableLectures}
                            wishListIds={wishListIds}
                        />
                    )}
                </>
            ) : (
                <Credits />
            )}
        </LectureDetailSectionInner>
    )
}

export default LectureDetailSection
