import { Trans } from "react-i18next"

import exampleReviews from "@/api/example/Reviews"
import { type GETWritableReviewsResponse } from "@/api/users/writable-reviews"
import Line from "@/common/components/Line"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewWritingBlock from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface WriteReviewsSubSectionType {
    selectedLecture: GETWritableReviewsResponse
}

function WriteReviewsSubSection({ selectedLecture }: WriteReviewsSubSectionType) {
    return (
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
                    lectureId={0}
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
                {exampleReviews.reviews.map((review, idx) => (
                    <ReviewBlock review={review} key={review.id} />
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default WriteReviewsSubSection
