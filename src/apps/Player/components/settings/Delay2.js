import {
  handleDelay2OnOff,
  handlePlayerChange,
} from "../../playerEventHandlers";

const Delay2 = ({ playerState, setPlayerState }) => {
  return (
    <div>
      {(playerState.delay2On && <h4>On</h4>) ||
        (!playerState.delay2On && <h4>Off</h4>)}
      Time
      <br />
      5 - 5,000 ms
      <br />
      <input
        name="delay2Time"
        type="range"
        min="5"
        max="5000"
        value={playerState.delay2Time}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        name="delay2Time"
        type="number"
        min="5"
        max="5000"
        value={playerState.delay2Time}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      ms
      <br />
      <br />
      Feedback
      <br />
      1 - 99%
      <br />
      <input
        type="range"
        min="1"
        max="99"
        value={playerState.delay2Feedback}
        name="delay2Feedback"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        type="number"
        min="1"
        max="99"
        value={playerState.delay2Feedback}
        name="delay2Feedback"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      %
      <br />
      <br />
      <button
        name="delay2OnOff"
        onClick={() => handleDelay2OnOff(playerState, setPlayerState)}
      >
        {playerState.delay2On ? "Disengage" : "Engage"}
      </button>
      <br />
      <br />
    </div>
  );
};
export default Delay2;
