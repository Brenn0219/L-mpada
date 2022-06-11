const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lampada = document.getElementById("lampada");
const recarregar = document.getElementById("recarregar");
let cont = 0;

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg";
    cont = 1;
    return cont;
}

function desligarLampada() {
    if(cont != 1) {
        lampada.src = "img/desligada.jpg";
    }
}

function ligarLampada() {
    if(cont != 1) {
        lampada.src = "img/ligada.jpg";
    }
}

ligar.addEventListener("click", () => {
    ligarLampada();
})

desligar.addEventListener("click", () => {
    desligarLampada();
})

recarregar.addEventListener("click", () => {
    desligarLampada();
    cont = 0;
    return cont;
})

lampada.addEventListener("dblclick", () => {
    quebrarLampada()
})

lampada.addEventListener("mouseover", () => {
    ligarLampada();
})

lampada.addEventListener("mouseleave", () => {
    desligarLampada();
})