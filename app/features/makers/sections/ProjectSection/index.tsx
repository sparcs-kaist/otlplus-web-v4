import styled from "@emotion/styled"

import Typography from "@/common/primitives/Typography"
import ProjectCard from "@/features/makers/components/ProjectCard"
import type { MakersWrapper } from "@/utils/makersList"

const ProjectSessionWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
`

const ProjectCardWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 15px;
  justify-content: center;
  margin: 36px 0 0 0;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`

interface ProjectSectionProps {
  makersList: MakersWrapper[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  makersList,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <ProjectSessionWrapper>
      <Typography type="BiggerBold" color="Text.default">
        Project
      </Typography>
      <ProjectCardWrapper>
        {makersList.map((project, index) => (
          <ProjectCard
            title={project.mainTitle}
            subTitle={project.subTitle}
            period={project.period}
            isSelected={index == currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </ProjectCardWrapper>
    </ProjectSessionWrapper>
  )
}

export default ProjectSection
