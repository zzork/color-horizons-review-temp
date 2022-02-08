// to make iterable since can't do w/ object
// Object.keys(stateTable).map(key => stateTable[key])

export const stateTable = {
  player: {
    active: false,
    showPlayer: true,
    playerData: {
      tool: "ltbr",
      scale: [0, 203.91, 407.82, 611.73001, 701.955, 905.865, 1109.775, 1200],
      sclData: [3, 2, 7],
      mode: 1,
    },
  },
  comparisonWindow: {
    enable: true,
    closeApproximation: 7,
    approximationBoundary: 22,
    comparison: "harmonics6",
  },
  selectedTool: {
    name: "selectedTool",
    tool: "ltbr",
  },
  edo: { value: "12" },
  linearTemperamentByRatio: {
    numerator: "3",
    denominator: "2",
    noteTotal: "7",
  },
  intervalPattern: {
    pattern: [2, 2, 1, 2, 2, 2, 1],
    inputPatternDisplay: "2212221",
    parenthesesMatch: true,
  },
  linearTemperamentByCents: {
    generator: "701.95",
    noteTotal: "7",
    granularity: "0.01",
  },
  edoMos: {
    edo: "12",
    step: "7",
    noteTotal: "7",
  },
  axByEqualsP: {
    firstCents: "200",
    firstSteps: "5",
    secondSteps: "2",
  },
  tonalityDiamond: {
    numbers: [1, 3, 5],
    allOtUt: "all",
    showEquivalent: false,
  },
  otones: {
    denominator: "1",
    start: "1",
    stop: "7",
    progression: "1",
    showEquivalent: false,
  },
  utones: {
    numerator: "1",
    start: "1",
    stop: "7",
    progression: "1",
    showEquivalent: false,
  },
};
