export const GetGenerator = ({numerator, denominator}) => {
    let fullGenerator = (1200 * Math.log(numerator / denominator) / Math.log(2))
    while (fullGenerator > 1200) {
        fullGenerator -= 1200
    }
    let fixedGenerator = fullGenerator.toFixed(5)
    return fixedGenerator
}