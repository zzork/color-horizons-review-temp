import { handleDelay2OnOff } from "../../playerEventHandlers";

const Delay2 = ({ playerState, setPlayerState, handleChange }) => {
  return (
    <div>
      <br />
      {(playerState.delay2On && "On") || (!playerState.delay2On && "Off")}
      <br />
      <br />
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
        onChange={handleChange}
      ></input>
      <br />
      <input
        name="delay2Time"
        type="number"
        min="5"
        max="5000"
        value={playerState.delay2Time}
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
        value={playerState.delay2Feedback}
        name="delay2Feedback"
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="number"
        min="1"
        max="99"
        value={playerState.delay2Feedback}
        name="delay2Feedback"
        onChange={handleChange}
      ></input>{" "}
      %
      <br />
      <br />
      <button
        name="delay2OnOff"
        onClick={() => handleDelay2OnOff(playerState, setPlayerState)}
      >
        On/Off
      </button>
      <br />
      <br />
    </div>
  );
};
export default Delay2;
