import { floatingReverseQwerty } from "../eventHandlers";

const QwertyFloat = ({ stateData, setStateData }) => {
  return (
    <div className="bottomCorner">
      <h3>Qwerty Playback</h3>
      <h4> {stateData.player.active ? "Engaged" : "Disengaged"}</h4>
      <button onClick={() => floatingReverseQwerty(stateData, setStateData)}>
        {stateData.player.active
          ? "Disengage QWERTY Playback"
          : "Engage QWERTY Playback"}
      </button>
    </div>
  );
};

export default QwertyFloat;
