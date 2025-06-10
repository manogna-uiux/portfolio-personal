import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background from './components/Background';
import LandingPage from './pages/LandingPage';
import ProjectPage from './components/ProjectPage';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Resume from './pages/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #010101;
    color: #f0f0f0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .secondary-text {
    color: rgba(240, 240, 240, 0.64);
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: inherit;
    }
  }
`;

const AppContent = () => {
  const location = useLocation();
  const isResumePage = location.pathname === '/resume';

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Background />
      <CustomCursor />
      {!isResumePage && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project1" element={<ProjectPage />} />
        <Route path="/project2" element={<ProjectPage />} />
        <Route path="/project3" element={<ProjectPage />} />
        <Route path="/project4" element={<ProjectPage />} />
        <Route path="/project5" element={<ProjectPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
