// Задание 5.

/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

let x = +prompt('Введите натуральное число:', '');
let n = +prompt('Введите степень заданного числа', '');

const getResult = (x, n) => {
    const result =  x**n;
    return result;
}

console.log(getResult(x, n));

//===============================================================================================