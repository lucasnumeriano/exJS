function calcular() {
    let txtn1 = window.document.querySelector('input#txtn1')
    let n1 = Number(txtn1.value)
    let km = n1 / 1000
    let hm = n1 / 100
    let dam = n1 / 10
    let m = n1 * 1
    let dm = n1 * 10
    let cm = n1 * 100
    let mm = n1 * 1000

    res.innerHTML = `A medida de ${m}m corresponde a <br><br> ${km}km <br> ${hm}hm <br> ${dam}dam <br> ${dm}dm <br> ${cm}cm <br> ${mm}mm`
}