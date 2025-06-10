import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

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
`;

const NavLinks = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
`;

const ProjectNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
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
`;

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isProjectPage = location.pathname.startsWith('/project');

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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getProjectNavigation = () => {
    const currentProject = parseInt(location.pathname.replace('/project', ''));
    const prevProject = currentProject > 1 ? currentProject - 1 : 5;
    const nextProject = currentProject < 5 ? currentProject + 1 : 1;

    return {
      prev: `/project${prevProject}`,
      next: `/project${nextProject}`
    };
  };

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer className='flex gap-2 space-inline-between'>
        <Logo to="/">manu<span className="italic-text">namburi</span></Logo>
        <LogoImage to="/">
          <img src={logo} alt="Logo" />
        </LogoImage>
        <NavLinks className='flex-col items-start'>
          {!isProjectPage ? (
            <>
              <NavLink
                to="/#projects" 
                $isActive={location.pathname === '/' && location.hash === '#projects'}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Selected Works
              </NavLink>
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
            </>
          ) : (
            <ProjectNavLinks>
              {parseInt(location.pathname.replace('/project', '')) > 1 && (
                <NavLink to={getProjectNavigation().prev} $isActive={false}>
                  ← Previous Work
                </NavLink>
              )}
              {parseInt(location.pathname.replace('/project', '')) < 5 && (
                <NavLink to={getProjectNavigation().next} $isActive={false}>
                  Next Work →
                </NavLink>
              )}
            </ProjectNavLinks>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 