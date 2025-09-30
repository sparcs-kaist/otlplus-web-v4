import styled from "@emotion/styled"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

const StyledCard = styled(FlexWrapper)<{ isSelected: boolean }>`
  height: 100px;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  text-align: center;
  box-shadow: ${({ isSelected, theme }) =>
    isSelected &&
    `0 4px 6px -1px ${theme.colors.Background.Tab.darker}, 0 2px 4px -2px ${theme.colors.Background.Tab.darker}`};
  background-color: ${({ theme }) => theme.colors.Background.Tab.default};
  transition: box-shadow 0.2s ease-in-out;
`

interface ProjectCardProps {
  title: string
  subTitle: string
  period: string
  isSelected: boolean
  onClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subTitle,
  period,
  isSelected,
  onClick,
}) => {
  return (
    <StyledCard
      isSelected={isSelected}
      onClick={onClick}
      direction="column"
      gap={8}
      justify="center"
      align="center"
    >
      <Typography type="BigBold" color="Text.dark">
        {title}
      </Typography>
      <Typography type="Normal" color="Text.light">
        {subTitle}
      </Typography>
      <Typography type="Normal" color="Text.placeholder">
        {period}
      </Typography>
    </StyledCard>
  )
}

export default ProjectCard
