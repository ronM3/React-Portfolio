import React from "react";


export const SkillCard = ({ skill }) => {
  return (
    <div className="skill_item">
      <img className="skill_img" style={{ width: "40%" }} src={skill.img} alt="Image" />
      <h3 className="skill_name">{skill.name}</h3>
    </div>
  );
};
