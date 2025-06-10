import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faLinkedin, faDribbble, faMedium } from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ContactContainer = styled.section`
  min-height: 100vh;
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 12rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 100;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeading = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: rgba(240, 240, 240, 1);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  color: rgba(240, 240, 240, 0.64);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'Fg', sans-serif;
  font-size: 0.9rem;
  color: rgba(240, 240, 240, 0.8);
`;

const Input = styled.input`
  background: rgba(240, 240, 240, 0.1);
  border: 1px solid rgba(240, 240, 240, 0.2);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: rgba(240, 240, 240, 0.8);
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(240, 240, 240, 0.4);
    background: rgba(240, 240, 240, 0.15);
  }
`;

const TextArea = styled.textarea`
  background: rgba(240, 240, 240, 0.1);
  border: 1px solid rgba(240, 240, 240, 0.2);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  color: rgba(240, 240, 240, 0.8);
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(240, 240, 240, 0.4);
    background: rgba(240, 240, 240, 0.15);
  }
`;

const SubmitButton = styled.button`
  background: transparent;
  border: 1px solid rgba(240, 240, 240, 0.2);
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  color: rgba(240, 240, 240, 0.8);
  font-family: 'Fg', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: rgba(240, 240, 240, 0.1);
    border-color: rgba(240, 240, 240, 0.4);
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    if (left && right) {
      gsap.fromTo(
        left,
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: left,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        right,
        {
          x: 100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: right,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactContainer id="contact">
      <Content>
        <LeftColumn ref={leftRef}>
          <SectionHeading>Get in Touch</SectionHeading>
          <Description>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </Description>
          <ContactInfo>
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>manu@example.com</span>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faPhone} />
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>San Francisco, CA</span>
            </ContactItem>
          </ContactInfo>
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
        </LeftColumn>
        <RightColumn ref={rightRef}>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" required />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" required />
            </InputGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </RightColumn>
      </Content>
    </ContactContainer>
  );
};

export default Contact; 