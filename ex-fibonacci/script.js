function fibonacci() {
    let termo = document.querySelector("input#termo").value;
    let antecessor = 0; atual = 1;
    let numero;

    if(termo<=2) {
    numero = termo-1;
    }
    else {
        for(var count=3 ; count<=termo ; count++){
            numero = atual + antecessor;
            antecessor = atual;
            atual = numero;
        }
    }

        resposta.innerHTML = numero;
}