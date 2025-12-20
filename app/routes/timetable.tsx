import styled from "@emotion/styled"
import FlexWrapper from "@/common/primitives/FlexWrapper";
import Typography from "@/common/primitives/Typography";
import Icon from "@/common/primitives/Icon";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import TabButtonRow from "@/common/components/timetable/TabButtonRow";
import StyledDivider from "@/common/components/StyledDivider";
import LectureListSection from "@/features/timetable/sections/LectureListSection";
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection";
import CustomTimeTableGrid from "@/features/main/components/CustomTimeTableGrid";
import type { TimeBlock } from "@/common/schemas/timeblock";
import type { Lecture } from "@/common/schemas/lecture";
import type { Timetable as TimetableType } from "@/common/schemas/timetable";
import exampleLectures from "@/api/example/Lectures";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { WeekdayEnum } from "@/common/enum/weekdayEnum";

const TimetableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  overflow: scroll;
  height: calc(100vh - 75px);
  margin-bottom: 15px;
  width: 100%;
`;

const SearchAreaWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.Background.Section.default};
  padding: 16px;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  align-items: flex-start;
  gap: 12px;
`;

const ContentsAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: fit-content;
  min-height: 100%;
  align-items: flex-start;
`;

const Block = styled.div`
  display: flex;
  flex-grow: 1;
  //height: fit-content;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.Background.Section.default};
  align-items: center;
  justify-content: flex-start;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px;
  flex-direction: row;
  gap: 30px;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  align-self: stretch;
  gap: 12px;
  padding: 30px;
  overflow-y: auto;
  
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimetableGridArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapImage = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 50%, #b1dfbb 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/ad.png');
    background-size: cover;
    background-position: center;
    opacity: 0.8;
  }
`;

const CreditGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 16px;
`;

const CreditRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 16px;
`;

const CreditTypeLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Text.default};
`;

const CreditNumber = styled.span`
  font-size: 14px;
  font-weight: 400;
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.Text.default};
`;

const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const TotalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const TotalNumber = styled.span<{ highlight?: boolean }>`
  font-size: 20px;
  font-weight: 300;
  color: ${({ highlight, theme }) => highlight ? theme.colors.Highlight.default : theme.colors.Text.default};
`;

const TotalLabel = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Text.dark};
`;

const GradeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`;

const GradeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const GradeLetter = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.Text.default};
`;

const GradeLabel = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Text.dark};
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const ExamScheduleItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`;

const DayLabel = styled.span<{ color?: string }>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ color, theme }) => color || theme.colors.Text.default};
  min-width: 16px;
`;

const ExportButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  color: ${({ theme }) => theme.colors.Highlight.default};
  font-size: 13px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LectureInfoArea = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
`;

