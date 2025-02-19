"use strict";
// TASK 1//
///Вариант №1. Реализовать метод, возвращающий максимальное число из массива вещественных чисел
const arr = [-3.4, 23.1, 43.2, -5, -1.2, 4.5, 23.4, 12.3, 21.2, -1.6];
console.log(arr);
function findMaxNumber(arr) {
    let max_number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max_number < arr[i])
            max_number = arr[i];
    }
    return max_number;
}
const result_max = findMaxNumber(arr);
console.log("TASK 1.1: ", result_max);
///Вариант №6. Реализовать метод, возвращающий матрицу булевых значений, составленный из матрицы строк. Если количество символов в элементе матрицы нечетное, то значение true, иначе 
false;
const arr2 = [['biology', 'chemical', 'history', 'math'], ['apple', 'orange', 'mango', 'butter']];
function isOdd(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            temp += array[i][j].length;
        }
    }
    return temp % 2 ? true : false;
}
console.log("TASK 1.2: ", isOdd(arr2));
// TASK 2//
///Вариант №6. Создайте кортеж, который может содержать только 2 числовых значения. Реализуйте метод, возвращающий истину, если сумма цифр 1го числового значения совпадает с суммой цифр 2го числового значения.
const tuple = [15, 42];
let sumDigit = (num) => {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};
let sumDigits = (tuple) => {
    let sum1 = sumDigit(tuple[0]);
    let sum2 = sumDigit(tuple[1]);
    return [sum1, sum2];
};
let result = sumDigits(tuple);
console.log("TASK 2:", result[0] == result[1] ? true : false);
// TASK 3//
var ballType;
(function (ballType) {
    ballType["Football"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    ballType["Basketball"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    ballType["Tennis"] = "\u0422\u0435\u043D\u043D\u0438\u0441\u043D\u044B\u0439 \u043C\u044F\u0447";
    ballType["Volleyball"] = "\u0412\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
})(ballType || (ballType = {}));
console.log("TASK 3: ", ballType.Tennis);
// TASK 4//
///Реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа Cat или Dog, применяя Обобщенный тип, ограниченный типом Pet.
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.name = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function displayPet(pet) {
    console.log("Name: ", pet.name);
    console.log("Age: ", pet.age);
    console.log("Speak: ", pet.speak());
}
console.log("TASK 4: ");
displayPet(new Dog());
let Quoc = {
    Name: "QUOC",
    Age: 22,
    Groups: "IBAS-6313",
    Sport: ballType.Volleyball,
};
console.log("TASK 5: ");
console.log(JSON.stringify(Quoc));
