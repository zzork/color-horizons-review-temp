export const handleEdoChange = (event, stateData, setStateData) => {
  const newEDO = event.target.value;

  let newState = {
    ...stateData,
    edo: {
      ...stateData.edo,
      value: newEDO,
    },
  };
  setStateData(newState);
};
