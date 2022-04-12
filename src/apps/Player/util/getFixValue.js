const getFixValue = () => {
  let fixValue = 5;
  if (window.innerWidth <= 950) {
    fixValue = 3;
  }
  if (window.innerWidth <= 820) {
    fixValue = 2;
  }
  if (window.innerWidth <= 690) {
    fixValue = 1;
  }
  if (window.innerWidth <= 565) {
    fixValue = 0;
  }

  return fixValue;
};

export default getFixValue;
