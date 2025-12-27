import styled from "@emotion/styled"

import StyledDivider from "@/common/components/StyledDivider"
import { type SemesterEnum } from "@/common/enum/semesterEnum"
import type { Lecture } from "@/common/schemas/lecture"
import CreditGridSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditGridSubSection"
import CreditScoreSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditScoreSubSection"
import ExamTimeSubSection from "@/features/timetable/sections/TimetableInfoSection/ExamTimeSubSection"
import MapSubSection from "@/features/timetable/sections/TimetableInfoSection/MapSubSection"
import UtilButtonsSubSection from "@/features/timetable/sections/TimetableInfoSection/UtilButtonsSubSection"
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
    timetableName: string
    timetableLectures: Lecture[]
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    year: number
    semester: SemesterEnum
}

export default function TimetableInfoSection({
    timetableName,
    timetableLectures,
    hover,
    setHover,
    year,
    semester,
}: TimetableInfoSectionProps) {
    const isLaptop = useIsDevice("laptop")

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
                    timetableLectures={timetableLectures}
                    year={year}
                    semester={semester}
                />
            )}
        </InfoArea>
    )
}
