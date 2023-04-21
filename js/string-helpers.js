function isVowel(char) {
    return /^[aeiou]$/i.test(char);
}

function isAlphabetic(string) {
    return /^[a-z]+$/i.test(string);
}

function isNumeric(string) {
    return /^-?\d*\.?\d+(?:[eE][+-]?\d+)?$/.test(string);
}

function isAlphaNumeric(string) {
    return /^[a-z\d]+$/i.test(string);
}

function isAlphabeticOrSpace(string) {
    return /^[a-z\s]+$/i.test(string);
}

function isAlphaNumericOrSpace(string) {
    return /^[a-z\d\s]+$/i.test(string);
}

function isWhitespace(char) {
    return /^\s+$/.test(char);
}

function isLowerCase(char) {
    return /^[a-z]$/.test(char);
}

function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
}

function capitalize(word) {
    if (typeof word !== 'string') return;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function toggleCase(string) {
    let result = '';

    for (let index = 0; index < string.length; index++) {
        let char = string[index];
        if (isLowerCase(char)) {
            char = char.toUpperCase();
        } else if (isUpperCase(char)) {
            char = char.toLowerCase();
        }
        result += char;
    }

    return result;
}

function toCamelCase(string) {
    if (typeof string !== 'string') return;
    return string.toLowerCase().replaceAll(
        /(?:\s|-|_)\w/g,
        match => match.replace(/\s|-|_/, '').toUpperCase()
    );
}

function toSnakeCase(string) {
    if (typeof string !== 'string') return;
    string = string[0].toLowerCase() + string.slice(1);
    return string.replaceAll(
        /(?:\s|-)\w|[A-Z]/g,
        match => `_${match.replace(/\s|-/, '').toLowerCase()}`
    );
}

// outputs ALL_CAPS_WITH_UNDERSCORES
function toScreamingSnakeCase(string) {
    if (typeof string !== 'string') return;
    if (/[\s_-]/.test(string)) {
        return string.replaceAll(/[\s_-]/g, '_').toUpperCase();
    }

    return string.replaceAll(/(?=[A-Z])/g, '_').toUpperCase();
}

function lastNameFirst(fullName) {
    let names = fullName.split(/\s+/);
    let last = names.at(-1);

    if (names.length === 2) {
        return `${last}, ${names[0]}`;
    }

    return `${last}, ${[...names.slice(0, -1)].join(' ')}`;
}