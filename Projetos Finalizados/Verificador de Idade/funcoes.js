function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var user_ano = document.getElementById('txt_ano')
    var res = document.getElementById('res')

    if (user_ano.value.length == 0 || user_ano.value > ano_atual || user_ano.value < 1900) {
        // ano não informado ou impossível
        alert('Informe um Ano válido')
    } else {
        var sex = document.getElementsByName('sexo')
        if (sex[0].checked || sex[1].checked) {
            var idade = ano_atual - Number(user_ano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
        } else {
            // sexo não informado
            alert('Informe seu Sexo')
        }

        if (sex[0].checked) {
            genero = 'Homem'

            if (idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/editadas/crianca_homem.png')
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src', 'imagens/editadas/jovem_homem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/editadas/adulto_homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/editadas/idoso_homem.png')
            }
        } else {
            genero = 'Mulher'

            if (idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/editadas/crianca_mulher.png')
            } else if (idade < 20) {
                // jovem
                img.setAttribute('src', 'imagens/editadas/jovem_mulher.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/editadas/adulto_mulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/editadas/idoso_mulher.png')
            }
        }

        if (sex[0].checked) {
            res.innerText = `Detectamos um ${genero} com ${idade} anos.`
        }

        if (sex[1].checked) {
            res.innerText = `Detectamos uma ${genero} com ${idade} anos.`
        }

        res.appendChild(img)
    }
}