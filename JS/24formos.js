// 1.Sukurti text tipo input elementą ir mygtuką. 
// Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 

document.querySelector('[name=firstUzd]').addEventListener('change', e => {
    console.log(e.target.value);
});


// 2.Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

document.querySelector('#secondUzd').addEventListener('input', e => {
    console.log(e.target.value);
});


// 3.Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log

document.querySelectorAll('[name=thirdUzd]').forEach(e => e.addEventListener('change', e => {
    console.log(e.target.value);
}));


// 4.Sukurti vieną checkbox tipo elementą. 
// Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”

document.querySelector('[name=pazym]').addEventListener('change', () => {
    if (document.querySelector('[name=pazym]').checked === true) {
        console.log('Pažymėta');
    }
    else{
        console.log('Nepažymėta');
    }
});


// 5.Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų reikšmes.

document.querySelectorAll('[name=fifeUzd]').forEach(el => {
    el.addEventListener('change', () => {
    document.querySelectorAll('[name=fifeUzd]').forEach(e => {
        if(e.checked) {
            console.log(e.value);
        };  
    });
})});


// 6.Sukurti elementą h1. 
// Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.

const h1 = document.querySelector('h1');

document.querySelector('[name=firsth1]').addEventListener('change', () => {
    let A = document.querySelector('[name=firsth1]').value;
    h1.innerText = A;
});

document.querySelector('#secondh1').addEventListener('input', () => {
    let A = document.querySelector('#secondh1').value;
    h1.innerText = A;
});

document.querySelectorAll('[name=thirdh1]').forEach((e,i) => e.addEventListener('change', e => {
    let A = e.target.value;
    h1.innerText = A;
}));

document.querySelector('[name=pazymh1]').addEventListener('change', () => {
    if (document.querySelector('[name=pazymh1]').checked === true) {
        let A = 'Pažymėta';
        h1.innerText = A;
    }
    else{
        let A = 'Nepažymėta';
        h1.innerText = A;
    }
});

document.querySelectorAll('[name=fifeh1]').forEach(el => {
    el.addEventListener('change', () => {
        let out = '';
        document.querySelectorAll('[name=fifeh1]').forEach(e => {
        if(e.checked) {
            out += e.value + ' ';
        };
        h1.innerText = out;
    });
})});


// 7.Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai sukurtuose elementuose h3

const h3 = document.createElement('h3');
const B = document.querySelector('[name=firsth3]');

document.body.insertBefore(h3, B);

document.querySelector('[name=firsth3]').addEventListener('change', () => {
    let A = document.querySelector('[name=firsth3]').value;
    h3.innerText = A;
});

document.querySelector('#secondh3').addEventListener('input', () => {
    let A = document.querySelector('#secondh3').value;
    h3.innerText = A;
});

document.querySelectorAll('[name=thirdh3]').forEach((e,i) => e.addEventListener('change', e => {
    let A = e.target.value;
    h3.innerText = A;
}));

document.querySelector('[name=pazymh3]').addEventListener('change', () => {
    if (document.querySelector('[name=pazymh3]').checked === true) {
        let A = 'Pažymėta';
        h3.innerText = A;
    }
    else{
        let A = 'Nepažymėta';
        h3.innerText = A;
    }
});

document.querySelectorAll('[name=fifeh3]').forEach(el => {
    el.addEventListener('change', () => {
        let out = '';
        document.querySelectorAll('[name=fifeh3]').forEach(e => {
        if(e.checked) {
            out += e.value + ' ';
        };
        h3.innerText = out;
    });
})});


// 8.Pakartoti 1-5 uždavinius. 
// Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). 
// Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.
let C = [];

document.querySelector('#b1').addEventListener('click', () => {
    C.push(document.querySelector('[name=firstmas]').value);
    console.log(C);
});


let D = [];

document.querySelector('#secondmas').addEventListener('input', () => {
    D.push(document.querySelector('#secondmas').value);
    console.log(D);
});


let E = [];

document.querySelectorAll('[name=thirdmas]').forEach((e) => e.addEventListener('input', () => {
    E.push(document.querySelector('[name=thirdmas]').value);
    console.log(E);
}));


let F = [];

document.querySelector('[name=pazymas]').addEventListener('change', () => {
    if (document.querySelector('[name=pazymas]').checked === true) {
        F.push('Pažymėta');
        console.log(F);
    }
    else{
        F.push('Nepažymėta');
        console.log(F);
    }
});


let G = [];

document.querySelectorAll('[name=fifemas]').forEach(el => {
    el.addEventListener('change', () => {
        let out = '';
        document.querySelectorAll('[name=fifemas]').forEach(e => {
        if(e.checked) {
            out += e.value + ' ';
        };
    });
    G.push(out);
    console.log(G);
})});


// 9.Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).
document.querySelector('#b11').addEventListener('click', () => {
    C.forEach((e) => {
        const h3 = document.createElement('h3');
        const B = document.querySelector('#b11');
        document.body.insertBefore(h3, B);
        h3.innerText = e;
    });
    D.forEach(e => {
        const h3 = document.createElement('h3');
        const B = document.querySelector('#b11');
        document.body.insertBefore(h3, B);
        h3.innerText = e;
    });
    E.forEach(e => {
        const h3 = document.createElement('h3');
        const B = document.querySelector('#b11');
        document.body.insertBefore(h3, B);
        h3.innerText = e;
    });
    F.forEach(e => {
        const h3 = document.createElement('h3');
        const B = document.querySelector('#b11');
        document.body.insertBefore(h3, B);
        h3.innerText = e;
    });
    G.forEach(e => {
        const h3 = document.createElement('h3');
        const B = document.querySelector('#b11');
        document.body.insertBefore(h3, B);
        h3.innerText = e;
    });
});


// 10.Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.
document.querySelector('#b12').addEventListener('click', () => {
    C = 
    D = 
    E = 
    F = 
    G = [];
});


// 11.Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
document.querySelector('#b13').addEventListener('click', () => 
    document.querySelectorAll('h3').forEach( e => {
        e.remove();
}));


// 12.Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. 
// Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. 
// Kintamąjį išvesti i console.log. 
// Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje.
const H = {};

document.querySelector('#b14').addEventListener('click', () => {    H.C = C;
    H.C = C;
    H.D = D;
    H.E = E;
    H.F = F;
    H.G = G;
    
    const js = JSON.stringify(H);
    console.log(js);

    const js2 = JSON.parse(js);
    for (const JSS in js2)
    js2[JSS].forEach(e => {
        const h3 = document.createElement('h3');
        const B = document.querySelector('#b14');
        document.body.insertBefore(h3, B);
        h3.innerText = e;
    });
});