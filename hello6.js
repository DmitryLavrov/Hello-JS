
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



// Сумма с произвольным количеством скобок
// Напишите функцию sum, которая бы работала следующим образом:
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15