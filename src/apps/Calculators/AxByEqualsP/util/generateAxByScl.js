const generateAxByScl = (scale, sclData, mode) => {
  const firstSteps = sclData[0];
  const firstCents = sclData[1];
  const secondSteps = sclData[2];
  const secondCents = sclData[3];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! AXBY-${firstSteps}stepsOf${firstCents}-${secondSteps}stepsOf${secondCents}-Mode${mode}.scl
!
colorhorizons.com - ax+by=p - ${firstSteps} Steps of ${firstCents} Cents - ${secondSteps} Steps of ${secondCents} Cents - Mode ${mode}
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
  anchor.download = `AXBY-${firstSteps}stepsOf${firstCents}-${secondSteps}stepsOf${secondCents}-Mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);

  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateAxByScl;
