import React, { useState } from 'react'
import "../assets/styles/NavBar.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [sideMenu, setSideMenu] = useState(false);

  const handleClick = () => {setSideMenu(!sideMenu)}

  const [bg, setBg] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 100){
      setBg(true)
    } else {
      setBg(false)
    }
  }

  window.addEventListener("scroll", changeBg)

  return (
    <div className={bg ? "header header-bg" : "header"}>
      <Link to="/" className='navbar-portfolio'>My Portfolio</Link>
      <ul className={sideMenu ? "navbar-menu active" : "navbar-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="burger" onClick={handleClick}>
        {sideMenu ? 
        <FaTimes size={20} style={{ color: "#fff" }} /> 
        : <FaBars size={20} style={{ color: "#fff" }}/> }
      </div>
    </div>
  )
}

export default NavBar