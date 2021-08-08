/* Destructuring 
    → It allows us to 'unpack' arrays or objects into a bunch of variables which makes working with arrays and objects a bit more convenient.
      Syntax:
        let [a, b] = [1, 2, 3];
        let {name, age} = {firstName: 'John', lastName: 'Wick', age: 30};
*/

// const fullName = 'John Wick';
// const nameArr = fullName.split(' ');
// console.log(nameArr);

// let [firstName, lastName] = nameArr
// console.log(nameArr, 'Yeeeesssss...');

// const person = {
//   firstName: 'John',
//   lastName: 'Wick',
//   age: 30,
//   message: "Your son kill my dog..."
// }

// let {firstName, lastName, age, message} = person;

// console.log(person);

let firstName = 'John';
let lastName = 'Wick';
let age = 30;
let message2 = "Your son kill my dog..."

const personObj = {
  firstName,
  lastName,
  age,
  message2
}

console.log(personObj);