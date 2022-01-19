const generateTDScl = (scale, sclData, mode) => {
  const allOtUt = sclData[0];
  const checked = sclData[1];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! TD-${allOtUt}-${checked}-Mode${mode}.scl
!
microtonalexplorer.com - Tonality Diamond - ${allOtUt} - ${checked} - Mode ${mode}
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
  anchor.download = `TD-${allOtUt}-${checked}-mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);

  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateTDScl;
