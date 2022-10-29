import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/projectsData";
import Carousel from "react-bootstrap/Carousel";

export const ProjectCard = ({ project }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="project-text">
            <div className="project-p">
              <h3 className="project-title">{project.title}</h3>
              <span>{project.description}</span>
              <span className="project-loginInfo">{project.user}</span>
            </div>
            <a className="live_button" href={project.live}>
              Visit Live
            </a>
            <a className="live_button s" href={project.repository}>
              Source Code
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} lg={10} xl={8}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} id='carouselP'>
            {project?.images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    alt="First slide"
                    src={image}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>

    // best card
    // <div className="project_card">
    //   <div className="proj-imgbx">
    //     <img className="project_img" src={project.image} />
    //     <div className="proj-txtx">
    //       <h4>{project.title}</h4>
    //       <span>{project.description}</span>
    //       <button>Live</button>
    //     </div>
    //   </div>
    // </div>
  );
};
