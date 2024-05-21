import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Project2048 from "./projectpages/Game 2048/Project2048.js";
import SPA from "./pages/SPAPortfolio.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio/*" element={<SPA/>}/>
        <Route path="/2048" element={<Project2048 />}/>
        <Route path="/" exact element={<Navigate to="/portfolio" replace/>}/>
      </Routes>
    </>
  );
}

export default App;
