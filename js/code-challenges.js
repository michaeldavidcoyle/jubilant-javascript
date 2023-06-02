// Write a function that returns the SUM of a sequence of numbers. This sequence is determined
// by three variables: start, finish, and step. The sequence begins at start, ends at finish,
// and goes up by step until it reaches finish or a number that when increased by step would
// go past finish.
// Examples:
// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: 5 | Output: 13

console.log('Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step.');
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
console.log('-'.repeat(32));

// Given a string of any length with any characters in it, write a function to determine whether
// or not the string contains the whole word "english". The order of characters/spelling is
// important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return
// false. Upper and lower case does not matter. Return values should be booleans (true/false).

// Examples:
// Input: "FaagdnglishAGG" | Output: false
// Input: "SMFENgliSHasnD" | Output: true
console.log(`Write a function to determine whether a string contains the whole word "english".
The order of characters/spelling is important, a string "agkjnenglishsad" would return true
while "asdneglihsth" would return false. Upper and lower case does not matter.`);

function containsWord(string, word) {
    if (typeof string != 'string' || typeof word != 'string') {
        return false;
    }

    return string.toLowerCase().includes(word.toLowerCase());
}

console.log('"FaagdnglishAGG":', containsWord('FaagdnglishAGG', 'english')); // false
console.log('"SMFENgliSHasnD":', containsWord('SMFENgliSHasnD', 'english')); // true
console.log('-'.repeat(32));

// Given an array of integers, write a function that returns an array of 2 integers. The first
// integer will be the count of the positive integers, and the second integer will be the sum
// of the negative integers. If the input is empty or null, return an empty array.

// Examples:
// Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
// Input: null | Output: []

console.log(
    `Given an array of integers, write a function that returns an array of 2 integers. 
The first integer will be the count of the positive integers, and the second integer will be the sum 
of the negative integers. If the input is empty or null, return an empty array.`
);
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
console.log('-'.repeat(32));

// Write a function that translates an input string by replacing each character with a number
// representing the amount of times that character appears in the string. Then separate each
// individual number with a different character.
// Examples:
// Input: "hello world", "-" | Output: "1-1-3-3-2-1-1-2-1-3-1"
// Input: "challenge", "/" | Output: "1/1/1/2/2/2/1/1/2"

console.log(
    `Write a function that translates an input string by replacing each character with a number
representing the amount of times that character appears in the string. Then separate each
individual number with a different character.`
);
function stringToCharCount(string, separator) {
    const charCounts = new Map();

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (charCounts.has(char)) {
            let count = charCounts.get(char);
            charCounts.set(char, count + 1);
        } else {
            charCounts.set(char, 1);
        }
    }

    return string.split('').map(char => charCounts.get(char)).join(separator);
}

console.log('"hello world":', stringToCharCount('hello world', '-'));
console.log('"challenge":', stringToCharCount('challenge', '/'));
console.log('-'.repeat(32));

// Given a string of names like this: "Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer", write
// a function that makes the entire string uppercase and sorts it in alphabetical order by last
// name. If the last names are the same sort them by the first name. Put the last name in front
// of the first name, remove the colons and semicolons, put the names in parentheses and separate
// the names with commas.
//
// Example:
// The end string should look like this: "(CARANGAL, GENE)(MEYER, JEFF)(MEYER, TRAVIS)(YOUNG, TOM)"
console.log(
    `Given a string of names like this: "Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer", write
a function that makes the entire string uppercase and sorts it in alphabetical order by last
name. If the last names are the same sort them by the first name. Put the last name in front
of the first name, remove the colons and semicolons, put the names in parentheses and separate
the names with commas.`
);

function formatNames(stringOfNames) {
    return '(' + stringOfNames.toUpperCase()
        .split(';')
        .map(name => name.split(':').reverse().join(', '))
        .sort()
        .join(')(') + ')';
}

console.log(formatNames("Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer"));
console.log('-'.repeat(32));

// Write a function to calculate a person’s age based on the date entered in the format MM/DD/YYYY.
//
// Example:
// Input: 11/04/1982
// Output: 39 (as of Jan 2022)
console.log('Write a function to calculate a person’s age based on the date entered in the format MM/DD/YYYY.');

function age(mmddyyyy) {
    const dob = new Date(mmddyyyy);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth()) {
        years--;
    }

    if (today.getMonth() === dob.getMonth()) {
        if (today.getDate() < dob.getDate()) {
            years--;
        }
    }

    return years;
}

let dob = '11/04/1982';

