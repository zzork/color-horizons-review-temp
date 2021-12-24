import './App.css';
import React, { useState } from "react";
import { Selector } from './components/Selector';
import { CalculatorWindow } from './components/CalculatorWindow';
import { CalcEDO } from './components/CalcEDO';
import { stateTable } from './stateTable';


function App() {
  const [stateData, setStateData] = useState(stateTable)
  const [selectedView, setSelectedView] = useState ("edo")
  const onSelect = (viewId) => {
    console.log("select" + viewId)
    setSelectedView(viewId)
  }
  return (
    <div>
    <h1>Microtonal Calculators</h1>
    <Selector
    onSelect={onSelect}
    />
    <CalculatorWindow
    viewId = {selectedView}
    stateData = {stateData} 
    setStateData = {setStateData}/>
    </div>
  );
}

export default App;