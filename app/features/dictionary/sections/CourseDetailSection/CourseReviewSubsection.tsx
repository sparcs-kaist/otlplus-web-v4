import React, { use, useEffect, useState } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { de } from "zod/v4/locales"

import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewWritingBlock, {
    type ReviewWritingBlockProps,
} from "@/common/components/reviews/ReviewWritingBlock"
import { getAverageScoreLabel } from "@/common/enum/scoreEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

const NumberWrapper = styled(FlexWrapper)`
    width: 300px;
    padding: 10px;
`

const NumberContent = styled(FlexWrapper)`
    flex: 1 0 0;
`

interface CourseReviewSubsectionProps {
    selectedCourseId: number | null
    selectedProfessorId: number | null
    writableReviewProps: ReviewWritingBlockProps[]
}

const LIMIT = 20

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
    writableReviewProps,
}) => {
    const { t } = useTranslation()

    const [reviewLanguage, setReviewLanguage] = useState("all")
    const [enabled, setEnabled] = useState(false)

    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        infinites: ["reviews"],
        limit: LIMIT,
        enabled: enabled,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        setParams({
            mode: "default",
            courseId: selectedCourseId || undefined,
            professorId: selectedProfessorId || undefined,
        })
    }, [])

    useEffect(() => {
        setParams((prevState) => {
            const base = prevState ?? {}
            if (selectedProfessorId === null) delete base.professorId
            return {
                ...base,
                ...(selectedCourseId !== null ? { courseId: selectedCourseId } : {}),
                ...(selectedProfessorId !== null
                    ? { professorId: selectedProfessorId }
                    : {}),
            }
        })
        setEnabled(selectedCourseId !== null)
    }, [selectedProfessorId, selectedCourseId])

    useEffect(() => {
        if (inView && query.hasNextPage && !query.isFetchingNextPage) {
            query.fetchNextPage()
        }
    }, [inView])

    return (
        <>
            <Typography type={"NormalBold"} color={"Text.default"}>
                {t("dictionary.review")}
            </Typography>
            <FlexWrapper direction="column" gap={6}>
                <Typography type={"NormalBold"} color={"Text.default"}>
                    {t("dictionary.reviewLanguage")}
                </Typography>
                <FlexWrapper direction="row" gap={6}>
                    {["all", "english"].map((lang) => (
                        <CourseReviewLanguageChip
                            key={lang}
                            selected={reviewLanguage == lang}
                            chipText={t(`dictionary.reviewLanguageOptions.${lang}`)}
                            onClick={() => setReviewLanguage(lang)}
                        />
                    ))}
                </FlexWrapper>
            </FlexWrapper>
            {(!data || data.reviews.length === 0) && query.isLoading ? (
                <LoadingCircle />
            ) : (
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
                                    getAverageScoreLabel(
                                        data?.averageLoad,
                                        data?.reviews.length,
                                    ),
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
                    {writableReviewProps.map((props, index) => (
                        <ReviewWritingBlock {...props} key={index} />
                    ))}
                    {data?.reviews.map((review) => {
                        if (
                            reviewLanguage === "english" &&
                            !/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(review.content)
                        ) {
                            return null
                        } else {
                            return (
                                <ReviewBlock
                                    review={review}
                                    key={review.id}
                                    linkToDictionary={false}
                                />
                            )
                        }
                    })}
                    {query.hasNextPage && <LoadingCircle ref={ref} />}
                </>
            )}
        </>
    )
}

export default CourseReviewSubsection
