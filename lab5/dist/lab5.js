"use strict";
//TASK 1: Вариант № 5
function isOddNumber(num) {
    if (num % 2 == 1)
        return true;
}
function removeOddNumbers(arr) {
    console.log(arr);
    let indexOdds = [];
    for (let i = 0; i < arr.length; i++) {
        if (isOddNumber(arr[i]))
            indexOdds.push(i);
    }
    //for (let i: number = 0; i < indexOdds.length; i++);
    function deleteOdd(index) {
        if (index < 0) {
            console.log(arr);
            //return arr;
        }
        else {
            setTimeout(() => deleteOdd(index - 1), 1000);
            //deleteOdd(index-1)
            arr.splice(indexOdds[index], 1);
            console.log(`Deleted element of index: ${indexOdds[index]}`);
        }
    }
    deleteOdd(indexOdds.length - 1);
    return function () {
        console.log("Return: ", arr);
    };
}
let array = [4, 4, 3, 8, 65, 3, 2, 8];
const funcRemove = removeOddNumbers(array);
funcRemove();
