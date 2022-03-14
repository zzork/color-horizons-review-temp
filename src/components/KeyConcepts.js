import { handleShowAbout } from "../eventHandlers";
import Addition from "./keyConcepts/Addition";
import Cents from "./keyConcepts/Cents";
import EDOsAndTempering from "./keyConcepts/EDOsAndTempering";
import EqualDivision from "./keyConcepts/EqualDivision";
import EquivalentRatios from "./keyConcepts/EquivalentRatios";
import Inversion from "./keyConcepts/Inversion";
import LinearTuningsPythagorean from "./keyConcepts/LinearTuningsPythagorean";
import ModalTransformation from "./keyConcepts/ModalTransformation";
import MomentsOfSymmetry from "./keyConcepts/MomentsOfSymmetry";
import Pitch from "./keyConcepts/Pitch";
import PrimeLimit from "./keyConcepts/PrimeLimit";
import RatiosHarmony from "./keyConcepts/RatiosHarmony";
import Sound from "./keyConcepts/Sound";
import Subtraction from "./keyConcepts/Subtraction";
import Tempering from "./keyConcepts/Tempering";

const KeyConcepts = ({ stateData, setStateData }) => {
  return (
    <div>
      <h1>Key Concepts</h1>
      <div className="tableClone">
        <div className="writtenAreas">
          <br />
          <br />
          <h2 className="center">Table of Contents</h2>
          <br />
          <p className="center">
            <a href="#Sound">Sound</a>
            <br />
            <a href="#Pitch">Pitch</a>
            <br />
            <a href="#RatiosHarmony">Ratios, Harmony</a>
            <br />
            <a href="#EquivalentRatios">Equivalent Ratios</a>
            <br />
            <a href="#Cents">Cents</a>
            <br />
            <a href="#EqualDivision">Equally Dividing the Octave</a>
            <br />
            <a href="#Addition">Stacking Ratios (Addition)</a>
            <br />
            <a href="#Subtraction">Distance Between Ratios (Subtraction)</a>
            <br />
            <a href="#Inversion">Inverted Ratios</a>
            <br />
            {/* <a href="#PrimeLimit">Prime Limit</a>
            <br /> */}
            <a href="#ModalTransformation">Modal Transformations</a>
            <br />
            <a href="#LinearTuningsPythagorean">
              Linear Tunings and Pythagorean Tuning
            </a>
            <br />
            <a href="#MomentsOfSymmetry">Moments of Symmetry</a>
            <br />
            <a href="#Tempering">Tempering</a>
            {/* <br />
            <a href="#EDOsAndTempering">EDOs and Tempering</a> */}
          </p>
          <div>
            <div id="Sound"></div>
            <br />
            <br />
            <hr />
            <br />
          </div>
          <Sound />
          <Spacer id={"Pitch"} />
          <Pitch />
          <Spacer id={"RatiosHarmony"} />
          <RatiosHarmony />
          <Spacer id={"EquivalentRatios"} />
          <EquivalentRatios />
          <Spacer id={"Cents"} />
          <Cents />
          <Spacer id={"EqualDivision"} />
          <EqualDivision />
          <Spacer id={"Addition"} />
          <Addition />
          <Spacer id={"Subtraction"} />
          <Subtraction />
          <Spacer id={"Inversion"} />
          <Inversion />
          {/* <Spacer id={"PrimeLimit"} />
          <PrimeLimit /> */}
          <Spacer id={"ModalTransformation"} />
          <ModalTransformation />
          <Spacer id={"LinearTuningsPythagorean"} />
          <LinearTuningsPythagorean />
          <Spacer id={"MomentsOfSymmetry"} />
          <MomentsOfSymmetry />
          <div id="Tempering"></div>
          <Spacer id={"Sound"} />
          <Tempering />
          {/* <Spacer id={"EDOsAndTempering"} />
          <EDOsAndTempering /> */}
          <br />
          <br />
          <div className="center">
            <button
              className="mb"
              onClick={() => handleShowAbout(stateData, setStateData)}
            >
              Home
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default KeyConcepts;

const Spacer = ({ id }) => {
  return (
    <div>
      <br />
      <p id={id} className="center">
        <a href="#Top">Table of Contents</a>
      </p>
      <br />
      <hr />
      <br />
    </div>
  );
};
