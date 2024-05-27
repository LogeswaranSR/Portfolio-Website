import React, { useEffect } from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import './App.css';
import Project2048 from "./projectpages/Game 2048/Project2048.js";
import SPA from "./pages/SPAPortfolio.js";

function App() {
  return (
    <>
      <PageHandler />
      <Routes>
        <Route path="/portfolio/*" element={<SPA/>}/>
        <Route path="/2048" element={<Project2048 />}/>
        <Route path="/" exact element={<Navigate to="/portfolio" replace/>}/>
      </Routes>
    </>
  );
}

const PageHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.startsWith("/portfolio")) {
        document.body.style.backgroundColor = 'black';
        document.title = "My Portfolio"
    } else {
        document.body.style.backgroundColor = 'white';
        if(location.pathname==="/2048"){
          document.title = "Project 2048"
        }
    }
  }, [location]);

  return null;
};


export default App;
