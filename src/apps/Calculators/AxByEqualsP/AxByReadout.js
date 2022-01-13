import { LTAllModes } from "../LTShared/LTAllModes";
import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import getAxByScale from "./util/getAxByScale";
import getSecondCents from "./util/getSecondCents";

export const AxByReadout = ({
  firstSteps,
  firstCents,
  secondSteps,
  selectedComparison,
  handleChange,
}) => {
  const secondCents = getSecondCents(firstSteps, firstCents, secondSteps);
  const scale = getAxByScale(firstSteps, firstCents, secondSteps, secondCents);

  return (
    <div>
      <p>
        Second Interval Steps:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="axBy2StepsEntryField"
          value={secondSteps}
        ></input>
      </p>
      <p>Second Interval Cents: {secondCents.toFixed(5)}</p>
      <LTUniquesDisplay scale={scale} lmsIn={"Lms"} />
      <LTAllModes
        scale={scale}
        selectedComparison={selectedComparison}
        lmsIn={"Lms"}
      />
    </div>
  );
};
