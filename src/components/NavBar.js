import React from "react";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo3 from "../assets/logo10.svg";

export const NavBar = () => {
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

  const onUpdateActiveL = (value) => {
    setActiveLink(value);
    setIsNavExpanded(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <a href="#home" className="brand-name">
          <img className="logo" src={logo3} alt="logo" />
        </a>
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
              href="#home"
              className={
                activeLink === "home"
                  ? "active navbar-link"
                  : "navbar-link nav-link-ltr"
              }
              onClick={() => onUpdateActiveL("home")}
            >
              Home
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#skills"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveL("Skills")}
            >
              Skills
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveL("Projects")}
            >
              Projects
            </a>
          </li>
          <li className={isNavExpanded ? "fadelinks" : ""}>
            <a
              href="#contacts"
              className={
                activeLink === "Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveL("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
