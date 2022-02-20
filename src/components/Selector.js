import { handleScaleGenerationMethodClick } from "../eventHandlers";

export const Selector = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Scale Generation Method</h2>
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("edo", stateData, setStateData)
        }
      >
        Equal Division of the Octave
      </button>
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("edomos", stateData, setStateData)
        }
      >
        EDO MOS
      </button>
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("ip", stateData, setStateData)
        }
      >
        Interval Pattern
      </button>
      <br />
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("ltbr", stateData, setStateData)
        }
      >
        Linear Temperament by Ratio
      </button>
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("ltbc", stateData, setStateData)
        }
      >
        Linear Temperament by Cents
      </button>
      <br />
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("axby", stateData, setStateData)
        }
      >
        ax + by = p
      </button>
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("td", stateData, setStateData)
        }
      >
        Tonality Diamond
      </button>
      <br />
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("ot", stateData, setStateData)
        }
      >
        Otones
      </button>
      <button
        className="mb"
        onClick={() =>
          handleScaleGenerationMethodClick("ut", stateData, setStateData)
        }
      >
        Utones
      </button>
      <br />
    </div>
  );
};
