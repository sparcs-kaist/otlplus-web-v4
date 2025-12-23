import React, { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { useQueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

import exampleReviews from "@/api/example/Reviews"
import type { GETReviewsResponse } from "@/api/reviews"
import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

const NumberWrapper = styled(FlexWrapper)`
    width: 300px;
    padding: 10px;
`

const NumberContent = styled(FlexWrapper)`
    flex: 1 0 0;
`

const Divider = styled.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({ theme }) => theme.colors.Line.divider};
`

interface LectureReviewSubsectionProps {
    selectedCourseId: number | null
    selectedProfessorId: number | null
}

const LectureReviewSubsection: React.FC<LectureReviewSubsectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
}) => {
    const { t } = useTranslation()
    const queryClient = useQueryClient()

    const [paramsFixed, setParamsFixed] = useState(false)

    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        gcTime: 0,
        infinites: ["reviews"],
        limit: 20,
    })

    const { ref, inView } = useInView({ threshold: 0 })

    useEffect(() => {
        setParamsFixed(false)
        const timer = setTimeout(() => {
            setParams({
                mode: "default",
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
                <NumberWrapper
                    direction="row"
                    gap={0}
                    justify={"space-between"}
                    align={"center"}
                >
                    {[
                        [
                            getAverageScoreLabel(
                                data?.averageGrade,
                                data?.reviews.length,
                            ),
                            t("common.grade"),
                        ],
                        [
                            getAverageScoreLabel(data?.averageLoad, data?.reviews.length),
                            t("common.load"),
                        ],
                        [
                            getAverageScoreLabel(
                                data?.averageSpeech,
                                data?.reviews.length,
                            ),
                            t("common.speech"),
                        ],
                    ].map(([value, label], index) => (
                        <NumberContent
                            key={index}
                            direction="column"
                            gap={0}
                            align={"center"}
                        >
                            <Typography type={"Bigger"} color={"Text.default"}>
                                {value}
                            </Typography>
                            <Typography type={"Smaller"} color={"Text.default"}>
                                {label}
                            </Typography>
                        </NumberContent>
                    ))}
                </NumberWrapper>
            </FlexWrapper>
            <Divider />

            {data?.reviews.map((review) => (
                <ReviewBlock review={review} key={review.id} linkToDictionary={true} />
            ))}
            {query.hasNextPage && <LoadingCircle ref={ref} />}
        </>
    )
}

export default LectureReviewSubsection
