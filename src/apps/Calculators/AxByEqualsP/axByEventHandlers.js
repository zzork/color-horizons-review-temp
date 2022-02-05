export const handleAxByChange = (event, stateData, setStateData) => {
  let fieldReader = event.target.name;
  let newValue = event.target.value;

  if (fieldReader === "axBy1StepsEntryField") {
    let newState = {
      ...stateData,
      axByEqualsP: {
        ...stateData.axByEqualsP,
        firstSteps: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "axBy1CentsEntryField") {
    let newState = {
      ...stateData,
      axByEqualsP: {
        ...stateData.axByEqualsP,
        firstCents: newValue,
      },
    };
    setStateData(newState);
  }

  if (fieldReader === "axBy2StepsEntryField") {
    let newState = {
      ...stateData,
      axByEqualsP: {
        ...stateData.axByEqualsP,
        secondSteps: newValue,
      },
    };
    setStateData(newState);
  }
};
