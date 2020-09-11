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

function linearSearch(arr, val) {

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === val) {
            return i
        } else {
            return -1
        }
    }
}

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

function bubbleSort(arr) {
    for(i = arr.length; i > 0; i--) {
        for(j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                let temp = arr[j+1]
            }
        }
    }
    return arr
}


