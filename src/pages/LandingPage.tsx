import styled from 'styled-components';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const LandingPage = () => {
  return (
    <Container>
      <Hero />
      <Projects />
      <About />
      <Skills />
    </Container>
  );
};

export default LandingPage; 