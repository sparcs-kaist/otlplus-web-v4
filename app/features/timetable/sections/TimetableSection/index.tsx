import type { TimeBlock } from "@/common/schemas/timeblock";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled"
import FlexWrapper from "@/common/primitives/FlexWrapper";
import renderGrid from "./util/renderGrid";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: fit-content;
`;

const TimeWrapper = styled.div<{ cellHeight: number }>`
  padding-top: 15px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  gap: ${({ cellHeight }) => `${cellHeight * 2 - 11}px`};
  font-size: 8px;
  line-height: 11px;
`;

const DateWrapper = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  padding-bottom: 5px;
  text-align: center;
`;

interface TimetableSectionProps {
    cellWidth?: number;
    setTimeFilter: React.Dispatch<React.SetStateAction<TimeBlock | null>>;
    hoverId: number | null;
    setHover: React.Dispatch<React.SetStateAction<number | null>>;
    selectedId: number | null;
    setSelected: React.Dispatch<React.SetStateAction<number | null>>;
    timetableId: number;
}

const TimetableSection: React.FC<TimetableSectionProps> = ({
    cellWidth = 120,
    setTimeFilter,
    hoverId,
    setHover,
    selectedId,
    setSelected,
    timetableId
}) => {
    const colPadding = 5;
    const m = 5;
    const begin = 8;
    const gridRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    // 나중에 24시간 이후 (새벽 시간대 추가해야 하면 코드 수정 필요 - legacy 코드 참고)
    const n = 32;
    const end = 24;

    const dateHeader = [t("common.days.monday"), t("common.days.tuesday"), t("common.days.wednesday"), t("common.days.thursday"), t("common.days.friday")];
    const [cellHeight, setCellHeight] = useState(25);

      // 전체 셀 크기를 반응형으로 조정하는 부분
    useEffect(() => {
        const handleResize = () => {
        const fullHeight = window.innerHeight - 55 - 20 - 32 - 35.5 - 30; // 대충 스크롤이 안 넘어가게 맞춰준 거...
        const cellHeightUnscroll = fullHeight / 32;
        setCellHeight(Math.max(cellHeightUnscroll, 25));
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <SectionWrapper>
            <TimeWrapper cellHeight={cellHeight}>
                {Array.from({ length: end - begin + 1 }, (_, index) => index + begin).map((number) => (
                    <div key={number}>{number % 12 || 12}</div>
                ))}
            </TimeWrapper>
            <FlexWrapper direction="column" gap={0}>
                <FlexWrapper direction="row" gap={5}>
                    {dateHeader.map(
                        (date, index) =>
                        date !== 'none' && (
                            <DateWrapper key={index} width={date === '' ? 10 : cellWidth}>
                            {date}
                            </DateWrapper>
                        ),
                    )}
                </FlexWrapper>
                <div
                    ref={gridRef}
                    style={{
                        display: 'inline-block',
                        position: 'relative',
                        userSelect: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {renderGrid(n, m, cellWidth, cellHeight, colPadding)}
                </div>
            </FlexWrapper>
        </SectionWrapper>
    )

}

export default TimetableSection;