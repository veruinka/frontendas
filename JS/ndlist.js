// Naudokite funkcija rand(). 
// Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės. 
// Atspausdinkite rezultatą naudodami console.log()
function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var k = rand(0, 4), l = rand(0, 4);

if (k > l) {
    console.log('1:', k / l);
}
else if (l > k) {
    console.log('1.1:', k / l);
}

// Naudokite funkcija rand(). 
// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
// Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.
var m = rand(0, 25), n = rand(0, 25), e = rand(0, 25);
console.log('2:', (m + n + e)/3);

// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). 
// Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 
var a = rand(-1, -10), b = rand(1, 10), c = rand(1, 10);

if (a > 0) {
    
}
else if (b > 0) {
    
}
a > 0, b > 0, c > 0;
var trik = a && b && c;
console.log('3:', trik);

// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
// Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
// Rezultatus atspauzdinkite su console.log()
var d = rand(0, 2), j = rand(0, 2), o = rand(0, 2), p = rand(0, 2);
while (rand(0, 2) === 0) {
    console.log('4:', d, j, o, p);
}
while (rand(0, 2) === 1) {
    console.log('4.1:', d, j, o, p);
}
while (rand(0, 2) === 2) {
    console.log('4.2:', d, j, o, p);
}

// Naudokite funkcija rand(). 
// Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
// Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius
var r = rand(-10, 10), s = rand(-10, 10), t = rand(-10, 10);

if (rand(-10, 10) < 0) {
    console.log('5:', '+' + r + '+');
}
else if (rand(-10, 10) > 0) {
    console.log('5.1:', '-' + s + '-');
}
else if (rand(-10, 10) = 0) {
    console.log('5.2:', '*' + t + '*');
}

// Įmonė parduoda žvakes po 1 EUR. 
// Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
// Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. 
// Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
var zvkaina, zvkiekis = rand(5, 3000);

if (zvkiekis > 2000) {
    zvkaina = (zvkiekis*4)/100;
    console.log('6:', zvkiekis, '-', zvkaina);
}
else if (zvkiekis > 1000) {
    zvkaina = (zvkiekis*3)/100;
    console.log('6.1:', zvkiekis, '-', zvkaina);
}

// Naudokite funkcija rand(). 
// Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
// Paskaičiuokite jų aritmetinį vidurkį. 
// Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
// Abu vidurkius atspausdinkite su console.log()

console.log('7:');