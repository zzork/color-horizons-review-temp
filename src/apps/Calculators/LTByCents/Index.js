import { LTBCReadout } from "./LTBCReadout";
import getGranularitySettings from "./util/getGranularitySettings";

export const LTByCents = ({ stateData, setStateData, selectedComparison }) => {
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "ltGeneratorEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "d") {
          return {
            ...stateTableRow,
            generator: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "ltbcNoteTotalEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "d") {
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

  const handleGranularityClick = (newGranularity) => {
    let fixValue = getGranularitySettings(newGranularity)[0];
    let newGenerator = Number(stateData[3].generator).toFixed(fixValue);
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "d") {
        return {
          ...stateTableRow,
          granularity: newGranularity,
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

  const granularitySettings = getGranularitySettings(stateData[3].granularity);

  return (
    <div>
      <h2>Linear Temperament by Cents</h2>
      <p>
        Generator:{" "}
        <input
          onChange={handleChange}
          type="number"
          step={granularitySettings[1]}
          name="ltGeneratorEntryField"
          value={stateData[3].generator}
        ></input>
      </p>
      <LTBCReadout
        generator={stateData[3].generator}
        noteTotal={stateData[3].noteTotal}
        selectedComparison={selectedComparison}
        granularityFixValue={granularitySettings[0]}
        handleGranularityClick={handleGranularityClick}
        handleInvertClick={handleInvertClick}
        handleMOSClick={handleMOSClick}
        handleChange={handleChange}
      />
    </div>
  );
};
