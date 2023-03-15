const tbody = document.querySelector('tbody');
const rowTemplate = document.querySelector('#row-template');

for (let i = 32; i < 65536; i++) {
    let row = rowTemplate.content.cloneNode(true);
    let codeCol = row.querySelector('.char-code');
    let charSans = row.querySelector('.char-sans');
    let charSerif = row.querySelector('.char-serif');
    let charMono = row.querySelector('.char-mono');
    let charCursive = row.querySelector('.char-cursive');
    let char = String.fromCharCode(i);

    codeCol.innerText = i;
    charSans.innerText = char;
    charSerif.innerText = char;
    charMono.innerText = char;
    charCursive.innerText = char;

    tbody.appendChild(row);
}