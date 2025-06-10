import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-top: 4rem;
  z-index: 100;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(240, 240, 240, 0.64);
  text-decoration: none;
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    color: #f0f0f0;
    transform: translateX(-4px);
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid rgba(240, 240, 240, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  color: rgba(240, 240, 240, 1);
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: rgba(240, 240, 240, 0.4);
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const Name = styled.h1`
  font-family: var(--font-display);
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f0f0f0;
`;

const Title = styled.h2`
  font-family: 'Fg', sans-serif;
  font-size: 1.5rem;
  color: rgba(240, 240, 240, 0.72);
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  color: rgba(240, 240, 240, 0.64);
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(240, 240, 240, 0.2);
  padding-bottom: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-family: 'Fg', sans-serif;
  font-size: 1.1rem;
  color: #f0f0f0;
`;

const Date = styled.span`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.64);
`;

const Role = styled.h5`
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  color: rgba(240, 240, 240, 0.72);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.64);
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h4`
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  color: #f0f0f0;
  margin-bottom: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.64);
  margin-bottom: 0.25rem;
`;

const Resume = () => {
  return (
    <Container>
      <Navigation>
        <BackButton to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </BackButton>
        <DownloadButton 
          href="/resume.pdf" 
          download="Manu_Namburi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} />
          Download PDF
        </DownloadButton>
      </Navigation>

      <Header>
        <Name>Manu Namburi</Name>
        <Title>Product Designer</Title>
        <ContactInfo>
          <span>manu@example.com</span>
          <span>+1 (555) 123-4567</span>
          <span>San Francisco, CA</span>
        </ContactInfo>
      </Header>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceItem>
          <ExperienceHeader>
            <Company>Tech Company</Company>
            <Date>2020 - Present</Date>
          </ExperienceHeader>
          <Role>Senior Product Designer</Role>
          <Description>
            Lead the design of enterprise-level products, focusing on user experience and interface design. Collaborate with cross-functional teams to deliver high-quality solutions.
          </Description>
          <Description>
            • Increased user engagement by 40% through improved UX design
            • Mentored junior designers and conducted design workshops
            • Established design system used across company products
          </Description>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <Company>Design Studio</Company>
            <Date>2018 - 2020</Date>
          </ExperienceHeader>
          <Role>Product Designer</Role>
          <Description>
            Designed and shipped multiple products for clients across various industries. Focused on creating intuitive and engaging user experiences.
          </Description>
          <Description>
            • Led design for 5 major client projects
            • Improved conversion rates by 25% through UX optimization
            • Created and maintained design systems for clients
          </Description>
        </ExperienceItem>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <SkillTitle>Design</SkillTitle>
            <SkillList>
              <SkillItem>UI/UX Design</SkillItem>
              <SkillItem>Wireframing</SkillItem>
              <SkillItem>Prototyping</SkillItem>
              <SkillItem>Design Systems</SkillItem>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Tools</SkillTitle>
            <SkillList>
              <SkillItem>Figma</SkillItem>
              <SkillItem>Adobe XD</SkillItem>
              <SkillItem>Sketch</SkillItem>
              <SkillItem>InVision</SkillItem>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Other</SkillTitle>
            <SkillList>
              <SkillItem>User Research</SkillItem>
              <SkillItem>Design Thinking</SkillItem>
              <SkillItem>HTML/CSS</SkillItem>
              <SkillItem>Agile Methodologies</SkillItem>
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        <ExperienceItem>
          <ExperienceHeader>
            <Company>Design University</Company>
            <Date>2014 - 2018</Date>
          </ExperienceHeader>
          <Role>Bachelor of Design</Role>
          <Description>
            Focused on Interaction Design and User Experience. Graduated with honors.
          </Description>
        </ExperienceItem>
      </Section>
    </Container>
  );
};

export default Resume; 