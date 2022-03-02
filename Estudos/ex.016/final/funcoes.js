function contar(){
    var sta=document.getElementById('start')
    var end=document.getElementById('end')
    var ste=document.getElementById('step')
    var res=document.getElementById('res')
    if(sta.value.length==0||end.value.length==0||ste.value.length==0){
        alert('[ERRO] Há dados não informados!')
    }else{
        res.innerHTML='Contando...'
        var ini=Number(sta.value)
        var fim=Number(end.value)
        var pas=Number(ste.value)
        if(pas<=0){
            alert('[ERRO] Passo inválido! Considerando PASSO 1')
            pas=1
        }
        if(ini<fim){
            //contagem crescente
            for(var c=ini;c<=fim;c+=pas){
                res.innerHTML+=` ${c} \u{1F449}`
            }
            res.innerHTML+=`\u{1F3C1}`    
        }else{
            //contagem decrescente
            for(var c=ini;c>=fim;c-=pas){
                res.innerHTML+=` ${c} \u{1F449}`
            }
            res.innerHTML+=`\u{1F3C1}`
        }
    }
}