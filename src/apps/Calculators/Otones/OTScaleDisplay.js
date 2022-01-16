import getReducedFraction from "../../../util/getReducedFraction";

const OTScaleDisplay = ({ rawScale, showEquivalent, handleShowEquivalent }) => {
  const getSingleRatioForScaleDisplay = (numerator, denominator) => {
    if (showEquivalent === false) {
      return `${numerator}/${denominator}`;
    }
    if (showEquivalent === true) {
      let reduced = getReducedFraction(numerator, denominator);
      return `${reduced[0]}/${reduced[1]}`;
    }
  };

  const scaleDisplay = rawScale.map((ratio) => (
    <td>{getSingleRatioForScaleDisplay(ratio[0], ratio[1])}</td>
  ));

  return (
    <div>
      <p>
        <button onClick={() => handleShowEquivalent()}>
          Raw/Equivalent Values
        </button>
      </p>
      <table>
        <tbody>
          <tr>{scaleDisplay}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default OTScaleDisplay;
