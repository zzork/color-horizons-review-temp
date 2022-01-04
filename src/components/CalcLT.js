import { CalcLTReadout } from "./CalcLTReadout";

export const CalcLT = ({ stateData, setStateData, selectedComparison }) => {
  // there must be a better way to handle this giant, repetitive block
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "ltNumerator") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "b") {
          return {
            ...stateTableRow,
            numerator: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltDenominator") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "b") {
          return {
            ...stateTableRow,
            denominator: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltNoteTotal") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "b") {
          return {
            ...stateTableRow,
            noteTotal: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
  };
  const handleInvertClick = (inverseFraction) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "b") {
        return {
          ...stateTableRow,
          numerator: inverseFraction[0],
          denominator: inverseFraction[1],
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const handleMOSClick = (value) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "b") {
        return {
          ...stateTableRow,
          noteTotal: value,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  return (
    <div>
      <h2>Linear Temperament</h2>
      <p>
        Numerator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltNumeratorEntryField"
          value={stateData[1].numerator}
        ></input>
      </p>
      <p>
        Denominator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltDenominatorEntryField"
          value={stateData[1].denominator}
        ></input>
      </p>
      <CalcLTReadout
        numerator={stateData[1].numerator}
        denominator={stateData[1].denominator}
        noteTotal={stateData[1].noteTotal}
        selectedComparison={selectedComparison}
        handleInvertClick={handleInvertClick}
        handleMOSClick={handleMOSClick}
        handleChange={handleChange}
      />
    </div>
  );
};
