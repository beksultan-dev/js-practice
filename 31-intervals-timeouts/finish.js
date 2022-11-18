/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

function counter() {
    let num = 1;
    return function() {
        console.log(`Сообщение номер ${num++}`);
    }
}
const counterMessage = counter();

const interval = setInterval(() => {
    counterMessage();
}, 2000);

setTimeout(() => {
    clearInterval(interval);
}, 11000);