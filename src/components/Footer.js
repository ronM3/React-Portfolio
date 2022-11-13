import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";
import footer_img1 from "../assets/footer-img1.webp";
import Contacts from "./Contacts";
import CheckMobileScreen from "./feature/checkMobileScreen";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const width = CheckMobileScreen();

  useEffect(() => {
    if (width) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  return (
    <footer className="footer" id="contacts">
      <Container>
        <Row>
          <Contacts />
          <Col className={isMobile ? "socialmedia-icons" : "social mt-3"}>
            <p className="footer_p social">Social Media</p>
            <a
              className={isMobile ? "socialIcon" : "footer_link"}
              href="https://www.linkedin.com/in/ron-motola"
            >
              <i className="fa-brands fa-linkedin">
                {!isMobile && (
                  <span style={{ marginLeft: "10px" }}>Linkedin</span>
                )}
              </i>
            </a>
            <a
              className={isMobile ? "socialIcon" : "footer_link"}
              href="https://github.com/ronM3"
            >
              <i className="fa-brands fa-github">
                {!isMobile && (
                  <span style={{ marginLeft: "10px" }}>Github</span>
                )}
              </i>
            </a>
            <a
              className={isMobile ? "socialIcon" : "footer_link"}
              href="https://www.facebook.com/ron.motola.1"
            >
              <i className="fab fa-facebook-f">
                {!isMobile && (
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                )}
              </i>
            </a>
            <a
              className={isMobile ? "socialIcon" : "footer_link"}
              href="mailto:ron00003@gmail.com"
            >
              <i className="fa fa-envelope">
                {!isMobile && <span style={{ marginLeft: "10px" }}>Email</span>}
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
                Collaboration
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
