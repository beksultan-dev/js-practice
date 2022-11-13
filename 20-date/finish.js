/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

// ********** task ***********
const currentTime = new Date();

const currentTimeInMs = currentTime.getTime();

console.log(currentTimeInMs);