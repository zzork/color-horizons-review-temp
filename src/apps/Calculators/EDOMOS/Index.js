import EDOMOSReadout from "./EDOMOSReadout";

export const EDOMOS = ({
  stateData,
  setStateData,
  selectedComparison,
  handleSetPlayerClick,
}) => {
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "edomosEDOEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "e") {
          return {
            ...stateTableRow,
            edo: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "edomosStepEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "e") {
          return {
            ...stateTableRow,
            step: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "edomosNoteTotalField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "e") {
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

  const handleMOSClick = (value) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "e") {
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
      <h2>Equal Division of the Octave Moments of Symmetry</h2>
      <p>
        EDO:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="edomosEDOEntryField"
          value={stateData[4].edo}
        ></input>{" "}
        <br />
        <br />
        Step:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="edomosStepEntryField"
          value={stateData[4].step}
        ></input>
      </p>
      <EDOMOSReadout
        edo={parseInt(stateData[4].edo)}
        step={parseInt(stateData[4].step)}
        noteTotal={parseInt(stateData[4].noteTotal)}
        selectedComparison={selectedComparison}
        handleMOSClick={handleMOSClick}
        handleChange={handleChange}
        handleSetPlayerClick={handleSetPlayerClick}
      />
    </div>
  );
};
