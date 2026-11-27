import { useCallback, useMemo } from "react"

import styled from "@emotion/styled"

import StyledDivider from "@/common/components/StyledDivider"
import { TimetableItemKind } from "@/common/enum/timetableItemKind"
import type { Lecture } from "@/common/schemas/lecture"
import type { TimetableItem } from "@/common/schemas/timetableItem"
import { extractLectures } from "@/utils/timetable/timetableItems"
import CreditGridSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditGridSubSection"
import CreditScoreSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditScoreSubSection"
import ExamTimeSubSection from "@/features/timetable/sections/TimetableInfoSection/ExamTimeSubSection"
import MapSubSection from "@/features/timetable/sections/TimetableInfoSection/MapSubSection"
import UtilButtonsSubSection from "@/features/timetable/sections/TimetableInfoSection/UtilButtonsSubSection"
import {
    useHoveredLectures,
    useSelectedLectures,
    useTimetableUIStore,
} from "@/features/timetable/store/useTimetableUIStore"
import { media } from "@/styles/themes/media"
import useIsDevice from "@/utils/useIsDevice"

const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 264px;
    height: 100%;
    gap: 12px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${media.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`

interface TimetableInfoSectionProps {
    timetableItems: TimetableItem[]
}

export default function TimetableInfoSection({
    timetableItems,
}: TimetableInfoSectionProps) {
    const isLaptop = useIsDevice("laptop")

    const timetableLectures = useMemo(
        () => extractLectures(timetableItems),
        [timetableItems],
    )

    const timetableName = useTimetableUIStore((s) => s.currentTimetableName)
    const year = useTimetableUIStore((s) => s.year)
    const semester = useTimetableUIStore((s) => s.semesterEnum)

    const selectedLectures = useSelectedLectures()
    const hoveredLectures = useHoveredLectures()
    const setHoveredItems = useTimetableUIStore((s) => s.setHoveredItems)
    const setHover = useCallback<React.Dispatch<React.SetStateAction<Lecture[]>>>(
        (lecturesOrUpdater) => {
            setHoveredItems((prev) => {
                const nextLectures =
                    typeof lecturesOrUpdater === "function"
                        ? lecturesOrUpdater(extractLectures(prev))
                        : lecturesOrUpdater
                return nextLectures.map((data) => ({
                    kind: TimetableItemKind.LECTURE,
                    data,
                }))
            })
        },
        [setHoveredItems],
    )

    const hover = selectedLectures.length > 0 ? selectedLectures : hoveredLectures

    return (
        <InfoArea>
            {/* 캠퍼스 맵 */}
            {!isLaptop && (
                <MapSubSection
                    timetableLectures={timetableLectures}
                    hover={hover}
                    setHover={setHover}
                />
            )}
            {/* 학점 분류별 */}
            <CreditGridSubSection
                hover={hover}
                setHover={setHover}
                timetableLectures={timetableLectures}
            />

            {!isLaptop && <StyledDivider direction="row" />}

            {/* 총 학점/AU */}
            <CreditScoreSubSection
                timetableLectures={timetableLectures}
                hover={hover}
                setHover={setHover}
            />

            {!isLaptop && <StyledDivider direction="row" />}

            {/* 시험시간표 */}
            {!isLaptop && (
                <ExamTimeSubSection
                    timetableLectures={timetableLectures}
                    hover={hover}
                    setHover={setHover}
                />
            )}

            {!isLaptop && <StyledDivider direction="row" />}

            {/* 내보내기 버튼들 */}
            {!isLaptop && (
                <UtilButtonsSubSection
                    timetableName={timetableName}
                    timetableItems={timetableItems}
                    year={year}
                    semester={semester}
                />
            )}
        </InfoArea>
    )
}
