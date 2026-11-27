import React, { useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"

import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import { ReviewModeEnum } from "@/common/enum/reviewModeEnum"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

interface LectureReviewSubsectionProps {
    selectedCourseId: number | null
    selectedProfessorId: number | null
}

const LectureReviewSubsection: React.FC<LectureReviewSubsectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
}) => {
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
            {data?.reviews.map((review) => (
                <ReviewBlock review={review} key={review.id} linkToDictionary={true} />
            ))}
            {query.hasNextPage && <LoadingCircle ref={ref} />}
        </>
    )
}

export default LectureReviewSubsection
