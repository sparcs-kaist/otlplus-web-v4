import { type ReactElement, useEffect, useState } from "react"

import styled from "@emotion/styled"
import { Search } from "@mui/icons-material"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { type SearchOptions } from "@/common/interface/SearchOptions"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"
import { type TimeBlock } from "@/common/schemas/timeblock"
import { useAPI } from "@/utils/api/useAPI"

import Button from "../Button"
import SearchFilterArea, {
    type ExportDataType,
    type SearchFilterAreaProps,
    isSingleSelectOption,
} from "./SearchFilterArea"
import TextInput from "./TextInput"

export type SearchParamsType = {
    type?: string[]
    department?: number[]
    level?: number[]
    term?: number
    time?: TimeBlock
    keyword: string
}

type TimeProps<ops extends readonly SearchOptions[]> = "time" extends ops[number]
    ? {
          timeFilter: TimeBlock | null
          setTimeFilter: (timeFilter: TimeBlock | null) => void
      }
    : { timeFilter?: never; setTimeFilter?: never }

type SearchAreaProps<ops extends readonly SearchOptions[]> = {
    options: ops
    onSearch: (params: SearchParamsType) => void
    SearchIcon?: ReactElement
} & TimeProps<ops>

const dropInVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
}

const SearchFilterAreaInner = styled(FlexWrapper)`
    overflow-y: auto;
    min-height: 0;

    scrollbar-width: none;
    --webkit-scrollbar {
        display: none;
    }
`

function SearchArea<const ops extends readonly SearchOptions[]>({
    options,
    onSearch,
    SearchIcon,
    timeFilter,
    setTimeFilter,
}: SearchAreaProps<ops>) {
    const { t } = useTranslation()

    const { query } = useAPI("GET", "/department-options")

    const [open, setOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")

    const [chipsOptions, setChipsOptions] = useState<ExportDataType>({})

    const [resetTrigger, setResetTrigger] = useState(false)

    useEffect(() => {
        if (!timeFilter) return
        setOpen(true)
    }, [timeFilter])

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        chipsOptions: ExportDataType,
        textValue: string,
    ) => {
        if (event.nativeEvent.isComposing) return

        if (event.key === "Enter") {
            handleSubmit(chipsOptions, textValue)
        }
    }

    function handleReset() {
        setChipsOptions({})
        setValue("")
        setResetTrigger(true)
    }

    function handleClose() {
        setOpen(false)
    }

    function handleSubmit(chipsOptions: ExportDataType, textValue: string) {
        setOpen(false)
        onSearch(getSearchParams(chipsOptions, textValue))
    }

    function getSearchParams(
        chipsOptions: ExportDataType,
        textValue: string,
    ): SearchParamsType {
        const result = {} as SearchParamsType

        ;(Object.keys(chipsOptions) as Array<keyof typeof chipsOptions>).forEach(
            (key: keyof typeof chipsOptions) => {
                const value = chipsOptions[key]

                if (value != undefined) {
                    if (key == "time") result[key] = value as TimeBlock
                    else {
                        if (isSingleSelectOption(key))
                            result[key] = (value as [any, string])[0]
                        else
                            result[key] = (value as [any, string][]).map(
                                (x) => x[0],
                            ) as any
                        if (key == "department") {
                            result[key] = result[key]?.map(
                                (dept) =>
                                    query.data?.departments.find(
                                        (d) => d.code === dept.toString(),
                                    )?.id as number,
                            )
                        }
                    }
                }
            },
        )

        result["keyword"] = textValue

        return result
    }

    function onChange(options: ExportDataType) {
        setChipsOptions(options)
    }

    function withTimeFilter<T extends readonly SearchOptions[]>(
        options: T,
        timeFilter?: TimeBlock | null,
    ): Pick<SearchFilterAreaProps<T>, "timeFilter"> {
        return options.includes("time") && timeFilter != undefined
            ? ({ timeFilter: timeFilter, setTimeFilter: setTimeFilter } as Pick<
                  SearchFilterAreaProps<T>,
                  "timeFilter"
              >)
            : ({} as Pick<SearchFilterAreaProps<T>, "timeFilter">)
    }

    return (
        <FlexWrapper
            direction="column"
            align="stretch"
            justify="stretch"
            gap={0}
            style={{ maxHeight: "100%", width: "100%" }}
        >
            <FlexWrapper
                direction="row"
                justify="stretch"
                align="center"
                onClick={() => {
                    if (!open) setOpen(true)
                }}
                gap={0}
                padding="4px 16px"
            >
                {SearchIcon == undefined ? (
                    <Icon size={17.5} color="#E54C65" onClick={() => {}}>
                        <Search />
                    </Icon>
                ) : (
                    SearchIcon
                )}
                <TextInput
                    value={value}
                    handleChange={(newValue) => {
                        setValue(newValue)
                    }}
                    placeholder={t("common.search.placeholder")}
                    onKeyDown={(e) => {
                        handleKeyDown(e, chipsOptions, value)
                    }}
                />
            </FlexWrapper>

            <AnimatePresence>
                <motion.div
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                    exit="exit"
                    variants={dropInVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                        display: "flex",
                        flexShrink: 1,
                        width: "100%",
                        minHeight: 0,
                    }}
                >
                    <SearchFilterAreaInner
                        direction="column"
                        align="stretch"
                        gap={16}
                        padding="16px"
                        flex="1 0 0"
                    >
                        <SearchFilterArea
                            options={options}
                            onChange={onChange}
                            {...(withTimeFilter(options, timeFilter) as any)}
                            resetTrigger={resetTrigger}
                            onResetTriggerComplete={() => {
                                setResetTrigger(false)
                            }}
                        />
                        <FlexWrapper direction="row" justify="flex-end" gap={8}>
                            <Button
                                $paddingLeft={24}
                                $paddingTop={9}
                                onClick={handleClose}
                            >
                                <Typography>{t("common.search.close")}</Typography>
                            </Button>
                            <Button
                                $paddingLeft={24}
                                $paddingTop={9}
                                onClick={handleReset}
                                type="state5"
                            >
                                <Typography>{t("common.search.reset")}</Typography>
                            </Button>
                            <Button
                                $paddingLeft={24}
                                $paddingTop={9}
                                type="selected"
                                onClick={() => {
                                    handleSubmit(chipsOptions, value)
                                }}
                            >
                                <Typography>{t("common.search.submit")}</Typography>
                            </Button>
                        </FlexWrapper>
                    </SearchFilterAreaInner>
                </motion.div>
            </AnimatePresence>
        </FlexWrapper>
    )
}

export default SearchArea
