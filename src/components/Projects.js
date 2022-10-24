import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import freshmarket from "../assets/Freshmarket-shop.gif";
import vacation from '../assets/vacation-project.png'
import todo from '../assets/todo-list.gif'
import todolist from '../assets/todolist.png'
import stars from '../assets/bg-stars.svg'
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
  const projects = [
    {
      title: "Freshmarket shop",
      description:
        "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
      image: freshmarket,
    },
    {
      title: "Ultimate Vacations",
      description:
        "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
      image: vacation,
    },
    {
      title: "Customizable-To-Do-List",
      description:
        "A Friendly and customizable To-Do List where you can add, delete or edit tasks written with Vanilla JavaScript, HTML, CSS, Bootstrap Project is also mobile responsive and dark mode available also using external toast library and font-awesome.",
      image: todolist,
    },
    {
      title: "Freshmarket shop",
      description:
        "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature",
      image: freshmarket,
    },
  ];

  return (
    <section className="projects" id="projects">
      {/* <div className="twinkling"></div> */}
      <Container>
        <Row className="align-items-center justify-content-center">
         
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pharetra et ultrices neque ornare aenean euismod elementum nisi.
              Ut tellus elementum sagittis vitae et leo duis ut diam. Aenean
              pharetra magna ac placerat vestibulum lectus. Turpis massa
              tincidunt dui ut ornare lectus sit amet.
            </p>
            {projects.map((project, index) => {
              return (
                  <Col className="mt-4" sm={12} md={6} lg={4} xl={5} key={index}>
                    <ProjectCard project={project} key={index} />
                  </Col>
              );
            })}
        
        </Row>
        
      </Container>
      
    </section>
  );
};
