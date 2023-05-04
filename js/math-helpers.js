// math & number helpers

function isEven(integer) {
    if (!isNumeric(integer)) return false;
    return integer % 2 === 0;
}

function isPrime(integer) {
    if (!Number.isSafeInteger(integer)) return false;
    if (integer === 2) return true;
    if (integer % 2 === 0) return false;

    const SQRT = Math.sqrt(integer);

    for (let factor = 3; factor <= SQRT; factor += 2) {
        if (integer % factor === 0) return false;
    }

    return integer > 1;
}

function mean(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (parseFloat(number) !== number) return NaN;
        total += number;
    }

    return total / numbers.length;
}

function median(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (parseFloat(numbers[i]) !== numbers[i]) return NaN;
    }

    const sorted = numbers.slice().sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
        let index = sorted.length / 2 - 1;
        return (sorted[index] + sorted[index + 1]) / 2;
    }

    return sorted[Math.floor(sorted.length / 2)];
}

function mode(...numbers) {
    const counts = {};

    numbers.forEach(n => {
        if (counts[n] === undefined) {
            counts[n] = 1;
        } else {
            counts[n]++;
        }
    });

    let max = Math.max(...Object.values(counts));

    return Object.keys(counts)
        .filter(key => counts[key] === max)
        .map(key => +key);
}

function factorial(integer, useBigInt=false) {
    if (!Number.isInteger(integer)) {
        throw new TypeError('argument must be an integer');
    }

    if (integer < 0) {
        throw new RangeError('argument must be non-negative')
    }

    let product, decrement;

    if (useBigInt) {
        integer = BigInt(integer);
        product = 1n;
        decrement = 1n;
    } else {
        product = 1;
        decrement = 1;
    }

    while (integer > 1) {
        product *= integer;
        integer -= decrement;
    }

    return product;
}

function primeFactors(integer) {
    if (!Number.isSafeInteger(integer)) {
        throw new TypeError('argument must be an integer');
    }
    if (integer < 2) {
        throw new RangeError('argument must be an integer > 1')
    }

    const factors = [];
    const SQRT = Math.sqrt(integer);

    while (integer % 2 === 0) {
        factors.push(2);
        integer /= 2;
    }

    for (let i = 3; i <= integer; i += 2) {
        while (integer % i === 0) {
            factors.push(i);
            integer /= i;
        }

        if (i > SQRT && isPrime(integer)) {
            factors.push(integer);
            break;
        }
    }

    return factors;
}

function factorize(integer, properFactors = true) {
    if (!Number.isInteger(integer)) {
        throw new TypeError('argument must be an integer');
    }
    if (integer < 1 || !Number.isSafeInteger(integer)) {
        throw new RangeError('argument must be a safe integer > 1')
    }

    const factors = properFactors ? [] : [1];
    const SQRT = Math.sqrt(integer);

    for (let factor = 2; factor <= SQRT; factor++) {
        if (integer % factor === 0) factors.push(factor);
    }

    for (let index = factors.length - 1; index >= 0; index--) {
        if (factors[index] !== SQRT) {
            factors.push(integer / factors[index]);
        }
    }

    return factors;
}

function greatestCommonDivisor(integer1, integer2) {
    if (!Number.isInteger(integer1) || !Number.isInteger(integer2)) {
        throw new TypeError('arguments must be integers');
    }
    if (
        integer1 < 1 || !Number.isSafeInteger(integer1) ||
        integer2 < 1 || !Number.isSafeInteger(integer2)
    ) {
        throw new RangeError('arguments must be safe integers > 0');
    }

    const greater = Math.max(integer1, integer2),
          lesser = Math.min(integer1, integer2);

    for (let divisor = lesser; divisor > 1; divisor--) {
        if (greater % divisor === 0 && lesser % divisor === 0) {
            return divisor;
        }
    }

    return 1;
}

function leastCommonMultiple(integer1, integer2) {
    if (!Number.isInteger(integer1) || !Number.isInteger(integer2)) {
        throw new TypeError('arguments must be integers');
    }
    if (
        integer1 < 1 || !Number.isSafeInteger(integer1) ||
        integer2 < 1 || !Number.isSafeInteger(integer2)
    ) {
        throw new RangeError('arguments must be safe integers > 0');
    }

    let greater = Math.max(integer1, integer2);
    let lesser = Math.min(integer1, integer2);
    let product = greater;
    let multiplier = 2;

    while (product % lesser !== 0) {
        product = greater * multiplier++;
    }

    return product;
}

function add(...numbers) {
    if (!arrayIsNumeric(numbers)) {
        throw new TypeError('arguments must be of type "number" or numeric strings');
    }

    return numbers.map(n => parseFloat(n))
        .reduce((sum, addend) => sum + addend);
}

function multiply(...numbers) {
    if (!arrayIsNumeric(numbers)) {
        throw new TypeError('arguments must be of type "number" or numeric strings');
    }

    return numbers.map(n => parseFloat(n))
        .reduce((product, multiplier) => product * multiplier);
}

function sumDigits(integer) {
    if (!Number.isSafeInteger(integer)) {
        throw new TypeError('argument must be a safe integer');
    }

    integer = Math.abs(integer);
    let sum = 0,
        digit;
    while (integer > 0) {
        digit = integer % 10;
        sum += digit;
        integer -= digit;
        integer /= 10;
    }

    return sum;
}

function randomInteger(min, max) {
    if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
        throw new TypeError('arguments must be safe integers');
    }

    let x = Math.max(min, max);
    let n = Math.min(min, max);
    let m = (x - n) + 1;

    return Math.floor(Math.random() * m + n);
}

function percentError(actual, expected) {
    if (!isNumeric(actual) || !isNumeric(expected)) {
        throw new TypeError('arguments must be numeric');
    }

    return Math.abs((actual - expected) / expected) * 100;
}

function range(start, stop, step = 1) {
    if (!isNumeric(start) || !isNumeric(stop) || !isNumeric(step)) {
        throw new TypeError('arguments must be numeric');
    }

    const sequence = [];
    step = parseFloat(step);

    if (step > 0) {
        let begin = Math.min(start, stop);
        let end = Math.max(start, stop);

        for (let i = begin; i <= end; i += step) {
            sequence.push(i);
        }
    } else if (step < 0) {
        let begin = Math.max(start, stop);
        let end = Math.min(start, stop);

        for (let i = begin; i >= end; i += step) {
            sequence.push(i);
        }
    }

    return sequence;
}

function isNumeric(value) {
    // the == operator allows for numeric strings
    return parseFloat(value) == value;
}

function arrayIsNumeric(array) {
    return array.every(term => isNumeric(term));
}