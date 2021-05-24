var caixa = document.getElementById("caixa");

function setPos(x, y) {
    caixa.style.top = y + px
    caixa.style.lef = x + px

}

caixa.addEventListener("mousedown", iniciaArraste)

function iniciaArraste(event) {
    caixa.className = "arrastando"
}

document.addEventListener("mouseup", terminaArraste)

function terminaArraste (event) {
    caixa.className = ""
}