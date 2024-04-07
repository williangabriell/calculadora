function adicionarCaracter (numero) {
    const numeroDisplay = document.querySelector (".display").value

    document.querySelector(".display"). value = numeroDisplay + numero;
}

function limpaTela () {
    document.querySelector(".display").value = "";
}

function calcular () {
    const numeroDisplay = document.querySelector (".display").value

    document.querySelector(".display").value = eval(numeroDisplay);
}

function inverterNumero () {
    const numeroDisplay = document.querySelector (".display").value

    document.querySelector(".display").value = numeroDisplay * -1;
}