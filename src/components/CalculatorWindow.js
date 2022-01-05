import { EDO } from "../apps/Calculators/EDO/Index";
import { IntervalPattern } from "../apps/Calculators/IntervalPattern/Index";
import { LTByRatio } from "../apps/Calculators/LTByRatio/Index";

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
        <IntervalPattern
          stateData={stateData}
          setStateData={setStateData}
          selectedComparison={selectedComparison}
        />
      )}
    </div>
  );
};
