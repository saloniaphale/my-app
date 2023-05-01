import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header.js";
import HomePage from "./Components/homePage/homepage.js";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox.js";
import GenerateMusic from "./Components/NewPages/GenerateMusic.js"; // Import the GenerateMusic component

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/" element={<BackgroundBox />} />
          <Route exact path="/GenerateMusic" element={<GenerateMusic />} /> {/* Update the route for GenerateMusic */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
