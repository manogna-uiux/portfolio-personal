import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorCircle = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorState);
    };
  }, []);

  return (
    <>
      <CursorDot
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      <CursorCircle
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
        }}
      />
    </>
  );
};

export default CustomCursor; 