import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Allprojects from "./routes/Allprojects";


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Allprojects/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
