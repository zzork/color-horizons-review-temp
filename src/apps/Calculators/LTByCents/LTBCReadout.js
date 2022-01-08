import getMos from "../LTShared/util/getMos";

export const LTBCReadout = ({
  generator,
  noteTotal,
  selectedComparison,
  handleInvertClick,
  handleMOSClick,
  handleChange,
}) => {
  const isValidState = () => {
    return generator > 0 && generator <= 1200;
  };
  if (!isValidState()) {
    return <InvalidState generator={generator} />;
  }
  const invertedGenerator = 1200 - generator;

  const momentsOfSymmetry = getMos(generator);

  console.log(momentsOfSymmetry);

  const mosButtons = momentsOfSymmetry.map((value) => (
    <button onClick={() => handleMOSClick(value)}>{value}</button>
  ));

  return (
    <div>
      The inverse generator is {invertedGenerator}
      <br />
      <i>What is up with this behavior?</i>
      <br />
      <br />
      <button onClick={() => handleInvertClick(invertedGenerator)}>
        Invert Generator
      </button>
      <p>
        Moments of Symmetry <br />
        {mosButtons} <br />
      </p>
      <p>
        Note Amount:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltbcNoteTotalEntryField"
          value={noteTotal}
        ></input>
      </p>
    </div>
  );
};

const InvalidState = ({ generator }) => {
  return (
    <div>
      {generator <= 0 && <p>Generator Must be Greater Than Zero</p>}
      {generator > 1200 && <p>Generator Must Be Less Than 1200</p>}
    </div>
  );
};
