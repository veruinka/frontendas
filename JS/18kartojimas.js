// 1. Atskiri elementai
// a. Tamsiai žaliai nuspalvinti h1 tagą;
const A = document.querySelector('h1');
A.style.color = 'darkgreen';

// b. Tagui i pridėti klasę small;
const B = document.querySelector('i');
B.classList.add('small');

// c. Iš tago h1 pašalinti klasę main;
A.classList.remove('main');

// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
const C = document.querySelector('h1 + h2');

C.classList.add('first');
C.classList.remove('main');

// e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
const D = document.querySelector('h2 span');

D.style.fontSize = '10px';
D.style.color = 'grey';

// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a. Suskaičiuoti kiek yra h2 tagų;

// const E = document.querySelectorAll('h2');

// let c = 0;
// for (let index = 0; index < E.length; index++) {
//     c++;
// };

let c = 0;
const E = document.querySelectorAll('h2').forEach( () => c++);

console.log('a:', c);

// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

// let cou = 0;
// for (let index = 0; index < E.length; index++) {
//     if (!E[index].classList.contains('first')){
//         cou++;
//     }
// };

// let cou = 0;
// E.forEach( (E) => {
//     if (!(E[index].classList.contains('first'))){
//         cou++;  
// };
// console.log('b:', cou);

// c. Visus h2 tagus nuspalvinti šviesiai mėlynai

// for (let index = 0; index < E.length; index++) {
//     E[index].style.color = 'lightblue';
// }

// E.forEach ((h2) => E[index].style.color = 'lightblue');

// d. Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;

const F = document.querySelector('div.prices'); 
// F.classList.add('price-tag');

// F.querySelector('h2').forEach ((h2) => h2.classList.add('price-tag'));

// e. Pabraukti visus tagus su klase new;
const G = document.querySelectorAll('.new');

for (let index = 0; index < G.length; index++) {
    G[index].style.textDecoration = 'underline';
}

// f. Suskaičiuoti kiek yra gyvūnų kategorijų (jos yra ul tagai);
const H = document.querySelectorAll('ul');

let count = 0;
for (let index = 0; index < H.length; index++) {
    count++;
}
console.log('f:', count);

// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// for (let index = 0; index < H.length; index++) {
//     H.style.border = '1px solid black';
//     H.style.padding = '15px 50px';
// }

// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
const I = document.querySelectorAll('.new');

co = 0;
for (let index = 0; index < I.length; index++) {
    co++;
}
console.log('h:', co);

// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje
// let c1 = 0;
// let c2 = 0;
// for (let index = 0; index < H.length; index++) {
//     c1++;
    
//     for (let j = 0; j < 1; j++) {
//     c2++;
//     };
// };

// console.log('i:', c1, c2);


// Elementų events
// a. Padaryti tai ką liepia mygtukai Header sekcijoje;
const K = document.querySelector('#h1-color');
const L = function() {
    A.style.color = "green";
}

K.addEventListener('click', L);

const O = document.querySelector('#h1-font');
const P = function() {
    A.style.fontSize = "10px";
}

O.addEventListener('click', P);

// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const N = function() {
    B.style.fontWeight = 'bold';
}

B.addEventListener('click', N);

// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const M = document.querySelector('.prices');
const R = function() {
    M.style.backgroundColor = 'grey';
}

M.addEventListener('dblclick', R);

// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
const S = document.querySelector('#contacts');
const T = function(e) {
    e.target.classList.toggle('color');
}

S.addEventListener('click', T);

// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;


// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element


// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;


// Elementų grupių events
//a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// const New = function(e) {
//     e.target.style.color = 'red';
// };

// for (let index = 0; index < I.length; index++) {
//     I[index].addEventListener('dblclick', New);
// }

I.forEach(animal => {
    animal.addEventListener('dblclick', e => {
        E.target.style.color = 'red';
    });
});
//b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.


//c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;