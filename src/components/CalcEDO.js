import { CalcEDOReadout } from "./CalcEDOReadout";

export const CalcEDO = ({ stateData, setStateData, selectedComparison }) => {
  const handleChange = (event) => {
    const newEDO = event.target.value;
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "a") {
        return {
          ...stateTableRow,
          value: newEDO,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  return (
    <div>
      <h2>Equal Division of the Octave</h2>
      <input
        onChange={handleChange}
        type="number"
        name="edoEntryField"
        value={stateData[0].value}
      ></input>
      <CalcEDOReadout
        edo={stateData[0].value}
        selectedComparison={selectedComparison}
      />
    </div>
  );
};
