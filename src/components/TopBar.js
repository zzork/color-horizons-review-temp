import { floatingReverseQwerty, handleShowPlayerClick } from "../eventHandlers";

const TopBar = ({ stateData, setStateData }) => {
  return (
    <div className="topBar">
      <header>
        <h2>COLOR HORIZONS</h2>
        {/* <div className="vl"></div> */}
        {/* <span>
          <h4>QWERTY Playback {stateData.player.active ? "On" : "Off"}</h4>
        </span> */}
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
          <button>About</button>
        </span>
        {/* <div className="vl"></div> */}
        {/* <div className="vl"></div> */}
        {/* <div className="vl"></div> */}
        {/* <div className="vl"></div> */}
      </header>
    </div>
  );
};

export default TopBar;
