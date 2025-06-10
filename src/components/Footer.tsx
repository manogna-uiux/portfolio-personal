import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin, faDribbble, faMedium } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(240, 240, 240, 0.1);
`;

const Logo = styled.div`
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: rgba(240, 240, 240, 1);
  letter-spacing: 0.6px;

  .italic-text {
    font-family: 'Fg', sans-serif;
    font-weight: 100;
    font-style: italic;
    letter-spacing: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
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

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.6);
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

const Link = styled.a`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(240, 240, 240, 1);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <TopSection>
          <Logo>
            manu<span className="italic-text">namburi</span>
          </Logo>
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
        </TopSection>
        <BottomSection>
          <Copyright>
            © {new Date().getFullYear()} Manu Namburi. All rights reserved.
          </Copyright>
          <Links>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </Links>
        </BottomSection>
      </Content>
    </FooterContainer>
  );
};

export default Footer; 