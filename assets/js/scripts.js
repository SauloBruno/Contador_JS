var componenteSpan = document.getElementById("currentNumber");
var valorAtual = 0;

function incrementar(){
    valorAtual = valorAtual + 1;
    if(valorAtual >= 0)
    {
        componenteSpan.style.color = "white";
    }
    componenteSpan.innerHTML = valorAtual;
}

function decrementar(){
    valorAtual = valorAtual - 1;
    if(valorAtual < 0)
    {
        componenteSpan.style.color = "red";    
    }
    componenteSpan.innerHTML = valorAtual;
}
