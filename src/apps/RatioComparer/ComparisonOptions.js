import {
  handleApproximationEntry,
  handleComparisonSelect,
} from "../../eventHandlers";

export const ComparisonOptions = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Comparison Window Options</h2>
      "Close" Approximation:{" "}
      <input
        type="number"
        name="closeApproximation"
        min="1"
        max={stateData.comparisonWindow.approximationBoundary - 1}
        value={stateData.comparisonWindow.closeApproximation}
        onChange={(event) =>
          handleApproximationEntry(event, stateData, setStateData)
        }
      ></input>{" "}
      Cents
      <br />
      Approximation Boundary:{" "}
      <input
        type="number"
        name="approximationBoundary"
        min={stateData.comparisonWindow.closeApproximation}
        max="1200"
        value={stateData.comparisonWindow.approximationBoundary}
        onChange={(event) =>
          handleApproximationEntry(event, stateData, setStateData)
        }
      ></input>{" "}
      Cents
      <br />
      <br />
      <button
        className="mb"
        onClick={() =>
          handleComparisonSelect("harmonics6", stateData, setStateData)
        }
      >
        Harmonic Series to 6
      </button>
      <button
        className="mb"
        onClick={() =>
          handleComparisonSelect("harmonics17", stateData, setStateData)
        }
      >
        Harmonic Series to 17
      </button>
      <br />
      <button
        className="mb"
        onClick={() =>
          handleComparisonSelect("harmonics31", stateData, setStateData)
        }
      >
        Harmonic Series to 31
      </button>
      <button
        className="mb"
        onClick={() =>
          handleComparisonSelect("primes", stateData, setStateData)
        }
      >
        Prime Harmonics to 31
      </button>
      <br />
      <button
        className="mb"
        onClick={() => handleComparisonSelect("12tet", stateData, setStateData)}
      >
        12 Tone Equal
      </button>
      <button
        className="mb"
        onClick={() => handleComparisonSelect("24tet", stateData, setStateData)}
      >
        24 Tone Equal
      </button>
      <br />
      <button
        className="mb"
        onClick={() =>
          handleComparisonSelect("just12", stateData, setStateData)
        }
      >
        Common 12 Tone JI Options
      </button>
      <br />
      <br />
      <button
        className="mb"
        onClick={() => handleComparisonSelect("off", stateData, setStateData)}
      >
        Disable
      </button>
      <br />
      <br />
    </div>
  );
};
