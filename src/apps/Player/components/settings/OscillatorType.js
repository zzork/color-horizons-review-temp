import { handleTypeClick } from "../../playerEventHandlers";
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";

const OscillatorType = ({ playerState, setPlayerState }) => {
  return (
    <div>
      {capitalizeFirstLetter(playerState.oscillatorType)}
      <br />
      <br />
      <button
        name="sine"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Sine
      </button>
      <button
        name="triangle"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Triangle
      </button>
      <br />
      <button
        name="square"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Square
      </button>
      <button
        name="sawtooth"
        onClick={(event) => handleTypeClick(event, playerState, setPlayerState)}
      >
        Sawtooth
      </button>
    </div>
  );
};

export default OscillatorType;
