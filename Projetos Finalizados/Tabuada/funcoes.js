function tabuada(){
    var num=document.getElementById('num')
    var tab=document.getElementById('tab')
    if(num.value.length==0){
        alert('[ERRO] Número não informado!')
    }else{
        tab.innerHTML=''
        var n=Number(num.value)
        for(c=1;c<=10;c+=1){
            var item=document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            item.value=`tab${c}`
            tab.appendChild(item)
        }
    }
}