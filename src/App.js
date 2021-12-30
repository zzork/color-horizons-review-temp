import "./App.css";
import React, { useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";

function App() {
  const [stateData, setStateData] = useState(stateTable);
  const [selectedView, setSelectedView] = useState("edo");
  const onSelect = (viewId) => {
    setSelectedView(viewId);
  };
  return (
    <div>
      <h1>Microtonal Calculators</h1>
      <Selector onSelect={onSelect} />
      <CalculatorWindow
        viewId={selectedView}
        stateData={stateData}
        setStateData={setStateData}
      />
    </div>
  );
}

export default App;

// TO ADD

// refactor calcLTReadout2

// LT table should show fraction values as well as cents, and reduced fraction values
