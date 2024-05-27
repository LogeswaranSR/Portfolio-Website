import "../assets/styles/Projects.css"
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import HeroSection from '../components/HeroSection'
import { ProjectData } from "../components/StaticData"

const Projects = () => {
  return (
    <div>
      <HeroSection heading="Projects" para="Check some of my live projects!!"/>
      <div className='project-main-container'>
        <h1 className='project-heading'> Projects </h1>
        <p className="project-summary"> 
          Explore my AI projects, including demos deployed with React and GitHub repositories. 
          Check them out below and click to see a demo! 
        </p>
        <div className="project-container">
          {ProjectData.map((data, ind) => { return(
            <ProjectCard 
            key={ind} 
            imgsrc={data.imgsrc}
            title={data.title}
            description={data.description}
            link={data.linkToProject || null}/>
          )})}
        </div>
      </div>
    </div>
  )
}

export default Projects