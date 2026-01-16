import { memo, useCallback, useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import type { SemesterEnum } from "@/common/enum/semesterEnum"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import type { TimeBlock } from "@/common/schemas/timeblock"
import type { getAPIResponseType } from "@/utils/api/getAPIType"
import { useAPI } from "@/utils/api/useAPI"
import useUserStore from "@/utils/zustand/useUserStore"

const SearchSubSection = styled(FlexWrapper)`
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.divider};
    max-height: 100%;
`

const DropDownWrapper = styled(FlexWrapper)`
    height: 36px;
`

const Chip = styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    gap: 8px;
    border-radius: 6px;
    background-color: ${({ isSelected, theme }) =>
        isSelected
            ? theme.colors.Background.Button.highlightDark
            : theme.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.Background.Button.highlightDark};
    }
`

interface LectureSearchSubSectionProps {
    year: number
    semester: SemesterEnum
    timeFilter: TimeBlock | null
    setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>
    sortOption: number
    setSortOption: React.Dispatch<React.SetStateAction<number>>
    data: getAPIResponseType<"GET", "/lectures"> | undefined
    isWishlist: boolean
    setIsWishlist: React.Dispatch<React.SetStateAction<boolean>>
    setWishlist: React.Dispatch<React.SetStateAction<number[]>>
    setSearchResult: React.Dispatch<
        React.SetStateAction<getAPIResponseType<"GET", "/lectures">>
    >
    handleSearch: (params: SearchParamsType) => void
    t: (key: string) => string
}

function LectureSearchSubSection({
    year,
    semester,
    timeFilter,
    setTimeFilter,
    data,
    setSearchResult,
    isWishlist,
    setIsWishlist,
    setWishlist,
    sortOption,
    setSortOption,
    handleSearch,
    t,
}: LectureSearchSubSectionProps) {
    const theme = useTheme()

    const { user, status } = useUserStore()

    const { query: wishListQuery, setParams: setWishListQuery } = useAPI(
        "GET",
        `/users/${user?.id}/wishlist`,
        {
            enabled: status === "success" && year != -1,
        },
    )

    useEffect(() => {
        if (wishListQuery.data === undefined) return

        if (isWishlist) {
            setSearchResult(wishListQuery.data)
        } else setSearchResult(data ?? { courses: [] })
    }, [isWishlist, data])

    useEffect(() => {
        if (wishListQuery.data === undefined) return

        setWishlist(
            wishListQuery.data.courses
                .flatMap((course) => course.lectures)
                .map((lecture) => lecture.id),
        )

        if (isWishlist) {
            setSearchResult(wishListQuery.data)
        }
    }, [wishListQuery.data])

    useEffect(() => {
        setSearchResult({ courses: [] })
        if (year === -1) return
        setWishListQuery({ year: year, semester: semester })
    }, [year, semester])

    useEffect(() => {
        if (data !== undefined) {
            setSearchResult(data)
            setIsWishlist(false)
        }
    }, [data])

    return (
        <>
            <SearchSubSection direction="row" justify="stretch" gap={0}>
                <SearchArea
                    options={["type", "department", "level", "term", "time"]}
                    timeFilter={timeFilter}
                    setTimeFilter={setTimeFilter}
                    onSearch={handleSearch}
                />
            </SearchSubSection>
            <FlexWrapper
                direction="row"
                gap={0}
                justify={"space-between"}
                align={"center"}
            >
                <Chip
                    isSelected={isWishlist}
                    onClick={() => {
                        setIsWishlist((prev) => !prev)
                    }}
                    style={{ paddingBlock: 10 }}
                >
                    <Icon size={15} color={theme.colors.Highlight.default}>
                        {isWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Icon>
                    <Typography type={"Normal"} color={"Highlight.default"}>
                        {t("common.wishlist")}
                    </Typography>
                </Chip>
                <DropDownWrapper direction="row" gap={0}>
                    <ScrollableDropdown
                        options={[
                            t("dictionary.sortOptions.code"),
                            t("dictionary.sortOptions.popularity"),
                            t("dictionary.sortOptions.studentCount"),
                        ]}
                        setSelectedOption={setSortOption}
                        selectedOption={sortOption}
                    />
                </DropDownWrapper>
            </FlexWrapper>
        </>
    )
}

const LectureSearchSubSectionMemo = memo(LectureSearchSubSection, (prev, next) => {
    return (
        prev.year === next.year &&
        prev.semester === next.semester &&
        prev.timeFilter === next.timeFilter &&
        prev.sortOption === next.sortOption &&
        prev.isWishlist === next.isWishlist &&
        prev.data === next.data
    )
})

export default LectureSearchSubSectionMemo
