const integers = [1, 2, 3];

// const updatedIntegers = integers.map(function (number) {
//     return number += 1
// });

//Arrow function, they are more concise.
// const updatedIntegers = integers.map(() => "bob"); //implicit return

// console.log(updatedIntegers);

// const ages = [23, 42, 6, 18];
//
// // const adults = ages.filter(function (age) {
// //     return age > 20
// // });
//
// const adults = ages.filter((age) => age > 20);
//
// console.log(adults);
//
//
// const name = "Anastasia";
// const sentence = `My name is ${name}`;
// console.log(sentence);
//

function Person(name, age) {
    this.name = name;
    this.age = age;
};

const bill = new Person("Bill", 50);
console.log(bill);