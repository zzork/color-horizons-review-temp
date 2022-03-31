const generateLTBCScl = (scale, sclData, mode) => {
  const generator = sclData[0];
  const noteTotal = sclData[1];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! R2SBCO-${generator}-${noteTotal}notes-Mode${mode}
!
colorhorizons.com - Rank-2 Scale By Cents (Octave) - Generator ${generator} - ${noteTotal} Notes - Mode ${mode}
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
  anchor.download = `R2SBCO-${generator}-${noteTotal}notes-Mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);
  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateLTBCScl;
