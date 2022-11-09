import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/Rocket-Black5.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { AnimationBackground } from "./feature/AnimationBackground";

export const Header = () => {
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
              <h1 className="animated-text second">
                {"Full Stack Developer"}
              </h1>
            </div>
            <div className="connect-box">
              <p id="fadeInP">
                With knowledge and experience in writing SPA and using the
                latest WEB technologies by building web applications and
                responsive website. Developing new features and improving
                existing ones always excites me.
              </p>
              <div className="bt_container">
                <button onClick={() => console.log("connect")}>
                  <a href="#contacts">
                  Let’s Connect <ArrowRightCircle size={25} />
                  </a>
            
                </button>
              </div>
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
