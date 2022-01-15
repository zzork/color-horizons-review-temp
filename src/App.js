import "./App.css";
import React, { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";

function App() {
  const [stateData, setStateData] = useState(stateTable);

  // these could be lifted up to stateTable
  const [selectedView, setSelectedView] = useState("td");

  useEffect(() => {
    console.log(stateData);
  }, [stateData]);

  const onViewSelect = (viewId) => {
    setSelectedView(viewId);
  };
  const [selectedComparison, setSelectedComparison] = useState("harmonics6");
  const onComparisonSelect = (comparisonId) => {
    setSelectedComparison(comparisonId);
  };

  return (
    <div>
      <h1>MICROTONAL EXPLORER</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Selector onViewSelect={onViewSelect} />
            </td>
            <td>
              <ComparisonOptions onComparisonSelect={onComparisonSelect} />
            </td>
          </tr>
          <br />
        </tbody>
      </table>
      <CalculatorWindow
        viewId={selectedView}
        stateData={stateData}
        setStateData={setStateData}
        selectedComparison={selectedComparison}
      />
      <br />
    </div>
  );
}

export default App;

// TO ADD
// ------

// playback method, with ability to play single notes, chords, or split keyboard of both too!
// - with that, ability to choose size of chords, or maybe also just approximations like in scala

// ability to generate .scl files from each scale

// set decimal accuracy of readouts? at least set to 6 instead of 5

// to do - lift other states in app.js to stateData table

// re-figure out how comparison window works, refactor if needed
