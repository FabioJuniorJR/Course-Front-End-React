//strict
//restringe criar codigo errado que danifique o programa
"use strict";
//mensagem = "Olá";
const mensagem2 = "Olá";

//debugger
//para na palavra debug escritano codigo e faz passo a passo dali para frente
let a =1
let b = 2
if(a < b){
    console.log("imprimir executou if")
}
//debugger;
console.log("debug ativo")

//Tartamento de Dados
function checkNumber(numero){
    const result = Number(numero);

    if(Number.isNaN(result)){
        console.log("Valor incorreto");
    }
    console.log("Valor correto");
    return result;
}
checkNumber(5);
checkNumber("{")

//Exception
//lança erros
//quando chegar na excessao ele para ali e mostra o erro
let x = 10
if(x != 11){
    //throw new Error("Error. Valor é diferente de 11")
}

//try catch
// programa nao para a menos que queira
try{
    const soma = x + y;
}catch(error){
    console.log(`erro no programa ${error}`)
}
//finally
try{
    const value = checkNumber("assd");
    if(!value){
        throw new Error("Valores invalidos");
    
}}catch(error){
    console.log(`Opa, aconteceu algum problema ${error}`);
}finally{
    console.log("O codigo foi executado");
}

//assertions
//sao quando os tratamentos de valores passados pelos usuarios geram erro
function checkArray(array){
    if(array.length === 0){
        throw new Error("O array precisa ter elementos");
    }else{
        console.log(`O array tem ${array} elementos`);
    }
}
checkArray([1, 2, 3])