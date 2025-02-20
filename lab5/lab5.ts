//TASK 1: Вариант № 5
function isOddNumber(num: number) {
    if (num % 2 == 1)
        return true;
}
function removeOddNumbers(arr: number[]) {
    console.log(arr);
    let indexOdds: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (isOddNumber(arr[i]))
            indexOdds.push(i);
    }
    function deleteOdd(index:number) {
        if(index<0){
            console.log(arr);
        }
        else{
            setTimeout(() => deleteOdd(index-1), 1000)
            arr.splice(indexOdds[index], 1);
            console.log(`Deleted element of index: ${indexOdds[index]}`);
        }

    }
    deleteOdd(indexOdds.length-1);

    return function(){
        console.log("Return: ", arr)
    }
}
let array: number[] = [4, 4, 3, 8, 65, 3, 2, 8]
const funcRemove=removeOddNumbers(array)
funcRemove()