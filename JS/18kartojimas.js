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
document.querySelectorAll('h2').forEach( () => c++);

console.log('a:', c);

// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
// let cou = 0;
// for (let index = 0; index < E.length; index++) {
//     if (!E[index].classList.contains('first')){
//         cou++;
//     }
// };

let cou = 0;
document.querySelectorAll('h2').forEach( (h2) => {
    if (!h2.classList.contains('first')){
        cou++;  
}});
console.log('b:', cou);

// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
// for (let index = 0; index < E.length; index++) {
//     E[index].style.color = 'lightblue';
// }

document.querySelectorAll('h2').forEach ((h2) => h2.style.color = 'lightblue');

// d. Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;
// const F = document.querySelector('div.prices'); 
// F.classList.add('price-tag');

document.querySelector('.prices').classList.add('price-tag');

// F.querySelector('h2').forEach ((h2) => h2.classList.add('price-tag'));

// e. Pabraukti visus tagus su klase new;
// const G = document.querySelectorAll('.new');

// for (let index = 0; index < G.length; index++) {
//     G[index].style.textDecoration = 'underline';
// }

document.querySelectorAll('.new').forEach ((e) => e.style.textDecoration = 'underline');

// f. Suskaičiuoti kiek yra gyvūnų kategorijų (jos yra ul tagai);
// const H = document.querySelectorAll('ul');

// let count = 0; 
// for (let index = 0; index < H.length; index++) {
//     count++;
// }

let count = 0;
document.querySelectorAll('ul').forEach (() => count++);

console.log('f:', count);

// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// for (let index = 0; index < H.length; index++) {
//     H[index].style.border = '1px solid black';
//     H[index].style.padding = '15px 50px';
// }

document.querySelectorAll('ul').forEach ((e) => {
    e.style.border = '1px solid black'; 
    e.style.padding = '15px 50px';
});

// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// const I = document.querySelectorAll('.new');

// co = 0;
// for (let index = 0; index < I.length; index++) {
//     co++;
// }

co = 0;
document.querySelectorAll('.new').forEach (() => co++);

console.log('h:', co);

// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje
// const H = document.querySelectorAll('ul');
// const cc2 = {};
// for (let index = 0; index < H.length; index++) {
//     let c1 = 0;
//     const BB = H[index].querySelectorAll('li');
    
//     for (let j = 0; j < BB.length; j++) {
//         if(BB[j].classList.contains('new')){
//             c1++;
//         };
//     };
//     cc2[H[index].id] = c1;
// };

const cc2 = {};
document.querySelectorAll('ul').forEach (ul => {
    let c1 = 0;
    ul.querySelectorAll('li').forEach (li => {
        if(li.classList.contains('new')){
            c1++;
    }});
    cc2[ul.id] = c1;
});

console.log('i:', cc2);

//3. Elementų events
// a. Padaryti tai ką liepia mygtukai Header sekcijoje;
// const K = document.querySelector('#h1-color');
// const L = function() {
//     A.style.color = "green";
// }

// K.addEventListener('click', L);

document.querySelector('#h1-color').addEventListener('click', () =>{
    document.querySelector('h1').style.color = "green";
});

// const O = document.querySelector('#h1-font');
// const P = function() {
//     A.style.fontSize = "10px";
// }

// O.addEventListener('click', P);

document.querySelector('#h1-font').addEventListener('click', () =>{
    document.querySelector('h1').style.fontSize = "10px";
});

// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
// const N = function() {
//     B.style.fontWeight = 'bold';
// }

// B.addEventListener('click', N);

document.querySelector('i').addEventListener('click', () => document.querySelector('i').style.fontWeight = 'bold');

// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
// const M = document.querySelector('.prices');
// const R = function(e) {
//     M.style.backgroundColor = 'grey';
//     e.target.classList.toggle('white');
// }

// M.addEventListener('click', R);

document.querySelector('.prices').addEventListener('click', (e) => {
    document.querySelector('.prices').style.backgroundColor = 'grey';
    e.target.classList.toggle('white');
    });

// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
// const S = document.querySelector('#contacts');
// const T = function() {
//     S.style.color = 'purple';
// }

// S.addEventListener('click', T);

document.querySelector('#contacts').addEventListener('click', () => document.querySelector('#contacts').style.color = 'purple');

// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
// const U = S.querySelector('u');
// const Q = function() {
//     S.style.fontSize = '20px';
// }

// U.addEventListener('click', Q);

document.querySelector('u').addEventListener('click', e => document.querySelector('#contacts').style.fontSize = '20px');

// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
// const V = S.querySelector('b');
// const W = function(e) {
//     e.stopPropagation();
//     S.style = null;
// }

// V.addEventListener('click', W);

document.querySelector('b').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('#contacts').style = null;
});

// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
// const X = document.querySelector('#h1-color-back');
// const Y = function() {
//     A.style.color = "darkgreen";
// }

// X.addEventListener('click', Y);

document.querySelector('#h1-color-back').addEventListener('click', e => document.querySelector('h1').style.color = null);

// const Z = document.querySelector('#h1-font-back');
// const AA = function() {
//     A.style.fontSize = "32.4px";
// }

// Z.addEventListener('click', AA);

document.querySelector('#h1-font-back').addEventListener('click', e => document.querySelector('h1').style.fontSize = null);

//4. Elementų grupių events
//a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// const New = function(e) {
//     e.target.style.color = 'red';
// };

// for (let index = 0; index < I.length; index++) {
//     I[index].addEventListener('dblclick', New);
// }

document.querySelectorAll('.new').forEach(animal => {
    animal.addEventListener('dblclick', e => {
        e.target.style.color = 'red';
    });
});
 
//b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
// const BB = document.querySelectorAll('li');

// for (let index = 0; index < BB.length; index++) {
//     if (!BB[index].classList.contains('like-button')){
//         const CC = function () {
//             BB[index].style.fontSize = "130%";
//         }
//         BB[index].addEventListener('click', CC);
//     }
// }

document.querySelectorAll('li').forEach( e => {
    if (!e.classList.contains('like-button')){ (e, i) => {
        e[i].addEventListener('click', e => e.style.fontSize = "130%");
    };
}});

//c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
// const DD = document.querySelectorAll('.like-button');
// const XX = document.querySelectorAll('ul');

// for (let j = 0; j < DD.length; j++) {
//     const EE = function () {
//         XX[j].classList.toggle('like');
//     };
//     DD[j].addEventListener('click', EE);
// };

document.querySelectorAll('.like-button').forEach (e => (e.addEventListener('click', () =>{
    document.querySelectorAll('ul').forEach ((e, i) => (e.classList.toggle('like')));
})));

//5. Dinaminis elementų kūrimas
//a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
const E = document.createElement('h2');
const F = document.createTextNode('Senjorai tik: 1.99 eur');
E.appendChild(F);

const G = document.querySelector('div.prices').appendChild(E);

//b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur”
// Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
const K = document.createElement('h2');
const L = document.createTextNode('Senjorų grupė iki 10: tik 5.99 eur');
K.appendChild(L);

const M = document.querySelector('div.prices').appendChild(K);

const O = function () {
    K.style.color = 'green';
}

K.classList.add('new');
K.addEventListener('click', O);

//c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like





//d. Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. 
// Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. 
// Mygtukai turi daryti tai kas ant jų parašyta
