import { AxByReadout } from "./AxByReadout";

export const AxByEqualsP = ({
  stateData,
  setStateData,
  handleSetPlayerClick,
}) => {
  const handleChange = (event) => {
    let fieldReader = event.target.name;
    let newValue = event.target.value;

    if (fieldReader === "axBy1StepsEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "f") {
          return {
            ...stateTableRow,
            firstSteps: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "axBy1CentsEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "f") {
          return {
            ...stateTableRow,
            firstCents: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }

    if (fieldReader === "axBy2StepsEntryField") {
      let newState = stateData.map((stateTableRow) => {
        if (stateTableRow.id === "f") {
          return {
            ...stateTableRow,
            secondSteps: newValue,
          };
        }
        return stateTableRow;
      });
      setStateData(newState);
    }
  };

  return (
    <div>
      <h2>ax+by=p</h2>
      <p>
        First Interval Steps:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="axBy1StepsEntryField"
          value={stateData[5].firstSteps}
        ></input>
      </p>
      <p>
        First Interval Cents:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="axBy1CentsEntryField"
          value={stateData[5].firstCents}
        ></input>
      </p>
      <AxByReadout
        firstSteps={stateData[5].firstSteps}
        firstCents={stateData[5].firstCents}
        secondSteps={stateData[5].secondSteps}
        stateData={stateData}
        handleChange={handleChange}
        handleSetPlayerClick={handleSetPlayerClick}
      />
    </div>
  );
};
