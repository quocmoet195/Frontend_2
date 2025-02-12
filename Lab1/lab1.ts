// TASK 1:
console.log("Hello world!");

// TASK 2:
let concatTwoNumbers = (num1: number, num2: number): string => {
    return `${num1}${num2}`;
}
console.log(concatTwoNumbers(5, 10));

function concatThreeNumbers(num1: number, num2: number, num3: number) {
    return `${num1}${num2}${num3}`;
}
console.log(concatThreeNumbers(5, 10, 15));

// TASK 3:
interface Student {
    id: number | string;
    full_name: string;
    age: number;
    group: number;
    height: number;
}

const id: number = 22;
let full_name: string = "Tran Van Quoc";
let age: number = 23;
const group: number = 6313;
const height: number = 170;

let my_profile: Student = {
    id: id,
    full_name: full_name,
    age: age,
    group: group,
    height: height,
};

console.log(my_profile);

function getStudent(id: number | string, name: string, age: number, group: number, height: number): Student {
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
const jsonStringify: string = JSON.stringify(my_profile);
console.log(jsonStringify);

const someObject = JSON.parse(jsonStringify);
console.log(someObject);