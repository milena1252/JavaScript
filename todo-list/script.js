import {getData, setData, clearAll } from './storage.js';
import {createTodoItem, initDOM } from './dom.js';

// получаем DOM-элементы, созданные в initDOM()
const { input, addBtn, deleteAllBtn, todoList } = initDOM();

// загружаем задачи из хранилища
// используем let, так как этот массив будет изменяться
let todos = getData();

function loadTodos() {    //загрузка задач при старте приложения
    todoList.innerHTML = '';  //очищаем список при первом запуске
    //создаем элементы для каждой задачи  
    todos.forEach(todo => {   //перебираем все задачи 
        const todoItem = createTodoItem(todo); //для каждой задачи создаем DOM-элемент

        const checkbox = todoItem.querySelector('.todo_checkbox');  //находим чекбокс,кнопку удаления внутри задачи
        const deleteBtn = todoItem.querySelector('.todo_delete-btn');

        checkbox.addEventListener('change', function() {   //обработчик изменения чекбокса
            todo.isChecked = checkbox.checked;  //обновляем статус задачи 
            if (checkbox.checked) {
                todoItem.classList.add('checked');   //добавляем/удаляем класс checked
              } else {
                todoItem.classList.remove('checked');
              };             
            setData(todos);  //сохраняем данные
        });

        deleteBtn.addEventListener('click', function() {    //обработчик клика по кнопке удаления задачи
            todos = todos.filter(function (item){ 
                return item.id !== todo.id;   //фильтруем весь массив,оставляя все задачи, кроме одной
        });

        setData(todos);  //сохраняем изменения в хранилище
        loadTodos ();  //перерисовываем список
       
    });
    todoList.append(todoItem);  //добавляем задачу в список
});
}

//обработчик кнопки deleteAll
deleteAllBtn.addEventListener ('click', function () {     //удалить все задачи (заменить пустой строкой)
    todos = [];  //очищаем массив
    clearAll();    //очищаем хранилище
    todoList.innerHTML = '';  //очищаем список
});

//обработчик кнопки add (добавление задачи)
addBtn.addEventListener ('click', () => {    
    const text = input.value;     //получаем текст из поля ввода  
    if (text){
        const newTodo = {  //создаем новую задачу
            id: Date.now(), // уникальный ID на основе времени
            date: new Date().toLocaleString(),
            text: text,
            isChecked: false
        };
        todos.push(newTodo);  //добавляем в массив
        setData(todos);  //сохраняем в хранилище
        loadTodos (); //перерисовываем

        input.value = '';  //очищаем поле ввода
    } else {
        input.style.borderColor = 'red';  //если пустое поле, красная рамочка
        setTimeout(function() {
            input.style.borderColor = '';
        }, 1000);
    }
});

//запуск приложения
loadTodos();   // Первоначальная загрузка задач








