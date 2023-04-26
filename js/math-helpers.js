// math helpers

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