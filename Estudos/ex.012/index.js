var h_atual = new Date()
var hora = h_atual.getHours()
var min_atual = new Date()
var min = min_atual.getMinutes()
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
if (hora < 10) {
    console.log(`Agora são exatamente 0${hora}:${min}`)
} else {
    console.log(`Agora são exatamente ${hora}:${min}`)
}