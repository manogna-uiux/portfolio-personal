import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spotlight from '../assets/Spotlight.png';

gsap.registerPlugin(ScrollTrigger);

const SkillsContainer = styled.section`
  min-height: 100vh;
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 12rem;
`;

const HeadingContainer = styled.div`
  position: relative;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: rgba(240, 240, 240, 1);
  margin-bottom: 3rem;
  text-align: center;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  position: relative;
  z-index: 100;
`;

const Category = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(240, 240, 240, 0.1);
  border-radius: 8px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const CategoryTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: rgba(240, 240, 240, 0.64);
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.8);
`;

const SkillPercentage = styled.span`
  font-family: 'Fg', sans-serif;
  font-size: 0.75rem;
  color: rgba(240, 240, 240, 0.6);
`;

const ProgressBar = styled.div<{ percentage: number }>`
  width: 100%;
  height: 4px;
  background: rgba(240, 240, 240, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div<{ percentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: rgba(240, 240, 240, 0.25);
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

interface Skill {
  name: string;
  percentage: number;
}

interface SkillsData {
  dev: Skill[];
  design: Skill[];
  ai: Skill[];
}

const skillsData: SkillsData = {
  design: [
    { name: 'Figma', percentage: 95 },
    { name: 'Adobe XD', percentage: 90 },
    { name: 'Sketch', percentage: 85 },
    { name: 'Illustrator', percentage: 90 },
    { name: 'Photoshop', percentage: 85 },
    { name: 'Premiere Pro', percentage: 80 },
    { name: 'After Effects', percentage: 75 }
  ],
  dev: [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'GSAP', percentage: 85 }
  ],
  ai: [
    { name: 'Midjourney', percentage: 95 },
    { name: 'Cursor', percentage: 90 },
    { name: 'ChatGPT', percentage: 95 },
    { name: 'Runway ML', percentage: 85 },
    { name: 'DALL-E', percentage: 90 }
  ]
};

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

    categoriesRef.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setCategoryRef = (index: number) => (el: HTMLDivElement | null) => {
    categoriesRef.current[index] = el;
  };

  const setProgressBarRef = (index: number) => (el: HTMLDivElement | null) => {
    progressBarsRef.current[index] = el;
  };

  return (
    <SkillsContainer ref={containerRef}>
      <HeadingContainer>
        <SectionHeading>Skills</SectionHeading>
        <img src={Spotlight} alt="Spotlight" className='absolute mt-[-12em] opacity-70 mix-blend-difference' />
      </HeadingContainer>
      <Content>
        <Category ref={setCategoryRef(0)} style={{ marginTop: '8rem' }}>
          <CategoryTitle>Development</CategoryTitle>
          <SkillList>
            {skillsData.dev.map((skill, index) => (
              <SkillItem key={skill.name}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillPercentage>{skill.percentage}%</SkillPercentage>
                </SkillHeader>
                <ProgressBar percentage={skill.percentage}>
                  <ProgressFill 
                    ref={setProgressBarRef(index)}
                    percentage={skill.percentage} 
                  />
                </ProgressBar>
              </SkillItem>
            ))}
          </SkillList>
        </Category>

        <Category ref={setCategoryRef(1)}>
          <CategoryTitle>Design</CategoryTitle>
          <SkillList>
            {skillsData.design.map((skill, index) => (
              <SkillItem key={skill.name}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillPercentage>{skill.percentage}%</SkillPercentage>
                </SkillHeader>
                <ProgressBar percentage={skill.percentage}>
                  <ProgressFill 
                    ref={setProgressBarRef(index + skillsData.dev.length)}
                    percentage={skill.percentage} 
                  />
                </ProgressBar>
              </SkillItem>
            ))}
          </SkillList>
        </Category>

        <Category ref={setCategoryRef(2)} style={{ marginTop: '8rem' }}>
          <CategoryTitle>AI</CategoryTitle>
          <SkillList>
            {skillsData.ai.map((skill, index) => (
              <SkillItem key={skill.name}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillPercentage>{skill.percentage}%</SkillPercentage>
                </SkillHeader>
                <ProgressBar percentage={skill.percentage}>
                  <ProgressFill 
                    ref={setProgressBarRef(index + skillsData.dev.length + skillsData.design.length)}
                    percentage={skill.percentage} 
                  />
                </ProgressBar>
              </SkillItem>
            ))}
          </SkillList>
        </Category>
      </Content>
    </SkillsContainer>
  );
};

export default Skills; 