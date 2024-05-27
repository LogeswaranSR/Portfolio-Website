import React from 'react'
import "../assets/styles/Footer.css"
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Chennai, Tamil Nadu, India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    +91-93801-91947
                    </h4>
                </div>
                <div className='mail'>
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    logeswaran.sr@hotmail.com <br/>
                    <p>logeswaransr2004@gmail.com</p>
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>I am a budding AI Full-stack Developer. 
                    I work in AI projects in need of a React Front-end.
                    Apart from AI, I also work as a Python Back-end Developer.
                </p>
                <div className='social'>
                <FaLinkedin size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer