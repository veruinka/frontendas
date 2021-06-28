const h1 = document.querySelector('h1');

document.querySelector('button').addEventListener('click', () =>{
    fetch('http://127.0.0.1:5500/JS/apipap.htm')
    .then(response => response.text())
    .then(data => h1.innerHTML = data)
});




let output = '';

fetch('https://in3.dev/vinted/api/brands/all')
.then(response => response.json())
.then(data => {
    data.forEach((e) => {
        let node = document.createElement('li');
        let textnode = document.createTextNode(e.title);
        node.appendChild(textnode);
        document.querySelector('#ul').appendChild(node);
    //arba antras variantas:
        //output += '<li>' + e.title + '</li>';
    });
        //document.querySelector('ul').innerHTML = output;
});


fetch('https://in3.dev/vinted/api/products/1')
.then(response => response.json())
.then( data => {
        let h2 = document.querySelector('h2');
        let title = document.createTextNode(data.title);
        h2.appendChild(title);
        let node = document.createElement('img');
        node.setAttribute('src', data.img[5]);
        document.querySelector('h4').appendChild(node);
        let span = document.querySelector('span');
        let price = document.createTextNode(data.price + ' Eur');
        span.appendChild(price);
        });