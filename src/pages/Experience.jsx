import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSpring, animated as Animated } from "react-spring";
import { FaChevronUp } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/Experience.css";
import expSvgOne from "../assets/exp-no-1.svg";
import expSvgTwo from "../assets/exp-no-2.svg";
import expSvgThree from "../assets/exp-no-3.svg";

function AnimatedHR() {
  const style = useSpring({
    from: { transform: "scaleX(0)", opacity: 0 },
    to: { transform: "scaleX(1)", opacity: 1 },
    config: { tension: 250, friction: 18 },
    delay: 700,
  });
  return <Animated.hr style={style} className="animated-hr" />;
}

function ExperienceCard({ image, role, company, meta, children, ribbon }) {
  return (
    <div
      className="experience-card glass-bg"
      style={{ border: "2px solid #4c3b6e" }}
    >
      {ribbon && <div className="experience-ribbon">{ribbon}</div>}
      <div className="experience-card-header">
        <div className="experience-card-text">
          <h2 className="experience-role">{company}</h2>
          <h3 className="experience-subrole">{role}</h3>
          <div className="experience-meta">{meta}</div>
        </div>
        <img src={image} alt="Experience" className="experience-card-img" />
      </div>
      <div className="experience-card-body">{children}</div>
    </div>
  );
}

