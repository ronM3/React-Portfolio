import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ project }) => {
  return (
    //     <Card className="bg-dark text-white" >

    //     <div className="proj-imgbx">
    //     <Card.Img className='project_img' src={project.image} alt="Card image" />
    //     </div>
    //     <div className="proj-txtx">
    //     <h4>{project.title}</h4>
    //     <span>{project.description}</span>
    //   </div>

    //   </Card>
    <div className="project_card">
      <div className="proj-imgbx">
        <img className="project_img" src={project.image} />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
          <button>Live</button>
        </div>
      </div>
    </div>

    /* <Card className="bg-dark text-white" >
<Card.Img className='project_img' src={project.image} alt="Card image" />
<Card.ImgOverlay>
  <Card.Title className='project_title'>{project.title}</Card.Title>
  <Card.Text className='project_description'>
    {project.description}
  </Card.Text>
</Card.ImgOverlay>
</Card> */
  );
};
