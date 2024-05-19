import React from 'react'
import "../assets/styles/HeroSection.css"

const HeroSection = (props) => {
  return (
    <div className='hero-img'>
      <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  )
}

export default HeroSection