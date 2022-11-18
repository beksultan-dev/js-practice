/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [{}, {}, {}];
const carsBrands = ['bmw', 'honda', 'audi'];
const carsPrice = [25000, 10000, 16000];
const carsAvailable = [true, false, false];


cars.forEach((element, index, array) => {
    array[index].carBrand = carsBrands[index];
    array[index].price = carsPrice[index];
    array[index].isAvailableForSale = carsAvailable[index];
})

console.log(cars);

const newCar = {
    carBrand: 'mersedes',
    price: 40000,
    isAvailableForSale: true,
}

cars.push(newCar);
console.log(cars);