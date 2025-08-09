function maiorQueDez(numeros) {
    const resultado = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            resultado.push(numeros[i])
        }
    }
    return resultado;
}
const arrayOriginal = [3, 12, 5, 18, 7, 25, 1, 11]
const filtrados = maiorQueDez(arrayOriginal)
console.log(`estes são os números maiores que dez: ${filtrados}`)