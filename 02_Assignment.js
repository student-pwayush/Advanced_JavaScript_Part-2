function Pw(name, age) {
    this.name = name;
    this.age = age;
}

Pw.prototype.sayHello = function() {
    console.log(`Hello, My name is ${this.name}  and I am ${this.age} years old.`);
};


function Employee(name, age, designation) {

    Pw.call(this, name, age);
    

    this.designation = designation;
}


Employee.prototype = Object.create(Pw.prototype);


Employee.prototype.getDetails = function() {
    console.log(`Hello, My name is ${this.name}  and I am ${this.age} years old And My designation is  ${this.designation}.`);
};


var employee1 = new Employee("Ayush Chandel", 23, "Software Engineer");

employee1.sayHello(); 

employee1.getDetails(); 
