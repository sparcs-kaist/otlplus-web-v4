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

const MapContainer = styled.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

const MapBackground = styled.img`
    object-fit: cover;
    object-position: center;
    // dark mode filter
    filter: invert(100%) sepia(100%) grayscale(100%) brightness(0.7);
`

const MapPinWrapper = styled.div<{ left: number; top: number; highlighted?: boolean }>`
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.Background.Section.default};
    left: ${({ left }) => left}%;
    top: ${({ top }) => top}%;
    position: absolute;
    font-size: 10px;
    color: ${({ theme, highlighted }) =>
        highlighted ? theme.colors.Highlight.default : theme.colors.Text.default};
    border-radius: 4px;
    padding: 2px 4px;
`

const MapPinPointer = styled.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.Background.Section.default};
    position: absolute;
    top: 17px;
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
    ["E2", { left: 50, top: 67 }],
    ["E3", { left: 56, top: 61 }],
    ["E6", { left: 57, top: 52 }],
    ["E7", { left: 65, top: 50 }],
    ["E11", { left: 45, top: 47 }],
    ["E16", { left: 45, top: 40 }],
    ["N1", { left: 75, top: 30 }],
    ["N3", { left: 45, top: 34 }],
    ["N4", { left: 53, top: 32 }],
    ["N5", { left: 63, top: 28 }],
    ["N7", { left: 27, top: 30 }],
    ["N22", { left: 67, top: 26 }],
    ["N24", { left: 65, top: 22 }],
    ["N25", { left: 49, top: 26 }],
    ["N27", { left: 47, top: 17 }],
    ["W1", { left: 26, top: 68 }],
    ["W8", { left: 27, top: 44 }],
    ["W16", { left: 34, top: 73 }],
])

export default function MapSubSection({
    timetableLectures,
    hover,
    setHover,
}: {
    timetableLectures: Lecture[]
    hover: Lecture[]
    setHover: React.Dispatch<React.SetStateAction<Lecture[]>>
}) {
    return (
        <MapContainer>
            <MapBackground src="/campus_map.svg" alt="Campus Map" />
            {Array.from(POSITION_OF_LOCATIONS).map(([location, { left, top }]) => {
                const lectures = timetableLectures.filter((l) =>
                    l.classes.some((c) => c.buildingCode.includes(location)),
                )
                hover?.forEach((h) => {
                    if (timetableLectures.includes(h)) return
                    if (h.classes.some((c) => c.buildingCode.includes(location))) {
                        lectures.push(h)
                    }
                })
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
                            setHover([])
                        }}
                        highlighted={hover?.some((l) => lectures.includes(l)) ?? false}
                    >
                        <MapPinPointer />
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
        </MapContainer>
    )
}
