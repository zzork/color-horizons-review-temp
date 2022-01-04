import { EDO } from "../apps/Calculators/EDO/Index";
import { CalcIP } from "./CalcIP";
import { CalcLT } from "./CalcLT";

export const CalculatorWindow = ({
  viewId,
  stateData,
  setStateData,
  selectedComparison,
}) => {
  return (
    <div>
      {viewId === "edo" && (
        <EDO
          stateData={stateData}
          setStateData={setStateData}
          selectedComparison={selectedComparison}
        />
      )}
      {viewId === "lt" && (
        <CalcLT
          stateData={stateData}
          setStateData={setStateData}
          selectedComparison={selectedComparison}
        />
      )}
      {viewId === "ip" && (
        <CalcIP
          stateData={stateData}
          setStateData={setStateData}
          selectedComparison={selectedComparison}
        />
      )}
    </div>
  );
};
