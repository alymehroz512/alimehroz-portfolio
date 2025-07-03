import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated as Animated } from "react-spring";
import { FiFolder, FiDownload, FiDownloadCloud } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/Home.css";
import developerImage from "../assets/developer.svg";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 320px)");

    // Set initial state
    setIsSmallScreen(mediaQuery.matches);

    // Handle resize
    const handleResize = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // Handle download button click
  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000); // Reset after 2 seconds
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 300,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="home-wrapper position-relative">
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

      <Animated.div style={fadeIn} className="container-fluid home-container mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 home-right order-1 order-md-2">
            <img
              src={developerImage}
              alt="Developer illustration"
              className="home-image"
            />
          </div>

          <div className="col-12 col-md-8 home-left order-2 order-lg-1">
            <h1 className="home-heading">
              {isSmallScreen ? (
                <span>Hi, I’m Ali Mehroz</span>
              ) : (
                <TypeAnimation
                  sequence={["Hi, I’m Ali Mehroz", 2000, "", 500]}
                  speed={50}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              )}
            </h1>

            <p className="home-subheading">React JS Frontend Developer</p>

            <p className="home-description">
              I'm a passionate React Frontend Developer with real-world experience
              building bevis, scalable web applications using React and Redux.
              I enjoy turning UI/UX designs into clean, functional interfaces and
              thrive on creating smooth user experiences. I’m confident working
              with state management and API integration using Axios, and I’m always
              looking for opportunities to grow, collaborate with talented teams,
              and take on new frontend challenges.
            </p>

            <div className="home-buttons">
              <Link to="/projects" className="btn-primary">
                <FiFolder style={{ marginRight: "8px" }} />
                View Projects
              </Link>
              <a
                href="/Ali Mehroz.pdf"
                className="btn-download border-0 rounded-0"
                download
                onClick={handleDownloadClick}
              >
                {isDownloading ? (
                  <>
                    <FiDownloadCloud
                      className="download-animate"
                      style={{ marginRight: "8px" }}
                    />
                    Downloading...
                  </>
                ) : (
                  <>
                    <FiDownload style={{ marginRight: "8px" }} />
                    Download CV
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </Animated.div>
    </div>
  );
}

export default Home;