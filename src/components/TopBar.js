import { useEffect } from "react";
import {
  floatingReverseQwerty,
  handleShowAbout,
  handleShowPlayerClick,
} from "../eventHandlers";

const TopBar = ({ stateData, setStateData }) => {
  return (
    <div className="topBar">
      <header>
        <h2>COLOR HORIZONS</h2>
        <span>
          <button
            className="topButton1"
            onClick={() => handleShowPlayerClick(stateData, setStateData)}
          >
            {stateData.player.showPlayer
              ? "Scale Player Visible"
              : "Scale Player Hidden"}
          </button>
        </span>
        {window.innerWidth > 640 && (
          <span>
            <button
              className="topButton2"
              onClick={() => floatingReverseQwerty(stateData, setStateData)}
            >
              {stateData.player.active
                ? "QWERTY Player ON 🔊"
                : "QWERTY Player OFF 🔇"}
            </button>
          </span>
        )}
        <span>
          <button
            className="mb"
            onClick={() => handleShowAbout(stateData, setStateData)}
          >
            About
          </button>
        </span>
      </header>
    </div>
  );
};

export default TopBar;

{
  /* <div className="vl"></div> */
}
