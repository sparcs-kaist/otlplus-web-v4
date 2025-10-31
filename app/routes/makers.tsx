import { useState } from "react"

import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import MemberSection from "@/features/makers/sections/MemberSection"
import ProjectSection from "@/features/makers/sections/ProjectSection"
import { MakersList } from "@/utils/makersList"

const MakersWrapper = styled(FlexWrapper)`
    flex: 1 0 auto;
    min-height: 0;
    padding: 32px 16px;
`

export default function MakersPage() {
    const [currentIndex, setCurrentIndex] = useState(10)

    return (
        <MakersWrapper direction="column" align="center" justify="stretch" gap={36}>
            <ProjectSection
                makersList={MakersList}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
            <MemberSection membersList={MakersList[currentIndex].fields} />
        </MakersWrapper>
    )
}
