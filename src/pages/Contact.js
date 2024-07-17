import React from 'react'
import "../assets/styles/Contact.css"
import HeroSection from '../components/HeroSection'
import { ContactMe } from '../components/StaticData'
import { Link } from 'react-router-dom'

const ContactCard = ({ props }) => {
  return (
    <Link to={props.link} target='_blank' className='contact-card'>
      <img src={props.img} alt="img"/>
      <h4>{props.name}</h4>
    </Link>
  )
}

const Contact = () => {
  return (
    <div className='about-wrapper'>
      <HeroSection heading="Contact" para="Contact me here!!" />
      <div className='profile'>
        <h2>Profile</h2>
        <div className='profile-container'>
          {ContactMe.map((obj, ind) => {
            return (
              <ContactCard props={obj} key={ind} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Contact