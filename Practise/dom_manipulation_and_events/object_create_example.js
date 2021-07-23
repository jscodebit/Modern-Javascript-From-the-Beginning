const personPrototype = {
    greeting: function(){
        return `Hello ${this.fName} ${this.lName}`;
    },
    getMarried: function(lName){
        this.lName = lName;
    }
}

const mary = Object.create(personPrototype);
mary.fName = "David";
mary.lName = "Levy";
mary.age = 30;

console.log(mary);
console.log(mary.greeting());

const brad = Object.create(personPrototype, {
    fName: { value : "Eugee" },
    lName: { value : "Smith" },
    age: { value : 30 }
});

console.log(brad);
console.log(brad.greeting());