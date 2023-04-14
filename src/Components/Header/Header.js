import React from "react";
import "./Header.css";
import SearchBar from 'material-ui-search-bar';

function Header() {
  return (
    <div className="headerWrapper">
        <div className ="headerLogo">Melodify.ai</div>
        <div style={{margin: '0 auto'}}>

        <SearchBar
        placeholder="Search all generated songs..."
        style={{ height: "2rem", width: "30rem",margin: "0.5rem" }}
        />
        </div>
        <div className ="menuButton">Generate Music</div> 
        <div className ="menuButton"> Music</div> 
        <div className ="menuButton"> test</div> 
        <div className ="menuButton"> test</div> 
    </div>
  );
}

export default Header;


