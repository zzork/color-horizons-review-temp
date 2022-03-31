import generateAxByScl from "../../Calculators/AxByEqualsP/util/generateAxByScl";
import generateEDOScl from "../../Calculators/EDO/util/generateEDOScl";
import generateEDOMOSScl from "../../Calculators/EDOMOS/util/generateEDOMOSScl";
import generateIPScl from "../../Calculators/IntervalPattern/util/generateIPScl";
import generateLTBCScl from "../../Calculators/LTByCents/util/generateLTBCScl";
import generateLTBRScl from "../../Calculators/LTByRatio/util/generateLTBRScl";
import generateOTScl from "../../Calculators/Otones/util/generateOTScl";
import generateTDScl from "../../Calculators/TonalityDiamond/util/generateTDScl";
import generateUTScl from "../../Calculators/Utones/util/generateUTScl";

const getPlayerReadouts = (playerData) => {
  let title = "";
  let readout = "";
  let sclButton = null;

  if (playerData.tool === "axby") {
    sclButton = (
      <button
        className="mb"
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
  }

  if (playerData.tool === "edo") {
    sclButton = (
      <button
        className="mb"
        onClick={() => generateEDOScl(playerData.scale, playerData.edo)}
      >
        Export .scl
      </button>
    );
    title = "Equal Division of the Octave";
    readout = `${playerData.edo} EDO`;
  }

  if (playerData.tool === "edomos") {
    sclButton = (
      <button
        className="mb"
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
  }

  if (playerData.tool === "ip") {
    sclButton = (
      <button
        className="mb"
        onClick={() => generateIPScl(playerData.scale, playerData.sclData)}
      >
        Export .scl
      </button>
    );
    title = "Interval Pattern";
    readout = playerData.sclData;
  }

  if (playerData.tool === "ltbc") {
    sclButton = (
      <button
        className="mb"
        onClick={() =>
          generateLTBCScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Rank-2 Scale By Cents (Octave Period)";
    readout = `${playerData.sclData[1]} Notes of ${playerData.sclData[0]}, Mode ${playerData.mode}`;
  }

  if (playerData.tool === "ltbr") {
    sclButton = (
      <button
        className="mb"
        onClick={() =>
          generateLTBRScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Rank-2 Scale By Ratio (Octave Period)";
    readout = `${playerData.sclData[2]} Notes of ${playerData.sclData[0]}/${playerData.sclData[1]}, Mode ${playerData.mode}`;
  }

  if (playerData.tool === "ot") {
    sclButton = (
      <button
        className="mb"
        onClick={() =>
          generateOTScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Otones";
    readout = `Denominator ${playerData.sclData[0]} - Start ${playerData.sclData[1]} - Stop ${playerData.sclData[2]} - Progression ${playerData.sclData[3]} - Mode ${playerData.mode}`;
  }

  if (playerData.tool === "ut") {
    sclButton = (
      <button
        className="mb"
        onClick={() =>
          generateUTScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Utones";
    readout = `Numerator ${playerData.sclData[0]} - Start ${playerData.sclData[1]} - Stop ${playerData.sclData[2]} - Progression ${playerData.sclData[3]} - Mode ${playerData.mode}`;
  }

  if (playerData.tool === "td") {
    sclButton = (
      <button
        className="mb"
        onClick={() =>
          generateTDScl(playerData.scale, playerData.sclData, playerData.mode)
        }
      >
        Export .scl
      </button>
    );
    title = "Tonality Diamond";
    readout = `Tonality Diamond - ${playerData.sclData[0]} - ${playerData.sclData[1]} - Mode ${playerData.mode}`;
  }
  return { sclButton, title, readout };
};

export default getPlayerReadouts;
