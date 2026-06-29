let array1 = new Array(3);
console.log(array1); //[ <3 empty items> ]
array1[0] = 1;
array1[1] = 2;
array1[2] = 3;
console.log(array1); // [ 1, 2, 3 ]
array1[3] = 4;
array1[4] = 5;
console.log(array1); //[ 1, 2, 3, 4, 5 ]

//=======================================

let array2 = [1, 2, 3, 4, 5];
console.log(array2); // [ 1, 2, 3, 4, 5 ]

array2[0] = 11;
console.log(array2); // [ 11, 2, 3, 4, 5]

array2.push(6) // insert the lst
console.log(array2); // [ 11, 2, 3, 4, 5, 6 ]

let array2Pop = array2.pop() // LIFO
console.log(array2Pop); // 6

let array2Shift = array2.shift();
console.log(array2Shift); // 11

let res = array2.unshift(100, 200)
console.log(array2, res) // [ 100, 200, 2, 3, 4, 5 ], 6 => length

let array2Reversed = array2.reverse();
console.log(array2Reversed); // [ 5, 4, 3, 2, 200, 100 ]

delete array2Reversed[array2Reversed.length - 1];
console.log(array2Reversed); // [ 5, 4, 3, 2, 200, <1 empty item> ]

//=======================================

let array3 = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log(array3[i]); // can not find index return undefined
}

for (let i = 0; i < array3.length; i++) {
    console.log(i);
    console.log(array3[i]);
}

for (let item of array3) {
    console.log(item);
    // a
    // b
    // c
    // d
    // e
    // f
}

for (let item in array3) { // different between 'of' and 'in'
    console.log(item);
    /*
    0
    1
    2
    3
    4
    5
    */
}

array3.forEach((item) => {
    console.log(item);
    // a
    // b
    // c
    // d
    // e
    // f
})

//=======================================

let array4 = array1.concat(array2);
console.log(array4)
// [
// 1, 2, 3, 4, 5,
//     1, 2, 3, 4, 5
// ]

//=======================================

let array5 = array3.concat(array3);
console.log(array5);
// [
//     'a', 'b', 'c', 'd',
//     'e', 'f', 'a', 'b',
//     'c', 'd', 'e', 'f'
// ]

//=======================================

let array3Join = array3.join("#");
console.log(array3Join);
// a#b#c#d#e#f

//=======================================

let array6 = ["a", "b", "c", "d", "e", "f"];
let array6Slice = array6.splice(3, array6.length - 1);
console.log(array6); // [ 'a', 'b', 'c' ]
console.log(array6Slice); // [ 'd', 'e', 'f' ]

//=======================================

let array7 = [1, 3, 10, 0, 23, 9];
let array7Sort = array7.sort((a, b) => a- b);
console.log(array7Sort); // [ 0, 1, 3, 9, 10, 23 ]

let array7SortReverse = array7.sort((a, b) => b - a);
console.log(array7SortReverse); // [ 23, 10, 9, 3, 1, 0]