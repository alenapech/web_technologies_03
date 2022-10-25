/* Задача 1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом).
В js-файле необходимо создать следующий скрипт:
Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение 
в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): 
Цельсий: 21, Фаренгейт: 69.8
Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта:
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Примечания: Пользователь всегда вводит корректное число.
Советую округлить значение после рассчетов, так как в некоторых случаях может получиться "длинная дробь".*/

const tCelsius = Number.parseInt(prompt('Введите температуру в градусах Цельсия: '));
const tFarenheit = Math.round((9/5)* tCelsius + 32);

alert(`Цельсий: ${tCelsius}, Фаренгейт: ${tFarenheit}`);
