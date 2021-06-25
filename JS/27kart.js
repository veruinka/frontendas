const body = document.createTextNode('body');

for (let index = 1; index <= 100; index++) {
    const B = document.createTextNode(index);
    const I = document.createElement('span');
    I.appendChild(B);
    console.log(I);
}