// Person constructor
function Person(name, dob) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    //console.log(this.birthday.getTime());
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    console.log(ageDate);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  // console.log(this);
}

// console.log(this);

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
