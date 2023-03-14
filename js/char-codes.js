const tbody = document.querySelector('tbody');
const rowTemplate = document.querySelector('#row-template');

for (let i = 32; i < 65536; i++) {
    let row = rowTemplate.content.cloneNode(true);
    let codeCol = row.querySelector('.char-code');
    let charCol = row.querySelector('.char');
    let char = String.fromCharCode(i);

    codeCol.innerText = i;
    charCol.innerText = char;

    tbody.appendChild(row);
}