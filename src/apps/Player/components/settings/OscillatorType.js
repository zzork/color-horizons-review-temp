import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";

const OscillatorType = ({ playerState, handleTypeClick }) => {
  return (
    <div>
      {capitalizeFirstLetter(playerState.oscillatorType)}
      <br />
      <br />
      <button name="sine" onClick={handleTypeClick}>
        Sine
      </button>
      <button name="triangle" onClick={handleTypeClick}>
        Triangle
      </button>
      <br />
      <button name="square" onClick={handleTypeClick}>
        Square
      </button>
      <button name="sawtooth" onClick={handleTypeClick}>
        Sawtooth
      </button>
    </div>
  );
};

export default OscillatorType;
