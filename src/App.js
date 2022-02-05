import "./App.css";
import React, { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";
import Player from "./apps/Player/Index";
import { handleShowPlayerClick } from "./eventHandlers";

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
        {stateData.player.showPlayer ? "Hide Player" : "Show Player"}
      </button>
      <Player stateData={stateData} setStateData={setStateData} />
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
      {/* <CalculatorWindow stateData={stateData} setStateData={setStateData} /> */}
      <br />
    </div>
  );
}

export default App;

// TO ADD
// ------

//////// NEED

// - Extracting handler events where possible

// - comparison window... what should the ratio group options be??

// - reset sounds button

// - make engaged / disengaged player state clearer to user

//////// WANT

// - create permalink for sharing scale via url!

// - IP being able to do double digit entries via () e.g. 4(12)4(12)

// - Custom Harmonics Based Waveform?

// - Data visualization per mode or all of scale

// - add explanations of scale generation methods

/////////////

// LIFT STATE ALL TO GLOBAL STATE OBJECT

// state needs to be compacted and turned into an object... seems like a big project! but I can do it!

// pass state down differently, simpler

/////////////

// MAKE EVERYTHING LOOK REALLY NICE
