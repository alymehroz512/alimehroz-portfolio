import React, { useCallback, useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useSpring, animated as Animated } from "react-spring";
import { FaBookOpen } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/DevTools.css";

function AnimatedHR() {
  const style = useSpring({
    from: { transform: "scaleX(0)", opacity: 0 },
    to: { transform: "scaleX(1)", opacity: 1 },
    config: { tension: 250, friction: 18 },
    delay: 700,
  });

  return <Animated.hr style={style} className="animated-hr" />;
}

const tools = [
  {
    name: "MongoDB",
    description: "NoSQL database for modern applications",
    version: "8.1",
    docUrl: "https://www.mongodb.com/docs/",
  },
  {
    name: "Express.js",
    description: "Minimal and flexible Node.js web framework",
    version: "5.1.0",
    docUrl: "https://expressjs.com/",
  },
  {
    name: "React.js",
    description: "Building interactive user interfaces",
    version: "19.0.0",
    docUrl: "https://react.dev/",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for backend development",
    version: "20.x LTS",
    docUrl: "https://nodejs.org/en/docs",
  },
  {
    name: "HTML5",
    description: "Structuring content on the web",
    version: "5.2",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "CSS3",
    description: "Styling and layout for web pages",
    version: "Level 3",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript ES6+",
    description: "Core programming language for web development",
    version: "ES2024",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Redux Toolkit",
    description: "Managing state in React applications",
    version: "1.9.x",
    docUrl: "https://redux-toolkit.js.org/",
  },
  {
    name: "Axios",
    description: "Promise-based HTTP client for JavaScript",
    version: "1.6.2",
    docUrl: "https://axios-http.com/docs/intro",
  },
  {
    name: "Postman",
    description: "API testing and collaboration platform",
    version: "Latest (Cloud)",
    docUrl: "https://www.postman.com/",
  },
  {
    name: "Framer Motion",
    description: "Declarative animations for React",
    version: "11.0.0",
    docUrl: "https://www.framer.com/motion/",
  },
  {
    name: "GSAP",
    description: "Professional-grade animation for the web",
    version: "3.12.5",
    docUrl: "https://gsap.com/docs/",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for styling",
    version: "4.0.7",
    docUrl: "https://tailwindcss.com/docs",
  },
  {
    name: "Bootstrap",
    description: "Responsive CSS framework for UI components",
    version: "5.4.0",
    docUrl: "https://getbootstrap.com/docs/5.4/",
  },
  {
    name: "Figma",
    description: "Collaborative UI/UX design tool",
    version: "Latest (Cloud)",
    docUrl: "https://www.figma.com/developers",
  },
  {
    name: "Responsive Design",
    description: "Adapting layouts for various devices",
    version: "N/A",
    docUrl:
      "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design",
  },
  {
    name: "Jest",
    description: "JavaScript testing framework",
    version: "32.0.0",
    docUrl: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "React Testing Library",
    description: "Testing React components",
    version: "20.0.0",
    docUrl: "https://testing-library.com/docs/react-testing-library/intro/",
  },
  {
    name: "Chrome DevTools",
    description: "Debugging and profiling web applications",
    version: "Latest (Browser)",
    docUrl: "https://developer.chrome.com/docs/devtools/",
  },
  {
    name: "VS Code",
    description: "Code editor for development",
    version: "1.95.x",
    docUrl: "https://code.visualstudio.com/docs",
  },
  {
    name: "npm",
    description: "Package manager for JavaScript",
    version: "11.0.0",
    docUrl: "https://docs.npmjs.com/",
  },
  {
    name: "Vercel",
    description: "Frontend hosting and serverless functions",
    version: "Latest (Cloud)",
    docUrl: "https://vercel.com/docs",
  },
  {
    name: "Netlify",
    description: "Web hosting with CI/CD and serverless functions",
    version: "Latest (Cloud)",
    docUrl: "https://docs.netlify.com/",
  },
  {
    name: "Git",
    description: "Version control system",
    version: "2.50.0",
    docUrl: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    description: "Platform for version control and collaboration",
    version: "Latest (Cloud)",
    docUrl: "https://docs.github.com/",
  },
  {
    name: "Figma Handoff",
    description: "Design-to-code collaboration",
    version: "Latest",
    docUrl: "https://www.figma.com/developers",
  },
  {
    name: "Notion",
    description: "Workspace for notes and project management",
    version: "Latest (Cloud)",
    docUrl: "https://www.notion.so/help",
  },
  {
    name: "Slack",
    description: "Team communication and collaboration",
    version: "Latest (Cloud)",
    docUrl: "https://slack.com/help",
  },
  {
    name: "Trello",
    description: "Project management and task tracking",
    version: "Latest (Cloud)",
    docUrl: "https://trello.com/guide",
  },
];

function DevTools() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const isIconOnlyWidth = windowWidth <= 425;
  const isShortHeader = [320, 375, 425].includes(windowWidth);

  return (
    <div className="devtools-wrapper position-relative">
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
      <Animated.div
        style={fadeIn}
        className="container-fluid devtools-container mt-5"
      >
        <Container>
          <h1 className="devtools-heading">Dev Bag</h1>
          <AnimatedHR />
          <Table
            responsive
            className="devtools-table glass-bg table-striped table-responsive-sm table-responsive-md table-sm"
          >
            <thead style={{ backgroundColor: "#4c3b6e", color: "white", textTransform: "uppercase", padding: "0.5rem" }}>
              <tr>
                <th style={{ padding: "0.5rem", color: "white" }}>{isShortHeader ? "Dev" : "Dev Bag"}</th>
                <th style={{ padding: "0.5rem", color: "white" }}>{isShortHeader ? "Desc" : "Description"}</th>
                <th style={{ padding: "0.5rem", color: "white" }}>{isShortHeader ? "Ver" : "Version"}</th>
                <th style={{ padding: "0.5rem", color: "white" }}>{isShortHeader ? "Link" : "Learn"}</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, index) => (
                <tr key={index}>
                  <td>{tool.name}</td>
                  <td>{tool.description}</td>
                  <td>{tool.version}</td>
                  <td>
                    <Button
                      variant="outline-light"
                      size="sm"
                      href={tool.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Learn more about ${tool.name}`}
                      style={{
                        padding: isIconOnlyWidth ? '0.3rem' : '0.3rem 0.8rem',
                        width: isIconOnlyWidth ? '36px' : 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span className="learn-icon">
                        <FaBookOpen
                          style={{
                            marginRight: isIconOnlyWidth ? '0' : '6px',
                            verticalAlign: 'middle',
                          }}
                        />
                      </span>
                      {!isIconOnlyWidth && 'Learn'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Animated.div>
    </div>
  );
}

export default DevTools;