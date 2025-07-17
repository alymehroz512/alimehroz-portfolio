import React, { useState, useCallback } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { useSpring, animated as Animated } from 'react-spring';
import { FaUser, FaBullseye, FaGraduationCap, FaLightbulb } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import '../styles/About.css';

function AnimatedHR() {
  const style = useSpring({
    from: { transform: 'scaleX(0)', opacity: 0 },
    to: { transform: 'scaleX(1)', opacity: 1 },
    config: { tension: 250, friction: 18 },
    delay: 700,
  });

  return (
    <Animated.hr
      style={style}
      className="animated-hr"
    />
  );
}

function ZoomBody({ isVisible, children }) {
  const crunchStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    config: isVisible
      ? { tension: 300, friction: 10, clamp: false, precision: 0.01 }
      : { duration: 200 },
  });

  return (
    <Animated.div style={crunchStyles} className="accordion-body-wrapper">
      {children}
    </Animated.div>
  );
}

function About() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  const [activeKey, setActiveKey] = useState('0');

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="about-wrapper position-relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#ffffff" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#4c3b6e" },
            links: {
              color: "#4c3b6e",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
            },
            number: {
              value: 50,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="particles-bg"
      />

      <Animated.div style={fadeIn} className="container-fluid about-container mt-5">
        <Container>
          <h1 className="about-heading mx-1">Frontend & Forward</h1>
          <AnimatedHR />
          <p className="about-intro">
            Driven by a passion for creating intuitive and dynamic user interfaces, I specialize in transforming complex designs into accessible, high-performance web experiences. My journey in frontend development is fueled by a commitment to continuous learning, embracing the latest technologies, and crafting solutions that bridge the gap between aesthetics and functionality.
          </p>
          <div className="accordion-container">
            <Accordion activeKey={activeKey} onSelect={setActiveKey} className="about-accordion advanced-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="accordion-header-content">
                    <FaUser className="accordion-icon" />
                    <span>Who Am I?</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ZoomBody isVisible={activeKey === '0'}>
                    I’m a detail-oriented frontend developer with a passion for crafting clean, scalable, and responsive web applications. With a background in software engineering and real-world React project experience, I focus on building user-first interfaces that transform designs into seamless digital experiences.
                  </ZoomBody>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="accordion-header-content">
                    <FaBullseye className="accordion-icon" />
                    <span>Career Goals</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ZoomBody isVisible={activeKey === '1'}>
                    <ul>
                      <li>Lead frontend initiatives with design-to-code execution</li>
                      <li>Contribute to scalable component libraries</li>
                      <li>Improve performance & code quality</li>
                      <li>Learn and adopt DevOps & testing tools</li>
                    </ul>
                  </ZoomBody>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="accordion-header-content">
                    <FaGraduationCap className="accordion-icon" />
                    <span>Education</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ZoomBody isVisible={activeKey === '2'}>
                    <strong>Bachelor’s in Software Engineering</strong><br />
                    PMAS Arid Agriculture University Rawalpindi – Graduated 2024
                  </ZoomBody>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="accordion-header-content">
                    <FaLightbulb className="accordion-icon" />
                    <span>Hobbies & Interests</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ZoomBody isVisible={activeKey === '3'}>
                    <ul>
                      <li>Tech blogging and exploring open-source projects</li>
                      <li>Design to development conversion challenges</li>
                      <li>UI/UX podcasts and conferences</li>
                      <li>Gaming, music, and frontend YouTube tutorials</li>
                    </ul>
                  </ZoomBody>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </Animated.div>
    </div>
  );
}

export default About;