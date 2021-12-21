import './App.css';
import React, { useState } from "react";

const Selector = ({setSelected}) => {
  const handleEDOClick = ({}) => setSelected("EDO")
  const handleLTClick = ({}) => setSelected("LT")
  return (
    <div>
      <h2>Selector</h2>
      <p onClick={handleEDOClick}>Equal Division of the Octave</p>
      <p onClick={handleLTClick}>Linear Temperament</p>
    </div>
  );
};

const Calculator = ({selected}) => {
  return (
    <div>
      <h2>Calculator Window</h2>
      <p>{selected}</p>
    </div>
  );
};

function App() {
  const [selected, setSelected] = useState("EDO")
  return (
    <div>
    <h1>Microtonal Calculators</h1>
    <Selector 
    setSelected={setSelected}/>
    <Calculator
    selected={selected}/>
    </div>
  );
}

export default App;
