import './App.css';
import React, { useState } from "react";
import { Selector } from './components/Selector';
import { CalculatorWindow } from './components/CalculatorWindow';


function App() {
  const [selected, setSelected] = useState("EDO")
  return (
    <div>
    <h1>Microtonal Calculators - App Component</h1>
    <Selector
    setSelected={setSelected}/>
    <CalculatorWindow
    selected={selected}/>
    </div>
  );
}

export default App;