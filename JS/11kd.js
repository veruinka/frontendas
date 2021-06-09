function zebras(long, fill, yep = 'arrz') {

    const masyvas = [];
    for(let i = 0; i < long; i++){
        masyvas.push(fill);
        masyvas.push(yep);
    }
    return masyvas;
}

let A = 2;
let B = 6;
let C = 4;

let AA = zebras(A, 'Hajo');
console.log(AA);
let BB = zebras(B, 'Halo');
console.log(BB);
let CC = zebras(C, 'Hej');
console.log(CC);