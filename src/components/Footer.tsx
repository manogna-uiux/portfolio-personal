import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin, faDribbble, faMedium } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  padding: 2rem 2rem;
  margin-top: 8rem;
  background: rgba(0, 0, 0);
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  border-top: 1px solid rgba(240, 240, 240, 0.1);
`;

const Content = styled.div`
  margin: 0 auto;
  width: 90vw;
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.6);
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: rgba(240, 240, 240, 0.6);
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(240, 240, 240, 1);
    transform: translateY(-5px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <BottomSection>
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
          <Copyright>
            © {new Date().getFullYear()} Manu Namburi. All rights reserved.
          </Copyright>
        </BottomSection>
      </Content>
    </FooterContainer>
  );
};

export default Footer; 