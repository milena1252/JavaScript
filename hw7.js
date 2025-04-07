// Задача 1.
// Выведи все элементы массива в консоль с помощью метода forEach .
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function

//function declaration
fibonacci.forEach (function(element) {    
    console.log (element);
});

//arrow function
fibonacci.forEach (element => console.log (element));   


// Задача 2.
// Используя метод map создайте новый массив, на основе массива users , в
// котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc] .
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// Реализуйте решение двумя способами, используя function declaration & arrow
// function

//function declaration
let members = users.map (function (name,index) {
    return `member ${index + 1}: ${name}`;
});

//arrow function
let members2 = users.map ((name, index) => `member ${index + 1}: ${name}`);

console.log (members);
console.log (members2);


// Задача 3.
// С помощью метода filter создайте новый массив в котором не будет
// отрицательных чисел.
const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function

//function declaration
const positiveNumber = numbers.filter (function (item) {
    return  (item > 0);
})

//arrow function
const positiveNumbers = numbers.filter (item => item > 0);

console.log (positiveNumber);
console.log (positiveNumbers);


// Задача 4.
// Используя метод reduce получите сумму всех чисел массива.
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function

//function declaration
let result = fibonacci.reduce (function (sum, item) {
    return sum + item;
}, 0);

//arrow function
let results = fibonacci.reduce ((sum, item) => sum + item, 0);

console.log (result);
console.log (results);


// Задача 5.
// Используя метод find найдите в массиве первое четное число.
const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// Реализуйте решение двумя способами, используя function declaration & arrow
// function

//function declaration
const evenNum = number.find (function (item) {
    return item%2 === 0;
})

//arrow function
const evenNumber = number.find (item => item%2 === 0)

console.log (evenNum);
console.log (evenNumber);


// Задача 1*
// Написать функцию конструктор Student
// В каждом объекте студента должны быть поля salary , rate , name
// Внутри объекта также должен быть метод который на основе рейтинга
// возвращает сумму возможного кредита.
// На основе функции создать минимум 5 студентов и имя каждого студента
// должно соответствовать имени студента из вашей группы.
// Создать массив students и поместить в него студентов.
// Написать функцию, которая принимает массив студентов. И вычисляет
// общую сумму кредитов которую можно выдать группе.
// rate имеет 4 категории A B C D:
// A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// D - плохой рейтинг и мы не можем дать кредит

function Student (name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    
    this.calculateCredit = function () {
        return this.rate === 'A'? this.salary*12 :
               this.rate === 'B'? this.salary*9 :
               this.rate === 'C'? this.salary*6 :
               0;
    }
}
const students = [new Student ('Елена', 5000, 'A'),
new Student ('Юрий', 3000, 'B'),
new Student ('Федор', 2000, 'C'),
new Student ('Ксения', 4000, 'D'),
new Student ('Алексей', 6000, 'A')];

function totalCredit (students) {
    let total = 0;
    for (let i = 0; i< students.length; i++) {
        total += students[i].calculateCredit ();
    }
    return total;
}

console.log ("Общая сумма кредитов:", totalCredit(students));


// Задача 2*
// Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из
// комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает
// новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет «Ths wbst s fr lsrs LL!».
// Примечание: для этой задачи y не считается гласной

function removeVowel (str) {
    const vowels = ['i', 'e', 'o', 'a', 'u', 'I', 'E', 'O', 'A', 'U'];
    return str
    .split ('')
    .filter (item => !vowels.includes(item))
    .join ('');
}

console.log (removeVowel('This website is for losers LOL!'));


// Задача 3*
// Нет истории, нет теории
// В приведенных ниже примерах показано, как написать функцию:
accum('abcd') // -> 'A-Bb-Ccc-Dddd'
accum('RqaEzty') // -> 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
accum('cwAt') // -> 'C-Ww-Aaa-Tttt'
// Параметр — это строка, которая включает только буквы от a...z и A...Z

function accum (str) {
    return str
    .split ('')
    .map ((char, index) => char.toUpperCase() + char.toLowerCase().repeat (index))
    .join ('-');
}

console.log (accum ('abcd'));
console.log (accum ('RqaEzty'));
console.log (accum ('cwAt'));


// Задача 4*
// Самый высокий и самый низкий
// В этом небольшом задании вам дается строка чисел, разделенных пробелами,
// и вы должны возвращать наибольшее и наименьшее число.
// highAndLow('1 2 3 4 5') // return '5 1'
// highAndLow('1 2 -3 4 5') // return '5 -3'
// highAndLow('1 9 3 4 -5') // return '9 -5'
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
// при этом наибольшее число должно быть первым

function highAndLow (numbers) {
    const arr = numbers.split (' ').map (Number);   //разбиваем строку на массив,приводим к числу
    const min = Math.min (...arr);
    const max = Math.max (...arr);
    return (`${max} ${min}`)
} 

console.log (highAndLow ('1 2 3 4 5'));
console.log (highAndLow ('1 2 -3 4 5'));
console.log (highAndLow ('1 9 3 4 -5'));


// Задача 5*
// Изограммы
// Изограмма - это слово, в котором нет повторяющихся букв, последовательных
// или непоследовательных. Реализуйте функцию, которая определяет, является
// ли строка, содержащая только буквы, изограммой. Предположим, что пустая
// строка является изограммой. Регистр букв мы игнорируем.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram (word) {
    for (let i = 0; i < word.toLowerCase().length; i++) {
        for (let j = i + 1; j < word.toLowerCase().length; j++) {
            if (word.toLowerCase()[i] === word.toLowerCase()[j]){
                return false;
            }
        }
    }
    return true;
}

console.log (isIsogram ("Dermatoglyphics"));
console.log (isIsogram ("aba"));
console.log (isIsogram ("moOse"));


// Задача 6*
// Считаем коды символов
// Учитывая строку, превратите каждый символ в его код символа ASCII и
// соедините их вместе, чтобы создать число. Поместите результат в
// переменную total1 .
// Затем замените все числа 7 на число 1 и назовите это число total2 .
// После верните разницу между суммой цифр total1 и total2 .
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

function stringToAscii (str) {
    const total1 = str.split('').map ((char) => char.charCodeAt(0)).join ('');
    const total2 = total1.split('').map (num => num === '7' ? '1' : num);
    const sumTotal1 = total1.split ('').reduce ((sum, current) => sum + +current, 0);
    const sumTotal2 = total2.reduce ((sum, current) => sum + +current, 0);
    return (sumTotal1 - sumTotal2);

}

console.log (stringToAscii ('ABC'));


// Задача 7*
// Дубликаты
// Цель этого упражнения — преобразовать строку в новую строку, где каждый
// символ в новой строке равен ( , если этот символ появляется только один раз в
// исходной строке, или ) , если этот символ встречается более одного раза в
// исходной строке. Игнорируйте использование заглавных букв при определении
// дубликата символа.
// 'din' // => '((('
// "recede" // => '()()()'
// 'Success' // => ')())())'
// '(( @' // => '))(('

function duplicate (str) {
    const arr = str.toLowerCase().split (''); 
    return arr
    .map (char => arr.filter (item => item === char).length > 1 ? ')' : '(' )  //проверяем,если символ встречается больше 1 раза
    .join ('');
    
}

console.log (duplicate ('din'));
console.log (duplicate ('recede'));
console.log (duplicate ('Success'));
console.log (duplicate ('(( @'));







