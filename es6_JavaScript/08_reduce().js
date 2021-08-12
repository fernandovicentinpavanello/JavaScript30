/* Array Function: reduce();

  Just like map() also iterates through the entire array and it accepts a callback function to perform some action on the array element. 
  The difference here is that reduce() passes the result of the callback from one iteration to the next one. This callback result is called accumulator(acc). The accumulator can be pretty much anything( integer, string, object or even an array) and must be instantiated and passed when calling reduce().
  
  Syntax:

    arr.reduce((acc, item) => {
      //callback function body
    }, acc_default_value)

*/

const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, item) => {
  console.log(`${acc} + `); 
  console.log(`${item} = `);
  return acc + item;
}, 0)

console.log(result);