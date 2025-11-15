import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import checkEmpty from "@/utils/search/checkEmpty"

const SearchSectionInner = styled(FlexWrapper)`
    width: 645px;
    border: 2px solid ${({ theme }) => theme.colors.Highlight.default};
    border-radius: 32px;
    background: ${({ theme }) => theme.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`

const SearchImg = styled.img<{ src: string }>`
    height: 40px;
    background: transparent;
`

function SearchSection() {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleSearch = (params: SearchParamsType) => {
        if (checkEmpty(params)) {
            alert(t("common.search.empty"))
            return
        }
        const queryString = new URLSearchParams()

        Object.entries(params).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((val) => {
                    queryString.append(key, val.toString())
                })
            } else if (value !== undefined && value !== null && value !== "") {
                queryString.append(key, value.toString())
            }
        })

        navigate(`/dictionary?${queryString.toString()}`)
    }

    return (
        <SearchSectionInner direction="column" align="stretch" gap={0} padding="8px 8px">
            <SearchArea
                options={["type", "department", "level", "term"]}
                onSearch={handleSearch}
                SearchIcon={<SearchImg src="/searchIcon.png" alt="search" />}
            />
        </SearchSectionInner>
    )
}

export default SearchSection
