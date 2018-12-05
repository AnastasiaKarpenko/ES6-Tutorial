//Const variable cannot be changed (but its properties can be changed), let variable can be changed.


const person = {
    name: "Bill",
    gender: "male"
};

person.name = "Jane";
person.gender = "female";

console.log(person.name);
console.log(person.gender);
