function exibir(nome, callback) {
    return callback(nome)
}
const boasVindas = (nome) => Seja bem-vinda, ${nome}!
const despedida = (nome) => Até logo, ${nome}!

console.log(exibir('violet', boasVindas))
console.log(exibir('xaden', despedida))
