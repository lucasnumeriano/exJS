function converteu() {
    let dinheiro = document.querySelector("input#dinheiro")
    let rs = Number(dinheiro.value)
    let d = rs / 5.24
    let e = rs / 5.52
    let l = rs / 6.42
    let i = rs / 0.038
    res.innerHTML = `Com R&dollar; ${rs} você pode comprar: <br><br> &dollar; ${d} <br> &euro; ${e} <br> &pound; ${l} <br> &yen; ${i}` 
}