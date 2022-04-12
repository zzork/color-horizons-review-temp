import { useCallback, useEffect, useState } from "react";
import ChordsPlayTable from "./components/ChordsPlayTable";
import { play, stop } from "./services/notePlayerService";
import getCentsScaleRepeating from "./util/getCentsScaleRepeating";
import getHzScale from "./util/getHzScale";
import getKeyboardMapping from "./util/getKeyboardMapping";
import getRootButtonPositions from "./util/getRootButtonPositions";
import getReferencePitch from "./util/getReferencePitch";
import MasterVolume from "./components/settings/MasterVolume";
import Oscilloscope from "./components/Oscilloscope";
import getAbove22kHz from "./util/getAbove22kHz";
import useOnClickOutside from "./hooks/useOnClickOutside";
import { disableQwerty, reverseQwerty } from "../../eventHandlers";
import SettingsTable from "./components/SettingsTable";
import { handleResetSounds } from "./playerEventHandlers";

const ActualPlayer = ({
  playerState,
  setPlayerState,
  stateData,
  setStateData,
}) => {
  const soundReferencePitch = getReferencePitch(playerState);
  const rootButtonPositions = getRootButtonPositions(
    stateData.player.playerData.scale
  );
  const hzScale = getHzScale(
    stateData.player.playerData.scale,
    soundReferencePitch
  );
  const above22kHz = getAbove22kHz(hzScale, playerState);
  const keyboardMapping = getKeyboardMapping(
    hzScale,
    playerState.note2,
    playerState.note3
  );
  const centsScaleRepeating = getCentsScaleRepeating(
    stateData.player.playerData.scale
  );
  const possibleKeys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split(
    ""
  );

  // pressed keys is for the visual
  // play notes is for the sound

  const [pressedKeys, setPressedKeys] = useState([]);
  const [playNotes] = useState({});

  // key down and up

  // const handleInputClick = useCallback(
  //   (event) => {
  //     if (stateData.player.active && event.target.type === "number") {
  //       disableQwerty(stateData, setStateData);
  //     }
  //   },
  //   [stateData]
  // );

  // useOnClickOutside(handleInputClick);

  useEffect(() => {
    if (!stateData.player.active) return;
    const handleKeyDown = (event) => {
      const pressedKey = event.key.toLowerCase();

      if (pressedKey === "/" || pressedKey === "'") {
        event.preventDefault();
      }

      if (possibleKeys.includes(pressedKey)) {
        if (!playNotes.hasOwnProperty(playerState.chordsOrSingles)) {
          playNotes[playerState.chordsOrSingles] = {};
        }
        if (playNotes[playerState.chordsOrSingles][pressedKey]) return;
        const engagedNoteDetails = play(
          keyboardMapping[playerState.chordsOrSingles][pressedKey],
          playerState
        );
        playNotes[playerState.chordsOrSingles][pressedKey] = engagedNoteDetails;

        if (!pressedKeys.includes(pressedKey)) {
          let noteAdder = [...pressedKeys];
          noteAdder.push(pressedKey);
          setPressedKeys(noteAdder);
        }
      }
    };
    const handleKeyUp = (event) => {
      const releasedKey = event.key.toLowerCase();

      if (possibleKeys.includes(releasedKey)) {
        const engagedNoteDetails =
          playNotes[playerState.chordsOrSingles][releasedKey];
        stop(engagedNoteDetails, playerState);
        playNotes[playerState.chordsOrSingles][releasedKey] = null;

        let noteRemover = [...pressedKeys];
        let index = noteRemover.indexOf(releasedKey);
        noteRemover.splice(index, 1);
        setPressedKeys(noteRemover);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [stateData, playerState, pressedKeys]);

  return (
    <div id="player">
      <div className="noSelect">
        <br />
        <br />
        <Oscilloscope />
        <br />
        <br />
        <ChordsPlayTable
          centsScaleRepeating={centsScaleRepeating}
          keyboardMapping={keyboardMapping}
          pressedKeys={pressedKeys}
          setPressedKeys={setPressedKeys}
          rootButtonPositions={rootButtonPositions}
          playerState={playerState}
        />
        <br />
        {above22kHz && (
          <div>
            Selection Contains Values Above the Range of Human Hearing
            <br />
          </div>
        )}
        <br />
        <button
          className="mb"
          onClick={() => reverseQwerty(stateData, setStateData)}
        >
          {stateData.player.active
            ? "QWERTY Player ON 🔊"
            : "QWERTY Player OFF 🔇"}
        </button>
        <br />
        <br />

        <div className="masterVolume">
          <MasterVolume
            playerState={playerState}
            setPlayerState={setPlayerState}
          />
        </div>
        <br />
      </div>
      <SettingsTable
        playerState={playerState}
        setPlayerState={setPlayerState}
      />
      <br />
      <button
        className="mb"
        onClick={() => handleResetSounds(playerState, setPlayerState)}
      >
        Reset All
      </button>
      <br />
      <br />
    </div>
  );
};

export default ActualPlayer;
