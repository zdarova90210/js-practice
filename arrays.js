//Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.
const nums = [9, 17, 0, 23.5, -25, 9, -6, 121];
const answer = nums
    .filter(num => num > 0)
    .map(num => Math.sqrt(num));
console.log(answer);
