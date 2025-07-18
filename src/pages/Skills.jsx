import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated as Animated } from "react-spring";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaFlask,
  FaBug,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaChrome,
  FaUserFriends,
  FaLightbulb,
  FaClock,
  FaSyncAlt,
  FaMobileAlt,
  FaExchangeAlt,
  FaServer,
  FaDatabase,
  FaCogs,
  FaShareAlt,
  FaHdd,
  FaRocket,
  FaCloud,
  FaCubes,
  FaTachometerAlt,
  FaUniversalAccess,
  FaCheckCircle,
  FaCode,
  FaChevronUp,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/Skills.css";

// Function to calculate experience years dynamically
const calculateExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return years === 1
    ? `${years} Year of Experience`
    : `${years} Years of Experience`;
};

function AnimatedHR() {
  const style = useSpring({
    from: { transform: "scaleX(0)", opacity: 0 },
    to: { transform: "scaleX(1)", opacity: 1 },
    config: { tension: 250, friction: 18 },
    delay: 700,
  });

  return <Animated.hr style={style} className="animated-hr" />;
}

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        icon: <FaHtml5 />,
        title: "HTML5",
        desc: "Structured semantic, accessible markup.\nCreated forms with validation and inputs.\nUsed meta tags for SEO friendliness.\nOrganized content for readability.\nEmbedded media and interactive content.",
        startYear: 2022,
      },
      {
        icon: <FaCss3Alt />,
        title: "CSS3",
        desc: "Styled using Flexbox and CSS Grid.\nCreated animations and transitions.\nApplied custom variables for themes.\nUsed media queries for responsiveness.\nBuilt mobile-first adaptive layouts.",
        startYear: 2022,
      },
      {
        icon: <FaJsSquare />,
        title: "JavaScript ES6+",
        desc: "Used modern JS syntax like let/const and arrow functions.\nApplied destructuring and template literals.\nWorked with promises, async/await.\nUsed array methods like map, filter.\nPracticed object spread/rest operations.",
        startYear: 2024,
      },
      {
        icon: <FaReact />,
        title: "React.js",
        desc: "Developed interactive UI with functional components.\nUtilized hooks like useState and useEffect.\nBuilt reusable components for modularity.\nManaged side effects and component lifecycle.\nIntegrated with routing and state tools.",
        startYear: 2024,
      },
      {
        icon: <FaReact />,
        title: "JSX",
        desc: "Used HTML-like syntax in JavaScript.\nEmbedded logic inside UI components.\nUsed props to pass data.\nIntegrated conditions and loops into render.\nMade UIs dynamic and readable.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        icon: <FaServer />,
        title: "Node.js",
        desc: "Built server-side applications with Node.js.\nUsed event-driven, non-blocking I/O model.\nCreated RESTful APIs with Express.\nManaged packages with npm.\nHandled asynchronous operations effectively.",
        startYear: 2024,
      },
      {
        icon: <FaDatabase />,
        title: "MongoDB",
        desc: "Designed and queried NoSQL databases.\nUsed MongoDB Atlas for cloud storage.\nImplemented CRUD operations.\nStructured schemas for flexible data.\nOptimized queries for performance.",
        startYear: 2024,
      },
      {
        icon: <FaCogs />,
        title: "Express.js",
        desc: "Developed RESTful APIs with Express.\nConfigured middleware for request handling.\nManaged routing and controllers.\nIntegrated with MongoDB for data.\nEnsured secure and scalable backends.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Styling & UI Frameworks",
    skills: [
      {
        icon: <FaCss3Alt />,
        title: "Tailwind CSS",
        desc: "Used utility-first classes for rapid styling.\nBuilt responsive layouts using breakpoints.\nApplied hover/focus states with ease.\nCreated custom themes and variants.\nStreamlined development with config files.",
        startYear: 2024,
      },
      {
        icon: <FaBootstrap />,
        title: "Bootstrap",
        desc: "Used grid system for layout structure.\nApplied pre-built components.\nIntegrated responsive navbar and modals.\nLeveraged spacing and typography utilities.\nEnsured mobile responsiveness.",
        startYear: 2022,
      },
      {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        desc: "Designed mobile-first UIs.\nUsed breakpoints for adaptability.\nEnsured cross-device consistency.\nTested on various screen sizes.\nHandled orientation and viewport issues.",
        startYear: 2022,
      },
    ],
  },
  {
    title: "API Integration",
    skills: [
      {
        icon: <FaExchangeAlt />,
        title: "Axios",
        desc: "Used Axios for HTTP requests.\nConfigured base URLs and headers.\nHandled errors with try/catch blocks.\nUsed interceptors for auth flows.\nIntegrated APIs with frontend logic.",
        startYear: 2024,
      },
      {
        icon: <FaServer />,
        title: "RESTful APIs",
        desc: "Worked with GET, POST, PUT, DELETE methods.\nParsed and rendered JSON data.\nHandled dynamic routing and params.\nUsed async functions for fetch calls.\nBuilt CRUD features in apps.",
        startYear: 2024,
      },
      {
        icon: <FaDatabase />,
        title: "React Query",
        desc: "Fetched data with useQuery hooks.\nHandled loading, success, and errors.\nUsed caching to avoid refetches.\nConfigured stale and refetch intervals.\nSimplified API state management.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "State & Data Management",
    skills: [
      {
        icon: <FaCogs />,
        title: "Redux Toolkit",
        desc: "Implemented global state using Redux Toolkit.\nUtilized slices and reducers for logic separation.\nConfigured middleware for API calls.\nCreated async thunks for data fetching.\nImproved app scalability and structure.",
        startYear: 2024,
      },
      {
        icon: <FaShareAlt />,
        title: "Context API",
        desc: "Shared global state across kjerky components.\nAvoided prop drilling in deep trees.\nUsed useContext for state consumption.\nCreated custom context providers.\nImproved app modularity.",
        startYear: 2024,
      },
      {
        icon: <FaHdd />,
        title: "LocalStorage & SessionStorage",
        desc: "Stored data persistently in browser.\nSaved tokens and preferences locally.\nHandled JSON parsing/stringifying.\nUsed effect hooks for syncing data.\nCreated auto-logout logic.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      {
        icon: <FaNpm />,
        title: "npm / yarn",
        desc: "Installed libraries and managed versions.\nUsed scripts for building and testing.\nManaged package.json dependencies.\nResolved conflicts and lock files.\nPublished and configured packages.",
        startYear: 2024,
      },
      {
        icon: <FaGitAlt />,
        title: "Git",
        desc: "Used git for version control.\nCreated branches for features.\nMerged pull requests efficiently.\nUsed rebase, stash, and revert.\nTracked history and commits.",
        startYear: 2024,
      },
      {
        icon: <FaGithub />,
        title: "GitHub",
        desc: "Hosted repositories and projects.\nCollaborated using pull requests.\nManaged issues and project boards.\nSet up GitHub Actions for CI/CD.\nUsed forks and clone operations.",
        startYear: 2022,
      },
      {
        icon: <FaChrome />,
        title: "Chrome DevTools",
        desc: "Inspected and debugged UI elements.\nMonitored console and network calls.\nUsed Lighthouse for performance.\nTracked layout and paint issues.\nTweaked styles live in browser.",
        startYear: 2024,
      },
      {
        icon: <FaReact />,
        title: "React DevTools",
        desc: "Inspected component hierarchy.\nViewed and edited props/state live.\nDebugged render and hook issues.\nTracked re-renders and performance.\nIdentified bottlenecks in UI.",
        startYear: 2024,
      },
      {
        icon: <FaCode />,
        title: "Visual Studio Code",
        desc: "Used as primary code editor.\nLeveraged extensions for productivity.\nConfigured debugging and linting.\nManaged tasks and snippets.\nIntegrated with Git and terminals.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Testing",
    skills: [
      {
        icon: <FaFlask />,
        title: "Jest",
        desc: "Wrote unit and integration tests.\nCreated mocks and spies for logic.\nUsed matchers and snapshot testing.\nSet up coverage reporting.\nValidated functions and components.",
        startYear: 2024,
      },
      {
        icon: <FaBug />,
        title: "React Testing Library",
        desc: "Tested components via user interaction.\nQueried elements using roles/labels.\nSimulated events like clicks/typing.\nAsserted DOM output post-events.\nPromoted accessibility-first testing.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Build Tools & Deployment",
    skills: [
      {
        icon: <FaCogs />,
        title: "Vite / Webpack",
        desc: "Used Vite for fast dev servers.\nConfigured build output options.\nHandled static assets and imports.\nOptimized bundles and chunks.\nEnabled HMR for live reloads.",
        startYear: 2024,
      },
      {
        icon: <FaRocket />,
        title: "Netlify / Vercel",
        desc: "Deployed React apps easily.\nConfigured domains and redirects.\nEnabled CI/CD from GitHub.\nHandled environment variables.\nMonitored builds and logs.",
        startYear: 2022,
      },
      {
        icon: <FaCloud />,
        title: "Firebase Hosting / GitHub Pages",
        desc: "Hosted static files and apps.\nConfigured routes and rewrites.\nUsed CLI for deployment steps.\nEnabled HTTPS and CDN.\nManaged project settings and quota.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Best Practices",
    skills: [
      {
        icon: <FaCubes />,
        title: "Component Architecture",
        desc: "Designed modular component structures.\nSeparated concerns and logic cleanly.\nPromoted reusable components.\nUsed container/presentational patterns.\nImproved code maintainability.",
        startYear: 2024,
      },
      {
        icon: <FaTachometerAlt />,
        title: "Lazy Loading & Code Splitting",
        desc: "Used React.lazy for on-demand loads.\nSplit bundles for performance.\nReduced initial load time.\nHandled fallback loading UI.\nImproved TTI and Lighthouse scores.",
        startYear: 2024,
      },
      {
        icon: <FaUniversalAccess />,
        title: "Accessibility (a11y)",
        desc: "Followed ARIA and WCAG guidelines.\nUsed semantic HTML tags.\nEnsured keyboard navigability.\nUsed alt texts and labels properly.\nPromoted inclusive design.",
        startYear: 2024,
      },
      {
        icon: <FaCheckCircle />,
        title: "Clean Code & Linting",
        desc: "Used ESLint for consistent syntax.\nApplied Prettier for formatting.\nRemoved unused code regularly.\nUsed meaningful variable names.\nFollowed best coding practices.",
        startYear: 2024,
      },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      {
        icon: <FaUserFriends />,
        title: "Communication",
        desc: "Collaborated effectively in teams.\nExpressed ideas clearly and concisely.\nUsed project management tools.\nProvided and accepted feedback.\nKept stakeholders updated.",
        startYear: 2022,
      },
      {
        icon: <FaLightbulb />,
        title: "Problem Solving",
        desc: "Broke problems into smaller tasks.\nUsed debugging tools to trace issues.\nResearched solutions independently.\nOptimized logic for performance.\nApproached bugs methodically.",
        startYear: 2022,
      },
      {
        icon: <FaClock />,
        title: "Time Management",
        desc: "Planned tasks with priority.\nMet project deadlines regularly.\nUsed tools like Trello/Jira.\nAvoided procrastination.\nBalanced multiple assignments efficiently.",
        startYear: 2022,
      },
      {
        icon: <FaSyncAlt />,
        title: "Adaptability",
        desc: "Quickly learned new tech stacks.\nHandled changing requirements.\nWorked in fast-paced teams.\nTook feedback constructively.\nAdjusted to diverse workflows.",
        startYear: 2022,
      },
    ],
  },
];

function Skills() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 220, friction: 20 },
    delay: 500,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "#ffffff" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#4c3b6e" },
      links: {
        color: "#4c3b6e",
        distance: 120,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        value: 25,
        density: { enable: true, area: 1000 },
      },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
    pauseOnOutsideViewport: true,
  };

  return (
    <div className="skills-wrapper position-relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles-bg"
      />
      <Animated.div
        style={fadeIn}
        className="container-fluid skills-wrapper"
      >
        <Container>
          <h1 className="skills-heading">Frontend Force</h1>
          <AnimatedHR />
          <p className="skills-intro">
            My expertise spans a robust set of technical and soft skills, enabling me to build scalable, responsive, and user-centric web applications. By leveraging modern tools and best practices, I deliver solutions that combine performance, accessibility, and seamless user experiences, all while thriving in collaborative and fast-paced environments.
          </p>
          {skillCategories.map((section, idx) => (
            <div key={idx} className="mb-0">
              <div className="section-subheading w-100 text-start">
                {section.title}
              </div>
              <Row className="g-1 mt-3">
                {section.skills.map((skill, i) => (
                  <Col xs={12} md={12} lg={12} key={i}>
                    <Animated.div style={cardAnimation}>
                      <Card
                        className="skill-card"
                        style={{
                          borderRadius: 0,
                          border: "2px solid #4c3b6e",
                          background: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Card.Body className="d-flex flex-row align-items-start">
                          <div className="skill-icon-container">
                            <div className="skill-icon-wrapper">
                              {skill.icon}
                            </div>
                          </div>
                          <div className="skill-content">
                            <h5 className="skill-subtitle">{skill.title}</h5>
                            <hr className="skill-hr" />
                            <p className="skill-description">{skill.desc}</p>
                            <div className="text-start">
                              <small className="skill-experience">
                                {calculateExperience(skill.startYear)}
                              </small>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Animated.div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
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

export default Skills;