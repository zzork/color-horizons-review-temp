import { OTReadout } from "./OTReadout";

export const Otones = ({
  stateData,
  setStateData,
  selectedComparison,
  handleSetPlayerClick,
}) => {
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
  const handleShowEquivalent = () => {
    let newState = stateData.map((stateTableRow) => {
      let newEquivalent = !stateData[7].showEquivalent;
      if (stateTableRow.id === "h") {
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
    parseInt(stateData[7].denominator),
    parseInt(stateData[7].start),
    parseInt(stateData[7].stop),
    parseInt(stateData[7].progression),
  ];

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
      <OTReadout
        denominator={parseInt(stateData[7].denominator)}
        start={parseInt(stateData[7].start)}
        stop={parseInt(stateData[7].stop)}
        progression={parseInt(stateData[7].progression)}
        showEquivalent={stateData[7].showEquivalent}
        sclData={sclData}
        handleSetPlayerClick={handleSetPlayerClick}
        handleShowEquivalent={handleShowEquivalent}
        selectedComparison={selectedComparison}
      />
    </div>
  );
};
