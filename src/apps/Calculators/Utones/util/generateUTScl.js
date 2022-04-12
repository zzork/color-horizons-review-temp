const generateUTScl = (scale, sclData, mode) => {
  const numerator = sclData[0];
  const start = sclData[1];
  const stop = sclData[2];
  const progression = sclData[3];

  let modifiedScale = [...scale];
  modifiedScale.shift();
  modifiedScale.pop();
  modifiedScale = modifiedScale.map((value) => value.toFixed(5));
  modifiedScale.push("2/1");

  let outputString = `! UT-Numerator${numerator}-Start${start}-Stop${stop}-Progression${progression}-Mode${mode}.scl
!
colorhorizons.com - Utones - Numerator ${numerator} - Start ${start} - Stop ${stop} - Progression ${progression} - Mode ${mode}
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
  anchor.download = `UT-Numerator${numerator}-Start${start}-Stop${stop}-Progression${progression}-Mode${mode}.scl`;

  anchor.click();
  window.URL.revokeObjectURL(url);

  //   document.removeChild(anchor); UNNECESSARY?
};

export default generateUTScl;
