function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var rand2;
do{
    rand2 = rand(10, 20);
    console.log('A8:', rand2);

    if (rand >= 12) {
        break;
    }
// }while (true);
