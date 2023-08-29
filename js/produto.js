function calcular(){
    var pao = 0.99 * document.getElementById('pao').value;
    var sonho = 3.49 * document.getElementById('sonho').value;
    var cafe = 4.99 * document.getElementById('cafe').value;
    var baguette = 3.89 * document.getElementById('baguette').value;
    var croissant = 6.99 * document.getElementById('croissant').value;
    var pretzel = 8.99 * document.getElementById('pretzel').value;
    var cha = 3.99 * document.getElementById('cha').value;
    var suco = 5.49 * document.getElementById('suco').value;
    var resposta = document.getElementById('resposta')

    var conta = pao + sonho + cafe + baguette + croissant + pretzel + cha + suco;
    if (Object.is(NaN, conta) == true){
        resposta.innerHTML = 'Alguma Informação foi digitada incorretamente';
    }else{
        resposta.innerHTML = 'A sua compra dará R$' + conta.toFixed(2);
    }
}