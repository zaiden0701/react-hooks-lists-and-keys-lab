import React from "react";

function ProjectItem({ name, about, technologies }) {
  const renderTechnologies = technologies.map((tech) => {
    return <span key={tech}>{tech}</span>
  })
  // console.log({id})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
