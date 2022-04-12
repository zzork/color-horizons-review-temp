import {
  floatingReverseQwerty,
  handleShowAbout,
  handleShowAboutColorHorizons,
  handleShowKeyConcepts,
  handleShowPlayerClick,
} from "../eventHandlers";

const TopBar = ({ stateData, setStateData }) => {
  return (
    <div className="topBar">
      <header>
        <h2>COLOR HORIZONS</h2>
        {!stateData.about.showAbout && (
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
        )}

        {window.innerWidth > 640 && !stateData.about.showAbout && (
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
        {stateData.about.showAbout && (
          <span>
            <button
              className="mb"
              onClick={() => handleShowKeyConcepts(stateData, setStateData)}
            >
              Key Concepts
            </button>
          </span>
        )}
        {stateData.about.showAbout && (
          <span>
            <button
              className="mb"
              onClick={() =>
                handleShowAboutColorHorizons(stateData, setStateData)
              }
            >
              About Color Horizons
            </button>
          </span>
        )}
        <span>
          <button
            className="mb"
            onClick={() => handleShowAbout(stateData, setStateData)}
          >
            {stateData.about.showAbout ? "Home" : "More Info"}
          </button>
        </span>
      </header>
    </div>
  );
};

export default TopBar;
