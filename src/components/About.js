import AboutColorHorizons from "./AboutColorHorizons";
import KeyConcepts from "./KeyConcepts";

const About = ({ stateData, setStateData }) => {
  return (
    <div>
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
