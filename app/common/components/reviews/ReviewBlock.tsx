import { useState } from "react"

import styled from "@emotion/styled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import { ScoreEnum } from "@/common/enum/scoreEnum"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type Review } from "@/common/schemas/review"
import { useAPI } from "@/utils/api/useAPI"
import professorName from "@/utils/professorName"

const Content = styled(Typography)`
    line-height: 1.5;
`

const ReviewWrapper = styled.div<{ clickable: boolean }>`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};
    cursor: ${(props) => (props.clickable ? "pointer" : "default")};
    user-select: ${(props) => (props.clickable ? "none" : "auto")};

    &:hover {
        background-color: ${(props) =>
            props.clickable
                ? props.theme.colors.Background.Block.dark
                : props.theme.colors.Background.Block.default};
    }
`

interface ReviewBlockProps {
    review: Review
    withWrapper?: boolean
    linkToDictionary?: boolean
}

function ReviewBlock({
    review,
    withWrapper = true,
    linkToDictionary = true,
}: ReviewBlockProps) {
    const { t } = useTranslation()
    const navigator = useNavigate()

    const [mutation, requestFunction] = useAPI("PATCH", `/reviews/${review.id}/liked`, {
        onSuccess: () => {
            setLikeOverride((prev) => {
                if (prev === null) {
                    return !review.likedByUser
                } else {
                    return !prev
                }
            })
        },
    })

    const [likeOverride, setLikeOverride] = useState<boolean | null>(null)

    if (!review) return

    const likeReview = (e: React.MouseEvent) => {
        e.stopPropagation()
        mutation.mutate({
            reviewId: review.id,
            action: (likeOverride ?? review.likedByUser) ? "unlike" : "like",
        })
    }

    const reviewContent = (
        <FlexWrapper
            direction="column"
            align="stretch"
            gap={8}
            padding="0 4px"
            onClick={() => {
                if (linkToDictionary) {
                    navigator(`/dictionary?courseId=${review.courseId}`)
                }
            }}
        >
            <FlexWrapper direction="row" gap={6}>
                <Typography type="NormalBold" color="Text.default">
                    {review.courseName}
                </Typography>
                <Typography type="Normal" color="Text.lighter">
                    {professorName(review.professor)}
                </Typography>
                <Typography type="Normal" color="Text.lighter">
                    {review.year} {semesterToString(review.semester)}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="row" gap={0}>
                <Content type="Normal" color="Text.default">
                    {review.content}
                </Content>
            </FlexWrapper>
            <FlexWrapper direction="row" justify="space-between" gap={0}>
                <FlexWrapper direction="row" gap={8}>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.review.like")} {review.like}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.grade")} {ScoreEnum[review.grade]}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.load")} {ScoreEnum[review.load]}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {t("common.speech")} {ScoreEnum[review.speech]}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={4} onClick={(e) => likeReview(e)}>
                    <Typography type="Normal" color="Highlight.default">
                        {t("common.review.like")}
                    </Typography>
                    <Icon size={18} color="crimson">
                        {(likeOverride ?? review.likedByUser) ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderOutlinedIcon />
                        )}
                    </Icon>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )

    if (withWrapper) {
        return <ReviewWrapper clickable={linkToDictionary}>{reviewContent}</ReviewWrapper>
    } else return reviewContent
}

export default ReviewBlock
