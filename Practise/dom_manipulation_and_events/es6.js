//Let allows user to define a variale with  respect to a block scope

var a = 10;
let b = 20;
const c = 30;

console.log(a, b ,c);
if(a){
    a = 50;
    b = 60;
    //c = 70; //es6.js:9 Uncaught TypeError: Assignment to constant variable.
    console.log(a, b ,c);
}

function sampleCall() {
    a = 500;
    b = 600;
    // c = 700;
    console.log(a, b ,c);
}

sampleCall();

//Javascript Map object

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fru = new Map();

console.log(fru);

// Add new Elements to the Map
fru.set(apples, 500);
fru.set(bananas, 300);
fru.set(oranges, 200);

console.log(fru.get(apples));

//Arrow Functions
//You don't need the function keyword, the return keyword, and the curly brackets.

var example = function(x, y){
    console.log();
    return x *y;
}

//Create a new map

const newFruObj = new Map([[apples, 500], [bananas, 300], [oranges, 200]]);

console.log(newFruObj);
console.log(newFruObj.delete(apples));

console.log(newFruObj.has(bananas));

console.log(newFruObj.forEach(logMapElements));

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}

//Arrow function syntax

// const x = (x, y) => x *y;

// console.log((2, 3));

