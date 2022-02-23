const generateEDOMOSScl = (scale, sclData, mode) => {
  const edo = sclData[0];
  const steps = sclData[1];
  const noteTotal = sclData[2];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! EDOSteps-${steps}stepsOf${edo}edo-${noteTotal}notes-Mode${mode}.scl
!
colorhorizons.com - EDO Steps - ${steps} Steps of ${edo} EDO - ${noteTotal} Notes - Mode ${mode}
 ${modifiedScale.length}
!`;
  for (let i = 0; i < modifiedScale.length; i++) {
    outputString += `
${modifiedScale[i]}`;
  }

  let outputBlob = new Blob([outputString], { type: "text/plain" });
  let url = window.URL.createObjectURL(outputBlob);
  let anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `EDOSteps-${steps}stepsOf${edo}edo-${noteTotal}notes-Mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);

  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateEDOMOSScl;
