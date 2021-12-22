import './App.css';
import React, { useState } from "react";
import { Selector } from './components/Selector';
import { CalculatorWindow } from './components/CalculatorWindow';
import { CalcEDO } from './components/CalcEDO';


function App() {
  const [selected, setSelected] = useState(<CalcEDO/>)
  return (
    <div>
    <h1>Microtonal Calculators</h1>
    <Selector
    setSelected={setSelected}/>
    <CalculatorWindow
    selected={selected}/>
    </div>
  );
}

export default App;