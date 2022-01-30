const Attack = ({ playerState, handleChange }) => {
  return (
    <div>
      <br />
      10 - 5,000 ms
      <br />
      <input
        name="attackTime"
        type="range"
        min="10"
        max="5000"
        value={playerState.attackTime}
        onChange={handleChange}
      ></input>
      <br />
      <input
        name="attackTime"
        type="number"
        min="10"
        max="5000"
        value={playerState.attackTime}
        onChange={handleChange}
      ></input>{" "}
      ms
      <br />
      <br />
    </div>
  );
};

export default Attack;
