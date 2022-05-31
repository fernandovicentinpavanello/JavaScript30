// Estrutura de repetição

//for 
// break → para a execução do loop
// continue → pula a execução do momento
// sabemos o momento de parada, início e fim lo loop

for (let i = 0; i <= 3; i++) {
    console.log(i)
}

// while
// não sabemos o final do loop

let i = 0
while (i <= 3) {
    console.log(i)
    i++;
}

// for... of
let names = ['João', 'Paulo', 'Pedro']

for (name of names) {
    console.log(name)
}

//for... in

let person = {
    name: 'John',
    age: 30,
    weight: 99
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}