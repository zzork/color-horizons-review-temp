export const LTBCReadout = ({
  generator,
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
  let invertedGenerator = 1200 - generator;

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
