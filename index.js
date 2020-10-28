//Recursion

function sumUpTo(n) {
    if(n > 1) {
        sumUpTo(n - 1) + n //recursive call
    } else {
        return 1 //base case
    }
}

function printString(str) {
    console.log(str[0]) //мы всегда логиним только первую букву! и таким образом мы постепенно логиним все слово!

    if(str.length > 1) {
        let substr = str.substring(1, str.length); //The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
        printString(substr); //здесь мы вызываем ту же функцию, и позиция[1] становится [0], и далее по кругу - рекурсия!
    } else {
        return true
    }
}

//sorted array

function minAndRemove(arr) {
let min = arr[0];
let minIndex = 0;
for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
    }
}
array.splice(minIndex, 1);
return min;
}

function selectedSort(arr) {
    let newMin;
    let sorted = [];
    while (arr.length != 0) {
        newMin = minAndRemove(arr);
        sorted.push(newMin)
    }
    return sorted;
}

//Merge Sort
function merge(firstHalf, secondHalf){
    let sorted = []
    let currentMin;
    while(firstHalf.length != 0 && secondHalf.length != 0){
        let currentMin = findMinAndRemove(firstHalf, secondHalf)
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
    }

