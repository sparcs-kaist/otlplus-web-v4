import { useEffect } from "react"

import { Trans } from "react-i18next"

import Credits from "@/common/components/Credits"
import Line from "@/common/components/Line"
import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewWritingBlock from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import { useAPI } from "@/utils/api/useAPI"

interface WriteReviewsSubSectionType {
    selectedLecture: WriteReviewsSelectedLectureType | null
}

function WriteReviewsSubSection({ selectedLecture }: WriteReviewsSubSectionType) {
    const [query, setParams] = useAPI("GET", "/reviews")

    useEffect(() => {
        if (selectedLecture === null) return
        setParams({
            mode: "default",
            courseId: selectedLecture.courseId,
            professorId: selectedLecture.professors[0]?.id,
            year: selectedLecture.year,
            semester: selectedLecture.semester,
            limit: 10,
            offset: 0,
        })
    }, [selectedLecture])

    return selectedLecture === null ? (
        <FlexWrapper
            direction="column"
            align="stretch"
            justify="center"
            flex={"1 1 auto"}
            gap={12}
        >
            <Credits />
        </FlexWrapper>
    ) : query.isLoading ? (
        <FlexWrapper
            direction="column"
            align="stretch"
            justify="center"
            flex={"1 1 auto"}
            gap={12}
        >
            <LoadingCircle />
        </FlexWrapper>
    ) : (
        <FlexWrapper direction="column" align="stretch" gap={12}>
            <FlexWrapper direction="column" gap={12} align="center">
                <Typography type="NormalBold" color="Text.default">
                    <Trans
                        i18nKey="writeReviews.write.title"
                        values={{ lectureName: selectedLecture.name }}
                    />
                </Typography>
                <ReviewWritingBlock
                    name={selectedLecture.name}
                    lectureId={selectedLecture.lectureId}
                    professors={selectedLecture.professors}
                    year={selectedLecture.year}
                    semester={selectedLecture.semester}
                />
            </FlexWrapper>
            <Line height={1} color="Line.default" />
            <FlexWrapper direction="column" gap={12} align="stretch">
                <FlexWrapper direction="column" gap={0} align="center">
                    <Typography type="NormalBold" color="Text.default">
                        <Trans
                            i18nKey="writeReviews.write.related"
                            values={{ lectureName: selectedLecture.name }}
                        />
                    </Typography>
                </FlexWrapper>
                {query.data?.reviews.map((review, idx) => (
                    <ReviewBlock review={review} key={review.id} />
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default WriteReviewsSubSection
