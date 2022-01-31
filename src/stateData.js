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
  { id: "a", name: "edo", value: "12" },
  {
    id: "b",
    name: "linearTemperamentByRatio",
    numerator: "3",
    denominator: "2",
    noteTotal: "7",
  },
  { id: "c", name: "intervalPattern", pattern: "2212221" },
  {
    id: "d",
    name: "linearTemperamentByCents",
    generator: "701.95",
    noteTotal: "7",
    granularity: "0.01",
  },
  {
    id: "e",
    name: "edoMos",
    edo: "12",
    step: "7",
    noteTotal: "7",
  },
  {
    id: "f",
    name: "axByEqualsP",
    firstCents: "200",
    firstSteps: "5",
    secondSteps: "2",
  },
  {
    id: "g",
    name: "tonalityDiamond",
    numbers: [1, 3, 5],
    allOtUt: "all",
    showEquivalent: false,
  },
  {
    id: "h",
    name: "otones",
    denominator: "1",
    start: "1",
    stop: "7",
    progression: "1",
    showEquivalent: false,
  },
  {
    id: "i",
    name: "utones",
    numerator: "1",
    start: "1",
    stop: "7",
    progression: "1",
    showEquivalent: false,
  },
  {
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
    id: "k",
    name: "comparisonWindow",
    closeApproximation: 7,
    moderateApproximation: 25,
  },
];
