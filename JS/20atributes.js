const A = document.querySelector('a');

console.log(A.getAttribute('href'));
A.setAttribute('tittle', 'Go');
A.removeAttribute('href');








const B = 'http://vk.com';
const C = 'http://kk.com';

const vk = document.querySelector('#but').addEventListener('click', () => A.setAttribute('href', B));
const kk = document.querySelector('#but1').addEventListener('click', () => A.setAttribute('href', C));









// const F = document.querySelector('img');

// const D = 'http://127.0.0.1:5500/JS/WIN_20180625_15_47_47_Pro.jpg';
// const E = 'http://127.0.0.1:5500/JS/WIN_20180625_15_48_01_Pro.jpg';
// const H = 'http://127.0.0.1:5500/JS/WIN_20180625_15_47_37_Pro.jpg';

// const prev = document.querySelector('#butt').addEventListener('click', () => F.setAttribute('src', D));
// const set = document.querySelector('#butt2').addEventListener('click', () => F.setAttribute('src', H));
// const nex = document.querySelector('#butt1').addEventListener('click', () => F.setAttribute('src', E));







const F = document.querySelector('img');

document.querySelector('#buttt').addEventListener('click', () => F.setAttribute('src', F.dataset.AB));
document.querySelector('#buttt2').addEventListener('click', () => F.setAttribute('src', F.dataset.BC));
document.querySelector('#buttt1').addEventListener('click', () => F.setAttribute('src', F.dataset.CD));







//universalus kodas, kur nereikia kazka prideti js faile
// const F = document.querySelector('img');

// document.querySelector('.buts').querySelectorAll('button').forEach(e => {
//     e.addEventListener('click', () => {
//         document.querySelector('img').setAttribute('src', img.dataset[e.id]);
//     });
// });







// const inp = document.querySelector('[name=labas]');
// const selec = document.querySelector('[name=sele]');

// inp.addEventListener('input', () => {
//     console.log(inp.value);
// });

// selec.addEventListener('change', () => {
//     console.log(selec.value);
// });





document.querySelector('[name=fotos]').addEventListener('change', (e) => {
    F.setAttribute('src', e.target.value);
});




const h1 = document.querySelector('h1');
const selec = document.querySelector('[name=pasi]');

selec.addEventListener('click', () => {
    const A = selec.value;
    h1.innerText = A;
});




const h2 = document.querySelector('h2');
const colo = document.querySelector('[name=spalvos]');
const reset = document.querySelector('#reset');
const co = ['green', 'yellow', 'purple'];


colo.addEventListener('click', (e) => {
    h2.style.color = co[e];
});

reset.addEventListener('click', () => {
    h2.innerText = h2;
});