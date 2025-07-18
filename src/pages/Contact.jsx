import React, { useCallback, useState, useEffect } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useSpring, animated as Animated } from "react-spring";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ContactFormImg from "../assets/contact.svg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaComment,
  FaSpinner,
  FaChevronUp,
} from "react-icons/fa";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "../styles/Contact.css";

function AnimatedHR() {
  const style = useSpring({
    from: { transform: "scaleX(0)", opacity: 0 },
    to: { transform: "scaleX(1)", opacity: 1 },
    config: { tension: 250, friction: 18 },
    delay: 700,
  });

  return <Animated.hr style={style} className="animated-hr" />;
}

function Contact() {
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
    if (words.length <= maxWords) {
      setMessage(text);
    }
  };

  const maxWords = 1500;

  const handleSubmit = (e) => {
    e.preventDefault();
    const words = message
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    if (words.length > maxWords) {
      setNotification({
        show: true,
        message: `Message exceeds ${maxWords} words. Please shorten your message.`,
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    const params = {
      name: e.target.formName.value,
      email: e.target.formEmail.value,
      message: message,
    };

    const serviceID = "service_a8q5e8d"; // Replace with your EmailJS service ID
    const templateID = "template_cpbuhez"; // Replace with your EmailJS template ID

    window.emailjs
      .send(serviceID, templateID, params)
      .then((response) => {
        console.log("SUCCESS!", response);
        setNotification({
          show: true,
          message: "Your message was sent successfully!",
          type: "success",
        });
        e.target.reset();
        setMessage("");
        setWordCount(0);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setNotification({
          show: true,
          message: "Failed to send the message. Please try again.",
          type: "error",
        });
        e.target.reset();
        setMessage("");
        setWordCount(0);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
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

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 220, friction: 20 },
    delay: 500,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const isCenteredBreakpoint = [320, 375, 425].includes(windowWidth);
  const buttonStyle = isCenteredBreakpoint
    ? { margin: "0 auto", display: "block", width: "fit-content" }
    : {};

  return (
    <div className="contact-wrapper position-relative">
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-content">
            {notification.type === "success" && (
              <FaCheckCircle className="notify-icon" />
            )}
            {notification.type === "error" && (
              <FaExclamationCircle className="notify-icon" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

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
        className="container-fluid contact-container"
      >
        <Container>
          <h1 className="contact-heading">Coffee & Code?</h1>
          <AnimatedHR />
          <p className="contact-text text-center">
            I'm currently open to freelance opportunities, full-time roles, or
            creative collaborations. If you’ve got a project or just want to say
            hi, feel free to drop me a message!
          </p>
          <Row className="g-1 mt-3 contact-cards-row">
            {[
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                desc: "+92-348-4149332",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                desc: "alimehroz621@gmail.com",
                className: "email-text",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                desc: "Johar Town, Lahore, Pakistan",
              },
            ].map((contact, i) => (
              <Col xs={12} md={4} key={i}>
                <Animated.div style={cardAnimation}>
                  <Card
                    className="modern-skill-card"
                    style={{
                      borderRadius: 0,
                      border: "2px solid #4c3b6e",
                      background: "none",
                    }}
                  >
                    <Card.Body className="d-flex flex-row align-items-start">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">{contact.icon}</div>
                      </div>
                      <div className="skill-content">
                        <h5 className="skill-subtitle">{contact.title}</h5>
                        <hr className="skill-hr" />
                        <p
                          className={`skill-description ${
                            contact.className || ""
                          }`}
                        >
                          {contact.desc}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Animated.div>
              </Col>
            ))}
          </Row>
          <div className="project-cards">
            <Animated.div style={cardAnimation} className="project-card glass-bg">
              <div className="project-ribbon">Contact Me</div>
              <div className="project-content">
                <h3 className="section-heading">About Me</h3>
                <p className="section-text">
                  I'm a passionate developer ready to bring your ideas to life.{" "}
                  <br />
                  Explore my work and let's create something amazing together
                </p>
                <div className="contact-image">
                  <img
                    src={ContactFormImg}
                    alt="Profile"
                    className="img-fluid"
                    style={{ borderRadius: "0" }}
                  />
                </div>
                <div className="section-divider"></div>
                <h3 className="section-heading">Get in Touch</h3>
                <p className="section-text">
                  Whether you have a project in mind or just want to connect,{" "}
                  <br />
                  I'm all ears! Fill out the form below to start the conversation
                </p>
                <Form className="contact-form" onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3 form-group-with-icon"
                    controlId="formName"
                  >
                    <div className="form-label-with-icon">
                      <FaUser
                        className="form-icon"
                        style={{ marginTop: "-10px" }}
                      />
                      <Form.Label className="form-label">Your Name</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group-with-icon"
                    controlId="formEmail"
                  >
                    <div className="form-label-with-icon">
                      <FaEnvelope
                        className="form-icon"
                        style={{ marginTop: "-10px" }}
                      />
                      <Form.Label className="form-label">Your Email</Form.Label>
                    </div>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-group-with-icon"
                    controlId="formMessage"
                  >
                    <div className="form-label-with-icon">
                      <FaComment
                        className="form-icon"
                        style={{ marginTop: "-10px" }}
                      />
                      <Form.Label className="form-label">Your Message</Form.Label>
                    </div>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                      value={message}
                      onChange={handleMessageChange}
                      required
                      style={{ resize: "none" }}
                    />
                    <div className="word-count">
                      {wordCount}/{maxWords} words
                      {wordCount > maxWords && (
                        <span className="word-count-error"> (Exceeds limit)</span>
                      )}
                    </div>
                  </Form.Group>
                  <Button
                    variant="light"
                    type="submit"
                    className="submit-btn border-0 rounded-0"
                    disabled={isSubmitting}
                    style={buttonStyle}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner
                          className="spin"
                          style={{ marginRight: "8px" }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Form>
                <div className="section-divider"></div>
                <div className="contact-socials mt-3">
                  <a
                    href="https://wa.me/923484149332"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <span className="social-divider">|</span>
                  <a
                    href="https://www.linkedin.com/in/ali-mehroz-a1ba9a226/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <span className="social-divider">|</span>
                  <a
                    href="https://github.com/alymehroz512?tab=overview&from=2024-08-01&to=2024-08-04"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </Animated.div>
          </div>
          <footer className="footer mt-5">
            <AnimatedHR />
            <p>© {new Date().getFullYear()} Ali Mehroz. All rights reserved.</p>
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

export default Contact;