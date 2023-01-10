let pergunta = window.prompt("Você sabe quais anos tivemos Copa? Responda 1 para sim ou 2 para não")

let S = 1;
let N = 2;

if (pergunta == S) {
    alert("OK!")
} else {
    let anoCopa = 1930;

    while(anoCopa <= 2024) {
        res.innerHTML = "Tivemos Copa em " + anoCopa
        anoCopa = anoCopa + 4;
    }
}