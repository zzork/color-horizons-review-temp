export const Selector = ({ onSelect }) => {
  return (
    <div>
      <h2>Scale Generation Method</h2>
      <button onClick={() => onSelect("edo")}>
        Equal Division of the Octave
      </button>
      <button onClick={() => onSelect("ip")}>Interval Pattern</button>
      <button onClick={() => onSelect("lt")}>Linear Temperament</button>
    </div>
  );
};
