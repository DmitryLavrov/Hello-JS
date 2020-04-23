'use strict';

function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

function filterRange(arr, a, b) {
  return arr
    .filter(item => item >= a && item <= b);
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function copySorted(arr) {
  return arr.slice().sort();
}

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    [array[i], array[j]] = [array[j], array[i]];
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
  }
}

function getAverageAge(arr) {
  return arr.reduce((ageSum, item) => ageSum + item.age, 0) / arr.length;
}


// let arr = [5, 2, 1, -10, 8];
// // ... ваш код для сортировки по убыванию
// arr.sort((a, b) => b - a);

// let calc = new Calculator;
// alert(calc.calculate("3 + 7")); // 10

// let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
// let petya = { name: "Петя", surname: "Иванов", id: 2, age: 30 };
// let masha = { name: "Маша", surname: "Петрова", id: 3, age: 28 };

// let users = [vasya, petya, masha];
// // Трансформировать в массив имён
// let names = users.map((item) => item.name);

// alert(names); // Вася, Петя, Маша

// // Трансформировать в объекты
// let usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id
// }));

// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // Вася Пупкин

// // Отсортировать пользователей по возрасту
// sortByAge(users);

// // теперь: [vasya, masha, petya]
// alert(users[0].name); // Вася
// alert(users[1].name); // Маша
// alert(users[2].name); // Петя

// Перемешайте массив
// let arr1 = [1, 2, 3];
// shuffle(arr1);
// alert(arr1);

// Получить средний возраст
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Оставить уникальные элементы массива
function unique(arr) {
  let arrUnique = [];
  for (let item of arr) {
    if (!arrUnique.includes(item)) {
      arrUnique.push(item);
    }
  }
  return arrUnique;
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O