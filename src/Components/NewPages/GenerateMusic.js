
import React, { useState } from "react";
import "./GenerateMusic.css";


function GenerateMusic() {
    const [textInput1, setTextInput1] = useState("");
    const [textInput2, setTextInput2] = useState("");
    const [textInput3, setTextInput3] = useState("");
    const [textInput4, setTextInput4] = useState("");
    const [textInput5, setTextInput5] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleInputChange = (e, setter) => {
      setter(e.target.value);
    };
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };  
  
    const isDisabled = (inputValue) => {
      return selectedOption === inputValue;
    }
  
    return (
      <div className="generate-music-container">
        <div className="input-container">
          <input
            type="text"
            value={textInput1}
            placeholder="Genre Weight"
            onChange={(e) => handleInputChange(e, setTextInput1)}
            disabled={isDisabled(1)}
          />
          <input
            type="text"
            value={textInput2}
            placeholder="No Genre Weight"
            onChange={(e) => handleInputChange(e, setTextInput2)}
            disabled={isDisabled(2)}
          />
          <input
            type="text"
            value={textInput3}
            placeholder="Top N"
            onChange={(e) => handleInputChange(e, setTextInput3)}
            disabled={isDisabled(3)}
          />
          <input
            type="text"
            value={textInput4}
            placeholder="Num Genres"
            onChange={(e) => handleInputChange(e, setTextInput4)}
            disabled={isDisabled(4)}
          />
          <input
            type="text"
            value={textInput5}
            placeholder="Partial Match"
            onChange={(e) => handleInputChange(e, setTextInput5)}
            disabled={isDisabled("j")}
          />
        </div>
        <div className="select-container">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="j">Jaccard Model</option>
            <option value="p">Partial Match Model</option>
            <option value="s">Search Only</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default GenerateMusic;