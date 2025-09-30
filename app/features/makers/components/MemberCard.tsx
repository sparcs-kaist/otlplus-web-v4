import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const StyledCard = styled(FlexWrapper)`
  height: 100px;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.Background.Tab.default};
  transition: box-shadow 0.2s ease-in-out;
  color: #eba12a;
`

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`

interface MemberCardProps {
  name: string
  nickname: string
  role: string
}

const MemberCard: React.FC<MemberCardProps> = ({ name, nickname, role }) => {
  return (
    <StyledCard direction="row" gap={8} justify="space-between" align="center">
      <FlexWrapper direction="column" gap={5}>
        <Typography type="BigBold" color="Text.dark" style={{ marginLeft: "4px" }}>
          {name}
        </Typography>
        <FlexWrapper direction="row" gap={0}>
          <StyledImage src="/sparcsLogo.svg" alt="Sparcs Logo" />
          <Typography type="Normal">{nickname}</Typography>
        </FlexWrapper>
      </FlexWrapper>
      <Typography type="Small">{role}</Typography>
    </StyledCard>
  )
}

export default MemberCard
