const NotesChordsSelector = ({
  handleChordsSinglesClick,
  handleChange,
  playerState,
}) => {
  return (
    <div>
      Note 2<br />
      <input
        type="number"
        name="note2"
        value={playerState.note2}
        onChange={handleChange}
      ></input>
      <br />
      <br />
      Note 3<br />
      <input
        type="number"
        name="note3"
        value={playerState.note3}
        onChange={handleChange}
      ></input>
      <br />
      <br />
      <button name="singles" onClick={handleChordsSinglesClick}>
        Single Notes
      </button>
      <button name="chords" onClick={handleChordsSinglesClick}>
        Chords
      </button>
    </div>
  );
};

export default NotesChordsSelector;
