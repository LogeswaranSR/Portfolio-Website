import React from 'react'
import "../assets/styles/Home.css"
import { Link } from 'react-router-dom';
import BGImg from "../assets/images/BackgroundImage.png"

const Home = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='bg-img' src={ BGImg } alt='BGImg'/>
      </div>
      <div className='content'>
        <h1>Welcome to my Portfolio</h1>
        <p>Hello There! and Welcome to my Portfolio Website.</p>
        <div>
          <Link to='about' className='btn'>Know About Me</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;