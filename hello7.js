'use strict';

let from = 3;
let to = 7;

printNumbers1(from, to);

function printNumbers(from, to) {
  let i = from;
  let timerId = setInterval(() => {if(i <= to) {alert(i++)} 
    else {clearInterval(timerId)}}, 1000);
}

function printNumbers1(from, to) {
  let i = from;
  let timerId = setTimeout(function tick() {
    if(i <= to) {
      alert(i++); 
      setTimeout(tick, 1000)
    } 
    else {
      clearInterval(timerId)
    }
  }, 1000);
}


// Заметим, что в обоих решениях есть начальная задержка перед первым выводом. 
// Она составляет одну секунду (1000мс). 
// Если мы хотим, чтобы функция запускалась сразу же, 
// то надо добавить такой запуск вручную на отдельной строке, вот так:
function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}
