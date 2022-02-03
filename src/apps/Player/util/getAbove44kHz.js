const getAbove44kHz = (hzScale) => {
  let above44kHz = false;
  if (hzScale[44] === 23999) {
    above44kHz = true;
  }
  return above44kHz;
};

export default getAbove44kHz;
