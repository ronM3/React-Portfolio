import React from "react";


export const SkillCard = ({ skill }) => {
  return (
    <div className="skill_item">
      <img className="skill_img" src={skill.img} alt="skill" style={{ width: "40%" }}  />
      <h3 className="skill_name">{skill.name}</h3>
    </div>
  );
};
