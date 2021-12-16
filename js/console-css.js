const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const body = document.body;
const boxes = [];

colors.forEach(color => {
    console.log(`%c${color}`, `color: ${color}`);

    let box = document.createElement('div');
    box.style.color = color;
    box.style.borderBottom = '1px solid #555';
    box.style.height = '1.5em';
    box.style.padding = '0.25em';
    box.style.paddingLeft = '2em';
    box.innerText = color;
    body.append(box);
});