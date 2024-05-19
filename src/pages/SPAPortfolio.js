import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js"
import NavBar from "../components/NavBar.js";
import Contact from "./Contact.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js"
import Footer from "../components/Footer.js";

const SPA = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/> } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/experience" element={<Experience />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default SPA