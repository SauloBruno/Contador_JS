var componenteSpan = document.getElementById("currentNumber");
var valorAtual = 0;

function incrementar(){
    valorAtual = valorAtual + 1;
    componenteSpan.innerHTML = valorAtual;
}

function decrementar(){
    valorAtual = valorAtual - 1;
    componenteSpan.innerHTML = valorAtual;
}
