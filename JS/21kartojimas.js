const A = ['a', 'b', 'a', 'a', 'b', 'b', 'a', 'b', 'a', 'a', 'b'];


for (let index = 0; index < A.length; index++) {
    console.log('1:', A[index]);
};


for (let index = 0; index < A.length; index++) {
    console.log('2:', [index]);
};


for (let index = 0; index < A.length; index++) {
    if (A[index] === 'a') {
        console.log('3:', A[index]);
    };
};

for (let index = 0; index < A.length; index++) {
    if (A[index] === 'b') {
        console.log('4:', [index]);
    };
};

A.forEach (e => console.log('5:', e));
A.forEach (arrayValue => console.log('5.1:', arrayValue));

A.forEach ((arrayValue, index) => console.log('6:', index));

A.forEach (arrayValue => {
    if(arrayValue === 'a')
    {console.log('7:', arrayValue)}
});

A.forEach ((arrayValue, index) => {
    if(arrayValue === 'b')
    {console.log('8:', index)}
});

