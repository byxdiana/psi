const numeros = [1,2,3,4,5,6,7,28,98);
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
    } else {
        impares.push(numeros[i])
    }
}
console.log("Números pares:", pares)
console.log("Números ímpares:", impares)