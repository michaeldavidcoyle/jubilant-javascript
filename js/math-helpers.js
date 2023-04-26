// math & number helpers

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

function greatestCommonDivisor(integer1, integer2) {
    if (!Number.isSafeInteger(integer1) || !Number.isSafeInteger(integer2)) {
        if (!Number.isInteger(integer1) || !Number.isInteger(integer2)) {
            throw new TypeError('arguments must be integers');
        }
        throw new RangeError('arguments must be safe integers');
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

function add(...numbers) {
    return numbers.reduce((sum, addend) => sum + addend);
}

function multiply(...numbers) {
    return numbers.reduce((product, multiplier) => product * multiplier);
}