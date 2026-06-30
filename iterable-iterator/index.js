// iterable ===> have [Symbol.iterator]()
// iterator ===> have next()

function* gen() {
    yield 2;
    yield 3;
}

const g = gen();
console.log(g[Symbol.iterator]()); // Object [Generator] {}
console.log(g[Symbol.iterator]() === g); // true ==> because, both is iterator

// =========================================================

// object is not iterable
// must use Object.keys or Object.values or Object.entries
// Object.keys(car)
// Object.values(car)
// Object.entries(car)