'use strict';

// Сумма с помощью замыканий
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b
alert(sum(1)(2)); // = 3
alert(sum(5)(-1)); // = 4

function sum(a) {
    return function f(b) {
        return a+b;
    };
}

// Фильтрация с помощью функции
let arr = [1, 2, 3, 4, 5, 6, 7];

// inBetween(a, b) – между a и b (включительно).
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert(arr.filter(item => item >= 3 && item <= 6)); // 3,4,5,6

function inBetween(a, b) {
    return function f(item) {
        return (item >= 3 && item <= 6);
    };
}


// inArray([...]) – находится в данном массиве.
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inArray(arr) {
    return function f(item) {
        return arr.includes(item);
    };
}


// Сортировать по полю
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

users.sort(byField('name'));
alert(JSON.stringify(users));
users.sort(byField('age'));
alert(JSON.stringify(users));

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
    // return function f(a, b) {
    //     a[field] > b[field] ? 1 : -1;
    // };
}
