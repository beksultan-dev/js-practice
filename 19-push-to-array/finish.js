/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

// ********** task **********
const fruits = ['mango', 'peach', 'apple'];
const newFruits = ['melon', 'lemon', 'orange'];
fruits.push(...newFruits);
console.log(fruits);