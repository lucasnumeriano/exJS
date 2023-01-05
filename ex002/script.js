function Calcular() {
    let txtn1 = window.document.querySelector('input#txtn1')
    let txtn2 = window.document.querySelector('input#txtn2')
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)
    let s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}
