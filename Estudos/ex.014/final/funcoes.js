function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if (hora < 10 && min < 10) {
        // 08:05
        msg.innerText = `Agora são 0${hora}:0${min}`
    } else if (hora < 10 && min >= 10) {
        // 08:15
        msg.innerText = `Agora são 0${hora}:${min}`
    } else if (hora >= 10 && min < 10) {
        // 18:05
        msg.innerText = `Agora são ${hora}:0${min}`
    } else {
        // 18:15
        msg.innerText = `Agora são ${hora}:${min}`
    }


    if (hora < 12) {
        // bom dia
        img.src = "imagens/editadas/manha.png"
        document.body.style.backgroundColor = "#fec67f"
        document.querySelector('h1').innerText = "Bom Dia!"
    } else if (hora < 18) {
        // boa tarde
        img.src = "imagens/editadas/tarde.png"
        document.body.style.backgroundColor = "#bd8053"
        document.querySelector('h1').innerText = "Boa Tarde!"
    } else {
        //boa noite
        img.src = "imagens/editadas/noite.png"
        document.body.style.backgroundColor = "#004356"
        document.querySelector('h1').innerText = "Boa Noite!"
    }
}