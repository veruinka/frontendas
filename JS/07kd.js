function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// var rand2 = rand(10, 20);
// do{
   
//     if (rand2 <= 12) {
//         break;
//     }

// }while (true);

// console.log('A8.1:', rand2);


