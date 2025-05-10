// Домашнее задание
// Напишите маленькое приложение Timer :
// Создайте папку Timer
// Создайте базовую структуру проекта из трех файлов html , css , js
// Клавиша start - для запуска таймера
// Клавиша pause - для остановки таймера
// Циферблат с текущим временем в формате XX sec
// Примечания:
// Таймер измеряет время только в секундах
// После остановки таймера, если снова нажать клавишу start таймер
// запуститься с текущего результата, а не с начала.

const timeElement = document.querySelector ('.time');
const startButton = document.querySelector ('.start');
const pauseButton = document.querySelector ('.pause');

startButton.addEventListener ('click', () => {
    clearInterval (interval);
    interval = setInterval (startTimer, 1000);
})

pauseButton.addEventListener ('click', () => {
    clearInterval (interval);
})

let second = 0,
    interval;

function startTimer () {
    second++
    if (second <= 9) {
        timeElement.innerHTML = '0' + second
    } 
    if (second > 9) {
        timeElement.innerHTML = second
    }
    if (second > 59) {
        timeElement.innerHTML = '00'
    }
}