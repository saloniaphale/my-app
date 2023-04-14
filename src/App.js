import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "/Users/salonisanjayaphale/my-app/src/Components/Header/Header.js";
import HomePage from "./Components/homePage/homepage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
          <Route exact path='/' element={<HomePage />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

