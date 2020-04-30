'use strict';

// Создайте дату 20 февраля 2012 года, 3 часа 12 минут.
let d = new Date(Date.parse('2012-02-20T03:12'));
let d1 = new Date(2012, 1, 20, 3, 12);

alert(d);
alert(d1);

// Покажите день недели
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date));        // нужно вывести "ВТ

function getWeekDay(date) {
    // Метод date.getDay() возвращает номер дня недели, начиная с воскресенья.
    return ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()];
}

// День недели в европейской нумерации
alert(getLocalDay(date));       // вторник, нужно показать 2

function getLocalDay(date) {
    return date.getDay() == 0 ? 7 : date.getDay();
}


// Какой день месяца был много дней назад?
let date1 = new Date(2015, 0, 2);

alert(getDateAgo(date1, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date1, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date1, 365)); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
    let d = new Date(date);
    d.setDate(d.getDate() - days);
    return d.getDate();
}


// Последнее число месяца?
alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 1);
    date.setDate(date.getDate() - 1);

    // Можно проще:
    // let date = new Date(year, month + 1, 0);
    return date.getDate();
}


// Сколько сегодня прошло секунд?
alert(getSecondsToday());

function getSecondsToday() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    return Math.round((Date.now() - today) / 1000);
}


// Сколько секунд осталось до завтра?
alert(getSecondsToTomorrow());

function getSecondsToTomorrow() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return Math.round((tomorrow - Date.now()) / 1000);
}


// Форматирование относительной даты
alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(date) {
    let now = new Date();
    let text = '';
    if (now - date < 1000) {
        text = "прямо сейчас";
    } else if (now - date < 60 * 1000) {
        text = `${Math.round((now - date) / 1000)} сек. назад`;
    } else if (now - date < 60 * 60 * 1000) {
        text = `${Math.round((now - date) / (60 * 1000))} мин. назад`;
    } else {
        // text = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

        // отформатировать дату
        // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
        let d = date;
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

        // соединить компоненты в дату
        text =  d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }

    return text;
}