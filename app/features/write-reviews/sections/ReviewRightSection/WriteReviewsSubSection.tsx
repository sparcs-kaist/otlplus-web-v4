import { useEffect } from "react"

import { Trans } from "react-i18next"
import { useOnInView } from "react-intersection-observer"

import Credits from "@/common/components/Credits"
import Line from "@/common/components/Line"
import LoadingCircle from "@/common/components/LoadingCircle"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import ReviewWritingBlock from "@/common/components/reviews/ReviewWritingBlock"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import type { WriteReviewsSelectedLectureType } from "@/routes/write-reviews"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"

const Component = ({ call }: { call: () => void }) => {
    const trackingRef = useOnInView(
        (inView, entry) => {
            if (inView) {
                console.log("Element appeared in view", entry.target)
                call()
            } else {
                console.log("Element left view", entry.target)
            }
        },
        {
            threshold: 0.5,
        },
    )

    return <div ref={trackingRef}></div>
}

interface WriteReviewsSubSectionType {
    selectedLecture: WriteReviewsSelectedLectureType | null
}

function WriteReviewsSubSection({ selectedLecture }: WriteReviewsSubSectionType) {
    const { query, setParams, data } = useInfiniteAPI("GET", "/reviews", {
        infinites: ["reviews"],
        gcTime: 0,
        initialOffset: 0,
        limit: 10,
    })

    useEffect(() => {
        if (selectedLecture === null) return
        setParams({
            mode: "default",
            courseId: selectedLecture.courseId,
            professorId: selectedLecture.professors[0]?.id,
            year: selectedLecture.year,
            semester: selectedLecture.semester,
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
                    myReview={data?.reviews.find((review) =>
                        data.myReviewId.includes(review.id),
                    )}
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
                {data?.reviews
                    .filter((review) => {
                        return !data.myReviewId.includes(review.id)
                    })
                    .map((review) => (
                        <ReviewBlock review={review} key={review.id} />
                    ))}
                <Component call={query.fetchNextPage} />
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default WriteReviewsSubSection
