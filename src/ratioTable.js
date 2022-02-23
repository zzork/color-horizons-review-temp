import getCentsFromRatio from "./util/getCentsFromRatio";

export const ratioTable = [
  // 12tet
  {
    ratio: "M2",
    cents: 200,
    invertedRatio: "m2",
    invertedCents: 100,
    twelveTet: true,
  },
  {
    ratio: "M3",
    cents: 400,
    invertedRatio: "m3",
    invertedCents: 300,
    twelveTet: true,
  },
  {
    ratio: "P4",
    cents: 500,
    invertedRatio: "Tritone",
    invertedCents: 600,
    twelveTet: true,
  },
  {
    ratio: "P5",
    cents: 700,
    invertedRatio: "Tritone",
    invertedCents: 600,
    twelveTet: true,
  },
  {
    ratio: "M6",
    cents: 900,
    invertedRatio: "m6",
    invertedCents: 800,
    twelveTet: true,
  },
  {
    ratio: "M7",
    cents: 1100,
    invertedRatio: "m7",
    invertedCents: 1000,
    twelveTet: true,
  },

  //24tet

  {
    ratio: "Infra 2nd",
    cents: 50,
    invertedRatio: "Wide 7th",
    invertedCents: 1150,
    twentyFourTet: true,
  },
  {
    ratio: "Minor 2nd",
    cents: 100,
    invertedRatio: "Major 7th",
    invertedCents: 1100,
    twentyFourTet: true,
  },
  {
    ratio: "Neutral 2nd",
    cents: 150,
    invertedRatio: "Neutral 7th",
    invertedCents: 1050,
    twentyFourTet: true,
  },
  {
    ratio: "Major 2nd",
    cents: 200,
    invertedRatio: "Minor 7th",
    invertedCents: 1000,
    twentyFourTet: true,
  },
  {
    ratio: "Ultra 2nd / Infra 3rd",
    cents: 250,
    invertedRatio: "Infra 7th / Ultra 6th",
    invertedCents: 950,
    twentyFourTet: true,
  },
  {
    ratio: "Minor 3rd",
    cents: 300,
    invertedRatio: "Major 6th",
    invertedCents: 900,
    twentyFourTet: true,
  },
  {
    ratio: "Neutral 3rd",
    cents: 350,
    invertedRatio: "Neutral 6th",
    invertedCents: 850,
    twentyFourTet: true,
  },
  {
    ratio: "Major 3rd",
    cents: 400,
    invertedRatio: "Minor 6th",
    invertedCents: 800,
    twentyFourTet: true,
  },
  {
    ratio: "Ultra 3rd / Narrow 4th",
    cents: 450,
    invertedRatio: "Infra 6th / Wide 5th",
    invertedCents: 750,
    twentyFourTet: true,
  },
  {
    ratio: "Perfect 4",
    cents: 500,
    invertedRatio: "Perfect 5",
    invertedCents: 700,
    twentyFourTet: true,
  },
  {
    ratio: "Wide 4th",
    cents: 550,
    invertedRatio: "Narrow 5th",
    invertedCents: 650,
    twentyFourTet: true,
  },
  {
    ratio: "Augmented 4th",
    cents: 600,
    invertedRatio: "Diminished 5th",
    invertedCents: 600,
    twentyFourTet: true,
  },

  // common just 12 ratios
  {
    ratio: "Lesser M2 (10/9)",
    cents: getCentsFromRatio(10, 9),
    invertedRatio: "Lesser m2 (25/24)",
    invertedCents: getCentsFromRatio(25, 24),
    just12: true,
  },
  {
    ratio: "M2 (9/8)",
    cents: getCentsFromRatio(9, 8),
    invertedRatio: "m2 (16/15)",
    invertedCents: getCentsFromRatio(16, 15),
    just12: true,
  },
  {
    ratio: "M3 (5/4)",
    cents: getCentsFromRatio(5, 4),
    invertedRatio: "m3 (6/5)",
    invertedCents: getCentsFromRatio(6, 5),
    just12: true,
  },
  {
    ratio: "P4 (4/3)",
    cents: getCentsFromRatio(4, 3),
    invertedRatio: "Aug4 (45/32)",
    invertedCents: getCentsFromRatio(45, 32),
    just12: true,
  },
  {
    ratio: "P5 (3/2)",
    cents: getCentsFromRatio(3, 2),
    invertedRatio: "Dim5 (64/45)",
    invertedCents: getCentsFromRatio(64, 45),
    just12: true,
  },
  {
    ratio: "M6 (5/3)",
    cents: getCentsFromRatio(5, 3),
    invertedRatio: "m6 (8/5)",
    invertedCents: getCentsFromRatio(8, 5),
    just12: true,
  },
  {
    ratio: "Grave M7 (50/27)",
    cents: getCentsFromRatio(50, 27),
    invertedRatio: "Harmonic m7 (7/4)",
    invertedCents: getCentsFromRatio(7, 4),
    just12: true,
  },
  {
    ratio: "M7 (15/8)",
    cents: getCentsFromRatio(15, 8),
    invertedRatio: "m7 (9/5)",
    invertedCents: getCentsFromRatio(9, 5),
    just12: true,
  },

  // harmonics to 27
  {
    ratio: "3/2",
    cents: getCentsFromRatio(3, 2),
    invertedRatio: "4/3",
    invertedCents: getCentsFromRatio(4, 3),
    harmonics: true,
    harmonicSix: true,
    harmonic17: true,
    prime: true,
  },
  {
    ratio: "4/3",
    cents: getCentsFromRatio(4, 3),
    invertedRatio: "3/2",
    invertedCents: getCentsFromRatio(3, 2),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "5/4",
    cents: getCentsFromRatio(5, 4),
    invertedRatio: "8/5",
    invertedCents: getCentsFromRatio(8, 5),
    harmonics: true,
    harmonicSix: true,
    harmonic17: true,
    prime: true,
  },
  {
    ratio: "6/5",
    cents: getCentsFromRatio(6, 5),
    invertedRatio: "5/3",
    invertedCents: getCentsFromRatio(5, 3),
    harmonics: true,
    harmonicSix: true,
    harmonic17: true,
  },
  {
    ratio: "7/6",
    cents: getCentsFromRatio(7, 6),
    invertedRatio: "12/7",
    invertedCents: getCentsFromRatio(12, 7),
    harmonics: true,
    harmonic17: true,
    prime: true,
  },
  {
    ratio: "8/7",
    cents: getCentsFromRatio(8, 7),
    invertedRatio: "7/4",
    invertedCents: getCentsFromRatio(7, 4),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "9/8",
    cents: getCentsFromRatio(9, 8),
    invertedRatio: "16/9",
    invertedCents: getCentsFromRatio(16, 9),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "10/9",
    cents: getCentsFromRatio(10, 9),
    invertedRatio: "9/5",
    invertedCents: getCentsFromRatio(9, 5),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "11/10",
    cents: getCentsFromRatio(11, 10),
    invertedRatio: "20/11",
    invertedCents: getCentsFromRatio(20, 11),
    harmonics: true,
    harmonic17: true,
    prime: true,
  },
  {
    ratio: "12/11",
    cents: getCentsFromRatio(12, 11),
    invertedRatio: "11/6",
    invertedCents: getCentsFromRatio(11, 6),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "13/12",
    cents: getCentsFromRatio(13, 12),
    invertedRatio: "24/13",
    invertedCents: getCentsFromRatio(24, 13),
    harmonics: true,
    harmonic17: true,
    prime: true,
  },
  {
    ratio: "14/13",
    cents: getCentsFromRatio(14, 13),
    invertedRatio: "13/7",
    invertedCents: getCentsFromRatio(13, 7),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "15/14",
    cents: getCentsFromRatio(15, 14),
    invertedRatio: "28/15",
    invertedCents: getCentsFromRatio(28, 15),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "16/15",
    cents: getCentsFromRatio(16, 15),
    invertedRatio: "15/8",
    invertedCents: getCentsFromRatio(15, 8),
    harmonics: true,
    harmonic17: true,
  },
  {
    ratio: "17/16",
    cents: getCentsFromRatio(17, 16),
    invertedRatio: "32/17",
    invertedCents: getCentsFromRatio(32, 17),
    harmonics: true,
    harmonic17: true,
    prime: true,
  },
  {
    ratio: "18/17",
    cents: getCentsFromRatio(18, 17),
    invertedRatio: "17/9",
    invertedCents: getCentsFromRatio(17, 9),
    harmonics: true,
  },
  {
    ratio: "19/18",
    cents: getCentsFromRatio(19, 18),
    invertedRatio: "36/19",
    invertedCents: getCentsFromRatio(36, 19),
    harmonics: true,
    prime: true,
  },
  {
    ratio: "20/19",
    cents: getCentsFromRatio(20, 19),
    invertedRatio: "19/10",
    invertedCents: getCentsFromRatio(19, 10),
    harmonics: true,
  },
  {
    ratio: "21/20",
    cents: getCentsFromRatio(21, 20),
    invertedRatio: "40/21",
    invertedCents: getCentsFromRatio(40, 21),
    harmonics: true,
  },
  {
    ratio: "22/21",
    cents: getCentsFromRatio(22, 21),
    invertedRatio: "21/11",
    invertedCents: getCentsFromRatio(21, 11),
    harmonics: true,
  },
  {
    ratio: "23/22",
    cents: getCentsFromRatio(23, 22),
    invertedRatio: "44/23",
    invertedCents: getCentsFromRatio(44, 23),
    harmonics: true,
    prime: true,
  },
  {
    ratio: "24/23",
    cents: getCentsFromRatio(24, 23),
    invertedRatio: "23/12",
    invertedCents: getCentsFromRatio(23, 12),
    harmonics: true,
  },
  {
    ratio: "25/24",
    cents: getCentsFromRatio(25, 24),
    invertedRatio: "48/25",
    invertedCents: getCentsFromRatio(48, 25),
    harmonics: true,
  },
  {
    ratio: "26/25",
    cents: getCentsFromRatio(26, 25),
    invertedRatio: "25/13",
    invertedCents: getCentsFromRatio(25, 13),
    harmonics: true,
  },
  {
    ratio: "27/26",
    cents: getCentsFromRatio(27, 26),
    invertedRatio: "52/27",
    invertedCents: getCentsFromRatio(52, 27),
    harmonics: true,
  },
  {
    ratio: "28/27",
    cents: getCentsFromRatio(28, 27),
    invertedRatio: "27/14",
    invertedCents: getCentsFromRatio(27, 14),
    harmonics: true,
  },
  {
    ratio: "29/28",
    cents: getCentsFromRatio(29, 28),
    invertedRatio: "56/29",
    invertedCents: getCentsFromRatio(56, 29),
    harmonics: true,
    prime: true,
  },
  {
    ratio: "30/29",
    cents: getCentsFromRatio(30, 29),
    invertedRatio: "29/15",
    invertedCents: getCentsFromRatio(29, 15),
    harmonics: true,
  },
  {
    ratio: "31/30",
    cents: getCentsFromRatio(31, 30),
    invertedRatio: "60/31",
    invertedCents: getCentsFromRatio(60, 31),
    harmonics: true,
    prime: true,
  },
];
