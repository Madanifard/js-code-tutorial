let car = {
    name: "Bmw",
    model: '2002',
    color: "red",
    code: 1367,
}
console.log(car); // { name: 'Bmw', model: '2002', color: 'red', code: 1367 }
console.log(car.name, car['name']); // Bmw

//=======================================

// let {name, model, color, code} = car;
// console.log(name); // Bmw
// console.log(model); // 2002
// console.log(color); // red
// console.log(code); // 1367

let {name, code, ...other} = car;
console.log(name, code); // Bmw 1367
console.log(other); // { model: '2002', color: 'red', code: 1367 }
//=======================================

for (let item in car) {
    console.log(item)
    // name
    // model
    // color
    // code
}

// for (let item of car) { //TypeError: car is not iterable
//     console.log(item)
// }

// car.forEach((item) => { // TypeError: car.forEach is not a function
//     console.log(item)
// })

Object.keys(car).forEach((key) => {
    console.log(key);
    console.log(car[key]);
    // name
    // Bmw
    // model
    // 2002
    // color
    // red
    // code
    // 1367
})

Object.values(car).forEach((value) => {
    console.log(value);
    // Bmw
    // 2002
    // red
    // 1367
})

Object.entries(car).forEach(([key, value]) => {
    console.log(key, value);
    // name Bmw
    // model 2002
    // color red
    // code 1367
})

//=======================================

car.wheel = 4;
console.log(car); // { name: 'Bmw', model: '2002', color: 'red', code: 1367, wheel: 4 }
delete car.wheel;
console.log(car); // { name: 'Bmw', model: '2002', color: 'red', code: 1367 }

//=======================================

let person = {
    _personalCode: 9000,
    name: "Amirreza",
    lastName: "Madanifard",
    age: 32,
    getInfo() {
        return `${this.name} ${this.lastName} - ${this.age}`;
    },
    set personalCode(personalCode) {
        this._personalCode = personalCode;
    },
    get personalCode() {
        return this._personalCode;
    }
}
console.log(person);
// {
//     name: 'Amirreza',
//         lastName: 'Madanifard',
//     age: 32,
//     getInfo: [Function: getInfo]
// }

console.log(person.getInfo()); // Amirreza Madanifard - 32
console.log(person._personalCode); // 9000 can access
person.personalCode = 10000 //use setter
console.log(person.personalCode); // 10000 get from getter


let { name, age } = { name: "Amirreza", age: 30 };
console.log(name); // Amirreza
console.log(age);  // 30

let { name: fullName, age: yearsOld } = { name: "Amirreza", age: 30 };
console.log(fullName); // Amirreza
console.log(yearsOld); // 30


let { name: fullName2, city: hometown = "Esfahan" } = { name: "Amirreza" };
console.log(hometown); // Esfahan


let user = {
    id: 1,
    profile: {
        username: "Amirreza",
        email: "m@example.com"
    }
};

let { profile: { username, email } } = user;
console.log(username); // Amirreza
console.log(email);    // m@example.com


let { name, ...rest } = { name: "Amirreza", age: 30, city: "Tehran" };
console.log(name); // Amirreza
console.log(rest); // { age: 30, city: "Tehran" }


function printUser({ name, age }) {
    console.log(`${name} (${age} old years)`);
}
printUser({ name: "Amirreza", age: 28 }); // Amirreza (28 old years)


let data = {
    title: "title",
    tags: ["js", "react", "node"]
};

let { title, tags: [firstTag, secondTag] } = data;
console.log(firstTag); // js
console.log(secondTag); // react

let { "first-name": firstName } = { "first-name": "Amirreza" };
console.log(firstName); // Amirreza


let users = [{ name: "A" }, { name: "B" }];
for (let { name } of users) {
    console.log(name);
    // A
    // B
}
for (let item of users) {
    console.log(item);
    // { name: 'A' }
    // { name: 'B' }
}
