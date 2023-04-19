function isVowel(char) {
    return /^[aeiou]$/i.test(char);
}

function capitalize(word) {
    if (typeof word !== 'string') return;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
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