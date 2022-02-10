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

//////// NEED

// - comparison window... what should the ratio group options be??

// - make engaged / disengaged player state clearer to user

// - make all .scl generators uniform (microtonalexplorer.com!! no!)

//////// WANT

// - create permalink for sharing scale via url!

// - Custom Harmonics Based Waveform?

// - Data visualization per mode or all of scale

// - add explanations of scale generation methods

/////////////

// MAKE EVERYTHING LOOK REALLY NICE

//   //   const incomingScale = [
//     0,
//     138.57266,
//     266.87091,
//     386.31371,
//     603.00041,
//     701.955,
//     884.35871,
//     1049.36294,
//     2 / 1,
//   ];
