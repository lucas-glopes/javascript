var num=document.getElementById('num')
var list=document.getElementById('list')
var res=document.getElementById('res')
var values=[]

function add(){
    //Funçao para adicionar um número
    if(isNum(num.value)&&!inList(num.value, values)){
        values.push(Number(num.value))
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado.`
        list.append(item)
        res.innerHTML=''
    }else{
        alert('Valor inválido ou já econtrado na lista!')
    }
    num.value=''
    num.focus()
}


function isNum(n){
    //Função para verificar se o número está nos parâmetros
    if(Number(n)>=1&&Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inList(n, v){
    //Função para verificar se o número está na lista
    if(v.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}

function finalizar(){
    if(values.length==0){
        alert('Adicione valores antes de finalizar!')
    }else{
        //Total de númeos no vetor
        let tot=values.length
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${tot} números cadastrados.</p>`
        //Maior e menor valor no vetor
        //Somar os valores de dentro do vetor
        //Tirar média dos valores de dentro do vetor
        let maior=values[0]
        let menor=values[0]
        let som=0
        let med=0
        for(let pos in values){
            //Soma
            som+=values[pos]
            //Média

            //Maior número
            if(values[pos]>maior){
                maior=values[pos]
            }
            //Menor número
            if(values[pos]<menor){
                menor=values[pos]
            }
        }
        med=som/tot
        res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML+=`<p>Somando todos os valores, temos ${som}.</p>`
        res.innerHTML+=`<p>A média dos valores informados é ${med}</p>`
    }
}