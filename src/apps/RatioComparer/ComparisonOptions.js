export const ComparisonOptions = ({
  onComparisonSelect,
  stateData,
  setStateData,
}) => {
  const handleApproximation = (event) => {
    if (event.target.name === "closeApproximation") {
      let newValue = event.target.value;
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "k") {
          return {
            ...stateTableRow,
            closeApproximation: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
    if (event.target.name === "moderateApproximation") {
      let newValue = event.target.value;
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "k") {
          return {
            ...stateTableRow,
            moderateApproximation: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
  };

  return (
    <div>
      <h2>Comparison Window Options</h2>
      Close Approximation:{" "}
      <input
        type="number"
        name="closeApproximation"
        min="1"
        max={stateData[10].moderateApproximation - 1}
        value={stateData[10].closeApproximation}
        onChange={handleApproximation}
      ></input>{" "}
      Cents
      <br />
      Moderate Approximation:{" "}
      <input
        type="number"
        name="moderateApproximation"
        min="1"
        max="1200"
        value={stateData[10].moderateApproximation}
        onChange={handleApproximation}
      ></input>{" "}
      Cents
      <br />
      <br />
      <button onClick={() => onComparisonSelect("majorDiatonic")}>
        Major Diatonic
      </button>
      <button onClick={() => onComparisonSelect("primes")}>
        Prime Harmonics
      </button>
      <br />
      <button onClick={() => onComparisonSelect("harmonics6")}>
        Harmonic Series to 6
      </button>
      <button onClick={() => onComparisonSelect("harmonics17")}>
        Harmonic Series to 17
      </button>
      <br />
      <button onClick={() => onComparisonSelect("3")}>3 Limit</button>
      <button onClick={() => onComparisonSelect("5")}>5 Limit</button>
      <button onClick={() => onComparisonSelect("7")}>7 Limit</button>
      <br />
      <button onClick={() => onComparisonSelect("11")}>11 Limit</button>
      <button onClick={() => onComparisonSelect("13")}>13 Limit</button>
      <button onClick={() => onComparisonSelect("17")}>17 Limit</button>
      <br />
      <br />
      <button onClick={() => onComparisonSelect("off")}>Disable</button>
    </div>
  );
};
