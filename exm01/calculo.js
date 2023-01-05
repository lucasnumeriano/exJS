function calc() {
    let materia = window.document.querySelector('input#materia')
    let mescolar = window.document.querySelector('input#mesc')

    let mat = String(materia.value)
    let mesc = Number(mescolar.value)

    let und1 = window.document.querySelector('input#und1')
    let und2 = window.document.querySelector('input#und2')
    let und3 = window.document.querySelector('input#und3')
    let und4 = window.document.querySelector('input#und4')
    let res = window.document.querySelector('div#res')
    
    let n1 = Number(und1.value)
    let n2 = Number(und2.value)
    let n3 = Number(und3.value)
    let n4 = Number(und4.value)

    let s = n1 + n2 + n3 + n4
    let m = s / 4
    
    if (mat == 0) {
        alert('Favor indicar matéria!')
    } else if (m >= mesc){
        res.innerHTML = `A sua média anual na matéria de ${mat} foi de ${m}. Parábens você foi aprovado! &#x1F973`
    } else {
        res.innerHTML = `A sua média anual na matéria de ${mat} foi de ${m}. Você precisa estudar mais! &#x1F926`
    }
}