import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

export const ProjectCard = ({ project }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className="project-text">
            <div className="project-p">
            <h3 className="project-title">{project.title}</h3>
            <span>{project.description}</span>
            <span className="project-loginInfo">
              {project.user}
            </span>
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
          <div className="projectimg project_card">
          <img className="project_img" src={project.image} />
          </div>
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
