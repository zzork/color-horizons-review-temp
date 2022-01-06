Temporary Notes
----////----
some of this stuff could be modified so that if it comes in as 2 values it gets treated as a Ratio
and if it comes in as 1 value it gets traeted as a cents value
----////----

----------//INDEX//----------

- TERMINOLOGY
- COMPONENTS
- UTILS

----------//TERMINOLOGY//----------

- Scale:
List of cents values showing the pitches at which that scale falls

- Step Differences:
Distances between each step of the scale, i.e. scale[2] - scale[1], scale[3] - scale[2], etc.

-----------------------------------


----------//UTILS//----------------

UTIL (Shared)

- getCentsFromRatios
-- Input:  Numerator & Denominator / 3, 2
-- Output: Cents Value / 701.9550008653874

- getReducedFraction
--Input:  Numerator & Denominator / 24, 14
--Output: Reduced Fraction Values List / [7, 6]

- getStepDifferences
--Input:  Scale List / [0, 203.91000173077487, 407.82000346154973, 701.9550008653874, 905.8650025961624, 1200]
--Output: Step Differences List / [0, 203.91000173077487, 203.91000173077487, 294.1349974038377, 203.91000173077498, 294.1349974038376]

- getUniqueSteps
--Input:  Step Differences List / [0, 345.2548554593393, 41.05885840549553, 386.3137138648348, 386.31371386483477, 41.058858405495585]
--Output: Unique Steps List / ['386.31371', '345.25486', '41.05886']

**** (NOTE - this one is a string because the values are being fixed before entering them in the list)
**** (will need to be set to pass the fix value in eventually)
**** (or perhaps fix at one less length, then convert back to number if needed, fix again later)

---

ALLMODES

- convertPatternToModes
--Input: 
--Output: 

getAllPossiblePatterns
--Input: 
--Output: 

---

CALCULATORS - EDO

-getEdoScale
--Input: EDO / 5
--Output: Scale List / [0, 240, 480, 720, 960, 1200]

---

CALCULATORS - INTERVAL PATTERN

-getEDOFromIntervalPattern
--Input: 
--Output: 

-getIPStepValuesList
--Input: 
--Output: 

---

CALCULATORS - LTBYRATIO

-getLMSList
--Input: 
--Output: 

-getLTStepValuesList
--Input: 
--Output: 

-getMOS
--Input: 
--Output: 

-getStepsValuesAndDifferences
--Input: 
--Output: 

---

RATIO COMPARER
-getComparisonEntryValues
--Input: 
--Output: 