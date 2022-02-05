import { useState } from "react";
import { ComparisonWindow } from "../RatioComparer/ComparisonWindow";
import ActualPlayer from "./ActualPlayer";
import { playerStateData } from "./playerStateData";
import getPlayerReadouts from "./util/getPlayerReadouts";

const Player = ({ stateData, setStateData }) => {
  const [playerState, setPlayerState] = useState(playerStateData);
  const playerReadouts = getPlayerReadouts(stateData[9].playerData);

  if (stateData[9].showPlayer === false) {
    return <div></div>;
  } else {
    return (
      <div>
        <h3>Currently Loaded Scale</h3>

        <h4>
          {playerReadouts.title}
          <br />
          {playerReadouts.readout}
        </h4>
        <p>{playerReadouts.sclButton}</p>
        <ComparisonWindow
          scale={stateData[9].playerData.scale}
          stateData={stateData}
        />
        <ActualPlayer
          playerState={playerState}
          setPlayerState={setPlayerState}
          stateData={stateData}
          setStateData={setStateData}
        />
        <br />
      </div>
    );
  }
};

export default Player;
