import { handleTdNumbersClick } from "./tdEventHandlers";

const TDNumbersClickButtons = ({ stateData, setStateData }) => {
  const numbersButtons = [];
  for (let i = 1; i < 100; i += 2) {
    numbersButtons.push(i);
  }
  // for (let i = 1; i < 100; i++) {
  //   numbersButtons.push(i);
  // }

  const numbersClickButtons = numbersButtons.map((number, index) => (
    <button
      className="mb"
      key={index}
      onClick={() => handleTdNumbersClick(number, stateData, setStateData)}
    >
      {number}
    </button>
  ));

  return <div className="tdButtons">{numbersClickButtons}</div>;
};

export default TDNumbersClickButtons;
