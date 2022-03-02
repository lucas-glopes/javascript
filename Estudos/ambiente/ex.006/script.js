var amigo={nome:'Shirlley', 
sexo:'Feminino',
altura:1.5,
crescer(a){
    this.altura+=a
}}
amigo.crescer(0.3)
console.log(`${amigo.nome} tem ${amigo.altura}m de altura`)