const timerId = setTimeout(() => {
    console.log("یک بار بعد از ۲ ثانیه");
}, 2000);
console.log(timerId);
// Timeout {
//     _idleTimeout: 2000,
//         _idlePrev: [TimersList],
//         _idleNext: [TimersList],
//         _idleStart: 96,
//         _onTimeout: [Function (anonymous)],
//         _timerArgs: undefined,
//         _repeat: null,
//         _destroyed: false,
//         [Symbol(refed)]: true,
//         [Symbol(kHasPrimitive)]: false,
//         [Symbol(asyncId)]: 2,
//         [Symbol(triggerId)]: 1,
//         [Symbol(kAsyncContextFrame)]: undefined
// }

clearTimeout(timerId);

const intervalId = setInterval(() => {
    console.log("هر ۳ ثانیه تکرار می‌شود");
}, 3000);

console.log(intervalId);
// Timeout {
//     _idleTimeout: 3000,
//         _idlePrev: [TimersList],
//         _idleNext: [TimersList],
//         _idleStart: 117,
//         _onTimeout: [Function (anonymous)],
//         _timerArgs: undefined,
//         _repeat: 3000,
//         _destroyed: false,
//         [Symbol(refed)]: true,
//         [Symbol(kHasPrimitive)]: false,
//         [Symbol(asyncId)]: 7,
//         [Symbol(triggerId)]: 1,
//         [Symbol(kAsyncContextFrame)]: undefined
// }

clearInterval(intervalId);


// یک بار بعد از ۲ ثانیه
// هر ۳ ثانیه تکرار می‌شود
// هر ۳ ثانیه تکرار می‌شود
// هر ۳ ثانیه تکرار می‌شود
// هر ۳ ثانیه تکرار می‌شود
// هر ۳ ثانیه تکرار می‌شود