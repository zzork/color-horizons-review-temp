import "./App.css";
import React, { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";
import Player from "./apps/Player/Index";
import { handleSetPlayerClick, handleShowPlayerClick } from "./eventHandlers";

function App() {
  const [stateData, setStateData] = useState(stateTable);

  useEffect(() => {
    console.log(stateData);
  }, [stateData]);

  return (
    <div>
      <h1>COLOR HORIZONS</h1>
      <h1>Scale Player</h1>
      <button onClick={() => handleShowPlayerClick(stateData, setStateData)}>
        Show/Hide Player
      </button>
      <Player stateData={stateData} />
      <br />
      <h1>Scale Creation Tools</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Selector stateData={stateData} setStateData={setStateData} />
            </td>
            <td>
              <ComparisonOptions
                stateData={stateData}
                setStateData={setStateData}
              />
            </td>
          </tr>
          <br />
        </tbody>
      </table>
      <CalculatorWindow stateData={stateData} setStateData={setStateData} />
      <br />
    </div>
  );
}

export default App;

// TO ADD
// ------

// fix ratio table so it matches exactly with the calcs instead of being taken from scala so sometimes slightly off

// create permalink for sharing scale via url

// set decimal accuracy of readouts? at least set to 6 instead of 5

// - Extracting handler events, if possible - Click Start/Stop Need Fixing...

// - Optimal focus...

// - Custom Harmonics Based Waveform? <br />

// - Data visualization per mode or all of scale <br />

// MAKE EVERYTHING LOOK REALLY NICE

// "selection contains values above the range of human hearing"

// comparison window... what should the ratio group options be??

/////////////

// LIFT STATE ALL TO GLOBAL STATE OBJECT FIRST

// state needs to be compacted and turned into an object... seems like a big project! but I can do it!

// pass state down differently, simpler
