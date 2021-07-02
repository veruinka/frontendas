const A = ['a', 'b', 'a', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'b'];

///////////////////////////////1 masyvas for////////////////////////



for (let index = 0; index < A.length; index++) {
    console.log('1.1:', A[index]);
};


for (let index = 0; index < A.length; index++) {
    console.log('1.2:', index);
};


for (let index = 0; index < A.length; index++) {
    if (A[index] === 'a') {
        console.log('1.3:', A[index]);
    };
};


for (let index = 0; index < A.length; index++) {
    if (A[index] === 'b') {
        console.log('1.4:', index);
    };
};


///////////////////////2 masyvas foreach//////////////////////////



A.forEach (e => console.log('2.1:', e));
// A.forEach (arrayValue => console.log('2.1:', arrayValue));


A.forEach ((e, index) => console.log('2.2:', index));


A.forEach (e => {
    if(e === 'a'){
        console.log('2.3:', e);
    };
});


A.forEach ((e, index) => {
    if(e === 'b'){
        console.log('2.4:', index);
    };
});


////////////////////////////////////////////////////////////////////////////////



const B = document.querySelectorAll('li');

///////////////////////////3 node list for//////////////////////////


for (let index = 0; index < B.length; index++) {
    console.log('3.1:', B[index].dataset.value);
};


for (let index = 0; index < B.length; index++) {
    console.log('3.2:', index);
};


for (let index = 0; index < B.length; index++) {
    if (B[index].dataset.value === 'a') {
        console.log('3.3:', B[index].dataset.value);
    };
};


for (let index = 0; index < B.length; index++) {
    if (B[index].dataset.value === 'b') {
        console.log('3.4:', index);
    };
};



///////////////////////////4 node list foreach//////////////////////////


B.forEach (e => console.log('4.1:', e.dataset.value));


B.forEach ((e, index) => console.log('4.2:', index));


B.forEach (e => {
    if(e.dataset.value === 'a'){
        console.log('4.3:', e.dataset.value);
    };
});


B.forEach ((e, index) => {
    if(e.dataset.value === 'b'){
        console.log('4.4:', index);
    };
});



//////////////////////////pakartoti 3 kartus for///////////////////////////


for (let i = 1; i <= 3; i++) {
    for (let index = 0; index < A.length; index++) {
    console.log(i, A[index]);
    };
};


for (let i = 1; i <= 3; i++) {
    for (let index = 0; index < A.length; index++) {
    console.log(i, [index]);
    };
};


for (let i = 1; i <= 3; i++) {
    for (let index = 0; index < A.length; index++) {
        if (A[index] === 'a') {
            console.log(i, A[index]);
        };
    };
};


for (let i = 1; i <= 3; i++) {
    for (let index = 0; index < A.length; index++) {
        if (A[index] === 'b') {
            console.log(i, [index]);
        };
    };
};


////////////////////////////////////////////////////////////////////////////////



const cde = ['c', 'd', 'e'];

//////////////////////////pakartoti 3 kartus foreach///////////////////////////


cde.forEach(i => A.forEach(e => console.log(i, e)));


cde.forEach(i => A.forEach((e, index) => console.log(i, index)));


cde.forEach(i => A.forEach(e => {
    if(e === 'a'){
        console.log(i, e);
    };
}));


cde.forEach(i => A.forEach((e, index) => {
    if(e === 'b'){
        console.log(i, index);
    };
}));


////////////////////////////////////////////////////////////////////////////////




const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('li');

/////////////////pakartoti 3 kartus node list for///////////////////////////


for (let index = 0; index < ul.length; index++) {
    for (let i = 0; i < li.length; i++) {
        console.log(ul[index].dataset.value, li[i].dataset.value);
    };
};


for (let index = 0; index < ul.length; index++) {
    for (let i = 0; i < li.length; i++) {
        console.log(ul[index].dataset.value, [i]);
    };
};


for (let index = 0; index < ul.length; index++) {
    for (let i = 0; i < li.length; i++) {
        if (li[i].dataset.value === 'a') {
            console.log(ul[index].dataset.value, li[i].dataset.value);
        };
    };    
};


for (let index = 0; index < ul.length; index++) {
    for (let i = 0; i < li.length; i++) {
        if (li[i].dataset.value === 'b') {
            console.log(ul[index].dataset.value, [i]);
        };
    };    
};




///////////////////pakartoti 3 kartus node list foreach///////////////////////////


ul.forEach(e => li.forEach(i => console.log(e.dataset.value, i.dataset.value)));

ul.forEach(e => li.forEach((i, m) => console.log(e.dataset.value, m)));

ul.forEach(e => li.forEach(i => {
    if (i.dataset.value === 'a') {
        console.log(e.dataset.value, i.dataset.value);
    };
}));

ul.forEach(e => li.forEach((i, m) => {
    if (i.dataset.value === 'b') {
        console.log(e.dataset.value, m);
    };
}));



///////////////////if parasytas kaip funkcija///////////////////////////

///////////////////vardine funkcija///////////////////////////

function s(ia, ma) {
    return ia[ma] === 'b';
};

ul.forEach(e => li.forEach((i, m) => {
    if ( s(i, m) ){
        console.log(e.dataset.value, [m]);
    };
}));

/////////////////////anonimine funkcija///////////////////////////

const b = function(ia, ma) {
    return ia[ma] === 'b';
};

ul.forEach(e => li.forEach((i, m) => {
    if ( b(i, m) ){
        console.log(e.dataset.value, [m]);
    };
}));

// ///////////////////arrow funkcija///////////////////////////

const ba = (ia, ma) => ia[ma] === 'b';

ul.forEach(e => li.forEach((i, m) => {
    if ( ba(i, m) ){
        console.log(e.dataset.value, [m]);
    };
}));