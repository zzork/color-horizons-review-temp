import { handlePlayerChange } from "../../playerEventHandlers";

const Release = ({ playerState, setPlayerState }) => {
  return (
    <div>
      <br />
      10 - 20,000 ms
      <br />
      <input
        name="releaseTime"
        type="range"
        min="10"
        max="20000"
        value={playerState.releaseTime}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        name="releaseTime"
        type="number"
        min="10"
        max="20000"
        value={playerState.releaseTime}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      ms
      <br />
      <br />
    </div>
  );
};

export default Release;
