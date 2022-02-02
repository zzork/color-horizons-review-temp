import "./App.css";
import React, { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";
import Player from "./apps/Player/Index";

function App() {
  const [stateData, setStateData] = useState(stateTable);

  useEffect(() => {
    console.log(stateData);
  }, [stateData]);

  const handleShowPlayerClick = () => {
    let newState = stateData.map((stateTableRow) => {
      let showPlayer = !stateData[9].showPlayer;
      if (stateTableRow.id === "j") {
        return {
          ...stateTableRow,
          showPlayer: showPlayer,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const handleSetPlayerClick = (playerData) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "j") {
        return {
          ...stateTableRow,
          playerData: playerData,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
    document.getElementById("engage").focus({ preventScroll: true });
  };

  return (
    <div>
      <h1>COLOR HORIZONS</h1>
      <h1>Scale Player</h1>
      <button onClick={() => handleShowPlayerClick()}>Show/Hide Player</button>
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
      <CalculatorWindow
        stateData={stateData}
        setStateData={setStateData}
        handleSetPlayerClick={handleSetPlayerClick}
      />
      <br />
    </div>
  );
}

export default App;

// TO ADD
// ------

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
