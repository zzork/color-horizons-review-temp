// export const stateTable = {
//   edo: {value: 12, test: "abc"}
// }
// {
//   ...stateTable,
//   edo: {
//     ...stateTable.edo,
//     value: 13
//   }
// }
//
// to make iterable since can't do w/ object
// Object.keys(stateTable).map(key => stateTable[key])

export const stateTable = [
  { index: 0, id: "a", name: "edo", value: "12" },
  {
    index: 1,
    id: "b",
    name: "linearTemperamentByRatio",
    numerator: "3",
    denominator: "2",
    noteTotal: "7",
  },
  { index: 2, id: "c", name: "intervalPattern", pattern: "2212221" },
  {
    index: 3,
    id: "d",
    name: "linearTemperamentByCents",
    generator: "701.95",
    noteTotal: "7",
    granularity: "0.01",
  },
  {
    index: 4,
    id: "e",
    name: "edoMos",
    edo: "12",
    step: "7",
    noteTotal: "7",
  },
  {
    index: 5,
    id: "f",
    name: "axByEqualsP",
    firstCents: "200",
    firstSteps: "5",
    secondSteps: "2",
  },
  {
    index: 6,
    id: "g",
    name: "tonalityDiamond",
    numbers: [1, 3, 5],
    allOtUt: "all",
    showEquivalent: false,
  },
  {
    index: 7,
    id: "h",
    name: "otones",
    denominator: "1",
    start: "1",
    stop: "7",
    progression: "1",
    showEquivalent: false,
  },
  {
    index: 8,
    id: "i",
    name: "utones",
    numerator: "1",
    start: "1",
    stop: "7",
    progression: "1",
    showEquivalent: false,
  },
  {
    index: 9,
    id: "j",
    name: "player",
    showPlayer: true,
    playerData: {
      tool: "ltbr",
      scale: [0, 203.91, 407.82, 611.73001, 701.955, 905.865, 1109.775, 1200],
      sclData: [3, 2, 7],
      mode: 1,
    },
  },
  {
    index: 10,
    id: "k",
    name: "comparisonWindow",
    enable: true,
    closeApproximation: 7,
    approximationBoundary: 22,
    comparison: "harmonics6",
  },
  {
    index: 11,
    id: "l",
    name: "selectedTool",
    tool: "ltbr",
  },
];
