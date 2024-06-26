import React, { useEffect } from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import './App.css';
import Project2048 from "./projectpages/Game 2048/Project2048.js";
import SPA from "./pages/SPAPortfolio.js";

function App() {
  return (
    <>
      <BackgroundColorHandler />
      <Routes>
        <Route path="/portfolio/*" element={<SPA/>}/>
        <Route path="/2048" element={<Project2048 />}/>
        <Route path="/" exact element={<Navigate to="/portfolio" replace/>}/>
      </Routes>
    </>
  );
}

const BackgroundColorHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.startsWith("/portfolio")) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
    }
  }, [location]);

  return null;
};


export default App;
