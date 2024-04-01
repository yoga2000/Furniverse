import React, { useState } from "react";

const RadioButton = (color) => {
  const [selectedColor, setSelectedColor] = useState();

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      {color.map((color) => (
        <label key={color}>
          <input
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={handleColorChange}
          />
          {color.charAt(0).toUpperCase() + color.slice(1)}{" "}
          {/* Capitalize first letter of color */}
        </label>
      ))}

      <p>Selected color: {selectedColor}</p>
    </div>
  );
};

export default RadioButton;
