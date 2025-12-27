import { type CSSProperties } from "react"

import styled from "@emotion/styled"

import type { Lecture } from "@/common/schemas/lecture"

const flattenTimeTableColors = (timeTable: any): Array<CSSProperties["color"]> => {
    return [
        timeTable?.red?.[1],
        timeTable?.red?.[2],
        timeTable?.orange?.[1],
        timeTable?.orange?.[2],
        timeTable?.yellow?.[1],
        timeTable?.yellow?.[2],
        timeTable?.green?.[1],
        timeTable?.green?.[2],
        timeTable?.green?.[3],
        timeTable?.blue?.[1],
        timeTable?.blue?.[2],
        timeTable?.purple?.[1],
        timeTable?.purple?.[2],
        timeTable?.pink?.[1],
        timeTable?.pink?.[2],
    ].map((c) => c ?? "#CCCCCC")
}

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

const MapPinWrapper = styled.div<{ left: number; top: number }>`
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    left: ${({ left }) => left}%;
    top: ${({ top }) => top}%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.Text.default};
    border-radius: 4px;
    padding: 2px 4px;
`

const MapPin = styled.div<{ courseId: number; highlighted: boolean }>`
    background-color: ${({ theme, courseId, highlighted }) =>
        highlighted
            ? theme.colors.Highlight.default
            : (() => {
                  const flat = flattenTimeTableColors(
                      theme.colors?.Tile?.TimeTable?.default,
                  )
                  return flat[courseId % flat.length]
              })()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`

const POSITION_OF_LOCATIONS = new Map([
    ["E2", { left: 60, top: 81 }],
    ["E3", { left: 67, top: 75 }],
    ["E6", { left: 68, top: 63 }],
    ["E7", { left: 77, top: 61 }],
    ["E11", { left: 53, top: 58 }],
    ["E16", { left: 53, top: 49 }],
    ["N1", { left: 88, top: 39 }],
    ["N3", { left: 53, top: 45 }],
    ["N4", { left: 62, top: 41 }],
    ["N5", { left: 74, top: 39 }],
    ["N7", { left: 33, top: 41 }],
    ["N22", { left: 79, top: 35 }],
    ["N24", { left: 76, top: 31 }],
    ["N25", { left: 59, top: 36 }],
    ["N27", { left: 57, top: 24 }],
    ["W1", { left: 31, top: 84 }],
    ["W8", { left: 35, top: 55 }],
    ["W16", { left: 40, top: 87 }],
])

export default function MapSubSection({
    timetableLectures,
    hover,
    setHover,
}: {
    timetableLectures: Lecture[]
    hover: Lecture[] | null
    setHover: React.Dispatch<React.SetStateAction<Lecture[] | null>>
}) {
    return (
        <MapImage>
            {Array.from(POSITION_OF_LOCATIONS).map(([location, { left, top }]) => {
                const lectures = timetableLectures.filter((l) =>
                    l.classes.some((c) => c.buildingCode.includes(location)),
                )
                if (lectures.length === 0) return null
                return (
                    <MapPinWrapper
                        left={left}
                        top={top}
                        key={location}
                        onMouseEnter={() => {
                            setHover(lectures)
                        }}
                        onMouseLeave={() => {
                            setHover(null)
                        }}
                    >
                        {location}
                        {lectures.map((lecture) => (
                            <MapPin
                                key={lecture.id}
                                courseId={lecture.courseId}
                                highlighted={hover?.includes(lecture) ?? false}
                            />
                        ))}
                    </MapPinWrapper>
                )
            })}
        </MapImage>
    )
}
