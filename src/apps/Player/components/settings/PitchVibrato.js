const PitchVibrato = ({
  playerState,
  handlePitchVibratoOnOff,
  handleChange,
}) => {
  return (
    <div>
      <br />
      {(playerState.pitchVibratoOn && "On") ||
        (!playerState.pitchVibratoOn && "Off")}
      <br />
      <br />
      Speed
      <br />
      0 - 1,000,000 Hz
      <br />
      <input
        type="range"
        min="0"
        max="1000000"
        value={playerState.pitchVibratoSpeed}
        name="pitchVibratoSpeed"
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="number"
        min="0"
        max="1000000"
        value={playerState.pitchVibratoSpeed}
        name="pitchVibratoSpeed"
        onChange={handleChange}
      ></input>{" "}
      Hz
      <br />
      <br />
      Depth
      <br />
      0 - 1200 Cents
      <br />
      <input
        type="range"
        min="0"
        max="1200"
        value={playerState.pitchVibratoDepth}
        name="pitchVibratoDepth"
        onChange={handleChange}
      ></input>
      <br />
      <input
        type="number"
        min="0"
        max="1200"
        value={playerState.pitchVibratoDepth}
        name="pitchVibratoDepth"
        onChange={handleChange}
      ></input>{" "}
      Cents
      <br />
      <br />
      <button name="pitchVibratoOnOff" onClick={handlePitchVibratoOnOff}>
        On/Off
      </button>
      <br />
      <br />
    </div>
  );
};

export default PitchVibrato;
