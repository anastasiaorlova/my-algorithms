//my algorithm studies 

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}


function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
}

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

//linear search

function linearSearch(arr, val) {

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === val) {
            return i
        } else {
            return -1
        }
    }
}

//binary Search
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

//Bubble sort

function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                let temp = arr[j+1]
            }
        }
    }
    return arr
}


//Selection sort 
// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
const swap = (arr, idx1, idx2) =>
([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

for (let i = 0; i < arr.length; i++) {
let lowest = i;
for (let j = i + 1; j < arr.length; j++) {
    if (arr[lowest] > arr[j]) {
    lowest = j;
    }
}
if (i !== lowest) swap(arr, i, lowest);
}

return arr;
}

selectionSort([0,2,34,22,10,19,17]);