const body = document.querySelector('body');

for (let index = 1; index <= 100; index++) {
    const B = document.createTextNode(index);
    const I = document.createElement('span');
    I.appendChild(B);
    body.appendChild(I);
};


for (let index = 1; index <= 100; index++) {
    localStorage.setItem('dog' + index, 'Au Au Au');
};


const mas = []

for (let index = 1; index <= 100; index++) {
    mas.push('cat');
};

localStorage.setItem('cats', JSON.stringify(mas));
console.log(JSON.parse(localStorage.getItem('cats')));