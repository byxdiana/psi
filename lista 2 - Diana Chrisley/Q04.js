function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero >= 0) {
            resolve(Numero valido: ${numero})
        } else {
            reject('Erro')
        }
    })
}

verificarNumero(10)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))
verificarNumero(-5)
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))
