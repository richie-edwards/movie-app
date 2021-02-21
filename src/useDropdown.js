import React, { useState } from "react";

const useDropdown = (label, value, options) => {
  const [currentState, setState] = useState(options[0]);
  const id = label.toLowerCase().trim().replace(" ", "");

  const DropdownComponent = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          value={currentState}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    );
  };

  return [currentState, DropdownComponent, setState];
};

export default useDropdown;
