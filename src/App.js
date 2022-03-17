import "./App.css";
import { useEffect, useState } from "react";
import { Selector } from "./components/Selector";
import { CalculatorWindow } from "./components/CalculatorWindow";
import { stateTable } from "./stateData";
import { ComparisonOptions } from "./apps/RatioComparer/ComparisonOptions";
import Player from "./apps/Player/Index";
import TopBar from "./components/TopBar";
import About from "./components/About";
import { playerStateData } from "./apps/Player/playerStateData";

function App() {
  const [stateData, setStateData] = useState(stateTable);
  const [playerState, setPlayerState] = useState(playerStateData);

  // useEffect(() => {
  //   console.log({ stateData });
  // }, [stateData]);

  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 1);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div id="Top" className="container">
      <TopBar stateData={stateData} setStateData={setStateData} />
      <div className="mainDiv" id="mainDiv">
        {stateData.about.showAbout && (
          <About stateData={stateData} setStateData={setStateData} />
        )}
        {!stateData.about.showAbout && (
          <div>
            <Player
              stateData={stateData}
              setStateData={setStateData}
              playerState={playerState}
              setPlayerState={setPlayerState}
            />
            <h1>Scale Creation Tools</h1>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Selector
                      stateData={stateData}
                      setStateData={setStateData}
                    />
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
            <CalculatorWindow
              stateData={stateData}
              setStateData={setStateData}
            />
            <br />
            <br />
          </div>
        )}
      </div>
      <div className="bottomBar">
        <p>
          <a href="http://jonlervold.com" target="_blank" rel="noreferrer">
            jonlervold.com
          </a>{" "}
          //{" "}
          <a
            href="https://github.com/jonlervold/color-horizons"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          // 2022
        </p>
      </div>
    </div>
  );
}

export default App;

// TO ADD
// ------

//////// NEED

// full about rough draft

// final drafts for info buttons on methods

// volume slider ALMOST works right, move fast and it won't zero out...

//////// WANT

// - create permalink for sharing scale via url!

// - Custom Harmonics Based Waveform?

// - Data visualization per mode or all of scale

// - Sample based sound player

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
