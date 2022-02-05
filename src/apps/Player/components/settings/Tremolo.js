import {
  handlePlayerChange,
  handleTremoloOnOff,
} from "../../playerEventHandlers";

const Tremolo = ({ playerState, setPlayerState }) => {
  return (
    <div>
      <br />
      {(playerState.tremoloOn && "On") || (!playerState.tremoloOn && "Off")}
      <br />
      <br />
      Speed
      <br />
      0.5 - 20 Hz
      <br />
      <input
        type="range"
        min=".5"
        max="20"
        value={playerState.tremoloSpeed}
        name="tremoloSpeed"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        type="number"
        min=".5"
        max="20"
        value={playerState.tremoloSpeed}
        name="tremoloSpeed"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      Hz
      <br />
      <br />
      Intensity
      <br />
      1 - 100%
      <br />
      <input
        type="range"
        min="1"
        max="100"
        value={playerState.tremoloIntensity}
        name="tremoloIntensity"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        type="number"
        min="1"
        max="100"
        value={playerState.tremoloIntensity}
        name="tremoloIntensity"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      %
      <br />
      <br />
      <button
        name="tremoloOnOff"
        onClick={() => handleTremoloOnOff(playerState, setPlayerState)}
      >
        On/Off
      </button>
      <br />
      <br />
    </div>
  );
};

export default Tremolo;
