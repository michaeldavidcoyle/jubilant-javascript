// Write a function that returns the SUM of a sequence of numbers. This sequence is determined
// by three variables: start, finish, and step. The sequence begins at start, ends at finish,
// and goes up by step until it reaches finish or a number that when increased by step would
// go past finish.
// Examples:
// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: 5 | Output: 13

function sumSequence(start, finish, step) {
    let sequence = [];

    for (let i = start; i <= finish; i += step) {
        sequence.push(i);
    }

    return sequence.reduce((a, b) => a + b);
}

let start = 1;
let finish = 4;
let step = 1;

console.log(`start: ${start}, finish: ${finish}, step: ${step}
sum: ${sumSequence(start, finish, step)}`);

// Given a string of any length with any characters in it, write a function to determine whether
// or not the string contains the whole word "english". The order of characters/spelling is
// important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return
// false. Upper and lower case does not matter. Return values should be booleans (true/false).

// Examples:
// Input: "FaagdnglishAGG" | Output: false
// Input: "SMFENgliSHasnD" | Output: true

function containsWord(string, word) {
    if (typeof string != 'string' || typeof word != 'string') {
        return false;
    }

    return string.toLowerCase().includes(word.toLowerCase());
}

console.log(containsWord('FaagdnglishAGG', 'english')); // false
console.log(containsWord('SMFENgliSHasnD', 'english')); // true

// Given an array of integers, write a function that returns an array of 2 integers. The first
// integer will be the count of the positive integers, and the second integer will be the sum
// of the negative integers. If the input is empty or null, return an empty array.

// Examples:
// Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
// Input: null | Output: []

function positiveCountAndNegativeSum(integerArray) {
    if (integerArray === null || integerArray.length === 0) {
        return [];
    }

    let count = 0;
    let sum = 0;

    for (let i = 0; i < integerArray.length; i++) {
        if (integerArray[i] > 0) {
            count++;
        } else {
            sum += integerArray[i];
        }
    }

    return [count, sum];
}

let intArray = [];

for (let i = 0; i < 10; i++) {
    intArray.push(Math.floor(Math.random() * 21 - 10));
}

console.log(intArray);
console.log(positiveCountAndNegativeSum(intArray));