// <!-- A -->
const A = document.querySelector('a');
const B = document.querySelector('h1');

A.style.color = 'green';
B.style.color = 'red';



// <!-- B -->
const change = function(eventas){
    eventas.preventDefault();
    B.style.color = 'blue';
}

A.addEventListener('click', change);



// <!-- C, D -->
const C = document.querySelectorAll('div');

const pran = function(e){
    e.target.style.display = 'none';
}

const istin = function(e){
    e.target.remove();
}

for (let index = 0; index < C.length; index++) {
    C[index].addEventListener('click', pran); //arba istin
}



// <!-- E -->
const D = document.querySelector('i span');

const td = function(e){
    console.log(e.target.closest('i'));
    e.target.closest('i').remove();
}

D.addEventListener('click', td);



// <!-- F -->
const G = document.querySelectorAll('h2');
for (let index = 0; index < G.length; index++) {
    const E = document.createElement('span');
    const F = document.createTextNode('Oj, sveiki!');
    E.appendChild(F);
    G[index].append(E);
}



// <!-- G -->
const H = document.querySelector('h5');

const I = document.createElement('h3');
for (let index = 0; index < I.length; index++) {
    H.insertBefore(I[index], H);
}

console.log(H);