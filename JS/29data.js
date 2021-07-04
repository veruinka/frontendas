const ar = [77, 99, 105, 42];

// for (const val of ar) {
//     console.log(val);
// };

// for (const val in ar) {
//     console.log(val);
//     console.log(typeof val);
// };



const obj = {a:55, z:77, r:98, y:42};

// for (const A of obj) {
//     console.log(A, obj[A]);
// };

for (const A in obj) {
    console.log(A, obj[A]);
};



const mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(2);
mySet1.add(1);

const o1 = {a:1, b:2};
const o2 = {a:1, b:2};
mySet1.add(o1);
mySet1.add(o2);

let c1 = 'a';
let c2 = 'a';
++c1;
++c2;
console.log('===', c1 === c2); //nors jie nera identiski, bet i seta gali patekti tik vienas NaN
mySet1.add(c1);

mySet1.delete(1);

console.log('size', mySet1.size);

console.log(mySet1.has(1), mySet1.has(3));
console.log(mySet1, typeof mySet1);

for (const A of mySet1) {
    console.log('seto reiksme:', A);
};
    


const mySet2 = new Set('bla bla blu');
console.log(mySet2);



const mySet3 = new Set(['bla', 'ula', 'blu'])//.sort())
console.log('iki sortinimo:', mySet3);

const a = [...mySet3];//... - isardimas ir sudeliojimas graziai per kableli
a.sort();
mySet3.clear();
a.forEach(v =>  mySet3.add(v));

console.log('po sortinimo:', mySet3);




// 1.Sukurti setą iš 3 skirtingų stringų
// 2.Iteruoti sukurtą setą su for of
// 3.Sukuriam masyvą iš seto
// 4.į sukurtą masyvą pridedame dar du skirtingus stringus
// 5.iš sukurto masyvo, duomenis sukeliam atgal į setą
// 6.sukuriam naują setą, kuriame būtų seno seto stringų pirmos raidės
// 7.naują setą išrūšiuojame pagal abėcėlę