import styled from "@emotion/styled"

import Typography from "@/common/primitives/Typography"
import MemberCard from "@/features/makers/components/MemberCard"
import { media } from "@/styles/themes/media"
import type { MemberField } from "@/utils/makersList"

const MemberSessionWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
`

const MemberCardWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 15px;
  justify-content: center;
  margin: 36px 0 0 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  ${media.mobile} {
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`

interface MemberSectionProps {
  membersList: MemberField[]
}

const MemberSection: React.FC<MemberSectionProps> = ({ membersList }) => {
  return (
    <MemberSessionWrapper>
      <Typography type="BiggerBold" color="Text.default">
        Members
      </Typography>
      <MemberCardWrapper>
        {membersList.map((field, index) =>
          field.members.map((member) => (
            <MemberCard
              name={member.name}
              nickname={member.nickname}
              role={field.role}
              hover={member.hover}
            />
          )),
        )}
      </MemberCardWrapper>
    </MemberSessionWrapper>
  )
}

export default MemberSection
