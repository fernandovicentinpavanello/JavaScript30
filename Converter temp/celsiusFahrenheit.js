/* ### Celsius em Fahrenheit

    Crie uma função que recebe uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F -32) * 5/9

    F = C * 9/5 + 32

*/

let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}