// Задача 1.
// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// удалить ключи из объекта.

const user = {
    name: 'Elena',
    city: 'Minsk'
}
delete user.name;
delete user.city;

// Задача 2.
// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// проверить есть ли в объекте определенный ключ и если есть вывести в
// консоль true 

const product = {
    name: 'laptop',
    price: 1000
}

console.log ("price" in product);

// Задача 3.
// Дан объект:
// C помощью цикла for..in вывести в консоль сначала все ключи, потом
// значения ключей объект.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
    }

for (let key in student) {
    console.log (key);
    console.log (student[key]);
}

// Задача 4.
// Дан объект:
//  Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
    },
}

console.log(colors['ru pum pu ru rum'].red); 
console.log(colors['ru pum pu ru rum'].blue); 

// Задача 5.
// Дан объект:
// Вычислите среднюю зарплату сотрудников и результат поместите в
// соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

let sum =0;
let count = 0;

for (let key in salaries) {
    sum += salaries[key];
    count++;
}

let averageSalary = count > 0 ? sum/count : 0;
console.log(averageSalary); 

// Задача 6.
// Создать валидатор, запросить у пользователя логин и пароль для регистрации.
// Затем данные записать в объект.
// Потом попросить пользователя подтвердить данные. Если верно введен логин
// и пароль, вывести сообщение Добро пожаловать

// const user2 = {
//     login: prompt ('Придумайте логин'),
//     password: prompt ('Придумайте пароль')
// }

// const confirmLogin = prompt ('Повторите логин для подтверждения');
// const confirmPassword = prompt ('Повторите пароль для подтверждения');

// if (confirmLogin === user2.login && confirmPassword === user2.password) {
//     alert ('Добро пожаловать!');
// } else {
//     alert ('Ошибка входа');
// }

// Задача 1*
// Мы на футбольном матче, счет забитых голов одной команды не может
// превышать 9 мячей. Жаль что нам присылают результат матча в формате
// «2:5», ведь нам надо это вывести в консоль словами. Давайте напишем
// программу, которая будет за нас переводить формат и выводить результат в
// консоль

function scoreToWords (score) {
    const numberToWord = {
        '0': 'ноль',
        '1': 'один',
        '2': 'два',
        '3': 'три',
        '4': 'четыре',
        '5': 'пять',
        '6': 'шесть',
        '7': 'семь',
        '8': 'восемь',
        '9': 'девять'
    }

    let result = '';

    for (let i = 0; i < score.length; i++) {
        let char = score [i];
        if (char in numberToWord) {
            result += numberToWord [char];
        } else {
            result += char;
        }
    }
    return result;
}

console.log(scoreToWords('3:7'));

// Задача 2*
// Даны два одинаковых объекта. Сравните их так, чтобы они были равны.

let student1 = {
name: 'Polina',
age: 27,
}

let student2 = {
name: 'Polina',
age: 27,
}

console.log (JSON.stringify(student1) === JSON.stringify(student2));    //1


function isEqual (obj1, obj2) {          //2
    return obj1.name === obj2.name && obj1.age === obj2.age;
}
console.log (isEqual (student1, student2));


// Задача 3*
// У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в
// консоль. Но произошла ошибка и в этом объекте нет птицы. Если попробуем
// узнать имя мы получим ошибку. Задача придумать, как обратиться к
// несуществующему объекту и не получить ошибку, чтобы наша программа
// работала дальше.

const animals = {
    cat: {
    name: 'Енчик',
    age: 3,
    },

    dog: {
    name: 'Орео',
    age: 2,
    }
}

console.log(animals.bird?.name || 'Птицы нет в объекте');  
//опциональная цепочка
//сначала проверяется animals.bird, если bird существует, выполняется доступ к name,
//если нет, возвращается undefined, затем срабатывает логическое ИЛИ ||, если
//левая часть undefined, значит false и возвращается правая часть
