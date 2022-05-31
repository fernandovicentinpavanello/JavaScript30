// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')
// adicionar no começo
techs.unshift('linux')
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
console.log(techs.slice(1, 2))
// encontrar a posição de um elemento no array
console.log(techs.indexOf('js'))

console.log(techs)