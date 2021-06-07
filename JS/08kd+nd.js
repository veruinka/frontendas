function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var mas = ['viena', 'duju', 'tria', 'kita'];

mas[3] = 'gveda';
console.log('masyvas:', mas);

for ( index = 0; index < mas.length; index++) {
    console.log('indexo numeris:' + index, mas[index]);
}

mas.push('faru', 'nuna');
mas.unshift('maned');

mas.shift();
mas.pop();
console.log('masyvas:', mas);


// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
let pretas = [];

for (let index = 0; index < 30; index++) {
    pretas.push(rand(5, 25));
}
console.log('1pretas:', pretas.slice());

// Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

// for (let index = 0; index < pretas.length; index++) {
//     console.log(pretas[index]); - pravaziuot pro visus reiksmius
// }

let did10 = 0;
for (let index = 0; index < pretas.length; index++) {
    if (pretas[index] > 10) {
        did10++;
    }
}

console.log('2A: Reiksmiu didesniu uz 10 yra -', did10);

// Raskite didžiausią masyvo reikšmę ir jos indeksą;
let did = 5; didIndex = 0;
for (let index = 0; index < pretas.length; index++) {
    
    if (pretas[index] > did) {
        did = pretas[index];
        didIndex = index;
    }
}

console.log('2B: did, didIndex -', did, didIndex);

// Raskite didžiausiu masyvo reikšmiu ir ju indeksus;
let did1 = 5; didIndex1 = [];
for (let index = 0; index < pretas.length; index++) {
    
    if (pretas[index] > did1) {
        did1 = pretas[index];
        didIndex1 = []; //masyvo isvalymas
    }
    if (pretas[index] === did1) {
        didIndex1.push(index);
    }
}

console.log('2B, jei yra daugiau, nei viena didziausia reiksme: did1, didIndex1 -', did1, didIndex1);

// Suskaičiuokite visų porinių indeksų reikšmių sumą;
let indexSuma = 0; indexNSuma = 0;
for (let index = 0; index < pretas.length; index++) {
    
    if (index % 2 === 0) {
        indexSuma += pretas[index]; //poriniai
    }
    else{
        indexNSuma += pretas[index]; //neporiniai. papaildymas
    }
}

console.log('2C: indexSuma', indexSuma, 'indexNSuma', indexNSuma);

// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
const naujas = [];
for (let index = 0; index < pretas.length; index++) {
    naujas.push(pretas[index] - index);
}

console.log('2D:', naujas.slice());

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
for (let index = 0; index < 9; index++) {
    pretas.push(rand(5, 25));
}

console.log('2E:', pretas.slice());

// Iš masyvo elementų sukurkite du naujus masyvus. 
// Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
const porMas = []; 
const neporMas = [];
for (let index = 0; index < pretas.length; index++) {
    
    if (index % 2 === 0) {
        porMas.push(pretas[index]); //poriniai
    }
    else{
        neporMas.push(pretas[index]); //neporiniai. papildymas
    }
}

console.log('2F:', porMas.slice(), neporMas.slice());

// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
for (let index = 0; index < pretas.length; index += 2) { //<---- padidintas zingsnys, dabar yra kas antras
    if(pretas[index] > 15){
        pretas[index] = 0;
    }
}

console.log('2G:', pretas.slice());

// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
let ind = -1;
let ii = 0;
do{
    if(pretas[ii] > 10){
        ind = ii;
    }
    ii++;
} while(ind === -1 && ii < pretas.length);

console.log('2H:', ind);

//Naudodami funkcija splice() is masyvo istrinkite visus elmentus turincius porini indeksa:
for (let index = 0; index < pretas.length; index++) { 
    pretas.splice(index, 1);
}

console.log('2I:', pretas.slice());

// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 
// Suskaičiuokite kiek yra kiekvienos raidės.
const abcd = ['A', 'B', 'C', 'D'];
const abecele = [];

for (let index = 0; index < 200; index++) {
    abecele.push(abcd[rand(0, 3)]);
}

console.log('3:', abecele.slice());

const counter = [0, 0, 0, 0];
for (let index = 0; index < abecele.length; index++) { 
    counter[abcd.indexOf(abecele[index])]++;
}

console.log('3.1:', counter.slice());

// // Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. 
// Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
const trys = [ [], [], [] ];
const triraidis = [];
const uniValue = [];
const uniCombo = [];

for (let j = 0; j < 3; j++) {
    for (let index = 0; index < 200; index++) {
        trys[j].push(abcd[rand(0, 3)]);
    }
}

console.log('4:', trys.slice());


for (let index = 0; index < 200; index++) {
    triraidis.push(trys[0][index]+trys[1][index]+trys[2][index]);
}

console.log('4.1:', triraidis.slice());


top: for (let index = 0; index < triraidis.length; index++){

    if (uniCombo.indexOf(triraidis[index]) === -1) {
        uniCombo.push(triraidis[index]);
    }

    let now = triraidis[index];
    let count = 0;
    for (let j = 0; j < triraidis.length; j++){
        if (triraidis[j] == now) {
            count++;
            if (count > 1) {
                continue top
            }
        }
    }
    uniValue.push(now);
}

console.log('4.2:', uniCombo.slice());
console.log('4.3:', uniValue.slice());

// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
// Masyvų ilgiai 100. 
// Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
const antr = [ [], [] ];
let counte = 0

for (let r = 0; r < 2; r++) {
    do{
        counte++;
        let rando = rand(100, 999);
            if (antr[r].indexOf(rando) === -1) {
                antr[r].push(rando);
            }
    } while(antr[r].length < 100);
}

console.log('5:', antr, counte);

// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
const m6 = [];

for (let index = 0; index < antr[0].length; index++){
    if (antr[1].indexOf(antr[0][index]) === -1) {
        m6.push(antr[0][index]);
    }
}

console.log('6:', m6);

// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
const m7 = [];

for (let index = 0; index < antr[0].length; index++){
    if (antr[1].indexOf(antr[0][index]) !== -1) {
        m7.push(antr[0][index]);
    }
}

console.log('7:', m7);

// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
const funny = [];

for (let index = 0; index < antr[0].length; index++){
    funny[antr[0][index]] = antr[1][index];
}

console.log('8:', funny);

// // Sugeneruokite 10 skaičių masyvą pagal taisyklę: 
// Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
// Trečias, pirmo ir antro suma. 
// Ketvirtas- antro ir trečio suma. 
// Penktas trečio ir ketvirto suma ir t.t.
const fm = [];

fm.push(rand (5, 25), rand (5, 25));

for (let index = 2; index < 10; index++){
    let sum = fm[index - 1] + fm[index - 2];
    fm.push(sum);
}

console.log('9:', fm);