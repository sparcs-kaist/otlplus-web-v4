import React, { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"

import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewScoreSummary from "@/common/components/reviews/ReviewScoreSummary"
import ReviewWritingBlock, {
    type ReviewWritingBlockProps,
} from "@/common/components/reviews/ReviewWritingBlock"
import { ReviewModeEnum } from "@/common/enum/reviewModeEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import CourseReviewLanguageChip from "@/features/dictionary/components/CourseReviewLanguageChip"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

interface CourseReviewSubsectionProps {
    selectedCourseId: number | null
    selectedProfessorId: number | null
    writableReviewProps: ReviewWritingBlockProps[]
}

const LIMIT = 20
const REVIEW_LANGUAGES = ["all", "english"] as const

type ReviewLanguage = (typeof REVIEW_LANGUAGES)[number]

const CourseReviewSubsection: React.FC<CourseReviewSubsectionProps> = ({
    selectedCourseId,
    selectedProfessorId,
    writableReviewProps,
}) => {
    const { t } = useTranslation()

    const [reviewLanguage, setReviewLanguage] = useState<ReviewLanguage>("all")
    const [enabled, setEnabled] = useState(false)

    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        infinites: ["reviews"],
        limit: LIMIT,
        enabled: enabled,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        setParams({
            mode: ReviewModeEnum.DEFAULT,
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
                    {REVIEW_LANGUAGES.map((lang) => (
                        <CourseReviewLanguageChip
                            key={lang}
                            selected={reviewLanguage == lang}
                            chipText={t(`dictionary.reviewLanguageOptions.${lang}`)}
                            onClick={() => setReviewLanguage(lang)}
                        />
                    ))}
                </FlexWrapper>
            </FlexWrapper>
            {data === null && query.isLoading ? (
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
                        />
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
