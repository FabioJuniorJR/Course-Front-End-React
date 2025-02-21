//METODOS
const animal = {
    nome: "Bob",
    latir: function(){
        console.log("au au")
    }
}
console.log(animal.nome)
console.log(animal.latir)
animal.latir()

const pessoa = {
    nome: "Matheus",

    getNome: function(){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    },
};

console.log(pessoa.getNome())
pessoa.setNome("Fabio")
console.log(pessoa.getNome())

//PROTYPE
//É como uma herença em Java Back end, funciona como heraça
//fallback- >> quando nao há algo em um objeto ela procura no ancestral
const text = "FABIO"
console.log(Object.getPrototypeOf(text))

const myObject = {
    a: "b"
}
console.log(Object.getPrototypeOf(myObject) === Object.prototype)


const mySecundObject = Object.create(myObject) //Instancia Objeto a partir de outro
console.log(mySecundObject.a)
console.log(Object.getPrototypeOf(mySecundObject) === myObject)

//CLASSES BASICAS
const cachorro = {
    raca: null
}
const pastorAlemao = Object.create(cachorro) //INSTANCIA OBJETO A PARTIRDE OUTRO
pastorAlemao.raca = "Pastor Alemao";
console.log(pastorAlemao)
console.log(pastorAlemao.raca)
//função construtora
//function

//override
/*class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
const matheus = new Humano("Fabio", 21)

console.log(matheus)
Humano.prototype.idade = "Nao tem uma idade"
console.log(matheus.idade)
console.log(Humano.prototype.idade)
*/
//funções como classes
function Cachorro(nome, raca){//Objeto sendo criado a partir de uma função
    this.nome = nome;
    this.raca = raca
}
const husky = new Cachorro("Gudanzinho", "Husky")
console.log(husky)

//Metodosna funcao construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuuuu")
}
console.log(Cachorro.prototype)
//Cachorro.uivar()


//Classes
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}
const jeff = new CachorroClasse("Jeff", "Husky")
console.log(jeff)
console.log(Object.getPrototypeOf(jeff))

//Mais sobre classes
class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }


    descreverCaminhao(){
        console.log(`O caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}
const optimusPrime = new Caminhao(3, "Azul")
console.log(optimusPrime.descreverCaminhao())

//symbol
//NAO muda o valor
class Aviao{
    constructor(marca, turbinas){
        this.marca = marca;
        this.turbinas = turbinas
    }
}
const asas = Symbol();
Aviao.prototype[asas] = 2;
const boeing = new Aviao("Boing", 4);
console.log(boeing);
console.log(boeing[asas]);

//getters e setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;

        }
        get exibirTitulo(){
            return `Voce esta lendo ${this.titulo}`;
        }

        set adicionarTags(tags){
            const tagsArray = tags.split(", ");
            this.tags = tagsArray;
        }
}
const myPost = new Post("Algum post", "É umpost de programação")
console.log(myPost)
console.log(myPost.exibirTitulo)
myPost.adicionarTags = "Programação, JavaScript, js";
console.log(myPost)

//Herança
class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}
class lobo extends Mamifero{
    constructor(patas, nome){
        super(patas,patas)
        this.nome = nome;
    }
}

const afonso = new lobo(4, "afonso")
console.log(afonso)

//instanceOf
//tESTA SE ALGO É UM INSTANCIA DE OUTRO
console.log(lobo instanceof Mamifero)