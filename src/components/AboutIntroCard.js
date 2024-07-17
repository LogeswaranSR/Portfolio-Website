import React, { useEffect, useState } from 'react'
import AboutPhoto from "../assets/images/About Photo 2.jpg"

const AboutIntroCard = () => {
    const[visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
    }, [])
  return (
    <div className={visible ? 'about-intro visible' : "about-intro"}>
        <div className='about-img'>
          <img src={AboutPhoto} alt="img"/>
        </div>
        <div className='about-summary'>
            <h1> Logeswaran SR </h1>
            <h2> Aspiring AI Full-stack Developer </h2>
            <p>
                I am passionate about creating cutting-edge AI applications and 
                seamlessly integrating them into dynamic websites. With a strong 
                foundation in both backend and frontend technologies, I specialize 
                in developing robust Python backends paired with intuitive React frontends.
            </p>
        </div>
      </div>
  )
}

export default AboutIntroCard