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







// const F = document.querySelector('img');

// const prev = document.querySelector('#buttt').addEventListener('click', () => F.setAttribute('src', img.dataset.AB));
// const set = document.querySelector('#buttt2').addEventListener('click', () => F.setAttribute('src', img.dataset.BC));
// const nex = document.querySelector('#buttt1').addEventListener('click', () => F.setAttribute('src', img.dataset.CD));







//universalus kodas, kur nereikia kazka prideti js faile
const F = document.querySelector('img');

document.querySelector('.buts').querySelectorAll('button').forEach(e => {
    e.addEventListener('click', () => {
       F.setAttribute('src', img.dataset[e.id]);
    });
});




