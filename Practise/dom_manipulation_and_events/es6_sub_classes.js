class Person{
    constructor(fName, lName){
        this.fName = fName;
        this.lName= lName;
    }

    greetings(){
        return `Welcome to this page ${this.fName} ${this.lName}`;
    }
}

class Employee extends Person {
    constructor(fName, lName, empID, designation){
        super(fName, lName);
        this.empID = empID;
        this.designation = designation;
    }

    getEmployeeDetails(){
        return `${this.fName} ${this.lName} with ${this.empID} works as a ${this.designation}`;
    }

    static addNumbers(x, y){
        return x +y;
    }
}

const sam = new Employee("Sam", "Eaegan", "S538418", "Senior Software Engineer");

console.log(sam);

console.log(sam.getEmployeeDetails());