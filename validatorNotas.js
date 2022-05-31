/*
    ### Transformar notas escolares
    Crie um algoritmo que transforma as notas do sistema numérico para o sistema de notas em catacteres tipo A, B...

* de 90 para cima → A
* entre 89 - 80   → B
* entre 79 - 70   → C
* entre 69 - 60   → D
* entre 59 - 50   → E
* menor que 49    → F

*/

function getScore(score) {
    let scoreA = score >= 90
    let scoreB = score <= 89 && score >= 80
    let scoreC = score <= 79 && score >= 70
    let scoreD = score <= 69 && score >= 60
    let scoreE = score <= 59 && score >= 50
    let scoreF = score <= 49

    let finalScore;

    if (scoreA) {
        finalScore = "A"
    } else if (scoreB) {
        finalScore = "B"
    } else if (scoreC) {
        finalScore = "C"
    } else if (scoreD) {
        finalScore = "D"
    } else if (scoreE) {
        finalScore = "E"
    } else if (scoreF) {
        finalScore = "F"
    } else {
        finalScore = "Nota inválida"
    }

    return finalScore
}

console.log(getScore(91))
console.log(getScore(85))