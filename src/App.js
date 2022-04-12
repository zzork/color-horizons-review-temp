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
import BottomBar from "./components/BottomBar";

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
      <BottomBar />
    </div>
  );
}

export default App;

// Future Updates:

// - create permalink for sharing scale via url

// - custom harmonics based waveform

// - data visualization per mode or all of scale

// - sample based sound player
