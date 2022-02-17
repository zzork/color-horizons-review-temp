import {
  handlePlaytableMouseDown,
  handlePlaytableMouseLeave,
  handlePlaytableMouseUp,
} from "../playerEventHandlers";
import renameKeysForObjectRefs from "../util/renameKeysForObjectRefs";

const ChordsPlayTable = ({
  centsScaleRepeating,
  keyboardMapping,
  pressedKeys,
  rootButtonPositions,
  playerState,
}) => {
  const buttonColorationObject = {};

  // root buttons different color
  for (const key of rootButtonPositions[playerState.chordsOrSingles]) {
    const renamedKey = renameKeysForObjectRefs(key);
    buttonColorationObject[renamedKey] = "rootButton";
  }

  // light up the buttons on play!
  for (const key of pressedKeys) {
    const renamedKey = renameKeysForObjectRefs(key);
    buttonColorationObject[renamedKey] = "activeButton";
  }

  // extra color for pressed roots
  for (const key of pressedKeys) {
    if (rootButtonPositions.chords.includes(key)) {
      const renamedKey = renameKeysForObjectRefs(key);
      buttonColorationObject[renamedKey] = "activeRootButton";
    }
  }

  // mapping the data into the table

  const row4Keys = "1234567890-=".split("");
  const row3Keys = "qwertyuiop[]".split("");
  const row2Keys = "asdfghjkl;'".split("");
  const row1Keys = "zxcvbnm,./".split("");

  let row4Buttons = null;
  let row3Buttons = null;
  let row2Buttons = null;
  let row1Buttons = null;

  // this should be a useeffect
  // right now first render shows up with 5 no matter what because main div hasn't rendered yet at calculation
  let fixValue = 5;
  if (document.getElementById("mainDiv") !== null) {
    console.log(document.getElementById("mainDiv").offsetWidth);
    if (document.getElementById("mainDiv").offsetWidth < 950) {
      fixValue = 3;
    }
  }

  if (playerState.chordsOrSingles === "chords") {
    row4Buttons = row4Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 12].toFixed(fixValue)}
      </button>
    ));

    row3Buttons = row3Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index].toFixed(fixValue)}
      </button>
    ));

    row2Buttons = row2Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        <div className="chordNotes">
          {centsScaleRepeating[index + 10 + playerState.note3].toFixed(
            fixValue
          )}
          <br />
          {centsScaleRepeating[index + 10 + playerState.note2].toFixed(
            fixValue
          )}
        </div>
        {centsScaleRepeating[index + 10].toFixed(fixValue)}
      </button>
    ));

    row1Buttons = row1Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        <div className="chordNotes">
          {centsScaleRepeating[index + playerState.note3].toFixed(fixValue)}
          <br />
          {centsScaleRepeating[index + playerState.note2].toFixed(fixValue)}
        </div>
        {centsScaleRepeating[index].toFixed(fixValue)}
      </button>
    ));
  }

  if (playerState.chordsOrSingles === "singles") {
    row4Buttons = row4Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 33].toFixed(fixValue)}
      </button>
    ));

    row3Buttons = row3Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 21].toFixed(fixValue)}
      </button>
    ));

    row2Buttons = row2Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 10].toFixed(fixValue)}
      </button>
    ));

    row1Buttons = row1Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() =>
          handlePlaytableMouseDown(key, playerState, keyboardMapping)
        }
        onMouseUp={() => handlePlaytableMouseUp(key, playerState)}
        onMouseLeave={() => handlePlaytableMouseLeave(key, playerState)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index].toFixed(fixValue)}
      </button>
    ));
  }

  // console.log(window.innerWidth);

  // let scaling = "1";
  // if (window.innerWidth <= 1500) {
  //   scaling = String(window.innerWidth / 1500);
  // }
  // if (window.innerWidth <= 1050) {
  //   scaling = String(window.innerWidth / 1230);
  // }

  // console.log("scaling", scaling);

  return (
    // <div
    //   style={{ transform: `scale(${scaling})`, transformOrigin: "top left" }}
    //   className="chordsPlayTable"
    // >
    <div className="chordsPlayTable">
      {row4Buttons}
      <br />
      {row3Buttons}
      <br />
      {row2Buttons}
      <br />
      {row1Buttons}
    </div>
  );
};

export default ChordsPlayTable;

// <div style={{ transform: `scale(${scaling})` }} className="chordsPlayTable"></div>
