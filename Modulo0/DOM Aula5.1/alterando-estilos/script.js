var caixa = document.getElementById("caixa");
var cx, cy

function setPos(x, y) {
    caixa.style.left  = x + "px"
    caixa.style.top = y + "px"

}

caixa.addEventListener("mousedown", iniciaArraste)
document.addEventListener("mouseup", terminaArraste)

function iniciaArraste(event) {
    cx = event.clientX - pxParaNum(caixa.style.left)
    cy = event.clientY - pxParaNum(caixa.style.top)

    caixa.classList.add("arrastando")
    document.addEventListener("mousemove", arrasta)
}

function terminaArraste (event) {
    caixa.classList.remove("arrastando")
    document.removeEventListener("mousemove", arrasta)
}

function arrasta(event) {
    var x = event.clientX
    var y = event.clientY
    setPos(x - cx, y - cy)
}

function pxParaNum(s) {
    return +(s.replace('px' , ''))
}