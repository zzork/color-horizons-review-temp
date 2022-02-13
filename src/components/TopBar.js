import { floatingReverseQwerty, handleShowPlayerClick } from "../eventHandlers";

const TopBar = ({ stateData, setStateData }) => {
  return (
    <div className="topBar">
      <header>
        <h2>COLOR HORIZONS</h2>
        {/* <div className="vl"></div> */}
        <span>
          <button
            onClick={() => handleShowPlayerClick(stateData, setStateData)}
          >
            {stateData.player.showPlayer
              ? "Hide Scale Player"
              : "Show Scale Player"}
          </button>
        </span>
        {/* <div className="vl"></div> */}
        <span>
          <button>About</button>
        </span>
        {/* <div className="vl"></div> */}
        {/* <span>
          <h3>
            QWERTY Playback
            <br />
            {stateData.player.active ? "On" : "Off"}
          </h3>
        </span> */}
        {/* <span>
          <button
            onClick={() => floatingReverseQwerty(stateData, setStateData)}
          >
            {stateData.player.active ? (
              <div>
                QWERTY Playback ON
                <br />
                Click to Disengage
              </div>
            ) : (
              <div>
                QWERTY Playback OFF <br />
                Click to Engage
              </div>
            )}
          </button>
        </span> */}
        {/* <div className="vl"></div> */}
        {/* <div className="vl"></div> */}
      </header>
    </div>
  );
};

export default TopBar;
