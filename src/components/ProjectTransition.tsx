import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const TransitionImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  &.visible {
    opacity: 1;
  }
`;

interface ProjectTransitionProps {
  image: string;
  onTransitionComplete: () => void;
}

const ProjectTransition = ({ image, onTransitionComplete }: ProjectTransitionProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add('visible');
      setTimeout(() => {
        onTransitionComplete();
      }, 500);
    }
  }, [onTransitionComplete]);

  return <TransitionImage ref={imageRef} src={image} alt="Project transition" />;
};

export default ProjectTransition; 