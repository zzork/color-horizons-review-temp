export const handleIPChange = (event, stateData, setStateData) => {
  const newPattern = event.target.value;

  let newState = {
    ...stateData,
    intervalPattern: {
      ...stateData.intervalPattern,
      pattern: newPattern,
    },
  };
  setStateData(newState);
};
