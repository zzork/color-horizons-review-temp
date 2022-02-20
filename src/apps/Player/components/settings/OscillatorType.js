import { handleTypeClick } from "../../playerEventHandlers";
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";

const OscillatorType = ({ playerState, setPlayerState }) => {
  return (
    <div>
      {capitalizeFirstLetter(playerState.oscillatorType)}
      <br />
      <br />
      <button
        className="mb"
        name="sine"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Sine
      </button>
      <button
        className="mb"
        name="triangle"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Triangle
      </button>
      <br />
      <button
        className="mb"
        name="square"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Square
      </button>
      <button
        className="mb"
        name="sawtooth"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Sawtooth
      </button>
    </div>
  );
};

export default OscillatorType;
