import styled from 'styled-components';
import About from '../components/About';
import Skills from '../components/Skills';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 90vw;
  margin: 0 auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
    max-width: 100vw;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <About />
      <Skills />
    </Container>
  );
};

export default LandingPage; 