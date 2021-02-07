// Get summ of array nums
/*
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((result, num) => result + num, 0);

console.log(sum);
*/

// Find the sum of the first N elements up to the first zero
/*
const nums = [1, 2, 3, 4, 5, 0];
let answer = 0;
const sum = nums.reduce((acc, num) => {
    if (num === 0) {
       answer = acc;
    } else {
        return acc += num;
    }
}, 0);

answer = sum ? sum : answer;
console.log(answer);
*/
// От этого решения воняет прям, ощущение что можно сделать намного лучше.

// Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = 0;
nums.reduce((acc, item, i) => {
    if (acc > 10 && !answer) {
        answer = i;
    }
    return acc += item;
}, 0)
console.log(answer);
*/

