import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer_img1 from "../assets/footer-img1.webp";
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";
import Contacts from "./Contacts";

export const Footer = () => {
 
  return (
    <footer className="footer" id="contacts">
      <Container>
        <Row>
      <Contacts/>
          <Col className="social mt-3">
            <p className="footer_p">Social Media</p>
            <a
              className="footer_link"
              href="https://www.linkedin.com/in/ron-motola"
            >
              <i className="fa-brands fa-linkedin">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </a>
            <a className="footer_link" href="https://github.com/ronM3">
              <i className="fa-brands fa-github">
                <span style={{ marginLeft: "10px" }}>Github</span>
              </i>
            </a>
            <a
              className="footer_link"
              href="https://www.facebook.com/ron.motola.1"
            >
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a className="footer_link" href="mailto:ron00003@gmail.com">
              <i className="fa fa-envelope">
                <span style={{ marginLeft: "10px" }}>Email</span>
              </i>
            </a>
          </Col>

          <Col
            className="mt-3"
            md={{ span: 2, offset: 2 }}
            xs={{ span: 4, offset: 2 }}
          >
            <p className="footer_p">Services</p>
            <div className="footer_services">
              <a className="footer_link" href="#projects">
                All Projects
              </a>
              <a className="footer_link" href="#">
                Internships
              </a>
              <a className="footer_link">Coding</a>
            </div>
          </Col>
        </Row>
        <img src={footer_img1} alt="contacts" className="contacts--img" />
        <p className="footer-copyright">
          Copyright 2022. All Rights Reserved &copy; Ron Motola
        </p>
      </Container>
    </footer>
  );
};
