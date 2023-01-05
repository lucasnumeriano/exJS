function calcular() {
    let larg = window.document.querySelector("input#largura")
    let alt = window.document.querySelector("input#altura")
    let l = Number(larg.value)
    let h = Number(alt.value)
    let a = l*h
    let qtdt = a / 2
    res.innerHTML = `Sua parede tem a dimensão ${l}x${h} e sua área é de ${a}m². <br> Para pintar essa parede, você precisará de ${qtdt}l de tinta.`
}