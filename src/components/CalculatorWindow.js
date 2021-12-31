import { CalcEDO } from "./CalcEDO";
import { CalcIP } from "./CalcIP";
import { CalcLT } from "./CalcLT";

export const CalculatorWindow = ({
  viewId,
  stateData,
  setStateData,
  selectedComparison,
}) => {
  console.log(selectedComparison);
  return (
    <div>
      {viewId === "edo" && (
        <CalcEDO stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "lt" && (
        <CalcLT stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "ip" && (
        <CalcIP stateData={stateData} setStateData={setStateData} />
      )}
    </div>
  );
};

// what's up with line breaks?? <p> workaround...
