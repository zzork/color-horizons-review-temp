import { handleDelay1OnOff } from "../../playerEventHandlers";

const Delay1 = ({ playerState, setPlayerState, handleChange }) => {
  return (
    <div>
      <br />
      {(playerState.delay1On && "On") || (!playerState.delay1On && "Off")}
      <br />
      <br />
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
        onChange={handleChange}
      ></input>
      <br />
      <input
        name="delay1Time"
        type="number"
        min="5"
        max="5000"
        value={playerState.delay1Time}
        onChange={handleChange}
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
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="number"
        min="1"
        max="99"
        value={playerState.delay1Feedback}
        name="delay1Feedback"
        onChange={handleChange}
      ></input>{" "}
      %
      <br />
      <br />
      <button
        name="delay1OnOff"
        onClick={() => handleDelay1OnOff(playerState, setPlayerState)}
      >
        On/Off
      </button>
      <br />
      <br />
    </div>
  );
};
export default Delay1;
