const EDOMOSReadout = ({
  edo,
  step,
  noteTotal,
  handleMosClick,
  handleChange,
}) => {
  return (
    <div>
      Note Amount:{" "}
      <input
        onChange={handleChange}
        type="number"
        name="edomosNoteTotalField"
        value={noteTotal}
      ></input>
    </div>
  );
};

export default EDOMOSReadout;
