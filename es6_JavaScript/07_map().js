/*  Array Function: map()

  It iterates the array fir us and we can pass a callback function to perform some operation on the each array item.
  The updated values can be returned by the callback function to create a new array.
  Syntax: 
    arr.map((item) => { callback function body }) → for (let index = 0; index < mArray.length; index++)

*/

// const mArray = [1, 2 , 3, 4, 5];

// let newArr = 0;

// for (let index = 0; index < mArray.length; index++) {
//   newArr += mArray[index];
// }

// console.log(newArr);

// let newArr = [];

// for (let index = 0; index < mArray.length; index++) {
//   newArr.push(mArray[index] * 2);
// }

// console.log(newArr);

// const doubleValues = (item) => item * 2;

// for (let index = 0; index < mArray.length; index++) {
//   newArr.push(doubleValues(mArray[index]));
// }
const mArray = [5, 10, 15, 20, 25];
let newArr = mArray.map((item, index) => {
  console.log(`Item at position ${index} is ${item}`);
  return item * 2
});
console.table(newArr);

let new2 = newArr.map((item, index) => {
  console.log(`Item at position ${index} is ${item}`);
  return item * 2

})
console.table(new2);



