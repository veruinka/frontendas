// Kvizas. Reikia inputo type text. Reikia mygtuko "GO".
// Reikia antro inputo type text
// Paspaudus mygtuką, tekstas kuris yra inpute nr 1 būtų atvaizduotas konsolėjė, o tekstas iš inputo nr 2 būtų atvaizduotas dinamiškai sukurtame tage h1.


document.querySelector('#but1').addEventListener('click', () => {
    console.log(document.querySelector('[name=A]').value);
    const h1 = document.createElement('h1');
    const inp = document.createTextNode(document.querySelector('[name=B]').value);
    h1.appendChild(inp);
    document.querySelector('body').appendChild(h1);
});


for (let index = 0; index < 3; index++) {
    document.querySelector('#but3').addEventListener('click', () => {
        console.log(document.querySelector('[name=A]').value);
        const h1 = document.createElement('h1');
        const inp = document.createTextNode(document.querySelector('[name=B]').value);
        h1.appendChild(inp);
        document.querySelector('body').appendChild(h1);
    });
};