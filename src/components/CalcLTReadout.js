export const CalcLTReadout = ({numerator, denominator}) => {

    if ((numerator === "") && (denominator === "")) {
        return <div>Numerator and Denominator Fields are Invalid</div>
    }

    if (numerator === "") {
        return <div>Numerator Field is Invalid</div>
    }

    if (denominator === "") {
        return <div>Denominator Field is Invalid</div>
    }

    // without these two steps, was only evaluating first character in while loop (?)
    numerator = parseInt(numerator)
    denominator = parseInt(denominator)

    if ((numerator < 2) && (denominator < 1)) {
        return <div>Numerator Field is Less than 3 and Denominator Field is Less than 1</div>
    }

    if (numerator < 2) {
        return <div>Numerator Field is Less than 3</div>
    }

    if (denominator < 1) {
        return <div>Denominator Field is Less than 1</div>
    }

    while (numerator <= denominator) {
        numerator *= 2
    }

    let keepReducing = true
    if ((numerator % denominator === 0) || (denominator % numerator === 0)) {
        numerator = 2
        denominator = 1
        keepReducing = false
    }

    if (keepReducing = true) {

        let numeratorGCFList = []
        for (let i = 2; i < ((numerator / 2) + 1); i++) {
            if (numerator % i === 0) {
                numeratorGCFList.push(i)
            }
        }

        let denominatorGCFList = []
        for (let i = 2; i < ((denominator / 2) + 1); i++) {
            if (denominator % i === 0) {
                denominatorGCFList.push(i)
            }
        }

        let gcfList = numeratorGCFList.filter(factor => denominatorGCFList.includes(factor))
        let gcf = Math.max(...gcfList)

        if (gcf >= 2) {
        numerator /= gcf
        denominator /= gcf
        }

        while ((denominator * 2) < numerator) {
            if (numerator % 2 === 0) {
            numerator /= 2
            } else break
        }
        
    }

    return <div>The simplest reduction of your fraction is {numerator} / {denominator}</div>
}