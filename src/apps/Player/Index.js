import generateAxByScl from "../Calculators/AxByEqualsP/util/generateAxByScl";
import generateEDOMOSScl from "../Calculators/EDOMOS/util/generateEDOMOSScl";
import generateLTBCScl from "../Calculators/LTByCents/util/generateLTBCScl";
import generateLTBRScl from "../Calculators/LTByRatio/util/generateLTBRScl";

const Player = ({ showPlayer, playerData }) => {
  console.log("player current settings:", playerData);
  let title = "";
  let readout = "";
  let scaleReadout = "";
  let sclButton = null;

  if (playerData.tool === "axby") {
    sclButton = (
      <button
        onClick={() =>
          generateAxByScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "ax+by=p";
    readout = `${playerData.sclData[0]} Steps of ${
      playerData.sclData[1]
    } Cents and ${
      playerData.sclData[2]
    } Steps of ${playerData.sclData[3].toFixed(5)} Cents, Mode ${
      playerData.mode
    }`;
    scaleReadout = playerData.scale.map((note, index) => (
      <div key={index}>{note.toFixed(5)}</div>
    ));
  }

  if (playerData.tool === "edomos") {
    sclButton = (
      <button
        onClick={() =>
          generateEDOMOSScl(
            playerData.scale,
            playerData.sclData,
            playerData.mode
          )
        }
      >
        Export .scl
      </button>
    );
    title = "Equal Division of the Octave Moments of Symmetry";
    readout = `${playerData.sclData[1]} Steps of ${playerData.sclData[0]} EDO - ${playerData.sclData[2]} Notes - Mode ${playerData.mode}`;
    scaleReadout = playerData.scale.map((note, index) => (
      <div key={index}>{note.toFixed(5)}</div>
    ));
  }

  if (playerData.tool === "ltbc") {
    sclButton = (
      <button
        onClick={() =>
          generateLTBCScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Linear Temperament By Cents";
    readout = `${playerData.sclData[1]} Notes of ${playerData.sclData[0]}, Mode ${playerData.mode}`;
    scaleReadout = playerData.scale.map((note, index) => (
      <div key={index}>{note.toFixed(5)}</div>
    ));
  }

  if (playerData.tool === "ltbr") {
    sclButton = (
      <button
        onClick={() =>
          generateLTBRScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Linear Temperament By Ratio";
    readout = `${playerData.sclData[2]} Notes of ${playerData.sclData[0]}/${playerData.sclData[1]}, Mode ${playerData.mode}`;
    scaleReadout = playerData.scale.map((note, index) => (
      <div key={index}>{note.toFixed(5)}</div>
    ));
  }

  if (showPlayer === false) {
    return <div></div>;
  } else {
    return (
      <div>
        <h3>Currently Playing</h3>
        <h4>
          {title}
          <br />
          {readout}
        </h4>
        <p>{sclButton}</p>
        <table>
          <tbody>
            <tr>
              <td>{scaleReadout}</td>
              <td>ACTUAL PLAYER GOES HERE</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Player;
