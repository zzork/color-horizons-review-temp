import { LTBCReadout } from "./LTBCReadout";

export const LTByCents = ({ stateData, setStateData, selectedComparison }) => {
  const handleChange = (event) => {
    let newGenerator = event.target.value;
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "d") {
        return {
          ...stateTableRow,
          generator: newGenerator,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const handleInvertClick = (invertedGenerator) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "d") {
        return {
          ...stateTableRow,
          generator: invertedGenerator,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const handleMOSClick = (value) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "d") {
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
      <h2>Linear Temperament by Cents</h2>
      <p>
        Generator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="ltGeneratorEntryField"
          value={stateData[3].generator}
        ></input>
      </p>
      <LTBCReadout
        generator={stateData[3].generator}
        selectedComparison={selectedComparison}
        handleInvertClick={handleInvertClick}
        handleMOSClick={handleMOSClick}
        handleChange={handleChange}
      />
    </div>
  );
};
