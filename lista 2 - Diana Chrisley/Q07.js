function verificarHorario(atualHora) {
    return new Promise((resolve, reject) => {
        if(typeof atualHora !== "number" || atualHora < 0 || atualHora > 23) {
            reject('Erro')
        } else if(atualHora >= 8 && atualHora < 17){
            resolve('Estamos abertos para atendimento')
        } else{
            reject('Estamos fechados no momento.')
        }
    })
}

async function checarAtendimento(horaAtual) {
    try {
        const mensagem = await verificarHorario(horaAtual)
        console.log(mensagem)
    } catch (erro) {
        console.log(erro)
    }
}

checarAtendimento(15)
checarAtendimento(30)