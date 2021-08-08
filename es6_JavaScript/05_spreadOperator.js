/* Spread Operator
  Spread suntax allows arrays and objects to be expanded into:
    - Elements in case of array;
    - Key-value pairs in case of object.
  Is really good for concatenation.
  The sequence matters.
*/

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 0];
let array3 = [...array1, ...array2]
console.log(array3);

array1.push(23);

console.log(array1);
console.log(array3);
