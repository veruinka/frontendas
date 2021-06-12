// const sg = document.querySelector('.square');
// const gclick = function () {
//     console.log('clickas');
// }

// sg.addEventListener('click', gclick);




// const sg = document.querySelector('.square');
// const gclick = function (C) {
//     console.log(C.target.classList.toggle('pink'));
// }

// sg.addEventListener('click', gclick);
// sg.addEventListener('mouseover', gclick);


// const sg = document.querySelector('.square');
// const gclick = function (C) {
//     if(C.target.classList.contains('pink')){
//         C.target.classList.remove('pink');
//     }
//     else{
//         C.target.classList.add('pink');
//     }
// }

// sg.addEventListener('click', gclick);
// sg.addEventListener('mouseover', gclick);




const sg = document.querySelector('.square');
const sg1 = document.querySelector('.circle');

const gclick = function (C) {
    console.log(C.target.classList.toggle('pink'));
}

const gclick1 = function (C1) {
    C1.stopPropagation();
    console.log(C1.target.classList.toggle('pink'));
    console.log('sg1 click');
}

sg.addEventListener('click', gclick);
sg1.addEventListener('click', gclick1);