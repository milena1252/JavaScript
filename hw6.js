// Задача 1.
// Дан массив:
const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.

console.log (colors.length);


// Задача 2.
// Дан массив:
const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны

console.log (animals.at(-1));


// Задача 3.
// Дан массив:
const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами

//1 спобоб
numbers.length = 0;
console.log (numbers);

//2 спобоб
numbers.splice (0, numbers.length);
console.log (numbers);


// Задача 4.
// Дан массив:
const students = ['Polina', 'Dasha', 'Masha']
// Удалите последний элемент массива, затем вместо него добавьте в массив
// студента Borya .
// Удалите первый элемент массива, затем вместо него добавьте в массив
// студента Andrey .
// Полученный результат не забудьте вывести в консоль

students.pop();
students.push ('Borya');
students.shift ();
students.unshift ('Andrey');
console.log (students);


// Задача 5.
// Дан массив:
const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива. Сначала через цикл for ,
// затем for..of 

for (let i = 0; i < cats.length; i++) {
    console.log (cats [i]);
}

for (cat of cats) {
    console.log (cat);
}


// Задача 6.
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

const allNumbers = evenNumbers.concat(oddNumbers);
console.log (allNumbers);
console.log (allNumbers.indexOf (8));


// Задача 7.
// Дан массив:
const binary = [0, 0, 0, 0]
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

binary.splice (1, 0, 1);
binary.splice (3, 0, 1);
binary.splice (5, 0, 1);
console.log (binary.join(""));


// Задача 1*
// Реализуйте функцию, которая будет проверять, является ли слово
// палиндромом.

function palindrome (str) {              //1 вариант
     str = str.toLowerCase ();                    // приводим к нижнему регистру
    let chek = '';                                //пустая строка для перевернутого слова
    for (let i = str.length-1; i >= 0; i--) {      //идем с конца строки в начало
        chek += str [i];                           //добавляем посимвольно
    }

    return str == chek;
}
console.log (palindrome('Потоп'));
console.log (palindrome('Кот'));

//2 вариант
function checkPalindrome (str) {
    return str.toLowerCase () === str.toLowerCase().split('').reverse ().join('');  //split разбиваем строку на массив,
}                                                                                   // reverse переворачиваем,                           
console.log (checkPalindrome('Заказ'));                                             // join объединяем
console.log (checkPalindrome('привет'));


// Задача 2*
const matrix = [
[12, 98, 78, 65, 23],
[54, 76, 98, 43, 65],
[13, 324, 65, 312],
[9092, 22, 45, 90000],
]
// Выведите в консоль среднее значение чисел в многомерном массиве

//1 вариант
let sum = 0;
let count = 0;

for (const row of matrix) {    //идем по кажд строке
    for (const num of row){    //по кажд числу в строке
        sum += num;
        count++;
    }
}
const average = sum/count;
console.log (average);

//2 вариант (flat+reduse)
const unitedMatrix = matrix.flat ();               //объединяем в один массив
const summ = unitedMatrix.reduce ((sum, current) => sum + current, 0); //считаем сумму
const average2 = summ/unitedMatrix.length;      //среднее
console.log (average2);


// Задача 3*
// Дан массив:
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0,
// в другой все отрицательные. Оба массива затем выведите в консоль.

//1 вариант
const positiveNumbers = [];
const negativeNumbers = [];
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] < 0) {
        negativeNumbers.push(mixedNumbers[i]);
    } else {
        positiveNumbers.push(mixedNumbers[i]); 
    }
}
console.log ("Положительные:", positiveNumbers);
console.log ("Отрицательные:", negativeNumbers);

//2 вариант
const positiveNumber = mixedNumbers.filter (item => item >= 0);
const negativeNumber = mixedNumbers.filter (item => item < 0);
console.log ("Положительные:", positiveNumbers);
console.log ("Отрицательные:", negativeNumbers);


// Задача 4*
// Создать массив длинной не менее 5, из динамически созданных случайных
// чисел. Далее написать алгоритм, который берет все числа из исходного
// массива, возводит их в куб и записывает в новый массив. В конце вывести оба
// массива в консоль

//1 вариант
const randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random()*100)); //рандомные числа от 0 до 99, округляем до целого
}
console.log ("Массив случайных чисел:",randomNumbers);
const cubedNunbers = [];
for (let i = 0; i < randomNumbers.length; i++) {
    cubedNunbers.push(randomNumbers[i]**3);
}
console.log ("Массив в кубе:", cubedNunbers);

//2 вариант (map)
const cubedArray = randomNumbers.map (item => item**3);
console.log ("Массив в кубе:", cubedArray);











