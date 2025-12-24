import styled from "@emotion/styled"

import StyledDivider from "@/common/components/StyledDivider"
import { type SemesterEnum } from "@/common/enum/semesterEnum"
import type { Lecture } from "@/common/schemas/lecture"
import CreditGridSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditGridSubSection"
import CreditScoreSubSection from "@/features/timetable/sections/TimetableInfoSection/CreditScoreSubSection"
import ExamTimeSubSection from "@/features/timetable/sections/TimetableInfoSection/ExamTimeSubSection"
import UtilButtonsSubSection from "@/features/timetable/sections/TimetableInfoSection/UtilButtonsSubSection"

const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 264px;
    align-self: stretch;
    gap: 12px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`

const MapImage = styled.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/campus_map.png");
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }
`

interface TimetableInfoSectionProps {
    timetableLectures: Lecture[]
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
    year: number
    semester: SemesterEnum
}

export default function TimetableInfoSection({
    timetableLectures,
    hover,
    setHover,
    year,
    semester,
}: TimetableInfoSectionProps) {
    return (
        <InfoArea>
            {/* 캠퍼스 맵 */}
            <MapImage />
            {/* 학점 분류별 */}
            <CreditGridSubSection
                hover={hover}
                setHover={setHover}
                timetableLectures={timetableLectures}
            />
            <StyledDivider direction="row" />
            {/* 총 학점/AU */}
            <CreditScoreSubSection
                timetableLectures={timetableLectures}
                hover={hover}
                setHover={setHover}
            />
            <StyledDivider direction="row" />
            {/* 시험시간표 */}
            <ExamTimeSubSection
                timetableLectures={timetableLectures}
                hover={hover}
                setHover={setHover}
            />
            <StyledDivider direction="row" />

            {/* 내보내기 버튼들 */}
            <UtilButtonsSubSection
                timetableLectures={timetableLectures}
                year={year}
                semester={semester}
            />
        </InfoArea>
    )
}
