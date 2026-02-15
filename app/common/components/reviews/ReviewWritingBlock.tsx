import { type Dispatch, type SetStateAction, useEffect, useMemo, useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import GradeWrap from "@/common/components/GradeWrap"
import { ScoreEnum } from "@/common/enum/scoreEnum"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import type { Professor } from "@/common/schemas/professor"
import type { Review } from "@/common/schemas/review"
import { trackEvent } from "@/libs/mixpanel"
import { useAPI } from "@/utils/api/useAPI"
import professorName from "@/utils/professorName"
import useUserStore from "@/utils/zustand/useUserStore"

const ReviewWrapper = styled(FlexWrapper)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
`

const ReviewBoxWrapper = styled(FlexWrapper)`
    height: 160px;
`

const GradesWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;
`

const DisabledOverlay = styled(FlexWrapper)<{ blur: boolean }>`
    width: 100%;
    height: 100%;
    filter: ${(props) => (props.blur ? "blur(4px)" : "none")};
    pointer-events: ${(props) => (props.blur ? "none" : "auto")};
    user-select: ${(props) => (props.blur ? "none" : "auto")};
`

const DisabledMessage = styled(Typography)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    white-space: nowrap;
`

export interface ReviewWritingBlockProps {
    name: string
    lectureId: number
    professors: Professor[]
    year: number
    semester: SemesterEnum
}

function ReviewWritingBlock({
    name,
    lectureId,
    professors,
    year,
    semester,
}: ReviewWritingBlockProps) {
    const { t } = useTranslation()
    const { user, status } = useUserStore()
    const queryClient = useQueryClient()

    const [myReview, setMyReview] = useState<Review | null>(null)

    const { requestFunction: requestCreateFunction } = useAPI("POST", "/reviews", {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["/reviews"] })
            queryClient.invalidateQueries({
                queryKey: [`/users/${user?.id}/lectures`],
            })
            queryClient.invalidateQueries({
                queryKey: ["/users/written-reviews"],
            })
            queryClient.invalidateQueries({
                queryKey: ["/users/writable-review"],
            })
        },
    })

    const { requestFunction: requestEditFunction } = useAPI(
        "PUT",
        `/reviews/${myReview?.id}`,
        {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["/reviews"],
                })
                queryClient.invalidateQueries({
                    queryKey: [`/users/${user?.id}/lectures`],
                })
                queryClient.invalidateQueries({
                    queryKey: ["/users/written-reviews"],
                })
                queryClient.invalidateQueries({
                    queryKey: ["/users/writable-review"],
                })
            },
        },
    )

    const { query: userReviewsQuery } = useAPI("GET", `/users/written-reviews`, {
        enabled: status === "success",
    })
    const { query: semesterQuery } = useAPI("GET", "/semesters")
    const canWriteReview = useMemo(() => {
        if (!semesterQuery.data) return false
        const currentSemester = semesterQuery.data.semesters.find(
            (sem) => sem.year === year && sem.semester === semester,
        )
        if (!currentSemester) return false
        return new Date(currentSemester.courseDropDeadline) < new Date()
    }, [semesterQuery.data])

    useEffect(() => {
        if (userReviewsQuery.data) {
            const existingReview = userReviewsQuery.data.reviews.find(
                (review) => review.lectureId === lectureId,
            )
            if (existingReview) {
                setMyReview(existingReview)
            } else {
                setMyReview(null)
            }
        }
    }, [userReviewsQuery.data, lectureId])

    const [reviewText, setReviewText] = useState<string>("")

    const [reviewGrade, setReviewGrade] = useState<ScoreEnum>(0)
    const [reviewLoad, setReviewLoad] = useState<ScoreEnum>(0)
    const [reviewSpeech, setReviewSpeech] = useState<ScoreEnum>(0)

    function resetReviewStates() {
        setReviewText("")
        setReviewGrade(0)
        setReviewLoad(0)
        setReviewSpeech(0)
    }

    useEffect(() => {
        resetReviewStates()
    }, [lectureId])

    useEffect(() => {
        if (myReview) {
            setReviewText(myReview.content)
            setReviewGrade(myReview.grade)
            setReviewLoad(myReview.load)
            setReviewSpeech(myReview.speech)
        } else {
            resetReviewStates()
        }
    }, [myReview])

    function submitReview() {
        if (!canWriteReview) return
        if (myReview) {
            requestEditFunction({
                content: reviewText,
                grade: reviewGrade,
                load: reviewLoad,
                speech: reviewSpeech,
            })
            trackEvent("Edit Review", {
                reviewId: myReview.id,
                lectureId,
                courseName: name,
                grade: reviewGrade,
                load: reviewLoad,
                speech: reviewSpeech,
            })
        } else {
            requestCreateFunction({
                lectureId: lectureId,
                content: reviewText,
                grade: reviewGrade,
                load: reviewLoad,
                speech: reviewSpeech,
            })
            trackEvent("Submit Review", {
                lectureId,
                courseName: name,
                grade: reviewGrade,
                load: reviewLoad,
                speech: reviewSpeech,
            })
        }
    }

    return (
        <ReviewWrapper direction="column" gap={0}>
            {!canWriteReview && (
                <DisabledMessage type="BigBold" color="Text.default">
                    {t("common.review.notOpenYet")}
                </DisabledMessage>
            )}
            <DisabledOverlay
                blur={!canWriteReview}
                direction="column"
                gap={8}
                align="stretch"
            >
                <FlexWrapper direction="row" gap={6} align={"center"}>
                    <Typography type={"NormalBold"} color={"Text.default"}>
                        {name}
                    </Typography>
                    {[
                        professorName(professors),
                        year,
                        semesterToString(semester || SemesterEnum.SPRING),
                    ].map((text, idx) => {
                        return (
                            <Typography type={"Normal"} color={"Text.lighter"} key={idx}>
                                {text}
                            </Typography>
                        )
                    })}
                </FlexWrapper>
                <ReviewBoxWrapper
                    direction="column"
                    gap={0}
                    justify="stretch"
                    align="stretch"
                >
                    <TextInputArea
                        placeholder={t("common.review.writingPlaceholder")}
                        value={reviewText}
                        handleChange={setReviewText}
                        area={true}
                        disabled={!canWriteReview}
                    />
                </ReviewBoxWrapper>
                <FlexWrapper
                    direction="row"
                    gap={20}
                    justify="space-between"
                    align="center"
                >
                    <GradesWrapper direction="row" gap={12} inert={!canWriteReview}>
                        {(
                            [
                                [t("common.grade"), reviewGrade, setReviewGrade],
                                [t("common.load"), reviewLoad, setReviewLoad],
                                [t("common.speech"), reviewSpeech, setReviewSpeech],
                            ] as [
                                string,
                                ScoreEnum,
                                Dispatch<SetStateAction<ScoreEnum>>,
                            ][]
                        ).map(([tag, currentState, DispatchFunction]) => (
                            <FlexWrapper direction="row" gap={6} align="center" key={tag}>
                                <Typography type="Normal" color="Text.default">
                                    {tag}
                                </Typography>
                                <GradeWrap
                                    score={currentState}
                                    setScore={DispatchFunction}
                                />
                            </FlexWrapper>
                        ))}
                    </GradesWrapper>
                    <Button
                        type={
                            reviewText && reviewGrade && reviewSpeech && reviewLoad
                                ? "selected"
                                : "disabled"
                        }
                        $paddingLeft={8}
                        $paddingTop={8}
                        onClick={submitReview}
                    >
                        <Typography type="Normal">
                            {myReview ? t("writeReviews.write.edit") : t("common.upload")}
                        </Typography>
                    </Button>
                </FlexWrapper>
            </DisabledOverlay>
        </ReviewWrapper>
    )
}

export default ReviewWritingBlock
