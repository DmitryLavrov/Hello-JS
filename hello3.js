'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};

let jStr = JSON.stringify(user);
let user1 = JSON.parse(jStr);

alert(user1.name);



let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
    return (key != "" && value == meetup) ? undefined : value;
}, 2));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/