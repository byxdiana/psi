function FaixaEtaria(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Você é uma criança"
    } else if (idade >= 13 && idade <= 17) {
        return "Você é um adolescente"
    } else if (idade >= 18 && idade <= 59) {
        return "Você é um adulto"
    } else if (idade >= 60) {
        return "Você é um idoso"
    } else {
        return "Idade inválida"
    }
}
console.log(FaixaEtaria(25))