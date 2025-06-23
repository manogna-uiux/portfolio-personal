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
  z-index: 200;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    backdrop-filter: ${props => props.$isScrolled ? 'blur(4px)' : 'none'};
    mask: linear-gradient(black, black, transparent);
    transition: all 0.3s ease;
  }
`;

const NavContainer = styled.div`
  max-width: 1560px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: center;
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

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    right: 0;
    background: #000;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    min-width: 200px;
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
  width: 120px;

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
    display: none;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(240, 240, 240, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  width: 24px;
  height: 24px;
  position: relative;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: #f0f0f0;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: ${props => props.$isOpen ? '50%' : '30%'};
      transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      top: ${props => props.$isOpen ? '50%' : '70%'};
      transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 198;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when location changes
    setIsMenuOpen(false);
    
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on navigation
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">manu<span className="italic-text">namburi</span></Logo>
        <LogoImage to="/">
          <img src={logo} alt="Logo" />
        </LogoImage>
        <NavLinks $isOpen={isMenuOpen}>
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
        <HamburgerButton $isOpen={isMenuOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </NavContainer>
      <Overlay $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </Nav>
  );
};

export default Navbar; 