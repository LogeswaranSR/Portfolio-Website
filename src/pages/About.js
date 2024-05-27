import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import "../assets/styles/About.css"
import HeroSection from '../components/HeroSection'
import AboutIntroCard from '../components/AboutIntroCard'
import SkillCard from '../components/SkillCard'
import { EducationData, SkillsData } from '../components/StaticData'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  const details = Object.entries(SkillsData)
  console.log(details)

  return (
    <div className='about-wrapper'>
      <HeroSection heading="About" para="Let's know a little about me"/>
      <div className='about-content'>
        <AboutIntroCard />
        <div className='skills'>
          <h1>Skills</h1>
          {
            details.map(([key, value])=>{
              return (
                <div className='skill-row'>
                  <h2>{key}</h2>
                  <div className='skill-container'>
                    {value.map((ele, id)=>{
                      return (
                        <SkillCard key={id} name={ele.name} logo={ele.logo}/>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='education'>
          <h1 className='edu-title'> Education </h1>
          <VerticalTimeline 
          layout={"1-column-left"}
          lineColor='#222'
          className='edu-timeline'
          >
            {EducationData.map((element, index) => {
              console.log(element, index);
              return (<VerticalTimelineElement key={index} 
                icon={<FaGraduationCap style={{ color:"#eee" }}/>} 
                date={element.period}
                dateClassName='edu-date'
                contentStyle={{
                backgroundColor: "#222"
              }}>
                <h3 className="vertical-timeline-element-title" style={{ fontSize:"1.2rem" }}>{element.degree}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ paddingTop:10, fontSize:"1.1rem" }}>{element.title}</h4>
                <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: "1rem" }}>{element.location}</h4>
                <p style={{ fontWeight:400 }}>
                  {element.desc}
                </p>
              </VerticalTimelineElement>
            )})}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default About