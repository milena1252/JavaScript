//Задача 1

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log (typeof a);
console.log (typeof b);
console.log (typeof c);
console.log (typeof d);
console.log (typeof e);

//Задача 2

let height = 15;
let width = 20;

if (height > width) {
    console.log (height);
} else {
    console.log (width);
}

//Задача 3

for (let i = 1; i <= 20; i++) {
    if (i%3 === 0) {
        console.log (i);
    }
}

//Задача 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = 'We are ready to work';

if (key&&documents&&pen&&(apple||orange)){
    console.log (shouldGoToWork);
}

//Задача 5

let num = prompt ('Введите число', '');
if (num === '' || num === null || num === ' '){
    alert ('Отменено');
} else if (num%3 === 0 && num%5 === 0){
    alert ('FizBuz');
} else if (num%5 === 0){
    alert ('Fiz');
} else if (num%3 === 0) {
    alert ('Buz'); 
} else {
    alert ('Попробуйте еще раз', '');
}

//Задача 6

// let age = prompt ('Ваш возраст', '');
// if (age > 18) {
//     alert ('Попей пивка');
// } else if (age >= 16 && age <= 18) {
//     alert ('Можешь выкурить сигаретку, только маме не говори');
// } else {
//     alert ('Пей колу');
// }

//Задача 7

// let direction = prompt ('В какую сторону света вы бы хотели отправиться');
// switch (direction) {
//     case 'юг' :
//         console.log ('На юг пойдешь счастье найдешь');
//         break;
//     case 'север' :
//         console.log ('На север пойдешь много денег найдешь');
//         break;
//     case 'запад' :
//         console.log ('На запад пойдешь верного друга найдешь');
//         break;
//     case 'восток' :
//         console.log ('На восток пойдешь разработчиком станешь');
//         break;
//     default:
//         console.log ('Попробуйте еще раз');
// }

//Задача 1*

let str =  'пОлИнА нАбЕрЕжНаЯ';
let lowerStr = str.toLowerCase();
let newStr = str[0].toUpperCase();
let space = ' ';
for (let i = 0; i < lowerStr.length-1; i++) {
    if (lowerStr[i] == space) {
        newStr+=lowerStr[i+1].toUpperCase();
    } 
    else {
         newStr+=lowerStr[i+1];
     }
}

console.log (`Привет, ${newStr}!`);

//Задача 2*  (я наверно здесь неправильно сделала)

// let num1 = +prompt ('Введите число', '');
// let num2 = +prompt ('Сколько отнять', '');
// let num3 = +prompt ('Сколько прибавить', '');
// let num4 = +prompt ('Разделить на', '');
// let result = ((num1-num2)+num3)/num4;

// console.log (`((${num1}-${num2})+${num3})/${num4}=${result}`)


//Задача 3*

let ladder = "";
for (let i = 1; i <= 6; i++) {
    ladder += "#";
    console.log(ladder);
}




