import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsContainer = styled.section`
  min-height: 70vh;
  margin-top: 8rem;
  position: relative;
  overflow: hidden;
  width: 90vw;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: 8rem;
  }
`;

const HeadingContainer = styled.div`
  position: relative;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: rgba(240, 240, 240, 1);
  margin-bottom: 6rem;
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Content = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  position: relative;
  z-index: 100;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Category = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(240, 240, 240, 0.1);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  letter-spacing: 0.5px;

  &:hover {
    border-color: rgba(240, 240, 240, 0.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.06);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CategoryTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: rgba(240, 240, 240, 0.8);
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: 1px;
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
    { name: 'Adobe XD', percentage: 80 },
    { name: 'Sketch', percentage: 80 },
    { name: 'Illustrator', percentage: 75 },
    { name: 'Photoshop', percentage: 75 },
    { name: 'Premiere Pro', percentage: 60 },
    { name: 'After Effects', percentage: 50 }
  ],
  dev: [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 70 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'GSAP', percentage: 60 }
  ],
  ai: [
    { name: 'Midjourney', percentage: 70 },
    { name: 'Cursor', percentage: 60 },
    { name: 'ChatGPT', percentage: 50 },
    { name: 'Runway ML', percentage: 50 },
    { name: 'DALL-E', percentage: 40 }
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

    // GSAP animations for progress bars
    const allSkills = [...skillsData.dev, ...skillsData.design, ...skillsData.ai];
    
    allSkills.forEach((skill, index) => {
      const progressBar = progressBarsRef.current[index];
      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { width: '0%' },
          {
            width: `${skill.percentage}%`,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: progressBar,
              start: 'top bottom-=50',
              end: 'bottom top+=50',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
        <SectionHeading>Expertise</SectionHeading>
      </HeadingContainer>
      <Content>
        <Category ref={setCategoryRef(0)} style={{ marginTop: '4rem' }}>
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

        <Category ref={setCategoryRef(2)} style={{ marginTop: '4rem' }}>
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