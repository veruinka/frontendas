// // Parašyti dvi funkcijas be parametrų red() ir green(). 
// Funkcijos turi grąžinti atitinkamus stringus “red” ir “green”. 
// Pademostruoti veikimą;
function red() {
    let A = 'red';
    return A;
}

let AA = red();

function green() {
    let B = 'green';
    return B;
}

let BB = green();

console.log('1:', AA, BB);


// Parašyti funkciją color(what). 
// Funkcija turi grąžinti splvą, priklausomai nuo argumento: jeigu what == 1 - stringą “white”, jeigu what == 2 - stringą “black”,  kitais atvejais - “no color”. 
// Pademostruoti veikimą;
function color(what) {
    if (what == 1) {
        return 'White';
    }
    else if (what == 2) {
        return 'Black';
    }
    else{
        return 'no color';
    }
}

console.log('2:', color(2));


// Parašykite dvi funkcijas sum(a, b) ir diff(a, b). 
// Pirma finkcija turi suskaičiuoti sumą (a+b), o kita skirtumą (a-b) su argumentais a, b ir grąžinti rezultatą. 
// Pademostruoti veikimą;
function sum(a, b) {
    return a + b;
};

function diff(a, b) {
    return a - b;
};

let a = 12;
let b = 3;

console.log('3:', sum(a, b), diff(a, b));


// // Papildyti prieš tai buvusį uždavinį, kad a ir b parametrai turėtų default argumentus lygius 0. 
// Pademostruoti veikimą;
function sum(a = 0, b = 0) {
    return a + b;
};

function diff(a = 0, b = 0) {
    return a - b;
};

console.log('4:', sum(a), diff(a));


// // Sukurkite masyvą ab [‘A’, ‘B’], masyvą cd [‘C’, ‘D’] ir masyvą fe [‘F’, ‘E’] . 
// Masyvai nėra funkcijos viduje. 
// Parašykite funkciją changeArray(array), kur sukeistų vietomis perduodamo masyvo reikšmes. 
// Pademostruoti veikimą;
const ab = ['A', 'B'];
const cd = ['C', 'D'];
const fe = ['F', 'E'];

function changeArray(array){
    let tmp = array[0];
    array[0] = array[1];
    array[1] = tmp;
    return array;
}

let mas = changeArray(fe);
console.log('5:', mas);


// Sukurti objektą car1 {make: ’volvo’} ir car2 {make: ’mb’}. 
// Objektai nėra funkcijos viduje. 
// Sukurti funkciją changeMake(car, make), kuri keistų perduodamo objekto car savybę į perduodamo make argumento reikšmę. 
// Pvz iškvietus funkciją su argumentais changeMake(car1,’ZaZ’) car1 objekte savybė pasikeistų į ‘ZaZ’.  
// Pademostruoti veikimą;
let car1 = {make: 'volvo'};
let car2 = {make: 'mb'};

function changeMake(car, make){
    car.make = make;
}

changeMake(car1,'ZaZ');

console.log('6:', car1);


// Paršyti funkcija kuri masyve visas jo reikšmes pakeistų į atsitiktinai sugeneruotus spalvų stringus: “red”, “blue” arba “green”. 
// Funkcija turi turėti du argumentus, vienas generuojamas masyvas, o kitas funkcija - splvų generatorius. 
// Pademostruoti veikimą;
function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let masyv = [4, 2, 9];
let str = ['red', 'blue', 'green'];

function pakeisti (a, b){
    a[0] = b[rand(0, 2)];
    a[1] = b[rand(0, 2)];
    a[2] = b[rand(0, 2)];
};

pakeisti(masyv, str);

console.log('7:', masyv);


// Yra masyvas [8, 9, 7, 6, 12, 48, 0, 6] 
// Išrūšiuoti masyvą naudojan sort ir atskirą rūšiavimo funkciją. 
// Pademostruoti veikimą;
let ar = [8, 9, 7, 6, 12, 48, 0, 6];

ar.sort(function (a, b) {
    return a - b;
});

console.log('8:', ar);


// Yra masyvas [“Pingvinas”, “Zebras”, “Voras”, “Vilkas”, “Zuikis”]. 
// Sukurti naują masyvą naudojant map ir atskirą funkciją, kuriame atitinkami indeksai atitiktų žodžių ilgį. 
// Pademostruoti veikimą;
let arr = ['Pingvinas', 'Zebras', 'Voras', 'Vilkas', 'Zuikis'];

const arr2 = arr.map(function(a) {
    return a.length;
});

console.log('9:', arr2);


// Yra masyvas [8, “B”, 9, 7, “A”, 6, 12, “B”, “B”, “A”, 48, 0, “A”, 6] 
// Išrūšiuoti masyvą nuo didžiausio iki mažiausio naudojant sort ir atskirą rūšiavimo funkciją. 
// “A” raidės turi eiti pačiam gele, o “B” raidės pačiame priekyje. 
// Pademostruoti veikimą;
let ara = [8, 'B', 9, 7, 'A', 6, 12, 'B', 'B', 'A', 48, 0, 'A', 6];

ara.sort(function(a, b) {
    if (a === 'A'){
       return 1;
    }
    if (b === 'B') {
        return 1;
    }
    if (b === 'A'){
        return -1;
     }
    if (a === 'B') {
        return -1;
    }
    return b - a;
});

console.log('10:', ara);