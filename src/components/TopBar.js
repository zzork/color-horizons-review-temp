import { useEffect } from "react";
import {
  floatingReverseQwerty,
  handleShowAbout,
  handleShowPlayerClick,
} from "../eventHandlers";

const TopBar = ({ stateData, setStateData, setWidth }) => {
  // why does this need to be in HERE?
  // if it is in app.js this component doesn't re-render properly when orientation is changed
  useEffect(() => {
    const handleResize = () => {
      setWidth([window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
          <button onClick={() => handleShowAbout(stateData, setStateData)}>
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
