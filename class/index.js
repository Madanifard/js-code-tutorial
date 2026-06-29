class Person {
    firstName = ''
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.firstName = name;
    }

    greet() {
        return this.age;
    }

    static info() {
        return "Cannot access to variables"
    }
}

let amirreza = new Person("Amirreza", 32);
console.log(amirreza); // Person { firstName: 'Amirreza', name: 'Amirreza', age: 32 }
console.log(amirreza.greet()); // 32

console.log(Person.info()); // Cannot access to variables

class Student extends Person {
    constructor(name, age, studentId) {
        // super(); if not set parameter set undefined value
        // Student {
        //     firstName: undefined,
        //         name: undefined,
        //         age: undefined,
        //         studentId: 12222
        // }
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        let parentAge = super.greet();
        return `${parentAge} is ${this.studentId}`;
    }

    study() {
        return `${this.name} is still study.`
    }
}

let student = new Student("Amirreza", 32, 12222);
console.log(student);
// Student {
//     firstName: 'Amirreza',
//         name: 'Amirreza',
//         age: 32,
//         studentId: 12222
// }
console.log(student.studentId); //12222
console.log(student.greet()); //32 is 12222
console.log(student.study()); // Amirreza is still study.

console.log(student instanceof Student); // true
console.log(amirreza instanceof Student); // false
console.log(amirreza instanceof Person); // true


class BankAccount {
    #balance = 0;  // ES2022 added private attribute
    #accountNumber = 0;

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }

    // setter
    set accountNumber(accountNumber) {
        this.#accountNumber = accountNumber;
    }

    // getter
    get accountNumber() {
        return this.#accountNumber;
    }
}

const acc = new BankAccount('Amirreza');
// acc.deposit(100);
// console.log(acc.getBalance()); // 100
// console.log(acc.#balance); // SyntaxError: Private field
// acc.accountNumber = 309
// console.log(acc.accountNumber); // 309

// other word of define class
const Animal = class {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is specialized.`);
    }
};
