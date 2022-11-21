import { useState, useRef } from "react";
import { Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";
import "../styles/contacts.css";

const Contacts = () => {
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [errMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
      return false;
    }
    setNameError(false);
    if (!isEmail(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    if (message === "") {
      setMsgError(true);
      return false;
    }
    setMsgError(false);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          setErrorMsg("");
          setName("");
          setEmail("");
          setMessage("");
          console.log(form.current);
          setTimeout(() => {
            form.current.reset();
            setSuccess(false);
          }, 1300);
        },
        (error) => {
          setErrorMsg(error.text);
        }
      );
  };
  return (
    <Col size={4} sm={6}>
      <div className="footer_contact_h">
        <h1 className="footer_h" style={{ color: "#7e4ba5" }}>
          Contacts
        </h1>
      </div>
      <div className="contacts-body">
        <div className="contacts-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <label htmlFor="Name" className="input-label">
                Name
              </label>
              <input
                placeholder="John"
                type="text"
                name="name"
                className="form-input input_box"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <span className="error_msg">The name field is required</span>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="Email" className="input-label">
                Email
              </label>
              <input
                placeholder="John@doe.com"
                type="email"
                name="email"
                className="form-input input_box"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <span className="error_msg">The email field is required</span>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="Message" className="input-label">
                Message
              </label>
              <textarea
                placeholder="Type your message...."
                type="text"
                name="message"
                className="form-message message_box"
                onChange={(e) => setMessage(e.target.value)}
              />
              {msgError && (
                <span className="error_msg message">
                  The message field is required
                </span>
              )}
            </div>

            <div className="submit-btn">
              <button type="submit" className="submitBtn">
                <p>{success ? "Sent" : "Send"}</p>
                <div className="submit-icon">
                  <i
                    className="send-icon"
                    aria-hidden="true"
                    style={{
                      animation: !success ? "initial" : "fly 0.8s linear both",
                      position: success ? "absolute" : "initial",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height='35'
                      viewBox="0 0 512 512"
                    >
                      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                    </svg>
                  </i>
                  <i
                    className="success-icon"
                    aria-hidden="true"
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
  );
};

export default Contacts;
