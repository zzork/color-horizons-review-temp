import { IPReadout } from "./IPReadout";

export const IntervalPattern = ({
  stateData,
  setStateData,
  selectedComparison,
  handleSetPlayerClick,
}) => {
  const handleChange = (event) => {
    const newPattern = event.target.value;
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "c") {
        return {
          ...stateTableRow,
          pattern: newPattern,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };

  return (
    <div>
      <div>
        <h2>Interval Pattern</h2>
        <input
          onChange={handleChange}
          type="number"
          name="intervalPatternEntryField"
          value={stateData[2].pattern}
        ></input>
      </div>
      <div>
        <p></p>
        <IPReadout
          pattern={stateData[2].pattern}
          selectedComparison={selectedComparison}
          handleSetPlayerClick={handleSetPlayerClick}
        />
      </div>
    </div>
  );
};
