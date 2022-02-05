import {
  handleChordsSinglesClick,
  handlePlayerChange,
} from "../../playerEventHandlers";

const NotesChordsSelector = ({ playerState, setPlayerState }) => {
  return (
    <div>
      Note 2<br />
      <input
        type="number"
        name="note2"
        min="0"
        max="100"
        value={playerState.note2}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <br />
      Note 3<br />
      <input
        type="number"
        name="note3"
        min="0"
        max="100"
        value={playerState.note3}
        onChange={(event) =>
          handlePlayerChange(event, playerState, setPlayerState)
        }
      ></input>
      <br />
      <br />
      <button
        name="singles"
        onClick={(event) =>
          handleChordsSinglesClick(event, playerState, setPlayerState)
        }
      >
        Single Notes
      </button>
      <button
        name="chords"
        onClick={(event) =>
          handleChordsSinglesClick(event, playerState, setPlayerState)
        }
      >
        Chords
      </button>
    </div>
  );
};

export default NotesChordsSelector;
