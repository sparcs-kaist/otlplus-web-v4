import { useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Trans, useTranslation } from "react-i18next"

import LoadingCircle from "@/common/components/LoadingCircle"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import ReviewBlock from "@/common/components/reviews/ReviewBlock"
import { SemesterEnum, semesterToString } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { useAPI } from "@/utils/api/useAPI"

const DropDownWrapper = styled(FlexWrapper)`
    width: 225px;
    height: 36px;
`

const LIMIT = 20

function HallOfFameFeedSubSection() {
    const { t } = useTranslation()

    const [serverSemesters] = useAPI("GET", "/semesters", {
        select: (data) => {
            return {
                ...data,
                semesters: data.semesters.filter((sem) => sem.year >= 2013),
            }
        },
    })
    const [query, setParams] = useAPI("GET", "/reviews", { gcTime: 0 })

    const [selectedOption, setSelectedOption] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setParams({
            mode: "hall-of-fame",
            year: 2025,
            semester: SemesterEnum.SPRING,
            offset: offset,
            limit: LIMIT,
        })
    }, [])
    useEffect(() => {
        if (selectedOption === 0) return
        setOffset(0)
        setParams({
            mode: "hall-of-fame",
            year: serverSemesters.data?.semesters[selectedOption - 1]?.year ?? 2025,
            semester:
                serverSemesters.data?.semesters[selectedOption - 1]?.semester ??
                SemesterEnum.SPRING,
            offset: 0,
            limit: LIMIT,
        })
    }, [selectedOption])

    // TODO: 작동 안됨
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget
        const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 48
        if (nearBottom) {
            const newOffset = offset + LIMIT
            setOffset(newOffset)
            setParams((prevstate) => ({
                ...prevstate,
                offset: newOffset,
            }))
        }
    }

    return (
        <FlexWrapper direction="column" align="stretch" gap={12} onScroll={handleScroll}>
            <FlexWrapper direction="row" align="center" gap={8}>
                <Typography type="NormalBold" color="Text.default">
                    {t("common.year")}
                </Typography>
                <DropDownWrapper direction="row" gap={0}>
                    <ScrollableDropdown
                        options={[
                            t("writeReviews.hallOfFameFeed.total") as string,
                        ].concat(
                            serverSemesters.data?.semesters
                                ? serverSemesters.data.semesters.map((sem) => {
                                      return `${sem.year} ${semesterToString(sem.semester)}`
                                  })
                                : [],
                        )}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </DropDownWrapper>
            </FlexWrapper>
            {query.isLoading ? (
                <LoadingCircle />
            ) : (
                <>
                    <FlexWrapper direction="column" align="center" gap={12}>
                        <Typography type="NormalBold" color="Text.default">
                            {selectedOption === 0 ? (
                                t("writeReviews.hallOfFameFeed.total")
                            ) : (
                                <Trans
                                    i18nKey="writeReviews.hallOfFameFeed.title"
                                    values={{
                                        year:
                                            serverSemesters.data?.semesters[
                                                selectedOption - 1
                                            ]?.year ?? "",
                                        semester: serverSemesters.data?.semesters[
                                            selectedOption - 1
                                        ]?.semester
                                            ? semesterToString(
                                                  serverSemesters.data.semesters[
                                                      selectedOption - 1
                                                  ]?.semester as SemesterEnum,
                                              )
                                            : "",
                                    }}
                                    components={{
                                        space: <>&nbsp;</>,
                                    }}
                                />
                            )}
                        </Typography>
                        <FlexWrapper direction="column" align="center" gap={0}>
                            <Typography type="Bigger" color="Text.default">
                                {query.data?.reviews.length}
                            </Typography>
                            <Typography type="Smaller" color="Text.default">
                                {t("writeReviews.hallOfFameFeed.total")}
                            </Typography>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper direction="column" align="stretch" gap={12}>
                        {query.data?.reviews.map((review) => (
                            <ReviewBlock review={review} key={review.id} />
                        ))}
                    </FlexWrapper>
                </>
            )}
        </FlexWrapper>
    )
}

export default HallOfFameFeedSubSection
