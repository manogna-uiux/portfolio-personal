import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Background from './components/Background';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Resume from './pages/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

interface WindowWithLenis extends Window {
  lenis?: Lenis;
}

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
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Make lenis globally accessible
    (window as WindowWithLenis).lenis = lenis;

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      delete (window as WindowWithLenis).lenis;
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
