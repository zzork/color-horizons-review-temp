const generateEDOScl = (scale, edo) => {
  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! EDO-${edo}.scl
!
colorhorizons.com - ${edo} Equal Divisions of the Octave
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
  anchor.download = `EDO-${edo}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);

  // document.removeChild(anchor);
};

export default generateEDOScl;
