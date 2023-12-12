const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (lista[i] % 2 != 0) {
        console.log(`O número ${lista[i]} é impar`)
    } else {
        console.log(`O número ${lista[i]} é par`);
    }
}