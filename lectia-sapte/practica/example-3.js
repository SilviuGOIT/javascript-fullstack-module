/** 
## Example 3 - Function callback

Write a function `each(array, callback)` that takes as its first parameter
array, and the second - a function that will be applied to each element of the array.
The each function must return a new array whose elements will be the results
of callback call.

```js
// Solution

*/

function each(array, callback) {
  const newArr = [];
  debugger;
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

function multiplyByThree(value) {
  return value * 3;
}

console.log(each([1, 2, 3, 4, 5], multiplyByThree));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
