'use strict';

// Вычислить сумму чисел до данного
// С использованием цикла.
function sumTo1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Через рекурсию
function sumTo2(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo2(n - 1);
    }
}

// С использованием формулы арифметической прогрессии.
function sumTo3(n) {
    return (1 + n) / 2 * n;
}

alert(sumTo1(100));
alert(sumTo2(100));
alert(sumTo3(100));


// Вычислить факториал
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

alert(factorial(5)); // 120


// Числа Фибоначчи
function fib(n) {
    if (n == 1 || n == 0) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function fib1(n) {
    let f1 = 1, f2 = 1;
    for (let i = 3; i <= n; i++) {
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f2;
}

alert(fib1(3)); // 2
alert(fib1(7)); // 13
alert(fib1(77)); // 5527939700884757

// Вывод односвязного списка
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printList(list);
printList1(list);

function printList(list) {
    let obj = list;
    while (obj) {
        alert(obj.value);
        obj = obj.next;
    }
}

function printList1(list) {
    alert(list.value);
    if (list.next) {
        printList1(list.next);
    }
}

// Вывод односвязного списка в обратном порядке
printListBack(list);
printListBack1(list);

function printListBack(list) {
    let obj = list;
    let arr = [];
    let i = 0;
    while (obj) {
        arr[i++] = obj.value; // или arr.push(obj.value);
        obj = obj.next;
    }
    for (let j = i-1; j >= 0; j--) {  // или for (let i = arr.length - 1; i >= 0; i--)
        alert(arr[j]);
    }
}

function printListBack1(list) {
    if (list.next) {
        printListBack1(list.next);
    }
    alert(list.value);
}
