/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
}
const vctn = new Person("Vctn")
const joao = new Person("Joao")
console.log(vctn)
console.log(joao)