import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spotlight from '../assets/Spotlight.png';
import title2 from '../assets/title2.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectsContainer = styled.div`
  padding: 2rem;
  margin-top: 4rem;
  position: relative;
  overflow: visible;
`;

const Heading = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
`;

const ProjectGrid = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  position: relative;
  overflow: visible;
  z-index: 100;
  margin-top: 4rem;
`;

const ProjectItem = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  justify-content: flex-start;
  margin-top: ${props => props.$align === 'left' ? '0' : '30rem'};
  align-items: flex-start;
  cursor: pointer;
  position: relative;
  z-index: 100;
  overflow: visible;
  opacity: 0;
  transform: translateY(100px);
  filter: saturate(0);
  transition: opacity 1s ease-out, transform 1s ease-out, filter 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    filter: saturate(1);
  }

  &:hover {
    .hover-image {
      opacity: 1;
      transform: scale(1.02);
    }
    .project-info {
      opacity: 1;
      transform: translateY(0);
    }
    .project-tags {
      opacity: 1;
      transform: translateY(0);
    }
    .link-button {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ProjectImage = styled.img`
  width: 520px;
  height: 380px;
  object-fit: cover;
  opacity: 0.7;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 100;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
`;

const HoverImage = styled(ProjectImage)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 101;
`;

const ProjectName = styled.h3`
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: rgba(240, 240, 240, 1);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.8);
  max-width: 300px;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(20px);
  margin-top: 0.3rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 101;
`;

const Tag = styled.span`
  color: rgba(240, 240, 240, 0.64);
  font-family: 'Fg', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.6px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgba(240, 240, 240, 1);
  }
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(240, 240, 240, 1);
  font-family: 'Fg', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.6px;
  text-decoration: none;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border: 1px solid rgba(240, 240, 240, 0.2);
  border-radius: 2rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 101;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  cursor: pointer;

  &:hover {
    color: rgba(240, 240, 240, 1);
    border-color: rgba(240, 240, 240, 0.4);
    transform: translateX(5px);
  }
`;

interface Project {
  id: number;
  image: string;
  hoverImage: string;
  align: 'left' | 'right';
  path: string;
  name: string;
  description: string;
  tags?: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: title2,
    hoverImage: title2,
    align: 'left',
    name: 'NeatProcess',
    description: 'Supply Chain Management Platform',
    tags: ['Branding', 'Product Design', 'User Research', 'Responsive UI'],
    path: '/project1',
    link: 'https://neatprocess.org'
  },
  {
    id: 2,
    image: title2,
    hoverImage: title2,
    align: 'right',
    name: 'NeatProcess',
    description: 'Supply Chain Management Platform',
    tags: ['Branding', 'Product Design', 'User Research', 'Responsive UI'],
    path: '/project2',
    link: 'https://neatprocess.org'
  },
  {
    id: 3,
    image: title2,
    hoverImage: title2,
    align: 'left',
    name: 'NeatProcess',
    description: 'Supply Chain Management Platform',
    tags: ['Branding', 'Product Design', 'User Research', 'Responsive UI'],
    path: '/project3',
    link: 'https://neatprocess.org'
  },
  {
    id: 4,
    image: title2,
    hoverImage: title2,
    align: 'right',
    name: 'NeatProcess',
    description: 'Supply Chain Management Platform',
    tags: ['Branding', 'Product Design', 'User Research', 'Responsive UI'],
    path: '/project4',
    link: 'https://neatprocess.org'
  },
  {
    id: 5,
    image: title2,
    hoverImage: title2,
    align: 'left',
    name: 'NeatProcess',
    description: 'Supply Chain Management Platform',
    tags: ['Branding', 'Product Design', 'User Research', 'Responsive UI'],
    path: '/project5',
    link: 'https://neatprocess.org'
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }

    // Animate projects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-100px'
    });

    projectRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleProjectClick = (project: Project, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    
    const clickedProject = projectRefs.current.find(ref => 
      ref?.getAttribute('data-project-id') === project.id.toString()
    );
    
    if (clickedProject) {
      const projectRect = clickedProject.getBoundingClientRect();
      
      // Store the project data and image position for the transition
      sessionStorage.setItem('projectData', JSON.stringify({
        ...project,
        imageRect: {
          top: projectRect.top,
          left: projectRect.left,
          width: projectRect.width,
          height: projectRect.height
        }
      }));

      // Navigate to project page
      navigate(project.path);
    }
  };

  const setProjectRef = (index: number) => (el: HTMLDivElement | null) => {
    projectRefs.current[index] = el;
  };

  return (
    <ProjectsContainer>
      <Heading ref={headingRef}>Selected Projects</Heading>
      <img src={Spotlight} alt="Spotlight" className='absolute mt-[-12em] opacity-70 mix-blend-difference' />
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            ref={setProjectRef(index)}
            $align={project.align}
            data-project-id={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectImage src={project.image} alt={project.name} />
            <HoverImage src={project.hoverImage} alt={project.name} className="hover-image" />
            <ProjectInfo className="project-info">
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
            <ProjectTags className="project-tags">
              {project.tags?.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </ProjectTags>
            <LinkButton 
              className="link-button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              View Project
            </LinkButton>
          </ProjectItem>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 