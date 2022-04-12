const generateLTBRScl = (scale, sclData, mode) => {
  const numerator = sclData[0];
  const denominator = sclData[1];
  const noteTotal = sclData[2];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! R2SBRO-${numerator}over${denominator}-${noteTotal}notes-Mode${mode}
!
colorhorizons.com - Rank-2 Scale By Ratio (Octave Period) - Numerator ${numerator} - Denominator ${denominator} - Note Total ${noteTotal} - Mode ${mode}
 ${noteTotal}
!`;
  for (let i = 0; i < modifiedScale.length; i++) {
    outputString += `
${modifiedScale[i]}`;
  }

  let outputBlob = new Blob([outputString], { type: "text/plain" });
  let url = window.URL.createObjectURL(outputBlob);
  let anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `R2SBRO-${numerator}over${denominator}-${noteTotal}notes-Mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);
  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateLTBRScl;
