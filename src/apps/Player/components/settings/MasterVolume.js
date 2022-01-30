const MasterVolume = ({ playerState, handleChange }) => {
  return (
    <div>
      Master Volume
      <br />
      <input
        type="range"
        min="0"
        max="100"
        value={playerState.masterVolume}
        name="masterVolume"
        onChange={handleChange}
      ></input>
      <br />
      {playerState.masterVolume}%
    </div>
  );
};

export default MasterVolume;
