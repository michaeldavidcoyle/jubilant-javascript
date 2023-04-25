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