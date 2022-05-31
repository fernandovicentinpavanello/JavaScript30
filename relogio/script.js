setInterval(function () {

    let novaHora = new Date();

    // Declarar as variáveis para armazenar os valores de hora, minuto e segundo
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    minuto = zero(minuto);
    segundo = zero(segundo);

    // Permite mostrar o conteúdo inserido em tempo real
    document.getElementById('hora').textContent = hora + ":" + minuto + ":" + segundo;
}, 1000)

function zero(contador) {
    if (contador < 10) {
        contador = "0" + contador;
    }
    return contador;
}