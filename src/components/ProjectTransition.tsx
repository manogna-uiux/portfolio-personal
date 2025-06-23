import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const TransitionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
`;

const TransitionImage = styled.img`
  position: absolute;
  object-fit: cover;
  border-radius: 8px;
`;

interface ProjectTransitionProps {
  image: string;
  imageRect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  onTransitionComplete: () => void;
}

const ProjectTransition = ({ image, imageRect, onTransitionComplete }: ProjectTransitionProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    const image = imageRef.current;
    const container = containerRef.current;

    // Set initial position and size (matching the project card)
    gsap.set(image, {
      top: imageRect.top,
      left: imageRect.left,
      width: imageRect.width,
      height: imageRect.height,
      borderRadius: '8px',
      scale: 1
    });

    // Animate to full screen banner
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onTransitionComplete();
        }, 100);
      }
    });

    tl.to(image, {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      duration: 1.2,
      ease: 'power3.inOut'
    })
    .to(container, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut'
    }, '-=0.3');

  }, [imageRect, onTransitionComplete]);

  return (
    <TransitionContainer ref={containerRef}>
      <TransitionImage ref={imageRef} src={image} alt="Project transition" />
    </TransitionContainer>
  );
};

export default ProjectTransition; 