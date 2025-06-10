import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(240, 240, 240, 0.72);
  max-width: 800px;
  line-height: 1.6;
`;

const Project3 = () => {
  return (
    <Container>
      <Title>Project 3</Title>
      <Description>
        This is a detailed description of Project 3. It showcases the design process,
        challenges faced, and solutions implemented.
      </Description>
    </Container>
  );
};

export default Project3; 