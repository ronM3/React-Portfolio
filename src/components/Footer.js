import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer_img1 from "../assets/footer-img1.webp";

export const Footer = () => {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <footer className="footer" id="contacts">
      <Container>
        <Row>
          <Col size={4} sm={6}>
            <div className="footer_contact_h">
              <h1 className="footer_h" style={{ color: "#7e4ba5" }}>
                Contacts
              </h1>
            </div>

            <div className="contacts-body">
              <div className="contacts-form">
                <form>
                  <div className="input-container">
                    <label htmlFor="Name" className="input-label">
                      Name
                    </label>
                    <input
                      placeholder="John"
                      type="text"
                      name="Name"
                      className="form-input input_box"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="Email" className="input-label">
                      Email
                    </label>
                    <input
                      placeholder="John@doe.com"
                      type="email"
                      name="Email"
                      className="form-input input_box"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="Message" className="input-label">
                      Message
                    </label>
                    <textarea
                      placeholder="Type your message...."
                      type="text"
                      name="Message"
                      className="form-message message_box"
                    />
                  </div>

                  <div className="submit-btn">
                    <button type="submit" className="submitBtn">
                      <p>{!success ? "Send" : "Sent"}</p>
                      <div className="submit-icon">
                        <i
                          className="fa fa-paper-plane send-icon"
                          aria-hidden="true"
                          style={{
                            animation: !success
                              ? "initial"
                              : "fly 0.8s linear both",
                            position: success ? "absolute" : "initial",
                          }}
                        ></i>
                        <i
                          className="fa fa-paper-plane send-icon"
                          aria-hidden="true"
                          // className="success-icon"
                          style={{
                            display: !success ? "none" : "inline-flex",
                            opacity: !success ? "0" : "1",
                          }}
                        ></i>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col className="social mt-3">
            <p className="footer_p">Social Media</p>
            <a className="footer_link" href="https://www.linkedin.com/in/ron-motola">
              <i className="fa-brands fa-linkedin">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </a>
            <a className="footer_link" href="https://github.com/ronM3">
              <i className="fa-brands fa-github">
                <span style={{ marginLeft: "10px" }}>Github</span>
              </i>
            </a>
            <a className="footer_link" href="https://www.facebook.com/ron.motola.1">
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
              <a className="footer_link" >
                Coding
              </a>
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
