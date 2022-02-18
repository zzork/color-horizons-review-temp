import { handleTdNumbersClick } from "./tdEventHandlers";

const TDNumbersClickButtons = ({ stateData, setStateData }) => {
  const numbersButtons = [];
  for (let i = 1; i < 26; i += 2) {
    numbersButtons.push(i);
  }

  const numbersClickButtons = numbersButtons.map((number, index) => (
    <button
      key={index}
      onClick={() => handleTdNumbersClick(number, stateData, setStateData)}
    >
      {number}
    </button>
  ));

  return numbersClickButtons;
};

export default TDNumbersClickButtons;
