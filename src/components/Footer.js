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
                      placeholder="John Doe"
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
            <a className="footer_link" href="https://www.facebook.com/ron.motola.1">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a className="footer_link" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </a>
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
          </Col>

          <Col
            className="mt-3"
            md={{ span: 2, offset: 2 }}
            xs={{ span: 4, offset: 2 }}
          >
            <p className="footer_p">Services</p>
            <div className="footer_services">
              <a className="footer_link" href="#">
                Writing
              </a>
              <a className="footer_link" href="#">
                Internships
              </a>
              <a className="footer_link" href="#">
                Coding
              </a>
            </div>
          </Col>
        </Row>

        {/* <Col>
            <p className="footer_p">Contact Us</p>
            <a className="footer_link" href="#">Uttar Pradesh</a>
            <a  className="footer_link" href="#">Ahemdabad</a>
            <a  className="footer_link" href="#">Indore</a>
            <a  className="footer_link" href="#">Mumbai</a>
          </Col> */}
        <img src={footer_img1} alt="contacts" className="contacts--img" />
        <p className="footer-copyright">
          Copyright 2022. All Rights Reserved &copy; Ron Motola
        </p>
      </Container>
    </footer>
    // <footer className="page-footer font-small blue pt-4">
    //   {/* <div className="contacts--container"> */}
    //     <Container>
    //       <Row className="justefy-content-center">
    //         <Col md={6} sm={4} xs={12}>
    //           <h1 style={{ color: "#7e4ba5" }}>Contacts</h1>

    //           <div className="contacts-body">
    //             <div className="contacts-form">
    //               <form>
    //                 <div className="input-container">
    //                   <label htmlFor="Name" className="input-label">
    //                     Name
    //                   </label>
    //                   <input
    //                     placeholder="John Doe"
    //                     type="text"
    //                     name="Name"
    //                     className="form-input input_box"
    //                   />
    //                 </div>
    //                 <div className="input-container">
    //                   <label htmlFor="Email" className="input-label">
    //                     Email
    //                   </label>
    //                   <input
    //                     placeholder="John@doe.com"
    //                     type="email"
    //                     name="Email"
    //                     className="form-input input_box"
    //                   />
    //                 </div>
    //                 <div className="input-container">
    //                   <label htmlFor="Message" className="input-label">
    //                     Message
    //                   </label>
    //                   <textarea
    //                     placeholder="Type your message...."
    //                     type="text"
    //                     name="Message"
    //                     className="form-message message_box"
    //                   />
    //                 </div>

    //                <div className='submit-btn'>
    //                             <button
    //                                 type='submit'
    //                                 className="submitBtn"
    //                             >
    //                                 <p>{!success ? 'Send' : 'Sent'}</p>
    //                                 <div className='submit-icon'>
    //                                 <i class="fa fa-paper-plane send-icon" aria-hidden="true" style={{
    //                                             animation: !success
    //                                                 ? 'initial'
    //                                                 : 'fly 0.8s linear both',
    //                                             position: success
    //                                                 ? 'absolute'
    //                                                 : 'initial',
    //                                         }}></i>
    //                                         <i class="fa fa-paper-plane send-icon" aria-hidden="true"
    //                                         className='success-icon'
    //                                         style={{
    //                                             display: !success
    //                                                 ? 'none'
    //                                                 : 'inline-flex',
    //                                             opacity: !success ? '0' : '1',
    //                                         }}
    //                                  ></i>
    //                                 </div>
    //                             </button>
    //                         </div>
    //               </form>
    //             </div>
    //           </div>
    //         </Col>
    //         <Col md={6} sm={4} xs={4} className="py-3">
    //           <h5 className="text-uppercase">Links</h5>
    //           <ul className="list-unstyled">
    //             <li>
    //               <a className="footer_link" href="#!">
    //                 Link 1
    //               </a>
    //             </li>
    //             <li>
    //               <a className="footer_link" href="#!">
    //                 Link 2
    //               </a>
    //             </li>
    //             <li>
    //               <a className="footer_link" href="#!">
    //                 Link 3
    //               </a>
    //             </li>
    //             <li>
    //               <a className="footer_link" href="#!">
    //                 Link 4
    //               </a>
    //             </li>
    //           </ul>
    //         </Col>
    //         <Col md={6} sm={4} xs={4} className="social py-3">
    //             <a className="footer_link" href="#">
    //               <i className="fab fa-facebook-f">
    //                 <span style={{ marginLeft: "10px" }}></span>
    //               </i>
    //             </a>
    //             <a className="footer_link" href="#">
    //               <i className="fab fa-instagram">
    //                 <span style={{ marginLeft: "10px" }}></span>
    //               </i>
    //             </a>
    //             <a className="footer_link" href="#">
    //               <i className="fa-brands fa-linkedin">
    //                 <span style={{ marginLeft: "10px" }}></span>
    //               </i>
    //             </a>
    //           </Col>

    //       </Row>
    //       <p className="footer-copyright">
    //               Copyright 2022. All Rights Reserved &copy; Ron Motola
    //           </p>
    //     </Container>
    //   {/* </div> */}

    // </footer>
  );
};
