`use strict`;

// 1.
// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.
function simpleTimer(initialSeconds) {
  let hours = `00`;
  let minutes = `00`;
  let seconds = `00`;
  /*
   Если пришло больше 3600 секунд то делим на 3600 - получаем часы. Остаток сохранили.
   Если остаток больше 60 то делим на 60 и получаем минуты. Остаток будет являться количеством секунд.
  */
  if (initialSeconds >= 3600) {
    hours = makeTwoDigitsInString(Math.floor(initialSeconds / 3600));
    initialSeconds -= hours * 3600;
  }
  if (initialSeconds >= 60) {
    minutes = makeTwoDigitsInString(Math.floor(initialSeconds / 60));
    initialSeconds -= minutes * 60;
  }
  seconds = makeTwoDigitsInString(Math.floor(initialSeconds));
  return `${hours}:${minutes}:${seconds}`;
}

function makeTwoDigitsInString(num) {
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  } else {
    return num;
  }
}

const result = simpleTimer(7517);
console.log(result); // expect 02:05:17
///////////////////////////
