
'use strict';

// Установка и уменьшение значения счётчика
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
  let count = 0;
  function counter() {
    return counter.count++;
  };

  counter.set = function (value) {
    counter.count = value;
  };

  counter.decrease = function () {
    counter.count--;
  };
  counter.count = 0;

  return counter;
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // установить новое значение счётчика

alert(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert(counter()); // 10 (вместо 11)
