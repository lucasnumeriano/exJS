function reajuste() {
    let salario = window.document.querySelector("input#salario")
    let reajuste = window.document.querySelector("input#reajuste")

    let sal = Number(salario.value)
    let r = Number(reajuste.value)

    let calc1 =  sal * r
    let calc2 = calc1 / 100
    let valorFinal = sal + calc2
    if (r == 0 || sal <= 0) {
        alert('Porfavor insira o valores válidos!')

    } else {
        res.innerHTML = `Com o reajuste de ${r}%, o salário passou de R&dollar;${sal} para R&dollar;${valorFinal}`
    }
}