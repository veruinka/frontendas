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
var a = rand(1, 10), b = rand(1, 10), c = rand(1, 10);
console.log('3:', a, b, c);
if (a + b > c && b + c > a && c + a > b) {
    console.log('GALIMA');
}
else {
    console.log('NEGALIMA');
}

// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
// Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
// Rezultatus atspauzdinkite su console.log()
var d = rand(0, 2), j = rand(0, 2), o = rand(0, 2), p = rand(0, 2);
var nuliai = 0; vienetai = 0; dvejetai = 0;
console.log(d, j, o, p);
if (d === 2) {
    dvejetai++;
}
if (j === 2) {
    dvejetai++;
}
if (o === 2) {
    dvejetai++;
}
if (p === 2) {
    dvejetai++;
}
vienetai = d + j + o + p - (dvejetai * 2);

nuliai= 4 - vienetai - dvejetai;

console.log(nuliai, vienetai, dvejetai);

// Naudokite funkcija rand(). 
// Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
// Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius
var r = rand(-10, 10), s = rand(-10, 10), t = rand(-10, 10);

if (r < 0) {
    console.log('5:', '+ ' + r + ' +');
}
else if (r > 0) {
    console.log('5.1:', '- ' + r + ' -');
}
else{
    console.log('5.2:', '* ' + r + ' *');
}

if (s < 0) {
    console.log('5:', '+ ' + s + ' +');
}
else if (s > 0) {
    console.log('5.1:', '- ' + s + ' -');
}
else{
    console.log('5.2:', '* ' + s + ' *');
}

if (t < 0) {
    console.log('5:', '+ ' + t + ' +');
}
else if (t > 0) {
    console.log('5.1:', '- ' + t + ' -');
}
else{
    console.log('5.2:', '* ' + t + ' *');
}

// Įmonė parduoda žvakes po 1 EUR. 
// Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
// Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. 
// Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
var zvkaina, zvkiekis = rand(5, 3000);

if (zvkiekis > 2000) {
    zvkaina = zvkiekis - (zvkiekis*4)/100;
    console.log('6:', zvkiekis, 'žv. už', zvkaina, 'EUR');
}
else if (zvkiekis > 1000) {
    zvkaina = zvkiekis - (zvkiekis*3)/100;
    console.log('6.1:', zvkiekis, 'žv. už', zvkaina, 'EUR');
}

// Naudokite funkcija rand(). 
// Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
// Paskaičiuokite jų aritmetinį vidurkį. 
// Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
// Abu vidurkius atspausdinkite su console.log()
var u = rand(0, 100); f = rand(0, 100); h = rand(0, 100);
y = (u + f + h)/3;

if (10 < rand(0, 100) < 90) {
    z = (u + f + h)/3;
}
console.log('7:', y, z);