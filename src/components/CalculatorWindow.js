import { AxByEqualsP } from "../apps/Calculators/AxByEqualsP/Index";
import { EDO } from "../apps/Calculators/EDO/Index";
import { EDOMOS } from "../apps/Calculators/EDOMOS/Index";
import { IntervalPattern } from "../apps/Calculators/IntervalPattern/Index";
import { LTByCents } from "../apps/Calculators/LTByCents/Index";
import { LTByRatio } from "../apps/Calculators/LTByRatio/Index";
import { Otones } from "../apps/Calculators/Otones/Index";
import { TonalityDiamond } from "../apps/Calculators/TonalityDiamond/Index";
import { Utones } from "../apps/Calculators/Utones/Index";

export const CalculatorWindow = ({ stateData, setStateData }) => {
  const viewId = stateData[11].tool;
  return (
    <div>
      {viewId === "axby" && (
        <AxByEqualsP stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "edo" && (
        <EDO stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "edomos" && (
        <EDOMOS stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "ip" && (
        <IntervalPattern stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "ltbc" && (
        <LTByCents stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "ltbr" && (
        <LTByRatio stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "ot" && (
        <Otones stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "td" && (
        <TonalityDiamond stateData={stateData} setStateData={setStateData} />
      )}
      {viewId === "ut" && (
        <Utones stateData={stateData} setStateData={setStateData} />
      )}
    </div>
  );
};
