const masyvas = [55, 77, 99, 100]

// const [a1, a2, a3, a4] = masyvas;
// console.log(a1, a2, a3, a4);

// 1.const masyvas1 = [55, 77, 99, 100]; // => {a1: 55, a2: 77, a3: 99, a4: 100}
// const masyvas2 = [55, 77, 99, 100, 777]; // => {a1: 55, a2: 77, a3: 99, a4: 100, a5: 777}
const obj = {};
masyvas.forEach((e, i) => obj[i] = e);
console.log('1:', obj);


// 2.Ir atvirkščiai.
const mas = [];
for(const prop in obj) {
    mas.push(obj[prop]);
}
console.log('2:', mas);


// 3.Iš JSON padaryti sąrašą su li elementais, kuriuose yra knygų kategorijos:
// const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]'
const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]'

window.addEventListener('DOMContentLoaded', () => {
    const arr = JSON.parse(json);

// 4.Padaryti, kad sąrašas būtų išrūšiuotas pagal title abėcelės tvarka
    arr.sort((a, b) => {
        if(a.title > b.title) {
            return 1;
        }
        if(a.title < b.title) {
            return -1;
        }
        return 0;
    });
///////////////////////////////////////////////////////////////////////

    document.querySelector('body').appendChild(document.createElement('ul'));

    arr.forEach(e => {
        const A = document.createTextNode(e.title);
        const B = document.createElement('li');
        B.appendChild(A);
        document.querySelector('ul').appendChild(B);
    });

    // arr.forEach(e => {
    //     document.createElement('li').appendChild(document.createTextNode(e.title));
    //     document.querySelector('ul').appendChild(document.querySelector('li'));
    // });


// 5.Sukurti dar du masyvus pagal masyvą,  kur pirmas masyvas yra duoto masyvo reikšmių daugyba iš 2 o antras masyvas yra duoto masyvo reikšmių kvadratas.
    const arr1 = [5, 8, 9, 22];

    const arr2 = arr1.map(e => e*2);
    const arr3 = arr1.map(e => e**2);

    console.log('5:', arr2, arr3);
});