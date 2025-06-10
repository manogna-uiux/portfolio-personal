import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
  min-height: 100vh;
  background-color: #010101;
  color: #f0f0f0;
  position: relative;
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 8rem;
`;

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <Container>
      <Navbar />
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default ProjectLayout; 