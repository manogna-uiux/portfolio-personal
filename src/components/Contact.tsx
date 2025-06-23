import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import contImage from '../assets/ghj.png';

gsap.registerPlugin(ScrollTrigger);

const ContactContainer = styled.section`
  min-height: 80vh;
  margin-top: 20rem;
  position: relative;
  overflow: hidden;
  width: 90vw;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  background: linear-gradient(to middle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);

  @media (max-width: 768px) {
    width: 90vw;
    padding: 0 1rem;
    margin-top: 8rem;
  }
`;

const Content = styled.div`
  width: 90vw;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;
  z-index: 100;
  align-items: end;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextColumn = styled.div`
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CalloutText = styled.div`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: rgba(240, 240, 240, 1);
  margin-bottom: 1rem;
  text-align: left;
  line-height: 1.3;
  max-width: 520px;

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 100%;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ContImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin-top: 4rem;
  border-radius: 4px;
  mix-blend-mode: lighten;

  @media (max-width: 1024px) {
    margin: 2rem auto 0;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 10rem;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
    align-items: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(240, 240, 240, 0.8);
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(240, 240, 240, 1);
    transform: translateX(10px);
  }

  svg {
    color: rgba(240, 240, 240, 0.6);
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: rgba(240, 240, 240, 0.4);
  font-size: 0.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.25rem;
  border-radius: 4px;
  outline: none;

  &:hover {
    color: rgba(240, 240, 240, 0.8);
    background: rgba(240, 240, 240, 0.1);
  }

  &:focus {
    outline: none;
  }

  &.copied {
    color: #4ade80;
  }
`;

const Toast = styled.div<{ show: boolean }>`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.9);
  color: #4ade80;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(74, 222, 128, 0.3);
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  z-index: 1000;
  transform: translateY(${props => props.show ? '0' : '-150%'});
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
`;

const LetsBuildText = styled.div`
  font-family: var(--font-display);
  font-size: 9rem;
  color: rgba(240, 240, 240, 1);
  text-align: left;
  line-height: 1.1;
  font-weight: bold;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: rem;
  }

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-100px'
    });

    columnsRef.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Cleanup toast on component unmount
  useEffect(() => {
    return () => {
      setShowToast(false);
    };
  }, []);

  const setColumnRef = (index: number) => (el: HTMLDivElement | null) => {
    columnsRef.current[index] = el;
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastMessage(`${type} copied to clipboard!`);
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <ContactContainer ref={containerRef}>
        <Content>
          <TextColumn ref={setColumnRef(0)}>
            <CalloutText>
              Breathe Life into your ideas with Functionality & Creativity
            </CalloutText>
            <ContImage src={contImage} alt="Contact" />
          </TextColumn>

          <TextColumn ref={setColumnRef(1)}>
            <ContactInfo>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>manogna.design@gmail.com</span>
                <CopyButton onClick={() => copyToClipboard('manogna.design@gmail.com', 'Email')}>
                  <FontAwesomeIcon icon={faCopy} size='xs' />
                </CopyButton>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faPhone} />
                <span>+91 95350 86399</span>
                <CopyButton onClick={() => copyToClipboard('+919535086399', 'Phone number')}>
                  <FontAwesomeIcon icon={faCopy} size='xs'/>
                </CopyButton>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Right Now: India</span>
              </ContactItem>
            </ContactInfo>
            <LetsBuildText>
              Let's Build!
            </LetsBuildText>
          </TextColumn>
        </Content>
      </ContactContainer>
      
      {showToast && (
        <Toast show={showToast}>
          {toastMessage}
        </Toast>
      )}
    </>
  );
};

export default Contact; 