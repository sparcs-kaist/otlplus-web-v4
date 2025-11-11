import styled from "@emotion/styled"
import FlexWrapper from "@/common/primitives/FlexWrapper";
import { useEffect, useRef, useState, type SetStateAction } from "react";
import TabButtonRow from "@/common/components/timetable/TabButtonRow";
import StyledDiv from "@/common/primitives/StyledDiv";
import StyledDivider from "@/common/components/StyledDivider";
import CourseDetailSection from "@/features/dictionary/sections/CourseDetailSection";
import { set } from "zod";
import CourseListSection from "@/features/dictionary/sections/CourseListSection";
import LectureListSection from "@/features/timetable/sections/LectureListSection";
import LectureDetailSection from "@/features/timetable/sections/LectureDetailSection";

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
  flex-grow: 1;
  width: 250px;
  align-self: stretch;
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
    const searchAreaRef = useRef<HTMLDivElement>(null);
    const contentsAreaRef = useRef<HTMLDivElement>(null);
    const outerRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState<number>(0);

    const [hoverId, setHoverId] = useState<number | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null); 
    const [searchedId, setSearchedId] = useState<number | null>(null);

    const [lectureId, setLectureId] = useState<number | null>(null);

    useEffect(() => {
      setLectureId(searchedId);
      setSelectedId(null);
      setHoverId(null);
    }, [searchedId]);

    useEffect(() => {
        if (selectedId !== null) {
            setLectureId(selectedId);
            setSearchedId(null);
            setHoverId(null);
        }
    }, [selectedId]);

    useEffect(() => {
        if (selectedId === null && hoverId != null) {
            setLectureId(hoverId);
        }
    }, [hoverId]);
    
    // useEffect(() => {
    //   console.log("Selected lecture ID changed:", lectureId);
    // }, [lectureId]);

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
                    <LectureListSection selectedLectureId={searchedId} setSelectedLectureId={setSearchedId} />
                </LectureListArea>
                <StyledDivider direction="column" />
                <LectureInfoArea>
                  <LectureDetailSection selectedLectureId={lectureId}/>
                </LectureInfoArea>
            </SearchAreaWrapper>
            <ContentsAreaWrapper ref={contentsAreaRef}>
                {/* 시간표 */}
               <TabButtonRow rowLength={3} index={index} setIndex={setIndex}/>
               <Block>
                  {`여기에 선택된 탭(${index})에 해당하는 시간표 내용이 들어갑니다`}
                  <StyledDivider direction="column" />
                  <InfoArea>
                    여기에 시간표 관련 정보가 들어갑니다
                  </InfoArea>
               </Block>
               {/* 우측 내용 - 지도, 시험 시간표 등 */}
            </ContentsAreaWrapper>
        </TimetableWrapper>
    )
}