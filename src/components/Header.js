import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/Rocket-Black5.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

import { AnimationBackground } from "./feature/AnimationBackground";

export const Header = () => {
  console.log("current URL 👉️", window.location.href);
  const [userEntered, setUserEntered] = useState(false);

  useEffect(() => {
    if (window.location.href === "/") {
      setUserEntered(false);
      console.log(userEntered);
    } else {
      setUserEntered(true);
    }
  }, [window.location.href]);

  return (
    <section className="banner" id="home">
      <Container>
        <AnimationBackground />
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="main-text">
              <h1 className="animated-text">Hi!</h1>
              <h1 className="animated-text first">I'm Ron Motola</h1>
              <h1 className="animated-text second">{"Full-Stack Web Developer"}</h1>
            </div>
              <div className="connect-box">
                <p id="fadeInP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                </p>
                <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