console.log(`A person born ${dob} is ${age(dob)} years old today.`);
console.log('-'.repeat(32));

// Write a function to convert a string into an array of words.
// Example:
// Input: "Trick or Treat"
// Output: [‘Trick’, ‘or’, ‘Treat’]
console.log('Write a function to convert a string into an array of words.');

function stringToArrayOfWords(string) {
    return string.split(' ');
}

console.log('Trick or Treat:', stringToArrayOfWords("Trick or Treat"));
console.log('-'.repeat(32));

// Write a function to count the number of occurrences of a substring in a given string.
// Example:
// Input: "The pumpkin rolled down the hill and under someone’s car.", "the"
// Output: 2
console.log('Write a function to count the number of occurrences of a substring in a given string.');
function countSubstrings(string, substring) {
    let count = 0;
    string = string.toLowerCase();
    let last = string.length - substring.length;

    for (let start = 0; start <= last; start++) {
        let end = start + substring.length;
        if (string.slice(start, end) === substring) {
            count++;
        }
    }

    return count;
}

let string = "The pumpkin rolled down the hill and under someone’s car.";
let substring = "the";

console.log(
    `string: "${string}"
substring: "${substring}"
count: ${countSubstrings(string, substring)}`
);
console.log('-'.repeat(32));

/*
	Write a function that takes a positive integer (seconds) and returns the time
	in a human-readable format (HH:MM:SS). Note: you will never be given a number
	greater than 86400, the amount of seconds in 24 hours.
	Example:
	input: 28314
	output: 07:51:54
*/
console.log('Write a function that takes a positive integer (seconds) and returns the time in a human-readable format (HH:MM:SS).');
function humanReadableTime(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    seconds = (seconds % 60).toString().padStart(2, '0');;

    return `${hours}:${minutes}:${seconds}`;
}

console.log(`28314 seconds: ${humanReadableTime(28314)}`);
let seconds = Math.floor(Math.random() * 86401);
console.log(`${seconds} seconds: ${humanReadableTime(seconds)}`);
console.log('-'.repeat(32));

/*
    Write a function to remove these special characters from a string: ~,!,$,&,%, ,#,@,-,_,^,?
    (yes, "space" is a character in that list)

    Examples:
    Input: "Happy ~!&$%#@- Halloween"
    Output: "HappyHalloween"
    Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!"
    Output: "I'llbetlivinginanudistcolonytakesallthefunoutofHalloween"
*/
console.log(`Write a function to remove these special characters from a string: ~,!,$,&,%, ,#,@,-,_,^,?`);
function removeSpecialChars(string) {
    if (typeof string !== 'string') return;

    const specialChars = [
        '~', '!', '$', '&', '%', ' ', '#', '@', '-', '_', '^', '?'
    ];

    let strippedString = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!specialChars.includes(char)) {
            strippedString += char;
        }
    }

    return strippedString;
}

console.log(removeSpecialChars("Happy ~!&$%#@- Halloween"));
console.log(removeSpecialChars("I’ll bet living in a nudist-colony takes all the fun out of Halloween!!"));
console.log('-'.repeat(32));

/*
    Determine whether or not a word is an anagram of another.
    Return true if it is, and false if it is not.
    Example:
    Input: deco, code | Output: true
    Input: last, nope | Output: false

*/
console.log('Determine whether or not a word is an anagram of another.');
function isAnagram(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') return;

    const s1 = string1.replaceAll(/[^a-zA-Z0-9]/g, '')
        .split('')
        .map(char => char.toLowerCase())
        .sort()
        .join('');
    const s2 = string2.replaceAll(/[^a-zA-Z0-9]/g, '')
        .split('')
        .map(char => char.toLowerCase())
        .sort()
        .join('');

    return s1 === s2;
}

console.log('deco, code: ', isAnagram('deco', 'code'));
console.log('last, nope: ', isAnagram('last', 'nope'));
console.log('Louis Friend, iron sulfide:', isAnagram('Louis Friend', 'iron sulfide'));
console.log('-'.repeat(32));

/*
    ATMs only allow for 4 or 6 digit PINs. These PINs can only contain integers.
    Write a function that takes a PIN and checks to see if it is valid.
    Example:
    Input: 8472 | Output: true
    Input: 76a1 | Output: false
*/
console.log(`ATMs only allow for 4 or 6 digit PINs. These PINs can only contain integers.
Write a function that takes a PIN and checks to see if it is valid.`)
function validatePIN(pin) {
    return /^\d{4}$|^\d{6}$/.test(pin);
}

