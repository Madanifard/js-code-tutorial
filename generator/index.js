function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = myGenerator();
// console.log(generator); // Object [Generator] {}
// console.log(generator.next()); // { value: 1, done: false }
// console.log(generator.next()); // { value: 2, done: false }
// console.log(generator.next()); // { value: 3, done: false }
// console.log(generator.next()); // { value: undefined, done: true }

while (true) {
    const res = generator.next();
    if (res.done) break;
    console.log("======>", res);
    // ======> { value: 1, done: false }
    // ======> { value: 2, done: false }
    // ======> { value: 3, done: false }
}

// // =====================================================
function* myInfo() {
    const name = yield "what is your name?";
    const age = yield "what is your age?";
    return `${name} (${age})`;
}

const info = myInfo();
console.log(info.next()) // { value: 'what is your name?', done: false }
console.log(info.next('amirrza')) // { value: 'what is your age?', done: false }
console.log(info.next('32')) // { value: 'amirrza (32)', done: true }
console.log(info.next()) // { value: undefined, done: true }

// =====================================================

function* demo() {
    yield 1;
    yield 2;
    yield 3;
}

const myDemo = demo();
console.log(myDemo.next()); // { value: 1, done: false }
console.log(myDemo.return(99)); // { value: 99, done: true }
console.log(myDemo.next()); // { value: undefined, done: true }

// =====================================================

function* demo2() {
    yield 100;
    yield 200;
    yield 300;
}

// note that , just use of , in not worked
for (let item of demo2()) {
    console.log("=====>", item);
    // =====> 100
    // =====> 200
    // =====> 300
}
// =====================================================
// convert to Array
function* demo3() {
    yield 110;
    yield 220;
    yield 330;
}

console.log([...demo3()]); // [ 110, 220, 330 ]
console.log(Array.from(demo3())); // [ 110, 220, 330 ]

// =====================================================
function* fibonacci(limit) {
    let [prev, curr] = [0, 1];
    for (let i = 0; i < limit; i++) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

for (let item of fibonacci(10)) {
    console.log(item); // 1 1 2 3 5 8 13 21 34 55
}

console.log(Array.from(fibonacci(10)));
// [
//     1,  1,  2,  3,  5,
//     8, 13, 21, 34, 55
// ]

// =====================================================

function* trafficLight() {
    while (true) {
        yield 'read'
        yield 'blue'
        yield 'green'
        yield 'greenBlue'
    }
}
const colors = trafficLight()
console.log(colors.next()); // { value: 'read', done: false }
console.log(colors.next()); // { value: 'blue', done: false }
console.log(colors.next()); // { value: 'green', done: false }
console.log(colors.next()); // { value: 'greenBlue', done: false }
console.log(colors.next()); // { value: 'read', done: false }
console.log(colors.next()); // { value: 'blue', done: false }






