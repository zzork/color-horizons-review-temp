import './App.css';
import React, { useState } from "react";
import { Selector } from './components/Selector';
import { CalculatorWindow } from './components/CalculatorWindow';
import { CalcEDO } from './components/CalcEDO';
import { stateTable } from './stateTable';


function App() {
  const [stateData, setStateData] = useState(stateTable)
  const [selected, setSelected] = useState("... and it will appear here.")
  return (
    <div>
    <h1>Microtonal Calculators</h1>
    <Selector
    setSelected = {setSelected}
    stateData = {stateData} 
    setStateData = {setStateData}
    />
    <CalculatorWindow
    selected={selected}/>
    </div>
  );
}

export default App;