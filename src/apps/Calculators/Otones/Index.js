export const Otones = ({ stateData, setStateData, selectedComparison }) => {
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "otDenominatorEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "h") {
          return {
            ...stateTableRow,
            denominator: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "otStartEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "h") {
          return {
            ...stateTableRow,
            start: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "otStopEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "h") {
          return {
            ...stateTableRow,
            stop: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "otProgressionEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "h") {
          return {
            ...stateTableRow,
            progression: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
  };

  return (
    <div>
      <h2>Otonal Scale</h2>
      <p>
        Denominator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="otDenominatorEntryField"
          value={stateData[7].denominator}
        ></input>
        <br />
        Start:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="otStartEntryField"
          value={stateData[7].start}
        ></input>
        <br />
        Stop:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="otStopEntryField"
          value={stateData[7].stop}
        ></input>
        <br />
        Progression:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="otProgressionEntryField"
          value={stateData[7].progression}
        ></input>
      </p>
    </div>
  );
};
