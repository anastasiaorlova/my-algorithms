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
mergeSort([3, 7, 1, 9])

function mergeSort(array){
let midpoint = array.length/2
let firstHalf = array.slice(0, midpoint)
let secondHalf = array.slice(midpoint, array.length)

if(array.length < 2){
    return array
} else {
    merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
}

//for two arrays

let firstHalf =  [1, 2, 6, 7, 8]
let secondHalf =  [3, 4, 5, 9, 10]

function findMinAndRemove(firstHalf, secondHalf) {
    let minfirstHalf = firstHalf[0];
    let minsecondHalf = secondHalf[0];

    if(minfirstHalf < minsecondHalf) {
        return firstHalf.shift()
    } else {
        return secondHalf.shift()
    }
}

function merge(firstHalf, secondHalf) {
    let sortedArr = [];
    let currentMin;
    while(firstHalf.length != 0 && secondHalf.length != 0) {
        let currentMin = findMinAndRemove(firstHalf. secondHalf)
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}


//Anagram template

function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

//two-sums

function twoSums(nums, target) {
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
            result.push(nums[i], nums[j])
            }
        }
    }
    return result;
};

  twoSum([1,2,3,4,5], 8) //output: '3 + 5 = 8'
  twoSum([1,2,3,4,5], 10) //"target not found"

function twoSum(nums, target){
    let numObject = {} 

    for(let eachNum in nums){
    let otherNum = target - nums[eachNum]
        if(otherNum in numObject){
        let resultArr = [];
        resultArr.push(otherNum, nums[eachNum])

        return resultArr
}

        numObject[nums[eachNum]] = eachNum

}
return "not found"
}

