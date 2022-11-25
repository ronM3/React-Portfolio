import React from "react";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo3 from "../assets/logo8.png";
import { forwardRef } from "react";

export const NavBar = forwardRef((props, refs) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (targetRef) => {
    setActiveLink(targetRef.current.id);
    setIsNavExpanded(false);
    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        {/* <a  className="brand-name">
          <img className="logo" src={logo3} alt="logo" />
        </a> */}
        
              <div class="logo-holder logo-5">
                <a href="" className="header_link">
                  <h3>Motola</h3>
                  <p>Web Developer</p>
                </a>
              </div>
          

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          aria-expanded={isNavExpanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className={isNavExpanded ? "nav-links open" : "nav-links"}>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              className={
                activeLink === "home"
                  ? "active navbar-link"
                  : "navbar-link nav-link-ltr"
              }
              onClick={() => scrollToSection(refs.homeRef)}
            >
              Home
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => scrollToSection(refs.skillsRef)}
            >
              Skills
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => scrollToSection(refs.projectsRef)}
            >
              Projects
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              className={
                activeLink === "contacts" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => scrollToSection(refs.contactsRef)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});