export default function Experience() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const getResponsiveRibbon = (fullText, shortText) => {
    return windowWidth <= 425 ? shortText : fullText;
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "10px",
    lineHeight: "1.6",
  };

  return (
    <div className="experience-wrapper position-relative">
      <Particles
        id="tsparticles-experience"
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
      <Animated.div
        style={fadeIn}
        className="container-fluid experience-container"
      >
        <Container>
          <h1 className="experience-heading">Journey Blocks</h1>
          <AnimatedHR />
          <p className="experience-intro">
            My professional journey in web development has been marked by
            hands-on experience in building scalable, user-focused applications.
            From internships to full-time roles, I've honed my skills in
            frontend and full-stack development, delivering impactful projects
            that prioritize performance, accessibility, and collaboration.
          </p>
          <div className="experience-cards">
            {/* PRO EXP NO. 3 — CURRENT ROLE (UNCHANGED) */}
            <ExperienceCard
              image={expSvgThree}
              role="React JS Frontend Developer | MERN Stack Developer"
              company="Rizviz International Impex"
              meta={
                <>
                  <span>Aug 2025 – Present</span>
                  <br />
                  <span>Lahore, Pakistan</span>
                  <br />
                  <span>On-site</span>
                </>
              }
              ribbon={getResponsiveRibbon(
                "Professional Experience No. 3",
                "Pro Exp No. 3"
              )}
            >
              <ul style={listStyle}>
                <li>
                  Joined <b>Rizviz International Impex</b> as a{" "}
                  <b>React JS Frontend Developer | MERN Stack Developer</b>,
                  delivering responsive, accessible, and high-performance
                  interfaces integrated with secure REST APIs.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  Currently building the <b>Silmun Recruiter &amp; Staffing</b>{" "}
                  website: job listings &amp; detail pages, multi-step candidate
                  application flows, ATS-style pipeline stages, saved filters
                  &amp; search, protected routes (JWT in cookies), and
                  SEO-friendly marketing pages with consistent brand UI.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  Developed the <b>FadePoint Admin Dashboard</b> for an{" "}
                  <b>e-commerce</b> store focused on accessories
                  products/categories CRUD, inventory &amp; pricing management,
                  image uploads, bulk CSV import, order tracking, and role-based
                  access — using <b>React</b>, <b>Redux Toolkit</b>, and{" "}
                  <b>Axios</b> with RESTful APIs.{" "}
                  Currently managing <b>1,000,000 products</b> in the catalog
                  with server-side pagination, indexing, and bulk operations.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  Built rich UI motion and micro-interactions with{" "}
                  <b>react-spring</b>, <b>framer-motion</b>,{" "}
                  <b>particles.js</b>, and <b>Three.js</b> implemented smooth
                  easing, scroll/hover-triggered effects, and performance-minded
                  animations (transform-only, debounced observers,{" "}
                  will-change where appropriate).
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  Raised code quality via a small reusable component library,
                  route-level code-splitting, robust form validation, and tests
                  (unit/integration) with <b>Jest</b>.
                </li>
              </ul>
            </ExperienceCard>

            {/* PRO EXP NO. 2 — UPDATED TO PAST TENSE */}
            <ExperienceCard
              image={expSvgOne}
              role="React JS Frontend Developer"
              company="2B Vision Technologies"
              meta={
                <>
                  <span>Nov 2024 – Jul 2025</span>
                  <br />
                  <span>Lahore, Pakistan</span>
                  <br />
                  <span>On-site</span>
                </>
              }
              ribbon={getResponsiveRibbon(
                "Professional Experience No. 2",
                "Pro Exp No. 2"
              )}
            >
              <ul style={listStyle}>
                <li>
                  At <b>2B Vision Technologies</b>, I took a leading role
                  in developing modern web applications using <b>React</b>,{" "}
                  <b>Redux Toolkit</b>, and <b>Axios</b>. I{" "}
                  worked closely with cross-functional teams and{" "}
                  contributed to key projects that emphasized
                  performance, scalability, and clean UI design.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  One of my flagship projects was a fully responsive{" "}
                  <b>Admin Dashboard</b>. I was responsible for building
                  dynamic modules for user data management, system
                  configuration, and analytics visualization. The application{" "}
                  integrated <b>JWT</b> with cookies for authentication and
                  authorization, and RESTful APIs via Redux, with a focus on
                  real-time updates and a seamless user experience. To ensure
                  code quality, I implemented extensive unit and
                  integration testing using <b>Jest</b>.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  In addition to the Admin Dashboard, I developed a
                  Trello-style <b>TaskFlow</b> application that{" "}
                  enabled users to manage boards, folders, and tasks with
                  real-time UI updates and status tracking. I also{" "}
                  contributed to a social networking app,{" "}
                  <b>MySocial</b>, building reusable UI components and{" "}
                  optimized performance through UI/UX enhancements and
                  manual testing.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  My experience at 2B Vision Technologies was{" "}
                  instrumental in sharpening my frontend development skills,
                  improving my ability to deliver high-quality code, and
                  deepening my understanding of scalable application
                  architecture.
                </li>
              </ul>
            </ExperienceCard>

            {/* PRO EXP NO. 1 — UNCHANGED */}
            <ExperienceCard
              image={expSvgTwo}
              role="Software Engineer Internship"
              company="InterCraft Pvt. Ltd."
              meta={
                <>
                  <span>Dec 2023 – Jul 2024</span>
                  <br />
                  <span>Islamabad, Pakistan</span>
                  <br />
                  <span>Hybrid</span>
                </>
              }
              ribbon={getResponsiveRibbon(
                "Professional Experience No. 1",
                "Pro Exp No. 1"
              )}
            >
              <ul style={listStyle}>
                <li>
                  During my internship as a MERN Stack Developer at{" "}
                  <b>InterCraft</b>, I gained invaluable experience in
                  developing web applications using <b>React</b> and{" "}
                  <b>Node.js</b>. I was actively involved in the end-to-end
                  development process, focusing on building responsive and
                  user-friendly interfaces that aligned with client
                  requirements.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  Throughout my internship, I consistently delivered tangible
                  value by contributing to several key projects, and completed
                  my <b>Final Year Project</b> — a tourism site{" "}
                  <b>JourneyXterem</b> with virtual reality. This helped me
                  enhance my skills in both frontend and backend development.
                </li>
              </ul>
              <ul style={listStyle}>
                <li>
                  My time at InterCraft was instrumental in solidifying my
                  technical abilities and understanding of full-stack
                  development. I'm grateful for the opportunity to have worked
                  with a talented team and look forward to applying the
                  knowledge and experience I gained in future roles.
                </li>
              </ul>
            </ExperienceCard>
          </div>
        </Container>
      </Animated.div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-button"
          title="Scroll to Top"
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
}
