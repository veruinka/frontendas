// Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5 - 25;
var a = 6, b = 9, c = 21;

// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
var d = a + b + c;
console.log('A1:', d);

// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
var string = String(a) + String(b) + String(c);
// (2 variantas):
var string = '' + a + b + c;
console.log('B1:', string);

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
var string2 = a + ' ' + b + ' ' + c;
console.log('D1:', string2);

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspauszdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
var string3 = a + ' ' + b + ' ' + c + ' ' + d;
console.log('D1:', string3);

// Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5 - 10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand1 = rand(5, 10);
console.log('2:', rand1);

// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. 
// Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
var f = 'Labas', i;
for(i = 0; i < 5; i++){
    console.log('3:', f);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
var i;
for(i = 0; i < 7; i++){
    console.log('4:', rand1);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
var i;
for(i = 0; i < rand1; i++){
    console.log('5:', rand1);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
var i;
for(i = 0; i < rand1; i++){
    if (rand > 7) {
        console.log('6:', rand1);
    }
}

// Sukurkite kintamąjį už ciklo ribų. 
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10-20. 
// Ciklą kartokite 5 kartus;
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
var z;
for(i = 0; i < 5; i++) {
    z = rand(10, 20);
    console.log('A7:', z);
}

// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
var ran, kib = 0;
for(i = 0; i < 5; i++) {
    ran = rand(10, 20);
    kib =+ ran;
}
console.log('B7:', kib);

// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
var kib2 = ''; suma2 = 0;
for (let i = 0; i < 5; i++) {
    ran = rand(10, 20);
    suma2 =+ ran;
    kib2 =+ ran + ' ';
}
console.log('C7:', kib2);

// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
// Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log;
var kib2 = ''; suma2 = 0;
for (let i = 0; i < 5; i++) {
    ran = rand(10, 20);
    suma2 =+ ran;
    kib2 =+ ran + ' ';
}
kib2 += suma2;
console.log('D7:', kib2);

// Sukurkite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
// Sukurkite kintamąjį už ciklo ribų. 
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10-25. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
var rand2;
do{
    rand2 = rand(10, 20);
    console.log('A8:', rand2);
}while (rand >= 12);

// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
var suma3 = 0;
do{
    rand2 = rand(10, 20);
    console.log('B8:', rand2);
    suma3++;
}while (rand2 >= 12)

console.log('B8:', 'suma', suma3);

// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
var suma4 = 0;
do{
    rand2 = rand(10, 20);
    console.log('C8:', rand2);
    if (rand2 <= 18) {
        suma4 =+ rand2;
    }
}while (rand2 >= 12);

console.log('C8:', 'suma', suma4);

// Sumą skaičiuokite kaip B dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
var suma5 = 0; counting = 0;
do{
    rand2 = rand(10, 20);
    console.log('D8:', rand2);
    if (rand2 <= 18) {
        suma5 =+ rand2;
    }
    else{
        counting++;
    }
}while (rand2 >= 12);

console.log('D8:', 'suma', suma5);
console.log('D8:', 'atmesta', counting);

// Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
var lyg = 0; nelyg = 0;

do{
    rand2 = rand(10, 20);
    console.log('D8:', rand2);
    if (!(rand2 % 2)) {
        lyg++;
    }
    else{
        nelyg++;
    }
}while (rand2 >= 12);

console.log('D8:', 'Lyginiai', lyg);
console.log('D8:', 'Ne lyginiai', nelyg);

// Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 
var countSmall; 
var countBig = 0;
var countSmallAll = 0;

do{
countSmall = 0;

do{
    rand2 = rand(10, 20);
    countSmall++;
    countSmallAll++;
}while (rand2 >= 12);

countBig++;
}while (countSmall < 20);

console.log('E8:', 'BIG', countBig);
console.log('E8:', 'ALL', countSmallAll);

// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
var rand99;
var mazas9 = 0;
var didelis9 = 0;
var mi;
do {
    didelis9++;
    rand99 = rand(5, 10);
    console.log('9A:', rand99);
    for(mi = 0; mi < rand99; mi++) {
        mazas9++;
    }

}while(rand99 != 5);
console.log('9A:', 'mazas', mazas9);
console.log('9A:', 'didelis', didelis9);

// Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
var count5 = 0;
do {
    rand99 = rand(5, 10);
    if (rand99 === 5) {
        count5++;
    }
    console.log('9B:', rand99);
}while(count5 < 3);

count5 = 0;
do {
    rand99 = rand(5, 10);
    if (rand99 === 5) {
        count5++;
    }
    else {
        count5 = 0; 
    }
    console.log('9C:', rand99);
}while(count5 < 3); 

// Kazys ir Petras žaidžiai bingo. 
// Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. 
// Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. 
// Taškų kiekį generuokite funkcija ​rand()​. 
// Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
// Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
var petras = 0, kazys = 0;
do {
    petras += rand(10, 20);
    kazys += rand(5, 25);
} while (petras <= 222 && kazys <= 222);
if (petras > 222 && kazys > 222) {
    console.log('10: Nutiko lygies. Petras:', petras, 'Kazys:', kazys);
}
else if (petras > kazys) {
    console.log('10: Laimejo Petras. Petras:', petras, 'Kazys:', kazys);
}
else {
    console.log('10: Laimejo Kazys. Petras:', petras, 'Kazys:', kazys);
}