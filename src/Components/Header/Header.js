import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Header.css";
// import SearchBar from 'material-ui-search-bar';

function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerLogo">Melodify.ai</div>
      <div style={{ margin: '0 auto' }}>
        {/* <SearchBar
        placeholder="Search all generated songs..."
        style={{ height: "2rem", width: "30rem",margin: "0.5rem" }}
        /> */}
      </div>
      {/* Use NavLink component to navigate to "/homePage" and highlight active link */}
      <NavLink exact to="/" activeClassName="activeLink" className="menuButton">Home</NavLink>
      <NavLink to="/GenerateMusic" activeClassName="activeLink" className="menuButton">Generate Music</NavLink>
      <NavLink to="/Music" activeClassName="activeLink" className="menuButton">Music</NavLink>
      <NavLink to="/test" activeClassName="activeLink" className="menuButton">Test</NavLink>
      {/* <div className="menuButton">Music</div>
      <div className="menuButton">test</div>
      <div className="menuButton">Home</div> */}
    </div>
  );
}

export default Header;
