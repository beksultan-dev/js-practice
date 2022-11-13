/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

// *********** task ************
const nickname = 'elon musk';
const isString = nickname instanceof String;

console.log(isString);
console.log(typeof nickname);

const newNickname = nickname.toUpperCase();
console.log(newNickname);


const user = new String('pavel');
console.log(user instanceof String);
console.log(typeof user);
console.log();