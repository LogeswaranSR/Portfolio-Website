import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js"
import NavBar from "./components/NavBar.js";
import Contact from "./pages/Contact.js";
import Skills from "./pages/Skills.js";
import Experience from "./pages/Experience.js"
import Footer from "./components/Footer.js";

function App() {
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
  );
}

export default App;
