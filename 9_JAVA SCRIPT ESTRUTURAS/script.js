/*Variaveis*/
let nome = "Fabio Adriano"
console.log(nome)
nome = "Fabio tem 21 anos"
console.log(nome)
const idade = 31
console.log(idade)
console.log(typeof idade)

let a = 10, b = 20, c = 30 
console.log(a, b, c)

/*Funções*/
const age = prompt("Digite a sua idade")
console.log(`Sua idade é: ${age}`)

alert("Atenção função de alerta")

console.log(Math.max(1,2,3,4,10))

console.log("Teste")
console.error("erro");
console.warn("perigo")

/*Condições*/

let valor = 10
if(valor > 5){
    console.log("Valor é maior ou igual sim")
}else if(valor = 5 ){
    console.log("Valor é igual")
}else{
    console.log("Valor é menor que 10")
}

while(valor > 1){
    console.log(valor)
    valor = valor - 1
}

do {
    console.log(valor)
    valor = valor - 1
} while (valor > 1);

for (let index = 0; index < 10; index++) {
    console.log("Repete")
    
}

let valor2 = 7
while(valor2 > 1){
    console.log(valor2)
    valor2 = valor2 - 1
    if(valor2 == 5){
        break
    }
}

let trabalho = "Programador Full Stack"
switch(trabalho){
    case "Engenheiro":
        console.log("Engenheiro")
    break

    case "Programador Full Stack":
        console.log("Programador Full Stack")
    break

    default:
        console.log("Nenhuma das opções")
}

/*Funcoes */
function minhaFuncao(){
    console.log("Funcao")
}
minhaFuncao()

let retornoFuncao = function(){
    console.log("Funcao em variavel")
}
retornoFuncao()


function funcaoParametro(texto){
    texto = "Fabio"
    console.log(`Imprimindo meu nome: ${texto}`)
}
funcaoParametro()




