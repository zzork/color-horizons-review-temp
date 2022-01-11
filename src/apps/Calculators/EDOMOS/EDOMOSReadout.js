import getLTScaleFromCents from "../LTByCents/util/getLTScaleFromCents";
import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import getMos from "../LTShared/util/getMos";
import getEDOMOSLmsList from "./util/getEDOMOSLmsList";
import getEDOMOSGenerator from "./util/getEDOMOSGenerator";
import { LTAllModes } from "../LTShared/LTAllModes";

const EDOMOSReadout = ({
  edo,
  step,
  noteTotal,
  selectedComparison,
  handleMOSClick,
  handleChange,
}) => {
  const isValidState = () => {
    return edo > 1 && step > 0 && step < edo;
  };
  if (!isValidState()) {
    return <InvalidState step={step} edo={edo} />;
  }

  const generator = getEDOMOSGenerator(step, edo);
  const momentsOfSymmetry = getMos(generator);
  const mosButtons = momentsOfSymmetry.map((value) => (
    <button onClick={() => handleMOSClick(value)}>{value}</button>
  ));
  const scale = getLTScaleFromCents(generator, noteTotal);
  const lmsIn = getEDOMOSLmsList(scale, edo);

  return (
    <div>
      <p>Generator: {generator.toFixed(5)}</p>
      <p>
        Moments of Symmetry
        <br />
        {mosButtons}
      </p>
      Note Amount:{" "}
      <input
        onChange={handleChange}
        type="number"
        name="edomosNoteTotalField"
        value={noteTotal}
      ></input>
      <br />
      EDO Step Size: {(1200 / edo).toFixed(5)}
      {noteTotal <= 1 && <p>Note Total Must Be Greater Than One</p>}
      {noteTotal > 1 && <LTUniquesDisplay scale={scale} lmsIn={lmsIn} />}
      <br />
      {noteTotal > 1 && (
        <LTAllModes scale={scale} selectedComparison={selectedComparison} />
      )}
    </div>
  );
};

const InvalidState = ({ step, edo }) => {
  return (
    <div>
      {edo <= 1 && <p>EDO Must Be Greater Than 1</p>}
      {step < 1 && <p>Step Must Be Greater than 0</p>}
      {step >= edo && <p>Step Must Be Less Than EDO</p>}
    </div>
  );
};

export default EDOMOSReadout;
