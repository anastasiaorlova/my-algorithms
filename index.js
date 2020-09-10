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

    for(i=0; i< arr.length; i++) {
        if(arr[i] === val) {
            return arr[i]
        } else {
            return -1
        }
    }

}