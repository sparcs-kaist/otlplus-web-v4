import { useEffect, useRef } from "react"

import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import CustomTimeTableGrid from "@/common/components/timetable/CustomTimeTableGrid"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import Widget from "@/common/primitives/Widget"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import TabButton from "@/features/timetable/sections/TabsRowSubSection/TabButton"
import { media } from "@/styles/themes/media"

const TimetablePanel = styled(Widget)`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;
    border-top-left-radius: 0;
    box-shadow: none;

    ${media.tablet} {
        padding: 8px;
    }
`

const TimetableHeader = styled(FlexWrapper)`
    width: 100%;
    flex-shrink: 0;
    height: 34px;
    min-width: 0;
`

const Tabs = styled.div`
    min-width: 0;
    flex: 1;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
`

const TimetableTab = styled(TabButton)`
    height: 34px;
    flex-shrink: 0;
    padding: 8px 12px;
`

const TimetableGrid = styled.div`
    min-height: 0;
    flex: 1;
    display: flex;
`

type Props = {
    tabs: { key: string; name: string; selected: boolean; onSelect: () => void }[]
    tabListLabel: string
    isLoading: boolean
    noSharedTimetables: boolean
    timetableName: string | null
    hasLoadError: boolean
    timetableItems: TimetableItem[]
    overlappedLectureIds: number[]
    selectedItem: TimetableItem | null
    onSelectItem: (item: TimetableItem | null) => void
    onHoverItem: (item: TimetableItem) => void
    onLeaveItem: () => void
}

export default function SharedTimetableSection({
    tabs,
    tabListLabel,
    isLoading,
    noSharedTimetables,
    timetableName,
    hasLoadError,
    timetableItems,
    overlappedLectureIds,
    selectedItem,
    onSelectItem,
    onHoverItem,
    onLeaveItem,
}: Props) {
    const { t } = useTranslation()
    const selectedTabRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        selectedTabRef.current?.scrollIntoView?.({ block: "nearest", inline: "nearest" })
    }, [tabs])

    return (
        <>
            <TimetableHeader
                direction="row"
                gap={8}
                align="center"
                justify="space-between"
            >
                <Tabs role="tablist" aria-label={tabListLabel}>
                    {tabs.map((tab) => (
                        <TimetableTab
                            key={tab.key}
                            buttonRef={tab.selected ? selectedTabRef : undefined}
                            role="tab"
                            tabIndex={0}
                            aria-selected={tab.selected}
                            type={tab.selected ? "selected" : "default"}
                            onClick={tab.onSelect}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault()
                                    tab.onSelect()
                                }
                            }}
                        >
                            {tab.name}
                        </TimetableTab>
                    ))}
                </Tabs>
            </TimetableHeader>
            <TimetablePanel direction="column" gap={8} align="stretch">
                {isLoading && (
                    <Typography type="Small" color="Text.placeholder" role="status">
                        {t("friends.loadingLectures")}
                    </Typography>
                )}
                {noSharedTimetables && (
                    <Typography type="Small" color="Text.placeholder" role="status">
                        {t("friends.noSharedTimetables")}
                    </Typography>
                )}
                {timetableName !== null && (
                    <Typography type="Small" color="Text.default">
                        {timetableName}
                    </Typography>
                )}
                {hasLoadError && (
                    <Typography type="Small" color="Highlight.default" role="alert">
                        {t("friends.loadError")}
                    </Typography>
                )}
                <TimetableGrid>
                    <CustomTimeTableGrid
                        timetableItems={timetableItems}
                        overlappedLectureIds={overlappedLectureIds}
                        displayedDayCount={7}
                        needTimeFilter={false}
                        needItemDeletable={false}
                        selectedItems={selectedItem ? [selectedItem] : []}
                        onItemSelect={(item) => onSelectItem(item)}
                        onItemHover={onHoverItem}
                        onItemLeave={onLeaveItem}
                    />
                </TimetableGrid>
            </TimetablePanel>
        </>
    )
}
