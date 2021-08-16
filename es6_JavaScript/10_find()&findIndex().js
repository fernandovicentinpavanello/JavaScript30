/* Arrow Functions: find() and findIndex() 
  → Search for elements inside the Array
  
  → find(): used to search for an element in the array that matches some condition. It returns the first element that matches the condition.

  → findIndex(): quite similar to find, but returns the index of the first element instead of the element itself.
*/

const numArray = [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;

const resultFind = numArray.find(item => {
  return true
});

console.log('With find we have the first element that matches:', resultFind)
//-4 (first number in the array)

const resultFindIndex = numArray.findIndex(item => {
  return true
});

console.log('With findIndex we have the first element that matches:', resultFindIndex)
//0 (first position of the array)