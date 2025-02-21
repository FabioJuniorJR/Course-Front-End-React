//getElementByTagName
//selecionmamos um conjunto de elementos por uma tag em comum

const listItens = document.getElementsByTagName("li")
console.log(listItens)

//getElementById
//Seleciona um unico elkementona pagina ja que é unico naquele tipo de elemento
const title = document.getElementById("title")
console.log(title)

//getElemenstByClassName
//Seleciona umconjunto de elementos por uma classe em comum
const product = document.getElementsByClassName("product")
console.log(product)

//querySelector
//Selecionamos umconjuntode elementos pormeio de um seletor CSS
const productQuery = document.querySelectorAll(".product")
console.log(productQuery)
const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

//Alterando HTML com DOM
//insertBefore antes
//Insere umitem
const p = document.createElement("p");
console.log(p)
const header = title.parentElement
console.log(header)
header.insertBefore(p, title)

//AppendChild
//Adiocona umelemento dentro do outro
const navLinks = document.querySelector("nav ul")//selecionei
const li = document.createElement("li")//criei
navLinks.appendChild(li)//inseri dentro doque eu criei

//replaceChild
//troca um elemento
const h2 = document.createElement("h2")
h2.textContent = "Meu novo h1"
header.replaceChild(h2, title)

//manipulando atributo
const firstLink = navLinks.querySelector("a")
console.log(firstLink)
firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank");


//Tamanho largura e altura
const footer = document.querySelector("footer")
console.log(footer.offsetHeight)

//Pegar informações do elemento
//getBoundingClientReact

const product1 = product[0]
console.log(product1.getBoundingClientRect());

//Manipular estilos







