import getLTScaleFromCents from "../LTByCents/util/getLTScaleFromCents";
import LTUniquesDisplay from "../LTShared/LTUniquesDisplay";
import getMos from "../LTShared/util/getMos";
import getEDOMOSLmsList from "./util/getEDOMOSLmsList";
import getEDOMOSGenerator from "./util/getEDOMOSGenerator";
import { EDOMOSAllModes } from "./EDOMOSAllModes";
import {
  handleEdoMosChange,
  handleEdoMosMosClick,
} from "./edoMosEventHandlers";

const EDOMOSReadout = ({ stateData, setStateData }) => {
  const edo = parseInt(stateData.edoMos.edo);
  const step = parseInt(stateData.edoMos.step);
  const noteTotal = parseInt(stateData.edoMos.noteTotal);

  const isValidState = () => {
    return edo > 1 && step > 0 && step < edo;
  };
  if (!isValidState()) {
    return <InvalidState step={step} edo={edo} />;
  }

  const generator = getEDOMOSGenerator(step, edo);
  const momentsOfSymmetry = getMos(generator);
  const mosButtons = momentsOfSymmetry.map((value, index) => (
    <button
      className="mb"
      key={index}
      onClick={() => handleEdoMosMosClick(value, stateData, setStateData)}
    >
      {value}
    </button>
  ));
  const scale = getLTScaleFromCents(generator, noteTotal);
  const lmsIn = getEDOMOSLmsList(scale, edo);

  const sclData = [edo, step, noteTotal];

  return (
    <div>
      <br />
      <div className="tableClone">
        <p>Generator: {generator.toFixed(5)}</p>
        <p>
          Moments of Symmetry
          <br />
          {mosButtons}
        </p>
        Note Amount:{" "}
        <input
          onChange={(event) =>
            handleEdoMosChange(event, stateData, setStateData)
          }
          type="number"
          name="edomosNoteTotalField"
          value={noteTotal}
        ></input>
        <br />
        EDO Step Size: {(1200 / edo).toFixed(5)}
        <br />
        <br />
      </div>
      {noteTotal <= 1 && (
        <div className="tableClone">
          <p>Note Total Must Be Greater Than One</p>
        </div>
      )}
      {noteTotal > 1 && <LTUniquesDisplay scale={scale} lmsIn={lmsIn} />}
      <br />

      {noteTotal > 1 && (
        <EDOMOSAllModes
          scale={scale}
          lmsIn={lmsIn}
          sclData={sclData}
          stateData={stateData}
          setStateData={setStateData}
        />
      )}
    </div>
  );
};

const InvalidState = ({ step, edo }) => {
  return (
    <div>
      {edo <= 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>EDO Must Be Greater Than 1</p>
          </div>
        </div>
      )}
      {step < 1 && (
        <div>
          <br />
          <div className="tableClone">
            <p>Step Must Be Greater than 0</p>
          </div>
        </div>
      )}
      {step >= edo && (
        <div>
          <br />
          <div className="tableClone">
            <p>Step Must Be Less Than EDO</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EDOMOSReadout;
