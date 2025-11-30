import { useEffect, useState } from "react"

import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import CircleIcon from "@mui/icons-material/Circle"
import { Trans, useTranslation } from "react-i18next"
import { useSearchParams } from "react-router"

import { type GETCoursesResponse } from "@/api/courses"
import LoadingCircle from "@/common/components/LoadingCircle"
import ScrollableDropdown from "@/common/components/ScrollableDropdown"
import SearchArea, { type SearchParamsType } from "@/common/components/search/SearchArea"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import CourseBlock from "@/features/dictionary/components/CourseBlock"
import type { getAPIResponseType } from "@/utils/api/getAPIType"
import { useInfiniteAPI } from "@/utils/api/useInfiniteAPI"
import checkEmpty from "@/utils/search/checkEmpty"

const CourseListSectionInner = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const SearchSubSection = styled.div`
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Line.divider};
    max-height: 100%;
`

const NoResultText = styled(Typography)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled(Typography)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({ theme }) => theme.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`

const SortWrapper = styled(FlexWrapper)`
    white-space: nowrap;
`

const DropDownWrapper = styled(FlexWrapper)`
    flex-grow: 1;
    height: 36px;
`

const CourseBlockWrapper = styled(FlexWrapper)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

interface CourseListSectionProps {
    selectedCourseId: number | null
    setSelectedCourseId: React.Dispatch<React.SetStateAction<number | null>>
}

const LIMIT = 20

function CourseListSection({
    selectedCourseId,
    setSelectedCourseId,
}: CourseListSectionProps) {
    const { t } = useTranslation()
    const theme = useTheme()
    const [searchParams] = useSearchParams()

    const [sortOption, setSortOption] = useState<number>(0)

    const [enabled, setEnabled] = useState(false)

    const [searchResult, setSearchResult] = useState<
        getAPIResponseType<"GET", "/courses">
    >({
        courses: [],
        totalCount: 0,
    })

    const { query, setParams } = useInfiniteAPI("GET", "/courses", {
        infinites: ["courses"],
        enabled: enabled,
    })

    useEffect(() => {
        const term = searchParams.get("term")
            ? parseInt(searchParams.get("term") as string)
            : undefined
        const param: SearchParamsType = {
            keyword: searchParams.get("keyword") || "",
            type: searchParams.getAll("type"),
            department: searchParams.getAll("department").map((dept) => parseInt(dept)),
            level: searchParams.getAll("level").map((lvl) => parseInt(lvl)),
        }
        if (term !== undefined) {
            param.term = term
        }
        if (checkEmpty(param)) return
        handleSearch(param)
    }, [])

    useEffect(() => {
        if (query.data !== undefined) {
            const data: GETCoursesResponse["courses"] =
                query.data as unknown as GETCoursesResponse["courses"]
            setSearchResult((prevState) => {
                return {
                    courses: [...prevState.courses, ...data],
                    totalCount: 0,
                }
            })
            if (data.length < LIMIT) {
                setEnabled(false)
            }
        }
    }, [query.data])

    const handleSearch = (param: SearchParamsType) => {
        if (checkEmpty(param)) {
            alert(t("common.search.empty"))
            return
        }
        setSearchResult({ courses: [], totalCount: 0 })
        const fullParam = {
            ...param,
            order: (["code", "popular", "studentCount"] as const)[sortOption] ?? "code",
            offset: 0,
            limit: LIMIT,
        }
        setParams(fullParam)
        setEnabled(true)
    }

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (!enabled) return
        if (query.isLoading) return
        const target = e.target as HTMLDivElement
        if (target.scrollHeight - target.scrollTop - target.clientHeight < 48) {
            setParams((prevState) => {
                return {
                    ...prevState,
                    offset: prevState.offset + LIMIT,
                }
            })
        }
    }

    return (
        <CourseListSectionInner
            direction="column"
            justify="stretch"
            align="stretch"
            gap={8}
        >
            <SearchSubSection>
                <SearchArea
                    options={["type", "department", "level", "term"]}
                    onSearch={handleSearch}
                />
            </SearchSubSection>
            {searchResult.courses.length !== 0 ? (
                <>
                    <FlexWrapper
                        direction="row"
                        gap={0}
                        justify={"space-between"}
                        align={"center"}
                    >
                        <HeaderText color={"Text.default"}>
                            <Trans
                                i18nKey="dictionary.courseCountInfo"
                                count={searchResult.courses.length}
                                components={{
                                    bold: (
                                        <Typography
                                            type={"NormalBold"}
                                            children={undefined}
                                        />
                                    ),
                                    icon: (
                                        <Icon
                                            size={12}
                                            color={theme.colors.Highlight.default}
                                        >
                                            <CircleIcon />
                                        </Icon>
                                    ),
                                    space: <>&nbsp;</>,
                                }}
                            />
                        </HeaderText>
                        <SortWrapper direction="row" gap={8} align={"center"}>
                            <Typography type={"NormalBold"} color={"Text.default"}>
                                {t("dictionary.sort")}
                            </Typography>
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
                        </SortWrapper>
                    </FlexWrapper>
                    <CourseBlockWrapper
                        direction="column"
                        gap={12}
                        onScroll={handleScroll}
                    >
                        {searchResult.courses.map((course) => (
                            <CourseBlock
                                key={course.id}
                                course={course}
                                isSelected={selectedCourseId == course.id}
                                selectCourseId={setSelectedCourseId}
                            />
                        ))}
                    </CourseBlockWrapper>
                </>
            ) : query.isLoading ? (
                <LoadingCircle />
            ) : (
                <NoResultText type={"Bigger"} color={"Text.placeholder"}>
                    {t("dictionary.noResults")}
                </NoResultText>
            )}
        </CourseListSectionInner>
    )
}

export default CourseListSection
