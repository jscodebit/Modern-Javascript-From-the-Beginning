function sayHello(){
    console.log('Hello');
}

sayHello();

//Convert into arrow function
//Single parameter doesn't needs paranthesis
const getTextOne = () => console.log('Hello');

// Same as above
// const getTextOne = function(){
//     return console.log('Hello');
// }

getTextOne();

const sayHelloWorld = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}!`);
}
sayHelloWorld('Sam', 'Eagan');

const users = ['Nathan', 'John', 'David'];

// Map using  simple callback function
// const nameLength = user.map(function(user){
//     return user.length;
// });

//Same implementation using arrow function
const nameLength = users.map(user => user.length);
console.log(nameLength);