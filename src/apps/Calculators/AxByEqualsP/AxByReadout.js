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
  const isValidState = () => {
    return (
      firstSteps > 0 &&
      firstCents > 0 &&
      secondSteps > 0 &&
      firstSteps * firstCents < 1200
    );
  };
  if (!isValidState()) {
    return <InvalidState firstSteps={firstSteps} firstCents={firstCents} />;
  }

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

const InvalidState = ({ firstSteps, firstCents }) => {
  return (
    <div>
      {firstCents * firstSteps > 1200 && (
        <p>
          First Interval Stack Adds To More Than One Octave (
          {(firstCents * firstSteps).toFixed(5)} Cents)
        </p>
      )}
      {firstCents * firstSteps === 1200 && (
        <p>First Interval Stack Adds To One Octave</p>
      )}
      {firstSteps <= 0 && <p>First Interval Steps Must Be Greater Than Zero</p>}
      {firstCents <= 0 && <p>First Interval Cents Must Be Greater Than Zero</p>}
    </div>
  );
};
