import { memo, useMemo, useState } from "react"

import styled from "@emotion/styled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import { ScoreEnum } from "@/common/enum/scoreEnum"
import { semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import { IconButton } from "@/common/primitives/IconButton"
import Typography from "@/common/primitives/Typography"
import { type Review } from "@/common/schemas/review"
import { useAPI } from "@/utils/api/useAPI"
import professorName from "@/utils/professorName"
import useUserStore from "@/utils/zustand/useUserStore"

const Content = styled(Typography)<{ overflow: boolean }>`
    line-height: 1.5;
    width: 100%;

    ${(props) =>
        props.overflow &&
        `
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    `}
`

const ReviewWrapper = styled.div<{ clickable: boolean }>`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({ theme }) => theme.colors.Background.Block.dark} solid;
    background-color: ${({ theme }) => theme.colors.Background.Block.default};

    &:hover {
        background-color: ${(props) =>
            props.clickable
                ? props.theme.colors.Background.Block.dark
                : props.theme.colors.Background.Block.default};
    }
`

const SelectWrapper = styled(FlexWrapper)<{ clickable: boolean }>`
    width: 100%;
    cursor: ${(props) => (props.clickable ? "pointer" : "default")};
    user-select: ${(props) => (props.clickable ? "none" : "auto")};
`

const LikeButtonWrapper = styled(FlexWrapper)`
    cursor: pointer;
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
    const { status } = useUserStore()
    const navigator = useNavigate()

    const { query: userReviewsQuery } = useAPI("GET", `/users/written-reviews`, {
        enabled: status === "success",
    })

    const { requestFunction } = useAPI("PATCH", `/reviews/${review.id}/liked`, {
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

    const writtenReviewIds: number[] = useMemo(() => {
        if (userReviewsQuery.data) {
            return userReviewsQuery.data.reviews.map((rev: Review) => rev.id)
        }
        return []
    }, [userReviewsQuery.data])

    if (!review) return

    const likeReview = (e: React.MouseEvent) => {
        e.stopPropagation()
        requestFunction({
            reviewId: review.id,
            action: (likeOverride ?? review.likedByUser) ? "unlike" : "like",
        })
    }

    const reviewContent = (
        <SelectWrapper
            direction="column"
            align="stretch"
            gap={3}
            padding="3px 4px 0px 4px"
            clickable={linkToDictionary}
            onClick={() => {
                if (linkToDictionary) {
                    navigator(
                        `/dictionary?courseId=${review.courseId}&professorId=${review.professors[0]?.id}`,
                    )
                }
            }}
        >
            <FlexWrapper direction="column" gap={8}>
                <FlexWrapper direction="row" gap={6}>
                    <Typography type="NormalBold" color="Text.default">
                        {review.courseName}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {professorName(review.professors)}
                    </Typography>
                    <Typography type="Normal" color="Text.lighter">
                        {review.year} {semesterToString(review.semester)}
                    </Typography>
                </FlexWrapper>
                <FlexWrapper direction="row" gap={0} style={{ overflow: "hidden" }}>
                    <Content type="Normal" color="Text.default" overflow={!withWrapper}>
                        {review.content}
                    </Content>
                </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper direction="row" justify="space-between" align="center" gap={0}>
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
                {!writtenReviewIds.includes(review.id) && (
                    <LikeButtonWrapper
                        direction="row"
                        gap={4}
                        align="center"
                        onClick={(e) => likeReview(e)}
                    >
                        <Typography type="Normal" color="Highlight.default">
                            {t("common.review.like")}
                        </Typography>
                        <IconButton styles={{ padding: 3 }}>
                            <Icon size={18} color="crimson" onClick={() => {}}>
                                {(likeOverride ?? review.likedByUser) ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderOutlinedIcon />
                                )}
                            </Icon>
                        </IconButton>
                    </LikeButtonWrapper>
                )}
            </FlexWrapper>
        </SelectWrapper>
    )

    if (withWrapper) {
        return <ReviewWrapper clickable={linkToDictionary}>{reviewContent}</ReviewWrapper>
    } else return reviewContent
}

export default memo(ReviewBlock)
