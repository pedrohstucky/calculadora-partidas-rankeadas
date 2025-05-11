const prompt = require('prompt-sync')()

function getHeroWins(victories, defeats){
    victories = parseInt(prompt("Digite a quantidade de vitórias do seu Herói: "))
    defeats = parseInt(prompt("Digite a quantidade de derrotas do seu Herói: "))
    return victories - defeats
}

function setHeroLevel(victoryBalance){
    let level = ""

    switch (true){
        case victoryBalance <= 10:
            level = "Ferro"
            break
        case victoryBalance <= 20:
            level = "Bronze"
            break
        case victoryBalance <= 50:
            level = "Prata"
            break
        case victoryBalance <= 80:
            level = "Ouro"
            break
        case victoryBalance <= 90:
            level = "Diamante"
            break
        case victoryBalance <= 100:
            level = "Lendário"
            break
        default:
            level = "Imortal"
            break
    }

    return level
}

function main(){
    let victoryBalance = getHeroWins()
    let heroLevel = setHeroLevel(victoryBalance)
    console.log(`O Herói tem um saldo de ${victoryBalance} vitórias e está no nível ${heroLevel}`)
}

main()