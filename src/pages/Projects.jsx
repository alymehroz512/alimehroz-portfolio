import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSpring, animated as Animated } from 'react-spring';
import { FaChevronUp, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/Project.css";

function AnimatedHR() {
  const style = useSpring({
    from: { transform: "scaleX(0)", opacity: 0 },
    to: { transform: "scaleX(1)", opacity: 1 },
    config: { tension: 250, friction: 18 },
    delay: 700,
  });

  return <Animated.hr style={style} className="animated-hr" />;
}

const projects = [
  {
    title: "Admin Dashboard True Med IT",
    status: "In Progress",
    description:
      "Currently developing a fully responsive Admin Dashboard using React JS, Redux Toolkit, and Axios for managing user data, system settings, and analytics. Architecting dynamic modules for data visualization, system configuration, and secure admin-level operations. Integrating RESTful APIs with Redux for real-time data handling and optimized user experience. Ensuring component scalability with modular UI structure and responsive layout. Wrote unit and integration tests using Jest, ensuring robust, regression-free code.",
    quote: "Empowering businesses with robust solutions.",
    features: [
      "Authentication and Authorization via JWT and Cookies",
      "Dashboard option where admin have details about the active users, users with wallets, users with gens and different charts of monthly transaction etc",
      "Application Configuration where admin handle whole application configurations and change according to the needs",
      "Application Status shows the frontend, backend and blockchain is working or not and it changes its status after every five minutes according to whole application",
      "Transaction Details View (Bridge) to see the details of transaction users have done in polkadot to ethereum and ethereum to polkadot",
      "Test Results where admin will be able to see the test reports result for the both PGX & Blood. Admin can handle all test result for their approval and rejections",
      "User modules have created where admin will be able to manage the whole users. Users are Patients, Researchers, Managers. Admin will create different managers and many more",
    ],
    tech: [
      "React.js for reusable components etc",
      "Redux Toolkit for state management",
      "Axios for fetching data",
      "CSS and Bootstrap for responsive styling and layout",
      "Jest for unit, integration, & snapshot testing",
      "GitHub",
    ],
    link: "https://github.com/alymehroz512/Office-Work",
  },
  {
    title: "Task-Flow Application",
    status: "Completed",
    description:
      "A Trello-inspired task management system with user authentication, boards, folders, and task creation with status filters. Designed task status indicators (Pending, Active, Complete, Delete) with real-time UI updates with success/alerting notifications. Enabled secure and scalable RESTful API interaction with Axios.",
    quote: "Organize tasks with seamless flow.",
    features: [
      "Kanban-style task boards",
      "Drag & drop task management",
      "Folder and board organization",
      "Task status filters",
    ],
    tech: [
      "React.js for reusable components etc",
      "Redux Toolkit for state management",
      "Axios for fetching data",
      "CSS and Bootstrap for responsive styling and layout",
      "GitHub",
    ],
    link: "https://github.com/alymehroz512/Task-Flow-Trello-Clone-Redux",
  },
  {
    title: "Portfolio-Website",
    status: "Completed",
    description:
      "This project is a responsive portfolio website. It features a modern design with sections for showcasing projects, skills, and professional experience. The site is fully responsive, ensuring an optimal viewing experience across all devices. Ideal for developers and creatives looking to highlight their work online, with animated sections and downloadable resume.",
    quote: "Showcasing skills with style.",
    features: [
      "Responsive personal portfolio",
      "Animated sections and transitions",
      "Project and skills showcase",
      "Downloadable resume",
    ],
    tech: [
      "HTML for structure",
      "CSS and Bootstrap for responsive styling and layout",
      "JavaScript for dynamic interactions",
      "LocalStorage for persisting of data",
      "Email.js for email sending",
      "GitHub",
    ],
    link: "https://github.com/alymehroz512/Portfolio-Website",
  },
  {
    title: "Journey-Xtreme-Virtual-Reality-FYP",
    status: "Completed",
    description:
      "Journey Xtreme Virtual Reality is an immersive VR experience developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project offers a virtual adventure through meticulously designed environments, showcasing advanced VR interactions and engaging user experiences. The backend, powered by Node.js and Express.js, handles user authentication, data management, and real-time interactions, while MongoDB provides robust data storage solutions. The frontend, built with React.js, delivers a dynamic and responsive user interface, allowing users to navigate and interact within the VR environments seamlessly. Key features include interactive 3D elements, real-time multiplayer capabilities, and an intuitive user interface for customizing and exploring virtual spaces. This project serves as an innovative example of integrating VR with modern web technologies, making it a valuable resource for developers interested in advanced web and VR development.",
    quote: "Step into immersive realities.",
    features: [
      "Journey Xtreme is an exciting travel experience provider that caters to adventure seekers and explorers.",
      "Offering a wide array of thrilling expeditions and off-the-beaten-path adventures, Journey Xtreme aims to satisfy the wanderlust of its customers",
      "From high octane outdoor activities to unique, adrenaline-pumping experiences, this platform is dedicated to delivering exceptional adventures",
      "Travelers can expect a one-of-a-kind journey that combines personalized itineraries with the excitement of discovering some of the worlds most extraordinary destinations",
      "Pannellum is a lightweight, open-source JavaScript library primarily used for displaying interactive 360-degree panoramas and virtual tours on the web",
    ],
    tech: [
      "MongoDB for database (Non-Relational)",
      "Express.js for middleware",
      "React.js for reusable components etc",
      "Node.js for backend",
      "Tailwind css for responsive layouts",
      "GitHub",
    ],
    link: "https://github.com/alymehroz512/Journey-Xtreme-Virtual-Reality-FYP",
  },
  {
    title: "Task Management Application",
    status: "Completed",
    description:
      "This project is a Task Management Application. It allows users to create, update, delete, and manage tasks efficiently. With added functionalities like task categorization, recurrence, and status tracking, this project provides a comprehensive solution for task management. Users can attach links to tasks and get reminders about task deadlines. The application also includes an Analytics Dashboard to visualize task progress and completion rates, with insights into task distribution across categories.",
    quote: "Manage tasks with precision.",
    features: [
      "User Authentication",
      "Task Creation and Management",
      "Task Categorization",
      "Task Recurrence",
      "Task Status Management",
      "Due Date Reminders",
      "Task Reports",
      "Analytics Dashboard",
      "Local Storage Integration",
    ],
    tech: [
      "HTML for structure",
      "CSS and Bootstrap for responsive styling and layout",
      "JavaScript for dynamic interactions, task management logic, and chart rendering",
      "Chart.js for generating the pie chart in the Analytics Dashboard",
      "LocalStorage for persisting task data across sessions",
      "GitHub",
    ],
    link: "https://github.com/alymehroz512/Task-Management-App",
  },
  {
    title: "Weather-App",
    status: "Completed",
    description:
      'This is a simple, responsive weather application. It allows users to search for weather information by city, displaying current conditions, temperature, humidity, wind speed, and more. The app fetches real-time weather data from the OpenWeather API and includes unit toggles for Celsius and Fahrenheit. Users can explore detailed weather data, including min/max temperatures and "feels like" values, for any chosen city.',
    quote: "Stay ahead of the weather.",
    features: [
      "Real-time weather updates",
      "Search by city",
      "5-day weather forecast",
      "The app fetches real-time weather data from the OpenWeather API and includes unit toggles for Celsius and Fahrenheit",
      "Clean, modern UI",
    ],
    tech: [
      "HTML for structure",
      "CSS and Bootstrap for responsive styling and layout",
      "JavaScript for dynamic interactions",
      "LocalStorage for persisting of data",
      "OpenWeatherMap API",
      "GitHub",
    ],
    link: "https://github.com/alymehroz512/Weather-App",
  },
];

function Projects() {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

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

  const getResponsiveRibbon = (fullText, shortText) => {
    return windowWidth <= 425 ? shortText : fullText;
  };

  const isIconOnlyWidth = [320, 375, 425].includes(windowWidth);

  return (
    <div className="projects-wrapper position-relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles-bg"
      />
      <Animated.div style={fadeIn} className="container-fluid projects-container">
        <Container>
          <h1 className="projects-heading">Code & Creativity</h1>
          <AnimatedHR />
          <p className="projects-intro">
            My projects reflect a blend of technical expertise and creative problem-solving, showcasing my ability to build dynamic, scalable, and user-centric applications. From immersive VR experiences to efficient task management systems, each project demonstrates my commitment to leveraging modern technologies to deliver innovative solutions.
          </p>
          <div className="project-cards">
            {projects.map((project, index) => (
              <div key={index} className="project-card glass-bg">
                <div className="project-ribbon">
                  {getResponsiveRibbon(project.status, project.status)}
                </div>
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-quote">"{project.quote}"</p>
                  <h3 className="project-section-title">Description</h3>
                  <ul className="project-description">
                    {project.description.split(". ").map(
                      (sentence, i) =>
                        sentence && (
                          <li key={i}>
                            {sentence}
                            {sentence.endsWith(".") ? "" : "."}
                          </li>
                        )
                    )}
                  </ul>
                  <div className="section-divider"></div>
                  <h3 className="project-section-title">Key Features</h3>
                  <ul className="project-features">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="section-divider"></div>
                  <h3 className="project-section-title">Technologies</h3>
                  <ul className="project-tech">
                    {project.tech.map((techItem, i) => (
                      <li key={i}>{techItem}</li>
                    ))}
                  </ul>
                  <div className="project-github-container">
                    <a
                      href={project.link}
                      className="github-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={24} />
                      {!isIconOnlyWidth && (
                        <span className="github-text">
                          View on GitHub
                        </span>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <footer className="projects-footer">
            <h3 className="footer-heading">Let's Connect</h3>
            <p className="footer-des">
              Whether you want to chat, collaborate, or check out my work —
              let’s connect on your favorite platform
            </p>
            <div className="footer-content">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alimehroz621@gmail.com&su=Let's%20Collaborate&body=Hi%20Ali,%20I'm%20interested%20in%20discussing%20a%20potential%20collaboration%20or%20project.%20Let's%20connect!"
                className="footer-icon-link d-flex align-items-center"
                title="Send an email via Gmail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} />
              </a>
              <span className="footer-pipe">|</span>
              <a
                href="https://www.linkedin.com/in/ali-mehroz-a1ba9a226/"
                className="footer-icon-link d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LinkedIn profile"
              >
                <FaLinkedin size={24} />
              </a>
              <span className="footer-pipe">|</span>
              <a
                className="footer-icon-link d-flex align-items-center"
                href="https://github.com/alymehroz512?tab=overview&from=2024-08-01&to=2024-08-04"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit GitHub profile"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </footer>
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

export default Projects;