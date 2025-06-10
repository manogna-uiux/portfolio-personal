import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';
import Project4 from '../pages/Project4';
import Project5 from '../pages/Project5';

const ProjectPageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: #010101;
`;

const ProjectBanner = styled.div`
  width: 100%;
  max-width: 1560px;
  height: 400px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 8px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  &.visible {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  max-width: 1560px;
  margin: 0 auto;
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectInfo = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f0f0f0;
`;

const ProjectDescription = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 1.1rem;
  color: rgba(240, 240, 240, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

interface ProjectData {
  id: number;
  name: string;
  description: string;
  tags: string[];
  hoverImage: string;
  imageRect?: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  path: string;
}

const ProjectPage = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const projectId = parseInt(location.pathname.replace('/project', ''));

  useEffect(() => {
    const storedData = sessionStorage.getItem('projectData');
    if (storedData) {
      const data = JSON.parse(storedData);
      setProjectData(data);

      // Preload the banner image
      const bannerImage = new Image();
      bannerImage.src = data.hoverImage;
      
      bannerImage.onload = () => {
        if (imageRef.current) {
          imageRef.current.classList.add('visible');
        }
        
        if (contentRef.current) {
          contentRef.current.classList.add('visible');
        }
      };
    }
  }, []);

  const renderProjectContent = () => {
    switch (projectId) {
      case 1:
        return <Project1 />;
      case 2:
        return <Project2 />;
      case 3:
        return <Project3 />;
      case 4:
        return <Project4 />;
      case 5:
        return <Project5 />;
      default:
        return null;
    }
  };

  if (!projectData) return null;

  return (
    <ProjectPageContainer>
      <ProjectBanner className="project-banner">
        <ProjectImage 
          ref={imageRef}
          src={projectData.hoverImage} 
          alt={projectData.name}
        />
      </ProjectBanner>
      <ProjectContent ref={contentRef}>
        {renderProjectContent()}
      </ProjectContent>
    </ProjectPageContainer>
  );
};

export default ProjectPage; 