export const Selector = ({ stateData, setStateData }) => {
  const handleViewSelect = (viewId) => {
    let newState = stateData.map((stateTableRow) => {
      if (stateTableRow.id === "l") {
        return {
          ...stateTableRow,
          tool: viewId,
        };
      }
      return stateTableRow;
    });
    setStateData(newState);
  };
  return (
    <div>
      <h2>Scale Generation Method</h2>
      <button onClick={() => handleViewSelect("edo")}>
        Equal Division of the Octave
      </button>
      <button onClick={() => handleViewSelect("edomos")}>EDO MOS</button>
      <button onClick={() => handleViewSelect("ip")}>Interval Pattern</button>
      <br />
      <button onClick={() => handleViewSelect("ltbr")}>
        Linear Temperament by Ratio
      </button>
      <button onClick={() => handleViewSelect("ltbc")}>
        Linear Temperament by Cents
      </button>
      <br />
      <button onClick={() => handleViewSelect("axby")}>ax + by = p</button>
      <button onClick={() => handleViewSelect("td")}>Tonality Diamond</button>
      <br />
      <button onClick={() => handleViewSelect("ot")}>Otones</button>
      <button onClick={() => handleViewSelect("ut")}>Utones</button>
      <br />
    </div>
  );
};
