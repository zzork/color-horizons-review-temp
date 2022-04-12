const getTDRatios = (checked) => {
  let allTDRatiosList = [];
  for (let j = 0; j < checked.length; j++) {
    for (let i = 0; i < checked.length; i++) {
      allTDRatiosList.push({ numerator: checked[i], denominator: checked[j] });
    }
  }

  let allTDRatiosNoUnison = [];
  for (let i = 0; i < allTDRatiosList.length; i++) {
    if (allTDRatiosList[i].numerator != allTDRatiosList[i].denominator) {
      allTDRatiosNoUnison.push(allTDRatiosList[i]);
    }
  }

  let overtones = [];
  let undertones = [];
  for (let i = 0; i < allTDRatiosNoUnison.length; i++) {
    if (allTDRatiosNoUnison[i].numerator > allTDRatiosNoUnison[i].denominator) {
      overtones.push([
        allTDRatiosNoUnison[i].numerator,
        allTDRatiosNoUnison[i].denominator,
      ]);
    }
    if (allTDRatiosNoUnison[i].numerator < allTDRatiosNoUnison[i].denominator) {
      undertones.push([
        allTDRatiosNoUnison[i].numerator,
        allTDRatiosNoUnison[i].denominator,
      ]);
    }
  }

  let tonalityDiamond = [];
  tonalityDiamond.push(...overtones, ...undertones);

  return [tonalityDiamond, overtones, undertones];
};

export default getTDRatios;
