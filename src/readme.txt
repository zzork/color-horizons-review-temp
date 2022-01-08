
----------//UTILS//----------------

UTIL (Shared)

- getCentsFromRatio
-- Input:  Numerator & Denominator / 3, 2
-- Output: Cents Value / 701.9550008653874

- getReducedFraction
--Input:  Numerator & Denominator / 24, 14
--Output: Reduced Fraction Values List / [7, 6]

- getStepDifferences
--Input:  Scale List / [0, 203.91000173077487, 407.82000346154973, 701.9550008653874, 905.8650025961624, 1200]
--Output: Step Differences List / [0, 203.91000173077487, 203.91000173077487, 294.1349974038377, 203.91000173077498, 294.1349974038376]

- getUniqueSteps
--Input:  Step Differences List / [0, 498.04499913461257, 203.91000173077487, 498.04499913461257]
--Output: Unique Steps List / [498.044999135, 203.910001731]

---

CALCULATORS - EDO

-getEdoScale
--Input: EDO / 5
--Output: Scale List / [0, 240, 480, 720, 960, 1200]

---

CALCULATORS - INTERVAL PATTERN

-convertPatternToModesObjects
--Input: Interval Pattern / 2212221
--Output: All Modes of Original Scale as Objects / For Each Mode: Cents Values, Pattern, Step Differences

-getAllPossiblePatterns
--Input:
--Output: 

-getEDOFromIntervalPattern
--Input: Interval Pattern / 2212221
--Output: EDO Interger / 12

-getStepDifferencesFromPattern
--Input: 
--Output: 

getValuesFromStepDifferences
--Input:
--Output: 

---

CALCULATORS - LTBYRATIO

--convertLTInputToModesObjects
--Input: Reduced Fraction, Note Total / [3, 2], 7
--Output: All Modes of Original Scale as Objects / For Each Mode: Cents Values, LMS Readout, Step Differences

--getAllLTModesAsCents
--Input: 
--Output: 

-getLMSList
--Input: 
--Output: 

-getLTScale
--Input: 
--Output: 

-getMOS
--Input: 
--Output: 

---

RATIO COMPARER
-getComparisonEntryValues
--Input: Scale, Fraction / [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200] 701.955
--Output: Closest Scale Step, Closest Value, Difference / [6, 720, 18.04499999999996]