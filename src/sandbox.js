const integers = [1, 2, 3];

// const updatedIntegers = integers.map(function (number) {
//     return number += 1
// });

//Arrow function, they are more concise.
const updatedIntegers = integers.map((number) => number += 1); //implicit return

console.log(updatedIntegers);