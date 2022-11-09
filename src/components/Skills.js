import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skillsData } from "../data/skillsData";
import { SkillCard } from "./SkillCard";
import Fade from "react-reveal/Fade";
import { Tecks } from "./Tecks";

export const Skills = () => {
  const [scrolled, setScrolled] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 530) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <section id="skills" className={scrolled ? "skills scrolled" : "skills"}>
      <Container style={{ overflow: "hidden" }}>
        <Tecks/>
        <Row className="align-items-center">
          <Fade up when={scrolled}>
            <Col xs={12} md={6} xl={12}>
              <div className="skill_box">
              <h3>Programming languages & Technologies</h3>
                <p className="skill-p">
                Learning and practicing full stack programming for the last 1.5 years and have a strong foundation in both front-end and back-end development.
                I am humble developer and doing my best to keep my code transparent and easy to understand to enable more people to be involved in what i create, and i believe that continues feedback is the key to success and the way to go.
                </p>

                <Carousel
                  responsive={responsive}
                  autoPlay={false}
                  autoPlaySpeed={300}
                  transitionDuration={1000}
                  infinite={true}
                  className="skills-slider"
                >
                  {skillsData.map((skill) => {
                    return <SkillCard skill={skill} key={skill.name} alt />;
                  })}
                </Carousel>
              </div>
            </Col>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};
