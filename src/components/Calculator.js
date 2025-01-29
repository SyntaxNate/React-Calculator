
import React, { useState } from "react";
import "./Calculator.css"; // Link the CSS file


const Calculator = () => {
    // Set up State to manage display value
  const [display, setDisplay] = useState("");



  // Array of buttons to be dynamically rendered
  const buttons = [
    "C","7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  // Function to handle button clicks
 const handleButtonClick = (value) => {

    if (value ==="=") {
      try {
  //Use eval() to evaluate the expressions & .string() to ensure the result is properly formatted
        setDisplay(eval(display).toString());
      } catch {
        //Display error if invalid input
          setDisplay("Error");        
      }
        // Resets the display if 'C' is pressed
    }   else if(value ==="C") {
           setDisplay("0")    

  }       else {
    // Append the clicked value to the display
      setDisplay(display === "0" ? value : display + value)
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
              // Class styles given to these buttons when pressed
                className={value ==="0" ? "button-zero" : 
                            value === "C" ? "button-clear" : 
                              value === "=" ? "button-equal" : "button"}
              >
                {value}
              </button>
            ))}
        </div>

    </div>
  )

}

export default Calculator;