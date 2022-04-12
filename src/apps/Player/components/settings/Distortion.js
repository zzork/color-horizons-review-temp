import { handlePlayerChange } from "../../playerEventHandlers";

const Distortion = ({ playerState, setPlayerState }) => {
  return (
    <div>
      <br />
      0 - 100%
      <br />
      <input
        name="distortion"
        type="range"
        min="0"
        max="100"
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
        max="100"
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