const testPINs = [
    true, 'abcd', 42, [true, 'abcd', 42], {pin: 1234}, 815, 8472, '9021', '76a1', 590_371, '359108'
];

testPINs.forEach(pin => {
    if (validatePIN(pin)) {
        console.log(`${pin} is a valid pin`)
    } else {
        console.log('%cINVALID:', 'color: #f02040;', pin);
    }
});
console.log('-'.repeat(32));

/*
* Write a function that returns a duration (given as a number of seconds) in a human-readable way.
* This function will only take a non-negative integer and return a duration expressed as a combination
* of years, days, hours, minutes and seconds. If the number is 0, the function must return "now".
* Example:
* Input: 4782 | Output: 1 hour, 19 minutes and 42 seconds
* Input: 84773672123 | Output: 2688 years, 56 days, 18 hours, 15 minutes and 23 seconds
*/
console.log(
`Write a function that returns a duration (given as a number of seconds) in a human-readable way.
This function will only take a non-negative integer and return a duration expressed as a combination
of years, days, hours, minutes and seconds. If the number is 0, the function must return "now".`
);

function duration(seconds) {
    if (!Number.isInteger(seconds) || seconds < 0) return;
    if (seconds === 0) return 'now';

    const MIN = 60;
    const HOUR = MIN * 60;
    const DAY = HOUR * 24;
    const YEAR = DAY * 365;

    let years = Math.floor(seconds / YEAR);
    seconds -= years * YEAR;
    let days = Math.floor(seconds / DAY);
    seconds -= days * DAY;
    let hours = Math.floor(seconds / HOUR);
    seconds -= hours * HOUR;
    let minutes = Math.floor(seconds / MIN);
    seconds -= minutes * MIN;

    years = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}, ` : '';
    days = days > 0 ? `${days} ${days > 1 ? 'days' : 'day'}, ` : '';
    hours = hours > 0 ? `${hours} ${hours > 1 ? 'hours' : 'hour'}, ` : '';
    minutes = minutes > 0 ? `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ` : '';

    return years + days + hours + minutes + `and ${seconds} ${seconds > 1 ? 'seconds' : 'second'}`;
}

console.log(0, duration(0));
console.log(4782, duration(4782));
console.log(90001, duration(90001));
console.log(10499273, duration(10499273));
console.log(84773672123, duration(84773672123));
console.log('-'.repeat(32));

/*
 * Write a function that takes a number and returns its multiplicative persistence, which is the number of times you can
 * multiply the digits in the number given until you can reach a single digit.
 * Examples:
 * Input: 123 | Output: 1
 * Input: 976342186 | Output: 3
 */
console.log(
    `Write a function that takes a number and returns its multiplicative persistence, which is the number of times you can 
multiply the digits in the number given until you can reach a single digit.`
);

function multiplyDigits(integer) {
    return integer.toString()
        .split('')
        .map(d => +d)
        .reduce((product, multiplier) => product * multiplier);
}

function multiplicativePersistence(integer) {
    if (!Number.isInteger(integer)) return;
    let count = 0;
    while (integer.toString().length > 1) {
        integer = multiplyDigits(integer);
        count++;
    }

    return count;
}

const multiPersistTestInts = [
    123,
    976342186,
    6788,
    26888999,
    277777788888899
];

multiPersistTestInts.forEach(int => {
    console.log(int, multiplicativePersistence(int));
});
console.log('-'.repeat(32));

/*
* Write a function that takes a positive integer and returns the Collatz sequence: if the integer is odd, the next
* number should be 3n + 1, and if even, the next step should be n / 2. This continues until the integer is reduced down
* to 1 and return the array of integers. (It remains unproven whether every starting integer will reduce to 1, but no
* number has yet been found that does not)
* Example:
* Input: 5 | Output: [5, 16, 8, 4, 2, 1]
* Input: 7 | Output: [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
*/
console.log(
    `Write a function that takes a positive integer and returns the Collatz sequence: if the integer is odd, the next
number should be 3n + 1, and if even, the next step should be n / 2. This continues until the integer is reduced down
to 1 and return the array of integers.`
);

function collatz(integer) {
    const steps = [integer];

    while (integer > 1) {
        integer = integer % 2 === 0 ? integer / 2 : integer * 3 + 1;
        steps.push(integer);
    }

    return steps;
}

const collatzTestIntegers = [
    5, 7, 9, 16, 20, 25, 27
];

collatzTestIntegers.forEach(integer => {
    console.log(collatz(integer).join(', '));
});