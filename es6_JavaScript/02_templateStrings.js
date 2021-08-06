/*Template strings

It is just a string which allows embedding expressions inside it.
To create a template string you have to use back tick (``).
The expressions are embeddeed by wrapping them inside &{}.

For example:

const myGreetings = `Hello ${name}`;
→ Here the expression is a variable

const anotherGreeting = `Hello ${fullName()}`;
→ Here the expression is a function call

*/

let firstName = 'Trevis';
let lastName = 'Canizz';

const myGreetings = `Hello ${firstName}!`;

getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}.`
};

console.log(myGreetings); 
console.log(getFullName(firstName, lastName)); 

