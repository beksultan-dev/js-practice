/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
    console.log('Привет из функции fn')

    return function num(a) {
        console.log(a)
    }
}

fn()(true) //true