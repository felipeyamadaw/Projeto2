function iniciarJogo() {
    alert ('Seja bem vindo ao jogo da média, digite três números e lhe apresentarei a média: ')
    let num1 = parseInt (prompt ('Me informe o número 1:'));
    let num2 = parseInt (prompt ('Me informe o número 2:'));
    let num3 = parseInt (prompt ('Me informe o número 3:'));

    let resultadosoma = num1 + num2 + num3;
    let media = resultadosoma / 3;

    console.log (' O resultado da soma é:' + media);
    alert ("A média dos números é: " + media);
}

function iniciarForm() {
    setTimeout (() => {
        window.open ("FormularioBT2/index1.html", "_blank")
    }, 1000)
}

function iniciarJogoNumSec() {
    setTimeout (() => {
        window.open ("NumeroSecretoBT3/index2.html", "_blank")
    }, 1000)
}
