let num=[ 7 , 6 , 4 ]
num.push(27)
num[3]=9
num.sort()
console.log(num)
console.log(`O vetor 'num' tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]} e o último é ${num[4]}`)
let pos=num.indexOf(1)
if(pos==-1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 6 está na posição ${pos}`)
}