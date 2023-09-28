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
//array

let dados: string[]= ["Felipe", "Ana", "Adriana"]

let dados2: Array<string> = ["Felipe", "Ana", "Adriana"]

//tuplas

let boleto:[string, number, number] = ["water", 31,23]

//metodos arrays
//datas
let aniver:Date = new Date("2022-01-01 08:10");
console.log(aniver.toString)