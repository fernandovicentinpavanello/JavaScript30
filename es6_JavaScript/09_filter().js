/* Array Function Filter()
    It iterates through the array to create a new array. You can decide which elements should ne added in the new array based on some conditions.
  
  Syntax: 
    arr.filter(item => {
      return true/false to add/skip the current item
    })
*/

// const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numArr.filter(item => {
//   // console.log(item * 2)
//   return item % 2 !== 0
// })

// console.log(`Result =>`, result, result.length)

const mArr = [
  {
    name: `John Lark`,
    experience: 10,
    type: 'commercial'
  },
  {
    name: `John Doe`,
    experience: 5,
    type: 'private'
  },
  {
    name: `John Smith`,
    experience: 20,
    type: 'software'
  },
  {
    name: `John Wick`,
    experience: 30,
    type: 'outstanding'
  }
];

const newArr = mArr.filter(item => {
  // console.log(item.experience)
  return item.experience >= 15;
})

console.log(`Result =>`, newArr, newArr.length)