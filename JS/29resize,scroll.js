/////////////////////////resize////////////////////////
let A, B;
function resize() {
    A.textContent = window.innerHeight;
    B.textContent = window.innerWidth;
};

window.addEventListener('DOMContentLoaded', () => {
    A = document.querySelector('#height');
    B = document.querySelector('#width');
    resize();
});

window.addEventListener('resize', () => {
    resize();
    changeSize();
});


//////////////////////resize layout////////////////////////
const mobSize = 300;
let currentSize;
changeSize();

function changeSize() {
    let change = currentSize;
    if (window.innerWidth > mobSize) {
        currentSize = 'desktop';
    }
    else {
        currentSize = 'mobile';
    }
    if (change !== currentSize) {
        console.log('Change layout to '+ currentSize);
    }
}

////////////////////////////scroll//////////////////////////////

let scrollOutput, menu;
const fromTop = 30;
let currSize;


window.addEventListener('scroll', () => {
    reportWindowScroll();
});

window.addEventListener('DOMContentLoaded', () => {
    scrollOutput = document.querySelector('#scroll');
    menu = document.querySelector('#menu');
    changSize();
    reportWindowScroll();
});


function reportWindowScroll() {
    scrollOutput.textContent = window.scrollY;
    changSize();
}

function changSize() {
    let change = currSize;
    if (window.scrollY > fromTop) {
        currSize = 'small';
    }
    else {
        currSize = 'full';
    }
    if (change !== currSize) {
        if(currSize === 'small') {
            menu.style.height = '20px';
        }
        else {
            menu.style.height = '30px';
        }
        console.log('Change menu to '+ currSize);
    }
}