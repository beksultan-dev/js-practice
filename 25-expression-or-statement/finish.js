/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //ex

const myObject = { //ex st
    x: 10,
    y: true,
}

myObject.z = 'abc' //ex

delete myObject.x //ex st

let newVariable //st

newVariable = 30 + 5 //ex

console.log(newVariable) //ex 

if (newVariable > 10) { //ex st
    console.log(`${newVariable} больше 10`)
}