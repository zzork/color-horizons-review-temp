import { EDO } from "../apps/Calculators/EDO/Index";
import { LTByRatio } from "../apps/Calculators/LTByRatio/Index";
import { CalcIP } from "./CalcIP";

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
        <LTByRatio
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
