// unique and immutable, Avoid collisions
const sym1 = Symbol();
console.log(sym1); // Symbol()

const sym2 = Symbol("id");
console.log(sym2, sym2.description); // Symbol(id) id

const sym3 = Symbol("id");
console.log(sym3, sym3.description); // Symbol(id) id

console.log(sym3 === sym2); // false

// ==================================================

const user = {
    name: "Amirreza",
    age: 32,
    [Symbol('uniqueID')]: 123
}
console.log(user); // { name: 'Amirreza', age: 32, Symbol(uniqueID): 123
console.log(Object.keys(user)); // [ 'name', 'age' ]  ==> cannot access to Symbol

// ==================================================
// for access to Symbol need, save in variable
const idSymbol = Symbol("id");
user[idSymbol] = 8963;
console.log(user); // { name: 'Amirreza', age: 32, Symbol(uniqueID): 123, Symbol(id): 8963 }
console.log(user[Symbol("uniqueID")]); // undefined
console.log(user[idSymbol]); // 8963

// ==================================================
// if need that define General Symbol
const GENERAL_SYMBOL = Symbol.for('APP.ID');
const GENERAL_SYMBOL2 = Symbol.for('APP.ID');

console.log(GENERAL_SYMBOL === GENERAL_SYMBOL2); // true
console.log(Symbol.keyFor(GENERAL_SYMBOL)); // APP.ID

// ==================================================
// create Iterator Object with Symbol
const range = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return {
            next() {
                if (current <= end) {
                    return {value: current++, done: false};
                } else {
                    return {value: current, done: true};
                }
            }
        }
    }
}

for (let num of range) {
    console.log(Number(num));
    // 1
    // 2
    // 3
    // 4
    // 5
}

// ==================================================

const temperature = {
    value: 25,
    unit: "C",
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') return `${this.value}' ${this.unit} `;
        if (hint === 'number') return this.value;
    }
}
console.log(temperature); //{ value: 25, unit: 'C', Symbol(Symbol.toPrimitive): [Function: [Symbol.toPrimitive]] }
console.log(`temperature = ${temperature}`); // temperature = 25' C
console.log(Number(temperature)); // 25

// ==================================================
// for copy Symbol need use Assign
const target = {}
Object.assign(target, {[Symbol("Secret")]: 'xw20km'});
console.log(target); // { Symbol(Secret): 'xw20km' }
// ==================================================
// not show in JSON.stringify
console.log(JSON.stringify(target)); // {}