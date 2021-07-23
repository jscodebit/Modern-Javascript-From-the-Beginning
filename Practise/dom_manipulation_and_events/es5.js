"use strict";

var str = "HELLO WORLD";
//ES5 allows property access on strings
console.log(str[0]);

//String Over multiple lines
var line = "Hello \
World";

console.log(line);

//ES5 allows reserve world as property name

var obj = { name : "John", new: "yes"};

console.log(obj);

//trim() to remove whitespace from both the sides
var str = "    Hello World  !        ";
console.log(str.trim());

//isArray() to check if the object is of type array

console.log(Array.isArray(str));
var fruits = ["Apple", "Banana", "Grapes"];
console.log(Array.isArray(fruits));

//Array Iteration Methods

//forEach() calls function for each element in the array

fruits.forEach((fruit, index)=>{
    console.log(`${fruit} + ${index}`);
});

//map() for perfroming calculation over each array element

var numbers = [1,2,3,4];
var newNumbers = numbers.map((ele)=> {
    return ele * 2;
})
console.log(newNumbers);

//filter() creates a new array of elements based on the condition

var newNumbers = numbers.filter((ele)=>{
    return ele > 2;
});

console.log(newNumbers);

/*reduce() method runs a function on each element of array to 
produce(reduce it to) a single value. It works from left to right 
in the array, it doesnot reduces the original array */

var newNumber = numbers.reduce((total, ele) => {
    return total = total + ele;
})

console.log(newNumber);

//every() check for the condition for all values to true in the array

var result = numbers.every((ele)=> {
    return ele != null;
});

console.log(result);

//some() checks for some elements in the array to satisfy the condition

var result = numbers.some((ele)=>{
    return ele > 3;
});

console.log(result);

//indexOf() returns the index of the element in the array

console.log(fruits.indexOf("Banana"));

//lastIndexOf() same as Array.indexOf(), but searches from the end of the array

console.log(fruits.lastIndexOf("Apple"));

//JSON.parse is used to convert text to Javascript object

var text = '{"name": "Soujanya", "age":30}';
var jsonObj = JSON.parse(text);
console.log(jsonObj);

console.log(JSON.stringify(jsonObj));

//Date.now() returns the number of miliseconds since zero date

console.log(Date.now());

//toISOSTring() method to convert a date object into a string
const d = new Date();
console.log(d.toISOString());
console.log(d.toJSON());

//Properties setters and getters

var person = {
    firstName : "Soujanya",
    lastName: "Janapatla",
    get fullName() {
        return [`${this.firstName} ${this.lastName}`] ;
    },

    set newName(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
}

console.log(person.firstName);
console.log(person.newName= "Rajesh Ananatha");
console.log(person.firstName);

Object.defineProperty(person, 'language', {
    value: "EN",
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(person);
person.language = "Telugu";
person.newName ="Ramya barorkar";
console.log(person);

console.log(Object.keys(person));