const getRootButtonPositions = (incomingScale) => {
  const rootDivisor = incomingScale.length - 1;
  const keysListOrdered = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=";
  const allSinglesRootsList = [];
  for (let i = 0; i < keysListOrdered.length; i++) {
    if (i % rootDivisor === 0) {
      allSinglesRootsList.push(keysListOrdered[i]);
    }
  }
  const halfChordsRootsList = [];
  for (let i = 0; i < keysListOrdered.length / 2; i++) {
    if (i % rootDivisor === 0) {
      halfChordsRootsList.push(keysListOrdered[i]);
    }
  }
  const halfSinglesRootsList = [];
  for (let i = 21; i < keysListOrdered.length; i++) {
    if ((i - 21) % rootDivisor === 0) {
      halfSinglesRootsList.push(keysListOrdered[i]);
    }
  }

  const allChordsRootsList = halfChordsRootsList.concat(halfSinglesRootsList);

  const rootsListsObject = {
    singles: allSinglesRootsList,
    chords: allChordsRootsList,
  };

  return rootsListsObject;
};

export default getRootButtonPositions;
