import { handlePlayerChange } from "../../playerEventHandlers";

const Distortion = ({ playerState, setPlayerState }) => {
  return (
    <div>
      <br />
      0 - 110%
      <br />
      <input
        name="distortion"
        type="range"
        min="0"
        max="110"
        value={playerState.distortion}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        name="distortion"
        type="number"
        min="0"
        max="110"
        value={playerState.distortion}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      %
      <br />
      <br />
    </div>
  );
};

export default Distortion;
