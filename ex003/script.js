function resultado() {
    let txtn1 = window.document.querySelector('input#n1')
    let n = Number(txtn1.value)
    let ant = n - 1
    let suc = n + 1
    
    res.innerHTML = `Analisando o valor ${n}, seu antecessor é ${ant} e o sucessor é ${suc}.`
}