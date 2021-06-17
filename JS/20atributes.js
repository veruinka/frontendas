const A = document.querySelector('a');

console.log(A.getAttribute('href'));
A.setAttribute('tittle', 'Go');
A.removeAttribute('href');

const B = 'http://vk.com';
const C = 'http://kk.com';

document.querySelector('#but').addEventListener('click',() => A.setAttribute, B);