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

  MyComponent();

  return (
    <div className="container">
      <div className="mainDiv" id="mainDiv">
        <TopBar stateData={stateData} setStateData={setStateData} />
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

// COPIED RESIZE HOOK CODE, REFACTOR
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function MyComponent() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 250);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
}

// TO ADD
// ------

//////// NEED

// - !!!!!! - eliminate key error messages on each calc method

// - !!!!!! - make all .scl generators uniform (microtonalexplorer.com!! no!)

// about window...

// add explanations of methods

//////// WANT

// - create permalink for sharing scale via url!

// - Custom Harmonics Based Waveform?

// - Data visualization per mode or all of scale

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
