// mouse down and up work great for simple clicks
// but if you drag across cells of the table it won't register as a up when you leave the button
// and doesn't register as a down when holding down onto a new button

import { useRef } from "react";
import { play, stop } from "../services/notePlayerService";
import renameKeysForObjectRefs from "../util/renameKeysForObjectRefs";

const ChordsPlayTable = ({
  centsScaleRepeating,
  chordsOrSingles,
  note2,
  note3,
  keyboardMapping,
  pressedKeys,
  rootButtonPositions,
  playerState,
}) => {
  const buttonColorationObject = {};

  // root buttons different color
  for (const key of rootButtonPositions[chordsOrSingles]) {
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

  // mouse events for playing notes
  const playNotes = {};

  const handlePlaytableMouseDown = (event) => {
    const clickedNote = event;
    if (!playNotes.hasOwnProperty(chordsOrSingles)) {
      playNotes[chordsOrSingles] = {};
    }
    // if (playNotes[chordsOrSingles][clickedNote]) return;
    const engagedNoteDetails = play(
      keyboardMapping[chordsOrSingles][clickedNote],
      playerState
    );
    playNotes[chordsOrSingles][clickedNote] = engagedNoteDetails;
  };

  const handlePlaytableMouseUp = (event) => {
    const releasedNote = event;
    if (!playNotes[chordsOrSingles].hasOwnProperty(releasedNote)) return;
    const engagedNoteDetails = playNotes[chordsOrSingles][releasedNote];
    if (engagedNoteDetails !== null) {
      stop(engagedNoteDetails, playerState);
      playNotes[chordsOrSingles][releasedNote] = null;
    }
  };

  const handlePlaytableMouseLeave = (event) => {
    const hoveredNote = event;
    if (!playNotes.hasOwnProperty(chordsOrSingles)) {
      playNotes[chordsOrSingles] = {};
    }
    if (!playNotes[chordsOrSingles].hasOwnProperty(hoveredNote)) return;
    if (playNotes[chordsOrSingles][hoveredNote] !== null) {
      const engagedNoteDetails = playNotes[chordsOrSingles][hoveredNote];

      stop(engagedNoteDetails, playerState);
      playNotes[chordsOrSingles][hoveredNote] = null;
    }
  };

  // mapping the data into the table

  const row4Keys = "1234567890-=".split("");
  const row3Keys = "qwertyuiop[]".split("");
  const row2Keys = "asdfghjkl;'".split("");
  const row1Keys = "zxcvbnm,./".split("");

  let row4Buttons = null;
  let row3Buttons = null;
  let row2Buttons = null;
  let row1Buttons = null;

  if (chordsOrSingles === "chords") {
    row4Buttons = row4Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 12].toFixed(5)}
      </button>
    ));

    row3Buttons = row3Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index].toFixed(5)}
      </button>
    ));

    row2Buttons = row2Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        <div className="chordNotes">
          {centsScaleRepeating[index + 10 + note3].toFixed(5)}
          <br />
          {centsScaleRepeating[index + 10 + note2].toFixed(5)}
        </div>
        {centsScaleRepeating[index + 10].toFixed(5)}
      </button>
    ));

    row1Buttons = row1Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        <div className="chordNotes">
          {centsScaleRepeating[index + note3].toFixed(5)}
          <br />
          {centsScaleRepeating[index + note2].toFixed(5)}
        </div>
        {centsScaleRepeating[index].toFixed(5)}
      </button>
    ));
  }

  if (chordsOrSingles === "singles") {
    row4Buttons = row4Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 33].toFixed(5)}
      </button>
    ));

    row3Buttons = row3Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 21].toFixed(5)}
      </button>
    ));

    row2Buttons = row2Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index + 10].toFixed(5)}
      </button>
    ));

    row1Buttons = row1Keys.map((key, index) => (
      <button
        key={index}
        className={buttonColorationObject[renameKeysForObjectRefs(key)]}
        onMouseDown={() => handlePlaytableMouseDown(key)}
        onMouseUp={() => handlePlaytableMouseUp(key)}
        onMouseLeave={() => handlePlaytableMouseLeave(key)}
      >
        <div className="tableKeys">{key}</div>
        {centsScaleRepeating[index].toFixed(5)}
      </button>
    ));
  }

  return (
    <div>
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
