const numbers = [43, 56, 7, 2, 58, 5, 23, 44];
const number2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Check if it array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
numbers[2] = 100;
val = numbers.indexOf(23);

console.log("Initial array ");
console.log(numbers);
console.log(numbers.length);

//Mutating Arrays

// console.log("Mutating Arrays");
// //Add on to end
// numbers.push(250);
// //Add on to front
// numbers.unshift(120);
// console.log(numbers);
// console.log(numbers.length);

// //Take off fom the end
// numbers.pop();
// //Take off from the front
// numbers.shift();

console.log(numbers);
console.log(numbers.length);
//Splice the array
console.log("Splice the Array: ");
numbers.splice(1,3);
console.log(numbers);

// //Reverse
// console.log("Reverse : ");
// numbers.reverse();
// console.log(numbers);

//Concat the Array
console.log("Concat the Array: ");
val = numbers.concat(number2);
console.log("Numbers: ");
console.log(numbers);
console.log("Concat Val =: ");
console.log(val);
//console.log(val);

console.log("Numbers before sorting : ");
console.log(numbers);
//Sorting arrays
val = fruit.sort();
// val = numbers.sort();

console.log("Numbers after sort : ");
// console.log(numbers);
// console.log(val);

// val = numbers.sort(function(x, y){
//     return y-x;
// })

// console.log(val);

//Find 
// function over50(num){
//     return num > 50;
// }
// var result = numbers.find(over50)

// console.log("result : ");
// console.log(result);

// Use the "Compare function"
// val = 

console.log(numbers.join());
console.log(numbers.lastIndexOf());

console.log(number2.lastIndexOf());

numbers.forEach((el, index) => {
    console.log(`${el} at index ${index}`);
})

function isBigEnough(ele, index,array){
    console.log(ele > 50);
    return ele > 50;
}
var result = numbers.every(x => x >= 5);
console.log("Every : ");
console.log(result);

var some = numbers.some(x => x % 2 == 0);
console.log("Some : ");
console.log(some);

var newArray = numbers.filter(x => x%2 == 0);
console.log("Filters : ");
console.log(newArray);

var mapResult = numbers.map(x => x *2);
console.log("Map : ");
console.log(mapResult);

//console.log(numbers);