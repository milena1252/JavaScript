//Задача 1

let x = 20;
let y = 58;
let z = 42;
console.log (x+y+z);

//Задача 2

let secInMin = 60;
let minInHour = 60;   
let hourInDay = 24;
let dayInYear = 365;
let myAge = 33;
let myAgeInSeconds = secInMin*minInHour*hourInDay*dayInYear*myAge;
console.log (myAgeInSeconds);

//Задача 3

let count = 42;
let userName = '42';
console.log (count.toString());  //1 способ
console.log (String(count));     //2 способ
console.log (Number(userName));  //1 способ
console.log(+userName);          //2 способ

//Задача 4

let a = 1;
let b = 2;
let c = 'белых медведей';
console.log (String(a)+String(b)+' '+'белых медведей');

//Задача 5

let d = 'доступ';
let e = 'морпех';
let f = 'наледь';
let g = 'попрек';
let h = 'рубило';
let lengthWords = (d+e+f+g+h).length;
console.log (lengthWords);

//Задача 6

let num = 12;
let str = 'cat';
let bool = true;
console.log ('Variable:num have type:',typeof num);
console.log ('Variable:str have type:',typeof str);
console.log ('Variable:bool have type:',typeof bool);

//Задача 7

//let name = prompt ('Как вас зовут?');
//let age = prompt ('Сколько вам лет?');
//console.log (name, age,'лет');


//Задача 1

let av = 4;
let bv = 3;
av = av + bv;
bv = av - bv;
av = av - bv;
console.log (av, bv);

//Задача 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];
console.log (cipher);





