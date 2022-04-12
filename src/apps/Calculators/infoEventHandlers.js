export const setShowEdoInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    edo: {
      ...stateData.edo,
      showInfo: !stateData.edo.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowEdoMosInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    edoMos: {
      ...stateData.edoMos,
      showInfo: !stateData.edoMos.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowIpInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    intervalPattern: {
      ...stateData.intervalPattern,
      showInfo: !stateData.intervalPattern.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowLtbrInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    linearTemperamentByRatio: {
      ...stateData.linearTemperamentByRatio,
      showInfo: !stateData.linearTemperamentByRatio.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowLtbcInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    linearTemperamentByCents: {
      ...stateData.linearTemperamentByCents,
      showInfo: !stateData.linearTemperamentByCents.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowAxbyInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    axByEqualsP: {
      ...stateData.axByEqualsP,
      showInfo: !stateData.axByEqualsP.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowTdInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    tonalityDiamond: {
      ...stateData.tonalityDiamond,
      showInfo: !stateData.tonalityDiamond.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowOtInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    otones: {
      ...stateData.otones,
      showInfo: !stateData.otones.showInfo,
    },
  };
  setStateData(newState);
};

export const setShowUtInfo = (stateData, setStateData) => {
  let newState = {
    ...stateData,
    utones: {
      ...stateData.utones,
      showInfo: !stateData.utones.showInfo,
    },
  };
  setStateData(newState);
};
