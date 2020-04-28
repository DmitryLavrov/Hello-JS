'use strict';

// Фильтрация уникальных элементов массива
function unique(arr) {
    let set = new Set(arr);
    // return Object.from(Entries(set.entries()));

    return Array.from(new Set(arr));

    // let arrFiltered = [];
    // for (let value of set) arrFiltered.push(value);

    // то же самое с forEach:
    // set.forEach((value, valueAgain, set) => {
    //     arrFiltered.push(value);
    // });

    return arrFiltered;

}

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());


    // Мое решение

    // let set = new Set();

    // arr.forEach(item => {
    //     set.add(item.toLowerCase()
    //         .split('')
    //         .sort()
    //         .join(''));
    //     console.log(item);
    //     console.log(item.toLowerCase().split(''));
    //     console.log(item.toLowerCase().split('').sort().join(''));
    //     console.log(set);
    // });

    // return Array.from(set);
}



let map = new Map();
map.set("name", "John");

// Это потому что map.keys() возвращает итерируемый объект, а не массив.
// Мы можем конвертировать его в массив с помощью Array.from:
let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");




let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


// Сумма свойств объекта
function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650


// Подсчёт количества свойств объекта
function count(obj) {
    return Object.entries(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2


let { name, age: years, isAdmin = false } = user;


// Максимальная зарплата
function topSalary(salaries) {
    let maxSalaryName = null;
    let maxSalary = 0;
    for (let item of Object.entries(salaries)) {
        let [name, salary] = item;
        if (salary > maxSalary) {
            maxSalary = salary;
            maxSalaryName = name;
        }
    }
    return maxSalaryName;
}

alert(topSalary(salaries));
