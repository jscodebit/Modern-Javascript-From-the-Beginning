class Person {
    constructor(fName, lName, dob){
        this.fName = fName;
        this.lName = lName;
        this.birthdate = new Date(dob);
    }

    greeting(){
        return `Hello ${this.fName} ${this.lName}`;
    }

    calculateAge(){
        const diff =  Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

        console.log("ageDate.getUTCFullYear() : "+ageDate.getUTCFullYear());
        // return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLName){
        this.lName = newLName;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

//Instanceating an object from the class
const david = new Person("David", "Levey", "11-05-1995");

console.log(david.calculateAge());
david.getMarried("Peter");

console.log(david);

console.log(david.addNumbers(2,1));
console.log(Person.addNumbers(1,2));