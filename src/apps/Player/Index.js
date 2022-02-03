import { useState } from "react";
import { ComparisonWindow } from "../RatioComparer/ComparisonWindow";
import ActualPlayer from "./ActualPlayer";
import { playerStateData } from "./playerStateData";
import getPlayerReadouts from "./util/getPlayerReadouts";

const Player = ({ stateData, setStateData }) => {
  const showPlayer = stateData[9].showPlayer;
  const playerData = stateData[9].playerData;

  const [playerState, setPlayerState] = useState(playerStateData);
  const playerReadouts = getPlayerReadouts(playerData);

  if (showPlayer === false) {
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
        <ComparisonWindow scale={playerData.scale} stateData={stateData} />
        <ActualPlayer
          incomingScale={playerData.scale}
          playerState={playerState}
          setPlayerState={setPlayerState}
        />
        <br />
      </div>
    );
  }
};

export default Player;
