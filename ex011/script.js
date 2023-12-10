let valorDoCombustivel = document.querySelector("#valorDoCombustivel")
let consumoDeCombustivelPorKm = document.querySelector("#kmPorLitro")
let distanciaDaViagem = document.querySelector("#km")
let diasDeTrabalho = document.querySelector("#idaAoTrabalho")

function caucularViagem() {
    //transforma os dados em numeros
    let combustivel = Number(valorDoCombustivel.value)
    let consumo = Number(consumoDeCombustivelPorKm.value)
    let distancia = Number(distanciaDaViagem.value)
    let dia = Number(diasDeTrabalho.value)

    //calcula os valores
    let vaiGastarDeCombustivel = distancia / consumo
    let gastoEmReal = vaiGastarDeCombustivel * combustivel

    let gastoEmRealMes = gastoEmReal * dia
    let gastoDeCombsMes = vaiGastarDeCombustivel * dia

    //deixa os valores com apenas dois digitos apos a virgula
    let totalLitro = vaiGastarDeCombustivel.toFixed(2)
    let totalDinheiro = gastoEmReal.toFixed(2)

    let totalLitroMes = gastoDeCombsMes.toFixed(2)
    let totalDinheiroMes = gastoEmRealMes.toFixed(2)

    //insere os valores na tela
    document.querySelector(".resultado").innerHTML = `Seu gasto de combustivel total por dia é de ${totalLitro}L! O seu gasto total em dinheiro por dia é de R&dollar;${totalDinheiro}! No mês você gasta ${totalLitroMes}L que custa R&dollar;${totalDinheiroMes}`;
    
    //reseta valores
    valorDoCombustivel.value = ""
    consumoDeCombustivelPorKm.value = ""
    distanciaDaViagem.value = ""
    diasDeTrabalho.value = ""
}
