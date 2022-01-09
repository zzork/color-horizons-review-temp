const getGranularitySettings = (granularity) => {
  let toFixed = 2;
  let step = 0.01;

  switch (granularity) {
    case "100":
      toFixed = 0;
      step = 100;
      break;
    case "10":
      toFixed = 0;
      step = 10;
      break;
    case "1":
      toFixed = 0;
      step = 1;
      break;
    case "0.1":
      toFixed = 1;
      step = 0.1;
      break;
    case "0.01":
      toFixed = 2;
      step = 0.01;
      break;
    case "0.001":
      toFixed = 3;
      step = 0.001;
      break;
    case "0.0001":
      toFixed = 4;
      step = 0.0001;
      break;
    case "0.00001":
      toFixed = 5;
      step = 0.00001;
      break;
    case "0.000001":
      toFixed = 6;
      step = 0.000001;
      break;
    case "0.0000001":
      toFixed = 7;
      step = 0.0000001;
      break;
  }

  //   return [2, 0.01];
  return [toFixed, step];
};

export default getGranularitySettings;

// need to set "toFixed(x)" and "step" in the button object

// 1, 10, 100 = toFixed(0)
// 0.1 = toFixed
