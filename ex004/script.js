function calcular() {
    let txtn1 = window.document.querySelector('input#txtn1')
    let n1 = Number(txtn1.value)

    let d = n1 * 2
    let t = n1 * 3
    let rq = Math.sqrt(n1)

    res.innerHTML = `O dobro de ${n1} vale ${d}. <br> O triplo de ${n1} vale ${t}. <br> A raiz quadrada de ${n1} é igual a ${rq}.`
}