function Person(fName, lName){
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.getFullName = function(){
    return `${this.fName} ${this.lName}`;
} 
const person1 = new Person('John', 'Rose');
console.log(person1);
console.log(person1.getFullName());

function Employee(fName, lName, phoneNumber, email){
    Person.call(this, fName, lName);

    this.phoneNumber = phoneNumber;
    this.email = email;
}

//Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);

//Make Employee.prototype return Employee
Employee.prototype.constructor = Employee;  

Employee.prototype.getFullName = function(fName, lName){
    return `Welcome to ADP Pvt. Lmt ${this.fName} ${this.lName}`;
}

const emp1 = new Employee('Sam', "Mathew", "555-555-5555", "sam.mathew@usf.edu");
console.log(emp1);

console.log(emp1.getFullName());