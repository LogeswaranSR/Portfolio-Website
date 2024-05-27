import React from 'react'
import "../assets/styles/SkillCard.css"

const SkillCard = (props) => {
  return (
    <div className='skill-card'>
        <img src={props.logo} alt="img"/>
        <h4>{props.name}</h4>
    </div>
  )
}

export default SkillCard