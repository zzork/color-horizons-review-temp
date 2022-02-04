const getAbove22kHz = (hzScale) => {
  let above22kHz = false;
  if (hzScale[44] === 23999) {
    above22kHz = true;
  }
  return above22kHz;
};

export default getAbove22kHz;
