import { handlePlayerChange } from "../../playerEventHandlers";

const Attack = ({ playerState, setPlayerState }) => {
  return (
    <div>
      <br />
      10 - 5,000 ms
      <br />
      <input
        name="attackTime"
        type="range"
        min="10"
        max="5000"
        value={playerState.attackTime}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        name="attackTime"
        type="number"
        min="10"
        max="5000"
        value={playerState.attackTime}
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

export default Attack;
