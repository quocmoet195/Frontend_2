"use strict";
// TASK 1:
console.log("Hello world!");
// TASK 2:
let concatTwoNumbers = (num1, num2) => {
    return `${num1}${num2}`;
};
console.log(concatTwoNumbers(5, 10));
function concatThreeNumbers(num1, num2, num3) {
    return `${num1}${num2}${num3}`;
}
console.log(concatThreeNumbers(5, 10, 15));
const id = 22;
let full_name = "Tran Van Quoc";
let age = 23;
const group = 6313;
const height = 170;
let my_profile = {
    id: id,
    full_name: full_name,
    age: age,
    group: group,
    height: height,
};
console.log(my_profile);
function getStudent(id, name, age, group, height) {
    return {
        id: id,
        full_name: name,
        age: age,
        group: group,
        height: height,
    };
}
let Alain_student = getStudent("12", "Alain", 23, 325, 180);
console.log(Alain_student);
//TASK 4:
const jsonStringify = JSON.stringify(my_profile);
console.log(jsonStringify);
const someObject = JSON.parse(jsonStringify);
console.log(someObject);
