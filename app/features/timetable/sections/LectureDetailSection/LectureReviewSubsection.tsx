import React, { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

import LoadingCircle from "@/common/components/LoadingCircle"
import StyledDivider from "@/common/components/StyledDivider"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewScoreSummary from "@/common/components/reviews/ReviewScoreSummary"
import { ReviewModeEnum } from "@/common/enum/reviewModeEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

interface LectureReviewSubsectionProps {
    selectedCourseId: number | null
    selectedProfessorId: number | null
}

const LectureReviewSubsection: React.FC<LectureReviewSubsectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
}) => {
    const { t } = useTranslation()

    const [paramsFixed, setParamsFixed] = useState(false)

    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        infinites: ["reviews"],
        limit: 20,
    })

    const { ref, inView } = useInView({ threshold: 0 })

    useEffect(() => {
        setParamsFixed(false)
        const timer = setTimeout(() => {
            setParams({
                mode: ReviewModeEnum.DEFAULT,
                courseId: selectedCourseId ?? undefined,
                professorId: selectedProfessorId ?? undefined,
            })
            setParamsFixed(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [selectedCourseId, selectedProfessorId])

    useEffect(() => {
        if (inView && query.hasNextPage && !query.isFetchingNextPage) {
            query.fetchNextPage()
        }
    }, [inView, query])

    if (!data || !paramsFixed) {
        return <LoadingCircle />
    }

    return (
        <>
            <FlexWrapper
                direction={"row"}
                gap={0}
                justify="center"
                align="center"
                style={{ width: "100%" }}
            >
                <ReviewScoreSummary
                    averageGrade={data?.averageGrade}
                    averageLoad={data?.averageLoad}
                    averageSpeech={data?.averageSpeech}
                    reviewCount={data?.reviews.length}
                    labels={{
                        grade: t("common.grade"),
                        load: t("common.load"),
                        speech: t("common.speech"),
                    }}
                    fluid
                />
            </FlexWrapper>
            <StyledDivider />

            {data?.reviews.map((review) => (
                <ReviewBlock review={review} key={review.id} linkToDictionary={true} />
            ))}
            {query.hasNextPage && <LoadingCircle ref={ref} />}
        </>
    )
}

export default LectureReviewSubsection
