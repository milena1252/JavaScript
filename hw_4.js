// Задача 1.
// Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
// переданного в нее параметра. Если передадим число 100 то, надо вычислить
// сумму чисел от 0 до 100 (должно получится 5050).

function getSum (num) {
    let sum = 0;
    for ( let i = 1; i <= num; i++) {
        sum += i;
    }
    return console.log (sum);
}

getSum (100);

// Задача 2.
// Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не
// увеличивается.

function calcCredit (amount) {
    let rate = 17;
    let year = 5;
    
    return console.log (amount * rate/100 * year);
}

calcCredit (5000);

// Задача 3.
// Написать функцию trimString , которая в качестве аргумента принимает три
// параметра: 
// строку
// значение «от»
// значение «по»
// После вызова функция должна вернуть переданную строку, обрезанную по
// значениям «от» и «по».

function trimString (str, from, to) {
    return console.log (str.substring (from, to));
}

trimString ('substring', '2', '8');

// Задача 4.
// Написать функцию getSumNumbers . Она будет принимать число и вычислять
// сумму цифр, из которых состоит число. Для 2021 это будет 5.

function getSumNumbers (number) {
    const str = number.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++){
        sum += parseInt(str[i], 10);
    }

    return console.log (sum);
}

getSumNumbers (2021);


// Задача 5.
// Написать функцию getSum , которая принимает два целых числа a и b, они могут
// быть положительными или отрицательными, найти сумму всех чисел между
// ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
// getSum(1, 0) == 1 // 1 + 0 = 1
// getSum(1, 2) == 3 // 1 + 2 = 3
// getSum(0, 1) == 1 // 0 + 1 = 1
// getSum(1, 1) == 1 // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2

function getSum2 (a, b) {
    if (a === b) {
        return a;
    }

    const min = Math.min (a, b);
    const max = Math.max (a, b);

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return (sum);

}

console.log (getSum2 (1, 0));
console.log (getSum2 (1, 2));
console.log (getSum2 (0, 1));
console.log (getSum2 (1, 1));
console.log (getSum2 (-1, 0));
console.log (getSum2 (-1, -2));


// Задача 6.
// Напишите функцию fooBoo которая принимает в качестве аргумента три
// параметра:
// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// Если переданное булевое значение true , то запускаем функцию foo, иначе boo

function fooBoo (condition, foo, boo) {
    condition ? foo() : boo();

}

function foo () {
    console.log (foo);
}

function boo () {
    console.log (boo);
}

fooBoo (true, foo, boo);
fooBoo (false, foo, boo);

// Задача 1*
// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true , если треугольник можно построить со
// сторонами заданной длины, и false в любом другом случае

function triangle (a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    return a + b > c && a + c > b && b + c > a;
}

console.log (triangle (5, 2, 3)); //false
console.log (triangle (2, 2, 3)); //true
console.log (triangle (-2, 2, 3)); //false
console.log (triangle (0, 2, 3)); //false


// Задача 2*
// Ваша задача - разбить плитку шоколада заданного размера n x m на
// маленькие квадраты. Каждый квадрат имеет размер 1x1 и не может быть
// разбит. Реализуйте функцию, которая будет возвращать минимальное
// количество необходимых надломов.
// Например, если вам дается плитка шоколада размером 2 x 1, вы можете
// разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x
// 1 вы должны сделать два надлома.
// Если входные данные недействительны, вы должны вернуть 0 (поскольку
// надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда
// будет неотрицательным целым числом

function breakChocolate (n, m) {
    if (n <= 0 || m <= 0) {
        return 0
    }
    return n * m - 1;
}

console.log (breakChocolate (2, 1));//1
console.log (breakChocolate (3, 3));//8




