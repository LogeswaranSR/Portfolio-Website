import "../assets/styles/ProjectCard.css"
import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="img"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ProjectCard