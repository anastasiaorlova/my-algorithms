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






class Counter extends React.Component {

state = {
counter: 0
}
}

increment() {
this.setState({
count: this.state.count + 1
})

decrement() {
this.setState({
count: this.state.count - 1
})
}

}

//IMPERATIVE CODE 
const header = document.createElement("h1")
header.textContent = "This is an imperative code example!"
header.className = "Imperative code is listing HOW and WHERE"

const card = document.querySelector('#card')
card.append(header)

//Single Linked List
// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")


//Single List Pop Solution 

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
}


var list = new SinglyLinkedList()
list.push("HELLO") 
list.push("GOODBYE")
list.push("!")

//stack

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
//Algorithm review//

function stringIncludes(word, letter) {
    let matches;
    for(let i = 0; i < word.length; i++) {
        if(word[0] === letter) {
            matches = true
        }
        return !!matches 
    }
}

function sortString(str) {
    return str.split('').sort().join('')
}

//Binary Search

function binarySearch(string, letter) {
var startpoint = 0
var endpoint = string.length - 1;
var guessPosition = parseInt((endpoint - startpoint)/2)
while (startpoint != endpoint) {
    console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
    if (string[guessPosition] < letter) {
        console.log('too low')
        startpoint = guessPosition
        guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
    } else if(string[guessPosition] > letter) {
        console.log('too high')
        endpoint = guessPosition
        guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
    } else {
        console.log('just right')
        return true;
    }
}
if(string === letter){
    return true
} else{
    console.log('sorry')
    return false;
}
}

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

///HakerRank: Sales by Match

function sockMerchant(n, ar) {
    let frequencyCounter = {};
    let pairs = 0;
    for(let i of ar) {
        frequencyCounter[i] = (frequencyCounter[i] || 0) + 1;
        if(frequencyCounter[i] % 2 === 0) {
            pairs += 1
        }
    }
    return pairs;
}

function countingValleys(n, s) {
const min = 2;
const max = 1000000;
let isInValley = false;
let valleys = 0;
s = (typeof s === "string") ? s.split('') : s;

if (s.length >= min
        && s.length <= max
        && n === parseInt(n, 0)
        && n >= min
        && n <= max 
        && n === s.length) {
        
        s.map(steps => ((steps === "U") ? 1 : -1))
            .reduce((prev, next) => {
                if (prev < 0 && !isInValley) {
                    isInValley = true;
                }
                if ((prev + next) === 0 && isInValley) {
                    valleys++;
                    isInValley = false;
                }

                return prev + next;    
            });
} 

return valleys; 
}