const LectureListArea = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
`;

export default function Timetable() {
    const { t } = useTranslation();
    const searchAreaRef = useRef<HTMLDivElement>(null);
    const contentsAreaRef = useRef<HTMLDivElement>(null);
    const outerRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState<number>(0);

    // Search/Detail panel states
    const [searchedId, setSearchedId] = useState<number | null>(null);
    const [lectureId, setLectureId] = useState<number | null>(null);
    
    // Timetable grid states
    const [timetableLectures, setTimetableLectures] = useState<Lecture[]>(exampleLectures.slice(0, 3));
    const [hover, setHover] = useState<Lecture | null>(null);
    const [selected, setSelected] = useState<Lecture | null>(null);
    
    // Time filter state for search area
    const [timeFilter, setTimeFilter] = useState<TimeBlock | null>(null);
    
    // Current timetable ID (placeholder - should come from timetable selection logic)
    const [currentTimetableId, setCurrentTimetableId] = useState<number | null>(1);
    
    // Calculate timetable summary info
    const timetableInfo = useMemo(() => {
        const totalCredits = timetableLectures.reduce((sum, lec) => sum + lec.credit, 0);
        const totalAU = timetableLectures.reduce((sum, lec) => sum + lec.creditAU, 0);
        
        // Credit breakdown by type
        const creditByType = {
            basicRequired: 0,  // 기필
            basicElective: 0,  // 기선
            majorRequired: 0,  // 전필
            majorElective: 0,  // 전선
            humanitiesSocial: 0, // 인선
            etc: 0,            // 기타
        };
        
        timetableLectures.forEach(lec => {
            if (lec.type.includes('기초필수') || lec.type.includes('기필')) {
                creditByType.basicRequired += lec.credit;
            } else if (lec.type.includes('기초선택') || lec.type.includes('기선')) {
                creditByType.basicElective += lec.credit;
            } else if (lec.type.includes('전공필수') || lec.type.includes('전필')) {
                creditByType.majorRequired += lec.credit;
            } else if (lec.type.includes('전공선택') || lec.type.includes('전선')) {
                creditByType.majorElective += lec.credit;
            } else if (lec.type.includes('인문') || lec.type.includes('인선')) {
                creditByType.humanitiesSocial += lec.credit;
            } else {
                creditByType.etc += lec.credit;
            }
        });
        
        // Average grades
        const avgGrade = timetableLectures.length > 0 
            ? timetableLectures.reduce((sum, lec) => sum + lec.averageGrade, 0) / timetableLectures.length
            : 0;
        const avgLoad = timetableLectures.length > 0 
            ? timetableLectures.reduce((sum, lec) => sum + lec.averageLoad, 0) / timetableLectures.length
            : 0;
        const avgSpeech = timetableLectures.length > 0 
            ? timetableLectures.reduce((sum, lec) => sum + lec.averageSpeech, 0) / timetableLectures.length
            : 0;
        
        // Exam times grouped by day
        const examsByDay: { [key: number]: { lectureName: string; classNo: string; time: string }[] } = {
            [WeekdayEnum.Mon]: [],
            [WeekdayEnum.Tue]: [],
            [WeekdayEnum.Wed]: [],
            [WeekdayEnum.Thu]: [],
            [WeekdayEnum.Fri]: [],
        };
        
        timetableLectures.forEach(lec => {
            lec.examTimes.forEach(exam => {
                const day = exam.day as WeekdayEnum;
                if (examsByDay[day]) {
                    examsByDay[day].push({
                        lectureName: lec.name,
                        classNo: lec.classNo,
                        time: exam.str.split(' ').slice(1).join(' '), // Remove day prefix
                    });
                }
            });
        });
        
        return { 
            totalCredits, 
            totalAU, 
            creditByType, 
            avgGrade, 
            avgLoad, 
            avgSpeech,
            examsByDay 
        };
    }, [timetableLectures]);
    
    // Helper to format grade
    const formatGrade = (grade: number): string => {
        if (grade >= 4.0) return 'A+';
        if (grade >= 3.5) return 'A';
        if (grade >= 3.0) return 'B+';
        if (grade >= 2.5) return 'B';
        if (grade >= 2.0) return 'C+';
        if (grade >= 1.5) return 'C';
        if (grade >= 1.0) return 'D+';
        if (grade >= 0.5) return 'D';
        return 'F';
    };
    
    const dayLabels = [
        { day: WeekdayEnum.Mon, label: '월', color: '#E54C65' },
        { day: WeekdayEnum.Tue, label: '화', color: '#F5A623' },
        { day: WeekdayEnum.Wed, label: '수', color: '#7ED321' },
        { day: WeekdayEnum.Thu, label: '목', color: '#4A90D9' },
        { day: WeekdayEnum.Fri, label: '금', color: '#9B59B6' },
    ];
    
    // Callback when a lecture is added to timetable
    const handleLectureAdded = useCallback(() => {
        // Refresh timetable data when a lecture is added
        console.log("Lecture added to timetable");
        // In real implementation, re-fetch timetable data here
    }, []);

    useEffect(() => {
        if (searchedId !== null) {
            setLectureId(searchedId);
        }
    }, [searchedId]);

    // Sync timetable grid selection with detail view
    useEffect(() => {
        if (selected !== null) {
            setLectureId(selected.id);
            setSearchedId(null);
        }
    }, [selected]);

    // Sync timetable grid hover with detail view
    useEffect(() => {
        if (selected === null && hover !== null) {
            setLectureId(hover.id);
        }
    }, [hover, selected]);

    // 양 쪽의 높이를 일정하게 맞추기 위함 - 스크롤이 들어가는 경우도 있어서 css 스타일만으로 구현 불가,,?
    useEffect(() => {
        function matchHeight() {
        if (searchAreaRef.current && contentsAreaRef.current) {
            searchAreaRef.current.style.height = `${contentsAreaRef.current.offsetHeight}px`;
        }
        }

        matchHeight();
        window.addEventListener('resize', matchHeight);
        return () => window.removeEventListener('resize', matchHeight);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            searchAreaRef.current &&
            !searchAreaRef.current.contains(event.target as Node) &&
            contentsAreaRef.current &&
            !contentsAreaRef.current.contains(event.target as Node) &&
            outerRef.current &&
            outerRef.current.contains(event.target as Node)
        ) {
            setSearchedId(null);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <TimetableWrapper ref={outerRef}>
            <SearchAreaWrapper ref={searchAreaRef}>
                <LectureListArea>
                    <LectureListSection 
                        selectedLectureId={searchedId} 
                        setSelectedLectureId={setSearchedId}
                        timeFilter={timeFilter}
                        setTimeFilter={setTimeFilter}
                        currentTimetableId={currentTimetableId}
                        onLectureAdded={handleLectureAdded}
                    />
                </LectureListArea>
                <StyledDivider direction="column" />
                <LectureInfoArea>
                  <LectureDetailSection selectedLectureId={lectureId}/>
                </LectureInfoArea>
            </SearchAreaWrapper>
            <ContentsAreaWrapper ref={contentsAreaRef}>
                {/* 시간표 탭 */}
                <TabButtonRow rowLength={3} index={index} setIndex={setIndex}/>
                <Block>
                    {/* 시간표 그리드 */}
                    <TimetableGridArea>
                        <CustomTimeTableGrid
                            cellWidth={100}
                            lectureSummary={timetableLectures}
                            setTimeFilter={setTimeFilter}
                            hover={hover}
                            setHover={setHover}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </TimetableGridArea>
                    <StyledDivider direction="column" />
                    {/* 시간표 정보 */}
                    <InfoArea>
                        {/* 캠퍼스 맵 */}
                        <MapImage />
                        
                        {/* 학점 분류별 */}
                        <CreditGrid>
                            <CreditRow>
                                <CreditTypeLabel>{t("common.type.basicRequiredShort")}</CreditTypeLabel>
                                <CreditNumber>{timetableInfo.creditByType.basicRequired}</CreditNumber>
                            </CreditRow>
                            <CreditRow>
                                <CreditTypeLabel>{t("common.type.basicElectiveShort")}</CreditTypeLabel>
                                <CreditNumber>{timetableInfo.creditByType.basicElective}</CreditNumber>
                            </CreditRow>
                            <CreditRow>
                                <CreditTypeLabel>{t("common.type.majorRequiredShort")}</CreditTypeLabel>
                                <CreditNumber>{timetableInfo.creditByType.majorRequired}</CreditNumber>
                            </CreditRow>
                            <CreditRow>
                                <CreditTypeLabel>{t("common.type.majorElectiveShort")}</CreditTypeLabel>
                                <CreditNumber>{timetableInfo.creditByType.majorElective}</CreditNumber>
                            </CreditRow>
                            <CreditRow>
                                <CreditTypeLabel>{t("common.type.humanitiesSocialElectiveShort")}</CreditTypeLabel>
                                <CreditNumber>{timetableInfo.creditByType.humanitiesSocial}</CreditNumber>
                            </CreditRow>
                            <CreditRow>
                                <CreditTypeLabel>{t("common.type.etcShort")}</CreditTypeLabel>
                                <CreditNumber>{timetableInfo.creditByType.etc}</CreditNumber>
                            </CreditRow>
                        </CreditGrid>
                        
                        {/* 총 학점/AU */}
                        <TotalRow>
                            <TotalItem>
                                <TotalNumber highlight>{timetableInfo.totalCredits}</TotalNumber>
                                <TotalLabel>{t("common.credit")}</TotalLabel>
                            </TotalItem>
                            <TotalItem>
                                <TotalNumber>{timetableInfo.totalAU}</TotalNumber>
                                <TotalLabel>AU</TotalLabel>
                            </TotalItem>
                        </TotalRow>
                        
                        {/* 평균 성적 */}
                        <GradeRow>
                            <GradeItem>
                                <GradeLetter>{formatGrade(timetableInfo.avgGrade)}</GradeLetter>
                                <GradeLabel>{t("common.grade")}</GradeLabel>
                            </GradeItem>
                            <GradeItem>
                                <GradeLetter>{formatGrade(timetableInfo.avgLoad)}</GradeLetter>
                                <GradeLabel>{t("common.load")}</GradeLabel>
                            </GradeItem>
                            <GradeItem>
                                <GradeLetter>{formatGrade(timetableInfo.avgSpeech)}</GradeLetter>
                                <GradeLabel>{t("common.speech")}</GradeLabel>
                            </GradeItem>
                        </GradeRow>
                        
                        <StyledDivider direction="row" />
                        
                        {/* 시험시간표 */}
                        <InfoGroup>
                            <Typography type="NormalBold" color="Text.default">
                                시험시간표
                            </Typography>
                            {dayLabels.map(({ day, label, color }) => {
                                const exams = timetableInfo.examsByDay[day];
                                if (!exams || exams.length === 0) return null;
                                return (
                                    <ExamScheduleItem key={day}>
                                        <DayLabel color={color}>{label}</DayLabel>
                                        <FlexWrapper direction="column" gap={2}>
                                            {exams.map((exam, idx) => (
                                                <FlexWrapper key={idx} direction="column" gap={0}>
                                                    <Typography type="SmallerBold" color="Text.default">
                                                        {exam.lectureName}
                                                    </Typography>
                                                    <Typography type="Smaller" color="Text.dark">
                                                        {exam.time}
                                                    </Typography>
                                                </FlexWrapper>
                                            ))}
                                        </FlexWrapper>
                                    </ExamScheduleItem>
                                );
                            })}
                        </InfoGroup>
                        
                        <StyledDivider direction="row" />
                        
                        {/* 내보내기 버튼들 */}
                        <InfoGroup>
                            <ExportButton onClick={() => console.log('이미지로 내보내기')}>
                                <Icon size={16} color="#E54C65">
                                    <ImageIcon />
                                </Icon>
                                <span>이미지로 내보내기</span>
                            </ExportButton>
                            <ExportButton onClick={() => console.log('캘린더로 내보내기')}>
                                <Icon size={16} color="#E54C65">
                                    <CalendarMonthIcon />
                                </Icon>
                                <span>캘린더로 내보내기</span>
                            </ExportButton>
                            <ExportButton onClick={() => console.log('실라버스 모아보기')}>
                                <Icon size={16} color="#E54C65">
                                    <MenuBookIcon />
                                </Icon>
                                <span>실라버스 모아보기</span>
                            </ExportButton>
                        </InfoGroup>
                    </InfoArea>
                </Block>
            </ContentsAreaWrapper>
        </TimetableWrapper>
    )
}
