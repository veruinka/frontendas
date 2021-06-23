const A = ['a', 'b', 'a', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'b'];

///////////////////////////////1 masyvas for////////////////////////



for (let index = 0; index < A.length; index++) {
    console.log('1.1:', A[index]);
};


for (let index = 0; index < A.length; index++) {
    console.log('2.1:', [index]);
};


for (let index = 0; index < A.length; index++) {
    if (A[index] === 'a') {
        console.log('3.1:', A[index]);
    };
};

for (let index = 0; index < A.length; index++) {
    if (A[index] === 'b') {
        console.log('4.1:', [index]);
    };
};


///////////////////////2 masyvas foreach//////////////////////////



A.forEach (e => console.log('1.2:', e));
A.forEach (arrayValue => console.log('1.2.1:', arrayValue));

A.forEach ((arrayValue, index) => console.log('2.2:', index));

A.forEach (arrayValue => {
    if(arrayValue === 'a')
    {console.log('3.2:', arrayValue)}
});

A.forEach ((arrayValue, index) => {
    if(arrayValue === 'b')
    {console.log('4.2:', index)}
});

////////////////////////////////////////////////////////////////////////////////



const B = document.querySelectorAll('li');

///////////////////////////3 node list//////////////////////////


for (let index = 0; index < A.length; index++) {
    console.log('1.1:', A[index]);
};







B.forEach(e => console.log('1.4:', e.dataset.value));


