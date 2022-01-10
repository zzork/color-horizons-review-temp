import getLTScaleFromCents from "../LTByCents/util/getLTScaleFromCents";
import getMos from "../LTShared/util/getMos";
import getEDOMOSGenerator from "./util/getEDOMOSGenerator";

const EDOMOSReadout = ({
  edo,
  step,
  noteTotal,
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

  return (
    <div>
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
      {noteTotal <= 1 && <div>Note Total Must Be Greater Than One</div>}
      {noteTotal > 1 && <div>EDOMOSUniquesDisplay</div>}
      <br />
      {noteTotal > 1 && <div>EDOMOSAllModes</div>}
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
