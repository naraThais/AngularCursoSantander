type Hero = {
    name:string;
    vulgo:string;
};
function printaObjetos(pessoa: Hero){
    console.log(pessoa);
}

printaObjetos({
    name: "Nara",
    vulgo: "Cat Woman",
});
//sem previsibilidade
let produto:Object ={
    name:"Felipe",
    cidade:"UAU",
};
//type

type produtoLoja = {
    nome:string;
    preco:number;
    unidades:number;    
};


let meuProduto: produtoLoja = {
    nome:"Tenis",
    preco: 10,
    unidades: 30,
};
