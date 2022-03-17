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
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Sound").scrollIntoView(true)
              }
            >
              Sound
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Pitch").scrollIntoView(true)
              }
            >
              Pitch
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("RatiosHarmony").scrollIntoView(true)
              }
            >
              {" "}
              Ratios, Harmony
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("EquivalentRatios").scrollIntoView(true)
              }
            >
              {" "}
              Equivalent Ratios
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Cents").scrollIntoView(true)
              }
            >
              Cents
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("EqualDivision").scrollIntoView(true)
              }
            >
              Equally Dividing the Octave
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Addition").scrollIntoView(true)
              }
            >
              Stacking Ratios (Addition)
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Subtraction").scrollIntoView(true)
              }
            >
              {" "}
              Distance Between Ratios (Subtraction)
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Inversion").scrollIntoView(true)
              }
            >
              Inverted Ratios
            </button>
            <br />
            {/* <button className="mb"
              onClick={() =>
                document.getElementById("PrimeLimit").scrollIntoView(true)
              }
            >Prime Limit</button>
            <br /> */}
            <button
              className="mb"
              onClick={() =>
                document
                  .getElementById("ModalTransformation")
                  .scrollIntoView(true)
              }
            >
              {" "}
              Modal Transformations
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document
                  .getElementById("LinearTuningsPythagorean")
                  .scrollIntoView(true)
              }
            >
              {" "}
              Linear Tunings and Pythagorean Tuning
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document
                  .getElementById("MomentsOfSymmetry")
                  .scrollIntoView(true)
              }
            >
              {" "}
              Moments of Symmetry
            </button>
            <br />
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Tempering").scrollIntoView(true)
              }
            >
              Tempering
            </button>
            {/* <br />
            <button className="mb"
              onClick={() =>
                document.getElementById("EDOsAndTempering").scrollIntoView(true)
              }
            >EDOs and Tempering</a> */}
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
          <Spacer id={"Tempering"} />
          <Tempering />
          {/* <Spacer id={"EDOsAndTempering"} />
          <EDOsAndTempering /> */}
          <br />
          <br />

          <div className="center">
            <button
              className="mb"
              onClick={() =>
                document.getElementById("Top").scrollIntoView(true)
              }
            >
              Table of Contents
            </button>{" "}
            <br />
            <br />
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
    <div className="center">
      <br />
      <button
        className="mb"
        onClick={() => document.getElementById("Top").scrollIntoView(true)}
      >
        Table of Contents
      </button>
      <br />
      <br id={id} />
      <br />
      <hr />
      <br />
    </div>
  );
};
