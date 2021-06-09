// pele.getA() ----> isvestu i console "a" raidziu skaiciu

const kate = new String('dvi kates');
const suo = new String('trys šunys');
const pele = new String('daug pelių');

const geta = function() {
    let counter = 0;
    for(let i = 0; i < this.length; i++){
        if(this[i] === 'a') {
            counter++;
        }
    }
    console.log('A:', counter);
}

String.prototype.getA = geta;

kate.getA();
suo.getA();
pele.getA();

//PAskaiciuot argumentu vydurki, nepaisant kiek ju yra

const A = (...arg) => {
    let sum = 0;
    for (let i = 0; i < arg.length; i++){
        sum += arg[i];
    }
    console.log(sum/arg.length);
}

A(2, 6, 7, 82);