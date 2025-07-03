import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSpring, animated as Animated } from 'react-spring';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const animation = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200 });

  const handleToggle = () => setExpanded(prev => !prev);
  const handleNavClick = () => setExpanded(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/devtools', label: 'DevTools' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <Animated.div style={animation}>
      <BSNavbar
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
        className="custom-navbar fixed-top"
      >
        <Container className="navbar-container">
          {/* Left: Brand */}
          <BSNavbar.Brand as={Link} to="/" className="navbar-brand-text sticky-top">
            DevFolio
          </BSNavbar.Brand>

          {/* Toggler Icon */}
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
            {expanded ? <HiX className="custom-bars-icon" /> : <HiMenuAlt3 className="custom-bars-icon" />}
          </BSNavbar.Toggle>

          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-center">
              {navLinks.map(({ to, label }) => (
                <Nav.Link
                  as={Link}
                  to={to}
                  key={to}
                  onClick={handleNavClick}
                  className={location.pathname === to ? 'active-link' : ''}
                >
                  {label}
                </Nav.Link>
              ))}

              {/* Mobile view: Social icons below links */}
              <div className="social-icons social-icons-mobile d-lg-none">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaWhatsapp />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaLinkedin />
                </a>
              </div>
            </Nav>

            {/* Desktop view: Social icons on right */}
            <div className="social-icons d-none d-lg-flex">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaWhatsapp />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin />
              </a>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </Animated.div>
  );
}

export default Navbar;
