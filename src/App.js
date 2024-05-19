import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Project2048 from "./projectpages/Project2048.js";
import SPA from "./pages/SPAPortfolio.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/2048" element={<Project2048 />}/>
        <Route path="*" exact element={<SPA/>}/>
      </Routes>
    </>
  );
}

export default App;
