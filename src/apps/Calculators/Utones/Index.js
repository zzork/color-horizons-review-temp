import { UTReadout } from "./UTReadout";

export const Utones = ({
  stateData,
  setStateData,
  selectedComparison,
  handleSetPlayerClick,
}) => {
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "utNumeratorEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "i") {
          return {
            ...stateTableRow,
            numerator: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "utStartEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "i") {
          return {
            ...stateTableRow,
            start: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "utStopEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "i") {
          return {
            ...stateTableRow,
            stop: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "utProgressionEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "i") {
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
  const handleShowEquivalent = () => {
    let newState = stateData.map((stateTableRow) => {
      let newEquivalent = !stateData[8].showEquivalent;
      if (stateTableRow.id === "i") {
        return {
          ...stateTableRow,
          showEquivalent: newEquivalent,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  const sclData = [
    parseInt(stateData[8].numerator),
    parseInt(stateData[8].start),
    parseInt(stateData[8].stop),
    parseInt(stateData[8].progression),
  ];

  return (
    <div>
      <h2>Utonal Scale</h2>
      <p>
        Numerator:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="utNumeratorEntryField"
          value={stateData[8].numerator}
        ></input>
        <br />
        Start:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="utStartEntryField"
          value={stateData[8].start}
        ></input>
        <br />
        Stop:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="utStopEntryField"
          value={stateData[8].stop}
        ></input>
        <br />
        Progression:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="utProgressionEntryField"
          value={stateData[8].progression}
        ></input>
      </p>
      <UTReadout
        numerator={parseInt(stateData[8].numerator)}
        start={parseInt(stateData[8].start)}
        stop={parseInt(stateData[8].stop)}
        progression={parseInt(stateData[8].progression)}
        showEquivalent={stateData[8].showEquivalent}
        sclData={sclData}
        handleSetPlayerClick={handleSetPlayerClick}
        handleShowEquivalent={handleShowEquivalent}
        selectedComparison={selectedComparison}
      />
    </div>
  );
};
