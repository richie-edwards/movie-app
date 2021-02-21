import React, { useState } from "react";

const RangeComponent = ({
  label,
  fromState,
  toState,
  setToState,
  setFromState,
}) => {
  const id = label.toLowerCase().trim().replace(" ", "");
  return (
    <div>
      <label>{label}</label>

      <input
        onChange={(e) => {
          setFromState(e.target.value);
        }}
        onBlur={(e) => {
          setFromState(e.target.value);
        }}
        value={fromState}
        type="number"
        minLength="4"
        maxLength="4"
        placeholder="from"
      ></input>

      <input
        onChange={(e) => {
          setToState(e.target.value);
        }}
        onBlur={(e) => {
          setToState(e.target.value);
        }}
        value={toState}
        type="number"
        minLength="4"
        maxLength="4"
        placeholder="to"
      ></input>
    </div>
  );
};

const useRange = (label, from, to) => {
  const [fromState, setFromState] = useState(from);
  const [toState, setToState] = useState(to);

  return [
    [fromState, toState],
    <RangeComponent
      fromState={fromState}
      toState={toState}
      label={label}
      setFromState={setFromState}
      setToState={setToState}
    />,
    [setFromState, setToState],
  ];
};

export default useRange;
