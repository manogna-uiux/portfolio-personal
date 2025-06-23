import styled from 'styled-components';
import hero from '../assets/hero.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin, faDribbble, faMedium } from '@fortawesome/free-brands-svg-icons';

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: visible;
  z-index: 100;
  text-align: center;
  max-width: 450px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
    align-items: center;
    text-align: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    align-self: center;
  }
`;

const TextLine = styled.h2`
  font-family: var(--font-display);
  font-size: 5rem;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  padding-bottom: 0.2em;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 3.2rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 3.2rem;
    text-align: center;
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
    max-width: 100rem;
    height: auto;
    padding-top: 100px;
    transform: sharp(100%);
  }

  @media (max-width: 1024px) {
    order: 2;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 46rem;
      padding-top: 50px;
    }
  }

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 50rem;
      padding-top: 30px;
    }
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
  padding-bottom: 20px;
  width: 90vw;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    position: relative;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
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

  @media (max-width: 1024px) {
    max-width: 520px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 520px;
    text-align: center;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  z-index: 100;

  @media (max-width: 1024px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
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

  @media (max-width: 1024px) {
    transition: none;
    
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    transition: none;
    
    &:hover {
      transform: none;
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
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

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
  }
`;

const RotatingLine = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: rgba(240, 240, 240, 0.64);
  margin: 0 0.8rem;
  vertical-align: middle;
  animation: rotate 2s steps(6) infinite;

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 1024px) {
    animation: none;
  }

  @media (max-width: 768px) {
    animation: none;
  }
`;

const HeroContainer = styled.section`
  display: flex;
  width: 90vw;
  max-width: 1536px;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  position: relative;
  overflow: visible;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: auto;
    min-height: 100vh;
    padding: 2rem 0;
    overflow: visible;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: auto;
    min-height: 100vh;
    padding: 1rem;
    text-align: center;
    overflow: visible;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <TextContent className="lg:mt-[-32rem]">
          <TextLine>
            Making
            <span className="hidden max-sm:inline lg:inline"><br /></span>
            <span className="hidden max-sm:hidden lg:inline">&nbsp;&nbsp;</span>
            <span className="inline max-sm:hidden lg:hidden">&nbsp;</span>
            Memorable
          </TextLine>
        </TextContent>

        <ImageContent>
          <img src={hero} alt="Hero" />
        </ImageContent>

        <TextContent>
          <TextLine>
            Human
            <span className="hidden max-sm:inline lg:inline"><br /></span>
            <span className="hidden max-sm:hidden lg:inline">&nbsp;&nbsp;</span>
            <span className="inline max-sm:hidden lg:hidden">&nbsp;</span>
            Experiences
          </TextLine>
        </TextContent>
      </HeroContainer>

      <BottomSection>
        <Description>
          Hello <RotatingLine /> I'm a <span className="bold-text text-white">Product Designer</span> specializing in turning complex problems into elegant solutions through thoughtful UX, clean UI, and strategic thinking.
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