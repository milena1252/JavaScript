// Создайте ветку на github name-fetch-training .
// Далее создайте папку fetch-training и добавьте файлы index.html index.js
// Реализуйте приложение:
// Перейдите по ссылке https://jsonplaceholder.typicode.com/todos
// Во вкладке Resources лежит ключ /todos - Это именно те данные
// которые нам нужны
// Далее напишите две функции getTodos & printTodos
// Функция getTodos делает запрос по указанному адресу и забирает
// данные.
// Функция printTodos создает список ul , и в каждый
// элемент li добавляет данные из полученного объекта с делом.
// Нам нужны ключи из объекта id title .
// Example:
// 1 delectus aut autem
// 2 quis ut nam facilis et officia qui
// 3 fugiat veniam minus
// ...
// 200 ipsam aperiam voluptates qui

async function getTodos () {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        container.innerHTML = 'Error!';
    }
    return await response.json();
}

function printTodos () {
    const container = document.querySelector ('.container');
    getTodos ()
    .then (todos => {
        const ul = document.createElement ('ul');
         todos.forEach (todo => {
        const li = document.createElement ('li');
        li.textContent = `${todo.id} ${todo.title}`;
        ul.append (li);
    })
      container.append (ul);
    
    })
    .catch (error => {
        console.log (error);
        container.innerHTML = 'Error!';
    })
}
printTodos ();










