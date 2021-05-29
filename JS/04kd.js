function rand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for (var i = 1, answer = ''; i <= 21; i++){

//     if (i !== 1){
//         answer += ', ';
//     }
//     answer += rand(10, 99);
//     // answer = answer + rand(10, 99);
// }
// console.log(answer);

var count = 0, sum = 0; answer = '', firstTime = true;

do{
    if (!firstTime){
        answer += ', ';
    }
    firstTime = false;
    digit = rand(10, 99);
    answer += digit;
    sum += digit;

} while(sum < 250)

console.log(answer);
console.log(sum - digit);