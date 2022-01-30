const Release = ({ playerState, handleChange }) => {
  return (
    <div>
      <br />
      10 - 20,000 ms
      <br />
      <input
        name="releaseTime"
        type="range"
        min="10"
        max="20000"
        value={playerState.releaseTime}
        onChange={handleChange}
      ></input>
      <br />
      <input
        name="releaseTime"
        type="number"
        min="10"
        max="20000"
        value={playerState.releaseTime}
        onChange={handleChange}
      ></input>{" "}
      ms
      <br />
      <br />
    </div>
  );
};

export default Release;
