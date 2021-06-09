function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document);

const h1 = document.querySelector('h1');
// const h1 = document.querySelectorAll('h1'); //pasirinkti visus h1

// h1.style.color = 'green'; // priskyrti nauja spalva 
setTimeout(() => h1.style.color = 'green', 2000); //priskyrti nauja spalva po kazkiek sek.

console.log(h1[0]);
console.log(h1[1]);


h1.classList.remove('abc');
h1.classList.add('bbc');
h1.classList.contains('dddddddddddd');

console.log(h1.classList.contains('dddddddddddd'));

// const ul = document.querySelectorAll('ul');
// setTimeout(() => ul[0].style.color = 'red', 3000);
// setTimeout(() => ul[1].style.color = 'blue', 2000);
// setTimeout(() => ul[2].style.color = 'brown', 5000);

// const li = ul.querySelectorAll('li');
// // li[0].style.fontSize = rand(10, 30) + 'px';
// // li[1].style.fontSize = rand(10, 30) + 'px';
// // li[2].style.fontSize = rand(10, 30) + 'px';

// li.forEach[0](e => e.style.fontSize = rand(10, 30) + 'px');



// const colors = ['green', 'red', 'brown'];
// const cla = ['one', 'two', 'three'];
// const ul = document.querySelectorAll('ul');
// ul.forEach((lis, i) => {
//     lis.querySelectorAll('li').forEach(li => {
//         li.style.fontSize = rand(10, 30) + 'px';
//         li.style.color = colors[i%3];
//         li.classList.add(cla[i%3]);
//     })
// });




const ul = document.querySelectorAll('ul');

const color = ['green', 'yellow', 'blue'];

const cl = ['one', 'two', 'three']



for (let i = 0; i < ul.length; i++) {

   const li = ul[i].querySelectorAll('li');



   for (let j = 0; j < li.length; j++) {

     li[j].style.color = color[i % 3];

     li[j].style.fontSize = rand(10, 30) + 'px';

     li[j].classList.add(cl[j % 3]);

   }

}

