import { Nav, Container, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
// import { logo } from '../assets/logo.svg'
import logo3 from "../assets/logo10.svg";
import logo2 from "../assets/logo10.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
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

  const onUpdateActiveL = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="md" collapseOnSelect className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo3} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="scroll-to-element">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home"
                    ? "active navbar-link"
                    : "navbar-link nav-link-ltr"
                }
                onClick={() => onUpdateActiveL("home")}
              >
                Home
              </Nav.Link>
            </div>
            <div className="scroll-to-element">
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "Skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveL("Skills")}
              >
                Skills
              </Nav.Link>
            </div>
            <div className="scroll-to-element">
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "Projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveL("Projects")}
              >
                Projects
              </Nav.Link>
            </div>
            <div className="scroll-to-element">
              <Nav.Link
                href="#contacts"
                className={
                  activeLink === "Contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveL("Contact")}
              >
                Contact
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
