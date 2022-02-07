import getSortedRatioList from "../../../util/getSortedRatioList";
import { OTAllModes } from "./OTAllModes";
import { handleOtShowEquivalent } from "./otEventHandlers";
import OTScaleDisplay from "./OTScaleDisplay";
import getOTRawScale from "./util/getOTRawScale";

export const OTReadout = ({ stateData, setStateData }) => {
  const denominator = parseInt(stateData.otones.denominator);
  const start = parseInt(stateData.otones.start);
  const stop = parseInt(stateData.otones.stop);
  const progression = parseInt(stateData.otones.progression);
  const showEquivalent = stateData.otones.showEquivalent;

  const isValidState = () => {
    return denominator > 0 && start > 0 && stop > start && progression > 0;
  };
  if (!isValidState()) {
    return (
      <InvalidState
        denominator={denominator}
        start={start}
        stop={stop}
        progression={progression}
      />
    );
  }

  const sclData = [
    parseInt(stateData.otones.denominator),
    parseInt(stateData.otones.start),
    parseInt(stateData.otones.stop),
    parseInt(stateData.otones.progression),
  ];
  const rawScale = getOTRawScale(denominator, start, stop, progression);
  const scale = getSortedRatioList(rawScale);

  return (
    <div>
      <p>
        <OTScaleDisplay
          rawScale={rawScale}
          showEquivalent={showEquivalent}
          handleShowEquivalent={() =>
            handleOtShowEquivalent(stateData, setStateData)
          }
        />
      </p>
      <OTAllModes
        scale={scale}
        sclData={sclData}
        stateData={stateData}
        setStateData={setStateData}
      />
      <p></p>
    </div>
  );
};

const InvalidState = ({ denominator, start, stop, progression }) => {
  return (
    <div>
      {denominator < 1 && <p>Denominator Must Be Greater Than Zero</p>}
      {start < 1 && <p>Start Must Be Greater Than Zero</p>}
      {stop <= start && <p>Stop Must Be Greater Than Start</p>}
      {stop < 0 && <p>Stop Must Be Greater </p>}
      {progression < 1 && <p>Progression Must Be Greater Than Zero</p>}
    </div>
  );
};
