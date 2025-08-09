
function atrasado(callback) {
    console.log("Iniciando... Aguarde 3 segundos.");
    setTimeout(() => {
        callback()
        console.log(" Você foi paciente e esperou 3 segundos <3 ")
    }, 3000)
}
atrasado(() => {
    console.log("Não sei")
})