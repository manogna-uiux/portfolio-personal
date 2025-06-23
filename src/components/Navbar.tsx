import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

interface WindowWithLenis extends Window {
  lenis?: {
    scrollTo: (target: number, options?: { duration: number }) => void;
  };
}

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  padding-top: 1.4em;
  padding-bottom: 1.4em;
  z-index: 200;
  transition: all 0.3s ease;
  max-width: 100vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    backdrop-filter: ${props => props.$isScrolled ? 'blur(8px)' : 'none'};
    mask: linear-gradient(black, black, transparent);
    transition: all 0.3s ease;
  }
`;

const NavContainer = styled.div`
  width: 90vw;
  max-width: 1800px;
  margin: 0 auto;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: #f0f0f0;
  text-decoration: none;
  letter-spacing: 0.6px;
  display: flex;
  gap: 2px;
  position: relative;
  width: 120px;

  .italic-text {
    font-family: 'Fg', sans-serif;
    font-weight: 100;
    font-style: italic;
    letter-spacing: 0;
  }

  &:hover {
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: auto;
  }
`;

const LogoImage = styled(Link)`
  height: 24px;
  width: auto;
  margin-left: 0.5rem;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;

  img {
    height: 18px;
    width: auto;
  }

  @media (max-width: 768px) {
    margin-left: 0.3rem;
    
    img {
      height: 16px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-family: 'Fg', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: ${props => props.$isActive ? '#f0f0f0' : 'rgba(240, 240, 240, 0.64)'};
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  transition: all 0.2s ease;
  padding: 4px 0;

  &:hover {
    color: #f0f0f0;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #f0f0f0;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      // Use Lenis for smooth scrolling
      const lenis = (window as WindowWithLenis).lenis;
      if (lenis) {
        lenis.scrollTo(offsetPosition, { duration: 1.5 });
      } else {
        // Fallback to native smooth scrolling
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">manu<span className="italic-text">namburi</span></Logo>
        <LogoImage to="/">
          <img src={logo} alt="Logo" />
        </LogoImage>
        <NavLinks>
          <NavLink
            to="/#resume" 
            $isActive={location.pathname === '/' && location.hash === '#resume'}
            onClick={(e) => handleNavClick(e, 'resume')}
          >
            Resume
          </NavLink>
          <NavLink
            to="/#contact" 
            $isActive={location.pathname === '/' && location.hash === '#contact'}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 