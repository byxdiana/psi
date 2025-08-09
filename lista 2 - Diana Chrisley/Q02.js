function executarOperacao(num1, num2, callback) {
    return callback(num1, num2);
}

let soma = (a, b) => a + b;
let mult = (a, b) => a * b

console.log('esta é a soma:', executarOperacao(5, 3, soma))
console.log('esta é a multiplicação:', executarOperacao(5, 3, mult))
