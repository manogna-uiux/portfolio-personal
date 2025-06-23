import styled from 'styled-components';
import hero from '../assets/hero.png';
import spotlight from '../assets/Spotlight.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin, faDribbble, faMedium } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef } from 'react';

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  z-index: 100;
  width: 450px;
  text-align: center;
`;

const TextLine = styled.h2`
  font-family: var(--font-display);
  font-size: 5rem;
  line-height: 1;
  margin: 0;
  overflow: visible;
  padding-bottom: 0.2em;
`;

const TextMask = styled.div`
  overflow: hidden;
  padding-bottom: 0.1em;
`;

const TextWrapper = styled.div`
  transform: translateY(100%);
  opacity: 0;
  transition: transform 1.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.visible {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  
  img {
    max-width: 240%;
    height: auto;
    padding-top: 100px;
    transform: sharp(100%);
  }

  img:last-child {
    position: absolute;
    max-width: 300%;
    top: 50%;
    left: 50%;
    transform-origin: top center;
    animation: swing 4s ease-in-out infinite, fade 4s ease-in-out infinite;
  }

  @keyframes swing {
    0% { transform: translate(-50%, -50%) rotate(-5deg); }
    50% { transform: translate(-50%, -50%) rotate(5deg); }
    100% { transform: translate(-50%, -50%) rotate(-5deg); }
  }

  @keyframes fade {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
`;

const BottomSection = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2rem;
  padding-bottom: 20px;
  max-width: 1560px;
  margin: 0 auto;
`;

const Description = styled.p`
  font-family: 'Fg', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: rgba(240, 240, 240, 0.64);
  max-width: 420px;
  line-height: 1.6;
  z-index: 100;
  letter-spacing: 0.6px;

  .bold-text {
    font-weight: 700;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  z-index: 100;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: #f0f0f0;
  opacity: 0.7;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const StatusButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: 1px solid rgba(240, 240, 240, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: rgba(240, 240, 240, 1);
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  animation: wiggle 2s ease-in-out infinite;
  letter-spacing: 0.6px;

  &:hover {
    border-color: rgba(240, 240, 240, 0.4);
  }

  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-2deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(2deg); }
    100% { transform: rotate(0deg); }
  }
`;

const BlinkingDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #4ade80;
  border-radius: 50%;
  animation: blink 1s infinite;

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-width: 90vw;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  gap: 2rem;

  @media (max-width: 768px) {
    max-width: 100vw;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
    text-align: center;
  }
`;

const Hero = () => {
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const textWrappers = entry.target.querySelectorAll('.text-wrapper');
          textWrappers.forEach((wrapper, index) => {
            setTimeout(() => {
              wrapper.classList.add('visible');
            }, index * 300);
          });
        }
      });
    }, {
      threshold: 0.2
    });

    if (leftTextRef.current) {
      observer.observe(leftTextRef.current);
    }
    if (rightTextRef.current) {
      observer.observe(rightTextRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HeroContainer>
        <TextContent ref={leftTextRef} style={{ marginTop: '-24em' }}>
          <TextMask>
            <TextWrapper className="text-wrapper">
              <TextLine>
                Making
              </TextLine>
            </TextWrapper>
          </TextMask>
          <TextMask>
            <TextWrapper className="text-wrapper">
              <TextLine className="indent-12">
                Memorable
              </TextLine>
            </TextWrapper>
          </TextMask>
        </TextContent>

        <ImageContent>
          <img src={hero} alt="Hero" />
          <img src={spotlight} alt="Spotlight" />
        </ImageContent>

        <TextContent ref={rightTextRef}>
          <TextMask>
            <TextWrapper className="text-wrapper">
              <TextLine>
                Human
              </TextLine>
            </TextWrapper>
          </TextMask>
          <TextMask>
            <TextWrapper className="text-wrapper">
              <TextLine className="indent-12">
                Experiences
              </TextLine>
            </TextWrapper>
          </TextMask>
        </TextContent>
      </HeroContainer>

      <BottomSection>
        <Description>
          I'm a <span className="bold-text">Product Designer</span> and <span className="bold-text">Developer</span> based in India, crafting digital experiences that blend creativity with functionality.
        </Description>

        <SocialContainer>
          <StatusButton>
            <BlinkingDot />
            Available for work
          </StatusButton>
          <SocialLinks>
            <SocialLink href="https://behance.net" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            <SocialLink href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDribbble} />
            </SocialLink>
            <SocialLink href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMedium} />
            </SocialLink>
          </SocialLinks>
        </SocialContainer>
      </BottomSection>
    </>
  );
};

export default Hero; 