import { useEffect, useMemo, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import Button from "@/common/components/Button"
import ReviewScoreFields from "@/common/components/reviews/ReviewScoreFields"
import { useReviewForm } from "@/common/components/reviews/useReviewForm"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import TextInputArea from "@/common/primitives/TextInputArea"
import Typography from "@/common/primitives/Typography"
import type { Professor } from "@/common/schemas/professor"
import type { Review } from "@/common/schemas/review"
import { trackEvent } from "@/libs/mixpanel"
import { useInvalidateReviewCaches } from "@/utils/api/invalidations"
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

const DisabledOverlay = styled(FlexWrapper)<{ blur: boolean }>`
    width: 100%;
    height: 100%;
    filter: ${(props) => (props.blur ? "blur(4px)" : "none")};
    pointer-events: ${(props) => (props.blur ? "none" : "auto")};
    user-select: ${(props) => (props.blur ? "none" : "auto")};
`

const DisabledMessage = styled(Typography)`
    position: absolute;
    padding: 0 20px 0 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
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
    const { status } = useUserStore()
    const invalidateReviewCaches = useInvalidateReviewCaches()

    const [myReview, setMyReview] = useState<Review | null>(null)

    const { requestFunction: requestCreateFunction } = useAPI("POST", "/reviews", {
        onSuccess: invalidateReviewCaches,
    })

    const { requestFunction: requestEditFunction } = useAPI(
        "PUT",
        `/reviews/${myReview?.id}`,
        {
            onSuccess: invalidateReviewCaches,
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
        if (semester === SemesterEnum.SUMMER || semester === SemesterEnum.WINTER) {
            return true
        }
        if (!currentSemester) return false
        return new Date(currentSemester.courseDropDeadline) < new Date()
    }, [semesterQuery.data])

    useEffect(() => {
        if (userReviewsQuery.data) {
            const existingReview = userReviewsQuery.data.reviews.find(
                (review) => review.lectureId === lectureId,
            )
            setMyReview(existingReview ?? null)
        }
    }, [userReviewsQuery.data, lectureId])

    const form = useReviewForm(myReview)

    function submitReview() {
        if (!canWriteReview || !form.canSubmit) return
        const payload = form.toPayload()
        if (myReview) {
            requestEditFunction(payload)
            trackEvent("Edit Review", {
                reviewId: myReview.id,
                lectureId,
                courseName: name,
                grade: payload.grade,
                load: payload.load,
                speech: payload.speech,
            })
        } else {
            requestCreateFunction({
                lectureId: lectureId,
                ...payload,
            })
            trackEvent("Submit Review", {
                lectureId,
                courseName: name,
                grade: payload.grade,
                load: payload.load,
                speech: payload.speech,
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
                        value={form.values.text}
                        handleChange={form.setText}
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
                    <ReviewScoreFields
                        grade={form.values.grade}
                        load={form.values.load}
                        speech={form.values.speech}
                        setGrade={form.setGrade}
                        setLoad={form.setLoad}
                        setSpeech={form.setSpeech}
                        disabled={!canWriteReview}
                    />
                    <Button
                        type={form.canSubmit ? "selected" : "disabled"}
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
