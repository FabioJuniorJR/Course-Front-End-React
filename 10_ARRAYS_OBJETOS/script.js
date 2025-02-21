/*Arrays */
const array = [1,2,3,4,5]
console.log(array)
console.log(array.length)
console.log(array[0])
for(let index = 0; index < array.length; index++){
    console.log(array[index])
}

/*Metodos */
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]
const allMenbers = array1.concat(array2)
console.log(allMenbers)
let text = "Fabio"
console.log(text.toUpperCase())
console.log(text.indexOf("o"))


/*Objetos */
const person = {
    name: "Fábio",
    age: 21,
    profissão: "Programador Full Stack"
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

/*Criando e Deletando Propriedades */
const car = {
    engine: 1.8,
    brand: "Volkswagen",
    model: "Golf",
}
console.log(car)
car.door = 4
console.log(car)

delete car.door
console.log(car)

console.log(car instanceof Object)

const obj1 = {
    name: "Fabio" 
}
const obj2 = {
    name: []
}

Object.assign(obj2, obj1)
console.log(obj1)

//Chaves, engine, modelo etc
console.log(Object.keys(car))

/*Mutação */
// Criamos umoutro objeto a partir de outro, mas é só uma referencia, um afeta o outro
const a = {
    age: 21
}

const b = a
console.log(b)

/*Push e pop */
//push adiciona um valor no final do array
//pop remove um valor no final do array

let arraPushPop = [2,3,4]
console.log(arraPushPop)
arraPushPop.push(5)
console.log(arraPushPop)
arraPushPop.pop(1)
console.log(arraPushPop)

/*Shift e Unshift */
//Shift remove o valor do inicio
//Undhift adiciona valor no inicio
let arrayShiftUnshift = [5,6,7]
arrayShiftUnshift.shift()
console.log(arrayShiftUnshift)
arrayShiftUnshift.unshift(4)
console.log(arrayShiftUnshift)

/*indexOf lastIndexOf */
// indexOf ENCONTRA UM INDICE
//lastIndexOf encontra a ultima ocorrencia

let element = ["Maça", "Banana", "Maça"]
console.log(element.indexOf("Maça"))
console.log(element.lastIndexOf("Maça"))
console.log(element.lastIndexOf("Mamão"))//retorna -1 quando nao encontra

/*Foreach */
//é tipo whilemasé ummetodo
const num = [1,2,3,4,5]
num.forEach((valores) => {
    console.log(`Os valores são: ${valores}`)
})

//Includes
//Verifica se tem umitem no array
const marcas = ["VW", "BMW"]
console.log(marcas.includes("VW"))

/*  json  */
const myJson = '{"name ": "Matheus", "sklls": ["Java", "React"]}'
console.log(myJson)

//Json para Objeto e Objeto para Json
const myObjectJson = JSON.parse(myJson)
console.log(myObjectJson)
myObjectJson.age = 21
console.log(myObjectJson)
const newJson = JSON.stringify(myObjectJson)
console.log(newJson)