function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const divList = document.querySelectorAll('div');
console.log(divList);

for (let i = 0; i < divList.length; i++){
    if (i % 2 === 0) {
        divList[i].classList.add('what');
    }
    else{
        divList[i].style.height = "100px";
        divList[i].style.width = "100px";
        divList[i].style.backgroundColor = "red";
        divList[i].style.margin = '15px';
}};

