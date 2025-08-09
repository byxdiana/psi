function consultarPaciente(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nome) {
                resolve(Consulta para ${nome} agendada com sucesso!)
            } else {
                reject("Erro: nome do paciente não foi fornecido.")
            }
        }, 1000)
    })
}

async function agendarConsulta(nome) {
    try {
        const mensagem = await consultarPaciente(nome)
        console.log(mensagem)
    } catch (error) {
        console.error("Falha ao agendar consulta:  \n", error)
    }
}

agendarConsulta("violet")
agendarConsulta("")