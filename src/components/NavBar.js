import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo.svg";
import nav1 from "../assets/images/nav1.svg";
import nav2 from "../assets/images/nav2.svg";
import nav3 from "../assets/images/nav3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const renderNavLinks = () => {
    if (location.pathname === "/resume") {
      return (
        <>
          <Nav.Link
            as={Link}
            to="/"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/resume"
            className={
              activeLink === "resume" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("resume")}
          >
            Resume
          </Nav.Link>
        </>
      );
    }

    return (
      <>
        <Nav.Link
          as={HashLink}
          smooth
          to="#home"
          className={
            activeLink === "home" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          smooth
          to="#skills"
          className={
            activeLink === "skills" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("skills")}
        >
          Skills
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          smooth
          to="#projects"
          className={
            activeLink === "projects" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("projects")}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          as={HashLink}
          smooth
          to="#contact"
          className={
            activeLink === "contact" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("contact")}
        >
          Contact
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/resume"
          className={
            activeLink === "resume" ? "active navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("resume")}
        >
          Resume
        </Nav.Link>
      </>
    );
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{renderNavLinks()}</Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/masyn-nay-290225201/">
                <img src={nav1} alt="" />
              </a>
              <a href="https://github.com/MasynNay">
                <img src={nav2} alt="" />
              </a>
              <a href="https://www.instagram.com/masynnay/">
                <img src={nav3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
