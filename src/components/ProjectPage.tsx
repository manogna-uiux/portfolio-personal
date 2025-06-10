import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';
import Project4 from '../pages/Project4';
import Project5 from '../pages/Project5';

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
    <div>
      {renderProjectContent()}
    </div>
  );
};

export default ProjectPage; 