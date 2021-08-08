/* Arrow Functions

  ES6 gives us a new syntax fro defining functions using a fat arrow.
  Arrow functions bring a lot of clarity & code reduction.
  Syntax:
*/

function greetings(name) {
  return(`Welcome ${name}!`);
}
console.log(greetings('Trevis'));

myGreetings = name => (`Welcome ${name}!`);

console.log(myGreetings('Canizzano'));
