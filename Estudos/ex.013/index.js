var sem_atual = new Date()
var sem = sem_atual.getDay()

switch(sem) {
    case 0:
        console.log('Olá! Hoje é Domingo.')
        break
    case 1:
        console.log('Olá! Hoje é Segunda-Feira.')
        break
    case 2:
        console.log('Olá! Hoje é Terça-Feira.')
        break
    case 3:
        console.log('Olá! Hoje é Quarta-Feira.')
        break
    case 4:
        console.log('Olá! Hoje é Quinta-Feira.')
        break
    case 5:
        console.log('Olá! Hoje é Sexta-Feira.')
        break
    case 6:
        console.log('Olá! Hoje é Sexta-Feira.')
        break
    default:
        console.log('[ERRO] Dia Inválido')
        break
}