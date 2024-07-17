import React from 'react'
import HeroSection from "../components/HeroSection.js"
import "../assets/styles/Experience.css"
import { ExperienceData } from "../components/StaticData.js"


const ExperienceCard = ({ props }) => {
  return (
    <div className='exp-card'>
      <img src={props.img} alt="img"/>
      <div className='exp-card-content'>
        <h2>{props.role}</h2>
        <h3>{props.company}</h3>
        <h4>{props.period || "Started - " + props.start_date}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className='experience'>
      <HeroSection heading="Experience" para="Check out my past experience."/>
      <div className='experience-intro'>
        <h1>My Experience</h1>
        <p>
          I am currently at my Final Year in college. I work as a part-time Research Assistant for The Srinivasa Ramanuja Think Tank. 
          I have also worked as an Intern in the fields of AI and ML.
        </p>
      </div>
      <div className='current-role'>
        <h2>Current</h2>
        <div className='current-container'>
          {ExperienceData['Current'].map((obj, ind) => {
            return (
              <ExperienceCard props={obj} key={ind}/>
            )
          })}
        </div>
      </div>
      <div className='internship'>
        <h2>Internship</h2>
        <div className='internship-container'>
          {ExperienceData["Internship"].map((obj, ind) => {
            return (
              <ExperienceCard props={obj} key={ind}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience