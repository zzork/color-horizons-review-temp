import {
  handleDelay1OnOff,
  handlePlayerChange,
} from "../../playerEventHandlers";

const Delay1 = ({ playerState, setPlayerState }) => {
  return (
    <div>
      {(playerState.delay1On && <h4>On</h4>) ||
        (!playerState.delay1On && <h4>Off</h4>)}
      Time
      <br />
      5 - 5,000 ms
      <br />
      <input
        name="delay1Time"
        type="range"
        min="5"
        max="5000"
        value={playerState.delay1Time}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        name="delay1Time"
        type="number"
        min="5"
        max="5000"
        value={playerState.delay1Time}
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
        value={playerState.delay1Feedback}
        name="delay1Feedback"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <input
        type="number"
        min="1"
        max="99"
        value={playerState.delay1Feedback}
        name="delay1Feedback"
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>{" "}
      %
      <br />
      <br />
      <button
        className="mb"
        name="delay1OnOff"
        onClick={() => handleDelay1OnOff(playerState, setPlayerState)}
      >
        {playerState.delay1On ? "Disengage" : "Engage"}
      </button>
      <br />
      <br />
    </div>
  );
};
export default Delay1;
