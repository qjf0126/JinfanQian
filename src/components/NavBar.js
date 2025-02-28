import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import ResumeEN from '../assets/img/Resume (EN).pdf';
import ResumeCN from '../assets/img/Resume (CN).pdf';
import Q from '../assets/img/Q.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={Q} className="icon" alt="Brand Icon"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <NavLink
              to="/about"
              activeClassName="active"
              className={'nav-link navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </NavLink>
            
            {/* Dropdown for Resume with EN and CN */}
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className={`nav-link navbar-link ${activeLink === 'projects' ? 'active' : ''}`} // 这里应用和其他链接一致的类名
              >
                Resume
              </Dropdown.Toggle>

              <Dropdown.Menu className={scrolled ? 'scrolled-border' : ''}>
                <Dropdown.Item
                  onClick={() => window.open(ResumeEN, "_blank")}
                >
                  English
                </Dropdown.Item>

                <Dropdown.Item
                  onClick={() => window.open(ResumeCN, "_blank")}
                >
                  Chinese
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/%E5%8A%B2%E5%B8%86-%E9%92%B1-60a783332/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn Icon" /></a>
            <a href="#"><img src={navIcon2} alt="Social Icon" /></a>
            <a href="#"><img src={navIcon3} alt="Social Icon" /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



