import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projectsData";
import '../styles/projects.css'

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row className="align-items-center justify-content-center">
          <h2>Projects</h2>
          <p>
            Over the time i built several projects using the latest technologies,
            built responsive Single-Page-Apps (SPA) in React and also in Angular.
            Also build backend applications in Node.js, Express 
          </p>
          {projects.map((project, index) => {
            return (
              <Col className="mt-5 py-3" sm={12} md={6} lg={8} xl={10} key={index}>
                <ProjectCard project={project} key={project.id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
