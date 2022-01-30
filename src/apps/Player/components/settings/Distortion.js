const Distortion = ({ playerState, handleChange }) => {
  return (
    <div>
      <br />
      0 - 110%
      <br />
      <input
        name="distortion"
        type="range"
        min="0"
        max="110"
        value={playerState.distortion}
        onChange={handleChange}
      ></input>
      <br />
      <input
        name="distortion"
        type="number"
        min="0"
        max="110"
        value={playerState.distortion}
        onChange={handleChange}
      ></input>{" "}
      %
      <br />
      <br />
    </div>
  );
};

export default Distortion;
