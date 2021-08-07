// Rest Operator {( something,  ...rest )} → Always at the end.

const mySum = (...args) => {
  let sum = 0;
  for (let index = 0; index < args.length; index++) {
    sum += args[index];
  }
  console.log(sum);
} 

mySum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
