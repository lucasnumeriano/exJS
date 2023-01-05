function desconto() {
    let vproduto = window.document.querySelector("input#valordoprdt")
    let v = Number(vproduto.value)
    let parades = v * 5
    let vdes = parades / 100
    let produtocdesconto = v - vdes
    if (v < 50) {
        window.alert('O seu carrinho deve estar com o valor final acima de R$ 50.00 para receber o desconto. Adicione mais produtos!')
    } else {
        res.innerHTML = `<p class="bonito">Desconto adicionado! O preço do produto agora é R&dollar; ${produtocdesconto}</p>`
    }
}