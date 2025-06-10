import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '../assets/profile.png';
import spotlight from '../assets/Spotlight.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.section`
  padding: 2rem;
  margin-top: 12rem;
  position: relative;
  overflow: visible;
  z-index: 100;
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8rem;
  align-items: end;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  gap: 1rem;
  padding-bottom: 2rem;
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 4px;
  filter: brightness(0.9);
`;

const SpotlightImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300%;
  opacity: 0.1;
  mix-blend-mode: diff;
  z-index: 100;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
`;

const Description = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  color: rgba(240, 240, 240, 0.64);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const SkillHighlight = styled.div`
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: rgba(240, 240, 240, 0.64);
  transition: all 0.3s ease;
  cursor: default;
  text-align: left;

  &:hover {
    color: #f0f0f0;
    transform: translateX(10px);
  }
`;

const ResumeButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: 1px solid rgba(240, 240, 240, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  color: rgba(240, 240, 240, 0.64);
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  letter-spacing: 0.6px;


  &:hover {
    border-color: rgba(240, 240, 240, 0.4);
    background-color: rgba(240, 240, 240, 0.15);
    color: rgba(240, 240, 240, 1);
    transform: translateY(-2px);

    .arrow-icon {
      transform: translateX(4px);
    }
  }

  .arrow-icon {
    transition: transform 0.2s ease;
  }
`;

const SectionHeading = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: #f0f0f0;
  margin-bottom: 1rem;
`;

const About = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const center = centerRef.current;
    const right = rightRef.current;

    if (left && center && right) {
      gsap.fromTo(
        left,
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: left,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        center,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: center,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        right,
        {
          x: 100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: right,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skillHighlights = [
    'forever-curious',
    'always-learning',
    'highly-logical',
    'endless-empathy',
    'hard-working',
    'quick-on-my-feet',
    'travel-nomad',
    'pet-lover',
  ];

  return (
    <AboutContainer id="about">
      <Content>
        <LeftColumn ref={leftRef}>
          <SectionHeading>Who Am I?</SectionHeading>
          <Description>
            I'm a passionate product designer with a keen eye for detail and a deep understanding of user-centered design principles. With over 5 years of experience in the industry, I've helped numerous companies create intuitive and engaging digital experiences.
          </Description>
          <ResumeButton to="/resume">
            View Resume <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </ResumeButton>
        </LeftColumn>
        <CenterColumn ref={centerRef}>
          <ImageContainer>
            <SpotlightImage src={spotlight} alt="Spotlight" />
            <ProfileImage src={profileImage} alt="Profile" />
          </ImageContainer>
        </CenterColumn>
        <RightColumn ref={rightRef}>
          {skillHighlights.map((skill, index) => (
            <SkillHighlight key={index} style={{ gridColumn: index % 2 === 0 ? 1 : 2 }}>
              #{skill}
            </SkillHighlight>
          ))}
        </RightColumn>
      </Content>
    </AboutContainer>
  );
};

export default About; 