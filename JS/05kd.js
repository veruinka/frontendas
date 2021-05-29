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
    kib += ran;
}
console.log('B7:', kib);

// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;

console.log('C7:');

// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
// Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log;

console.log('D7:');

// Sukurkite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
// Sukurkite kintamąjį už ciklo ribų. 
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10-25. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

console.log('A8:');

// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log('B8:');

// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log('C8:');

// Sumą skaičiuokite kaip B dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log('D8:');

// Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.

console.log('E8:');

// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log('A9:');

// Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

console.log('B9:');

// Kazys ir Petras žaidžiai bingo. 
// Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. 
// Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. 
// Taškų kiekį generuokite funkcija ​rand()​. 
// Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
// Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

console.log('10:');