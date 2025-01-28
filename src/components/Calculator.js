
import React, { useState } from "react";
import "./Calculator.css"; // Link the CSS file


const Calculator = () => {
    // Setting up state for the display
  const [display, setDisplay] = useState("");



  // Button values for the calculator
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display)); //Evaluate the math expression in display
      } catch {
            setDisplay("Error"); //Handle invalid input
      }
    } else {
        setDisplay(display + value);
    }

  }

  return (
    <div className="calculator">
        {/* Display Area */}
        <div className="display">{display || "0"}</div>
        
        <div className="buttons">
            {/* React requires each child in the array to have a unique key which is why we use Index */}
            {buttons.map((value, index) => (     //handles button click
              <button key={index} onClick={() => handleButtonClick(value)}
                className={value === "0" ? "button-zero" : "button"}
              >
                {value}
              </button>
            ))}
        </div>

    </div>
  )

}

export default Calculator;