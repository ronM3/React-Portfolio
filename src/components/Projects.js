import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import freshmarket from "../assets/Freshmarket-shop.gif";
import vacation from "../assets/vacation-project.png";
import todo from "../assets/todo-list.gif";
import todolist from "../assets/todolist.png";
import stars from "../assets/bg-stars.svg";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projects } from "../data/projectsData";

export const Projects = () => {
 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="twinkling"></div>
      <Container>
        <Row className="align-items-center justify-content-center">
          <h2>Projects</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            et ultrices neque ornare aenean euismod elementum nisi. Ut tellus
            elementum sagittis vitae et leo duis ut diam. Aenean pharetra magna
            ac placerat vestibulum lectus. Turpis massa tincidunt dui ut ornare
            lectus sit amet.
          </p> */}
          {projects.map((project, index) => {
            return (
              <Col className="col-mt" sm={12} md={6} lg={8} xl={10} key={index}>
                <ProjectCard project={project} key={index} />
              </Col>
            );
          })}


        </Row>
      </Container>
    </section>
  );
};
