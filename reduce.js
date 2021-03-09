// Get summ of array nums
// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((result, num) => result + num, 0);
//
// console.log(sum);

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


/*
Массив частичных сумм
На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
То есть:
для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Ещё пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.
*/
function getSums(arrayOfNums) {
  let result = [];
  if (!arrayOfNums.length) return result;

  arrayOfNums.reduce((acc, item, i) => {
    result.push(item + acc)
    return item + acc
  }, 0)

  return result;
}

const result = getSums([ 1, 2, 3, 4, 5 ]);
console.log(result); //[ 1, 3, 6, 10, 15 ] expected
