import "./App.css";
import React, { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";
import Player from "./apps/Player/Index";
import { handleShowPlayerClick } from "./eventHandlers";
import QwertyFloat from "./components/QwertyFloat";
import TopBar from "./components/TopBar";

function App() {
  const [stateData, setStateData] = useState(stateTable);

  useEffect(() => {
    console.log({ stateData });
  }, [stateData]);

  return (
    <div>
      <div className="marginTop">
        <TopBar stateData={stateData} setStateData={setStateData} />
        {/* <QwertyFloat stateData={stateData} setStateData={setStateData} /> */}
        <Player stateData={stateData} setStateData={setStateData} />
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
        <br />
      </div>
      <div className="bottomBar">
        <p>created by jon lervold // jonlervold.com // 2022</p>
      </div>
    </div>
  );
}

export default App;

// TO ADD
// ------

//////// NEED

// - comparison window... what should the ratio group options be??

// - make all .scl generators uniform (microtonalexplorer.com!! no!)

// about window...

// add explanations of methods

// make all buttons dynamic instead of "show/hide" or whatever

// on off on effects make bigger

// table header rows darker than content rows

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
