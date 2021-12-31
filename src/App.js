import "./App.css";
import React, { useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./components/ComparisonOptions";

function App() {
  const [stateData, setStateData] = useState(stateTable);
  const [selectedView, setSelectedView] = useState("lt");
  const onSelect = (viewId) => {
    setSelectedView(viewId);
  };
  const [selectedComparison, setSelectedComparison] = useState("primes");
  const onComparisonChoice = (comparisonId) => {
    setSelectedComparison(comparisonId);
  };

  return (
    <div>
      <h1>Microtonal Calculators</h1>
      <Selector onSelect={onSelect} />
      <ComparisonOptions onComparisonChoice={onComparisonChoice} />
      <CalculatorWindow
        viewId={selectedView}
        stateData={stateData}
        setStateData={setStateData}
        selectedComparison={selectedComparison}
      />
    </div>
  );
}

export default App;

// TO ADD
// ------
// - LT table should show fraction values as well as cents, and reduced fraction values
