// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// 0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
let PrimNums = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// function isPrime(num) {
//     if(num < 2) return false;
//     for (var i = 2; i < num; i++) {
//         if(num%i==0)
//             return false;
//     }
//     return true;
// }
// i = 0;
// while( i < 100){
//     if(isPrime(i)) console.log(i);
//     i++
// }

console.log("Простые числа от 0 до  100")
let primNums = []
let nums = 0;
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++){
        if (nums%i === 0) {
            check = false;
            break;
        }
    }
    if (check) primNums.push(nums);
    nums++;
}
console.log(primNums)
console.log(PrimNums)