import {
  handleShowAboutColorHorizons,
  handleShowKeyConcepts,
} from "../eventHandlers";
import AboutColorHorizons from "./AboutColorHorizons";
import KeyConcepts from "./KeyConcepts";

const About = ({ stateData, setStateData }) => {
  console.log(stateData.about.whichAbout);
  return (
    <div>
      <button
        className="mb"
        onClick={() => handleShowKeyConcepts(stateData, setStateData)}
      >
        Key Concepts
      </button>{" "}
      <button
        className="mb"
        onClick={() => handleShowAboutColorHorizons(stateData, setStateData)}
      >
        About Color Horizons
      </button>
      {stateData.about.whichAbout === "keyConcepts" && (
        <KeyConcepts stateData={stateData} setStateData={setStateData} />
      )}
      {stateData.about.whichAbout === "aboutColorHorizons" && (
        <AboutColorHorizons stateData={stateData} setStateData={setStateData} />
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
