import { handleScaleGenerationMethodClick } from "../eventHandlers";

export const Selector = ({ stateData, setStateData }) => {
  return (
    <div>
      <h2>Scale Generation Method</h2>
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("edo", stateData, setStateData)
        }
      >
        Equal Division of the Octave
      </button>
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("edomos", stateData, setStateData)
        }
      >
        EDO MOS
      </button>
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("ip", stateData, setStateData)
        }
      >
        Interval Pattern
      </button>
      <br />
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("ltbr", stateData, setStateData)
        }
      >
        Linear Temperament by Ratio
      </button>
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("ltbc", stateData, setStateData)
        }
      >
        Linear Temperament by Cents
      </button>
      <br />
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("axby", stateData, setStateData)
        }
      >
        ax + by = p
      </button>
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("td", stateData, setStateData)
        }
      >
        Tonality Diamond
      </button>
      <br />
      <button
        onClick={() =>
          handleScaleGenerationMethodClick("ot", stateData, setStateData)
        }
      >
        Otones
      </button>
      <button
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
