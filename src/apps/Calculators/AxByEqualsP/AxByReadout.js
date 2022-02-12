import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import { AxByAllModes } from "./AxByAllModes";
import { handleAxByChange } from "./axByEventHandlers";
import getAxByScale from "./util/getAxByScale";
import getSecondCents from "./util/getSecondCents";

export const AxByReadout = ({ stateData, setStateData }) => {
  const firstSteps = stateData.axByEqualsP.firstSteps;
  const firstCents = stateData.axByEqualsP.firstCents;
  const secondSteps = stateData.axByEqualsP.secondSteps;

  const isValidState = () => {
    return firstSteps > 0 && firstCents > 0 && firstSteps * firstCents < 1200;
  };
  if (!isValidState()) {
    return <InvalidState firstSteps={firstSteps} firstCents={firstCents} />;
  }

  const secondCents = getSecondCents(firstSteps, firstCents, secondSteps);
  let scale = [];
  if (secondCents > 0) {
    scale = getAxByScale(firstSteps, firstCents, secondSteps, secondCents);
  }
  const sclData = [firstSteps, firstCents, secondSteps, secondCents];

  return (
    <div>
      <br />
      <div className="tableClone">
        <p>
          Second Interval Steps:{" "}
          <input
            onChange={(event) =>
              handleAxByChange(event, stateData, setStateData)
            }
            type="number"
            name="axBy2StepsEntryField"
            value={secondSteps}
          ></input>
        </p>
      </div>
      {secondSteps < 1 && (
        <p>Second Interval Steps Must Be Greater Than Zero</p>
      )}
      {secondSteps >= 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Second Interval Cents: {secondCents.toFixed(5)}</p>
          </div>
          <LTUniquesDisplay scale={scale} lmsIn={"Lms"} />
          <AxByAllModes
            scale={scale}
            stateData={stateData}
            setStateData={setStateData}
            lmsIn={"Lms"}
            sclData={sclData}
          />
        </div>
      )}
    </div>
  );
};

const InvalidState = ({ firstSteps, firstCents }) => {
  return (
    <div>
      {firstCents * firstSteps > 1200 && (
        <div>
          <br />
          <div className="tableClone">
            <p>
              First Interval Set Adds To More Than One Octave (
              {(firstCents * firstSteps).toFixed(5)} Cents)
            </p>
          </div>
        </div>
      )}
      {firstCents * firstSteps === 1200 && (
        <div>
          <br />
          <div className="tableClone">
            <p>First Interval Set Adds To One Octave</p>
          </div>
        </div>
      )}
      {firstSteps <= 0 && (
        <div>
          <br />
          <div className="tableClone">
            <p>First Interval Steps Must Be Greater Than Zero</p>
          </div>
        </div>
      )}
      {firstCents <= 0 && (
        <div>
          <br />
          <div className="tableClone">
            <p>First Interval Cents Must Be Greater Than Zero</p>
          </div>
        </div>
      )}
    </div>
  );
};
