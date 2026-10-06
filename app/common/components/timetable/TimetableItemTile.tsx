import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"

const TimetableItemTile = styled(FlexWrapper)<{ itemKey: string }>`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({ itemKey }) => itemKey}"] & {
        opacity: 1;
    }
`

export default TimetableItemTile
