const setas = new Set();

setas.add('grybas');
setas.add('aguras');
setas.add('pupelė (ankštinė)');


//1.issortinti seta
const A = [...setas].sort();
setas.clear();
A.forEach(v => setas.add(v));

console.log(setas);


//2.setą įrašyti į localstorage, tada nuskaityti į setasCopy kintamąjį


//3.surusiuoti, kad setas su didziausiu skaiciu vienetu eitu pirmas
const hard = [
    new Set([2,8,7]),
    new Set([2,0,7,8,7]),
    new Set([2,8,0,7,1,9]),
    new Set([2,8,7,0])
];


//4.padaryti kad, masyvai eina pirmi, tada eina setai
console.log(hard instanceof Array);
console.log(setas instanceof Set);
const easy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
];


//5.masyve easy palikti tik setus



/////////////////////////////Map//////////////////////////////////////
const map1 = new Map();
map1.set('Petras', 'jo stalciuko turinys');
map1.set('Jonas', 'jo stalciukas');
map1.set('Mama', 'jos stalciukas<3');

console.log('paieska:', map1.has('Mama'));
console.log('stalciuko reveal:', map1.get('Jonas'));

for(const val of map1){
    console.log('for of:', val);
};

const mapAr = [...map1]
console.log('...:', mapAr);

console.log(map1);


//1.
const map = new Map();

map.set('Petras', 'kas guli Petro stalčiuje');
map.set('Šarikas', 'kas guli Šariko būdoje');
map.set('Janotas', 'ką šiukšlių dėžėjė rado Janotas');

for(const val of map){
    console.log('1:', val[0]);
};


//2.mapo įrašyti į localstorage, tada nuskaityti į mapCopy kintamąjį



//3.sudėlioti tokia tvarka: masyvai, mapai, setai
const notSoEasy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    new Map([['a',2], ['b',2], ['c',2]]),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
    new Map([['a',2], ['c',2]]),
];






