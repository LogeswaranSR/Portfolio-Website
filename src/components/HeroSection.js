import React from 'react'
import "../assets/styles/HeroSection.css"
import HeroSectionImage from "../assets/images/HeroSectionImage.jpg"

const HeroSection = (props) => {
  return (
    <div className='hero-section'>
      <div className='hero-img'>
        <img src={HeroSectionImage} alt="img"/>
      </div>
      <div className='herosection-overlay'>
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  )
}

export default HeroSection