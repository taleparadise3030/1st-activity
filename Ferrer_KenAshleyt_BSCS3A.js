// Object Literal 1
const studentObject = {
    name: "Kent",
    age: 20,
    course: "IT"
};

console.log(studentObject.name);

// Object Literal 2
const carObject = {
    brand: "Toyota",
    color: "Red",
    year: 2025
};

console.log(carObject.brand);


// Encapsulation 1
class BankAccountExample {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const accountExample = new BankAccountExample();
accountExample.deposit(1000);
console.log(accountExample.getBalance());


// Encapsulation 2
class StudentGradeExample {
    #grade = 0;

    setGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.#grade = grade;
        }
    }

    getGrade() {
        return this.#grade;
    }
}

const studentGrade = new StudentGradeExample();
studentGrade.setGrade(90);
console.log(studentGrade.getGrade());



class CoffeeMachineExample {
    makeCoffee() {
        this.#boilWater();
        console.log("Coffee is ready!");
    }

    #boilWater() {
        console.log("Boiling water...");
    }
}

const coffeeMachine = new CoffeeMachineExample();
coffeeMachine.makeCoffee();



// Inheritance 1
class AnimalInheritanceExample {
    eat() {
        console.log("Animal is eating.");
    }
}

class DogInheritanceExample extends AnimalInheritanceExample {
    bark() {
        console.log("Dog is barking.");
    }
}

const dogExample = new DogInheritanceExample();

dogExample.eat();
dogExample.bark();


// Inheritance 2
class PersonInheritanceExample {
    introduce() {
        console.log("I am a person.");
    }
}

class TeacherInheritanceExample extends PersonInheritanceExample {
    teach() {
        console.log("I am teaching.");
    }
}

const teacherExample = new TeacherInheritanceExample();

teacherExample.introduce();
teacherExample.teach();



class AnimalPolymorphismExample {
    sound() {
        console.log("Animal makes a sound.");
    }
}

class DogPolymorphismExample extends AnimalPolymorphismExample {
    sound() {
        console.log("Dog says: Woof!");
    }
}

class CatPolymorphismExample extends AnimalPolymorphismExample {
    sound() {
        console.log("Cat says: Meow!");
    }
}

const animalList = [
    new DogPolymorphismExample(),
    new CatPolymorphismExample()
];

animalList.forEach(function(animal) {
    animal.sound();
});



// Class 1
class StudentClassExample {
    study() {
        console.log("Student is studying.");
    }
}

// Class 2
class CarClassExample {
    drive() {
        console.log("Car is driving.");
    }
}

// Class 3
class TeacherClassExample {
    teach() {
        console.log("Teacher is teaching.");
    }
}

// Class 4
class PhoneClassExample {
    call() {
        console.log("Phone is calling.");
    }
}




const studentClassObject = new StudentClassExample();
const carClassObject = new CarClassExample();
const teacherClassObject = new TeacherClassExample();
const phoneClassObject = new PhoneClassExample();

studentClassObject.study();
carClassObject.drive();
teacherClassObject.teach();
phoneClassObject.call();




// Constructor 1
class PersonConstructorExample {
    constructor(name) {
        this.name = name;
    }
}

const personConstructor = new PersonConstructorExample("Alice");

console.log(personConstructor.name);


// Constructor 2
class CarConstructorExample {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}

const carConstructor = new CarConstructorExample("Honda", "Blue");

console.log(carConstructor.brand);
console.log(carConstructor.color);



// Method 1
function greetExample() {
    console.log("Hello!");
}

greetExample();


// Method 2
function addExample(a, b) {
    return a + b;
}

console.log(addExample(5, 3));


// Method 3
function subtractExample(a, b) {
    return a - b;
}

console.log(subtractExample(10, 4));


// Method 4
function multiplyExample(a, b) {
    return a * b;
}

console.log(multiplyExample(5, 2));


// Method 5
function sayNameExample(name) {
    console.log("My name is " + name);
}

sayNameExample("Kent");



let studentName = "Kent";
console.log(studentName);

let studentAge = 20;
console.log(studentAge);

const schoolName = "ABC University";
console.log(schoolName);



// Conditional 1
let personAge = 18;

if (personAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Conditional 2
let studentGradeValue = 85;

if (studentGradeValue >= 75) {
    console.log("Passed");
} else {
    console.log("Failed");
}


// Conditional 3
let numberValue = 10;

if (numberValue > 0) {
    console.log("Positive");
} else if (numberValue < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



// Loop 1 - FOR LOOP
for (let forCounter = 1; forCounter <= 5; forCounter++) {
    console.log(forCounter);
}


// Loop 2 - WHILE LOOP
let whileCounter = 1;

while (whileCounter <= 5) {
    console.log(whileCounter);
    whileCounter++;
}


// Loop 3 - DO WHILE LOOP
let doWhileCounter = 1;

do {
    console.log(doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter <= 5);



// Array 1
const fruitArray = ["Apple", "Banana", "Mango"];

console.log(fruitArray);


// Array 2
const numberArray = [10, 20, 30, 40, 50];

console.log(numberArray[0]);
console.log(numberArray[2]);


// Array 3
const studentArray = ["Kent", "Mary", "Peter"];

studentArray.push("Anna");

console.log(studentArray);