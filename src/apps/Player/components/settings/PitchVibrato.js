import {
  handlePitchVibratoOnOff,
  handlePlayerChange,
} from "../../playerEventHandlers";

const PitchVibrato = ({ playerState, setPlayerState }) => {
  return (
    <div>
      <br />
      {(playerState.pitchVibratoOn && "On") ||
        (!playerState.pitchVibratoOn && "Off")}
      <br />
      <br />
      Speed
      <br />
      0 - 10,000 Hz
      <br />
      <input
        type="range"
        min="0"
        max="10000"
        value={playerState.pitchVibratoSpeed}
        name="pitchVibratoSpeed"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        type="number"
        min="0"
        max="10000"
        value={playerState.pitchVibratoSpeed}
        name="pitchVibratoSpeed"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      Hz
      <br />
      <br />
      Depth
      <br />
      0 - 1200 Cents
      <br />
      <input
        type="range"
        min="0"
        max="1200"
        value={playerState.pitchVibratoDepth}
        name="pitchVibratoDepth"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        type="number"
        min="0"
        max="1200"
        value={playerState.pitchVibratoDepth}
        name="pitchVibratoDepth"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      Cents
      <br />
      <br />
      <button
        name="pitchVibratoOnOff"
        onClick={() => handlePitchVibratoOnOff(playerState, setPlayerState)}
      >
        {playerState.pitchVibratoOn ? "Disengage" : "Engage"}
      </button>
      <br />
      <br />
    </div>
  );
};

export default PitchVibrato;
