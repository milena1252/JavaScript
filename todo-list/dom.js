//Всё, что связано с DOM

function createTodoItem (todo) {   //ф-ия для одной задачи, принимает объект todo с полями: id, date, text, isChecked
    const todoItem = document.createElement ('div'); //основной контейнер задачи 
    todoItem.classList.add ('todo_item');
    todoItem.dataset.id = todo.id;   //берем уникальный id из объекта todo (связываем элемент todoItem с данными из хранилища todo.id)

    if (todo.isChecked) {   //Добавляем класс 'checked', если задача выполнена
        todoItem.classList.add('checked');
    };

    const checkbox = document.createElement ('input'); //checkbox
    checkbox.classList.add ('todo_checkbox');
    checkbox.setAttribute ('type', 'checkbox');
    checkbox.checked = todo.isChecked;

    const textElement = document.createElement ('p');    //текст задачи
    textElement.classList.add ('todo_text');
    textElement.textContent = todo.text;

    const rightSection = document.createElement ('div');  //секция для кнопки удаления и даты
    rightSection.classList.add ('todo_right-section');

    const deleteBtn = document.createElement ('button');  //кнопка удаления
    deleteBtn.classList.add ('todo_delete-btn');
    deleteBtn.textContent = 'X';

    const date = document.createElement ('span');   //дата задачи
    date.classList.add ('todo_date');
    date.textContent = todo.date;   

    rightSection.append (deleteBtn, date);           //добавить дату,кнопку в правую секцию

    todoItem.append (checkbox, textElement, rightSection);   //добавить чекбокс,текст,правую секцию в item

    return todoItem;
};

function initDOM () {
    const root = document.getElementById ('root');

    const container = document.createElement ('div');
    container.classList.add ('todo_container');
    root.append (container);  //основной контейнер для всего приложения
    
    const header = document.createElement ('div');
    header.classList.add ('todo_header');
    container.append (header);  //header с кнопками и полем ввода
    
    const deleteAllBtn = document.createElement ('button');
    deleteAllBtn.classList.add ('todo_btn');
    deleteAllBtn.textContent = 'Delete All';
    header.append (deleteAllBtn);  // кнопка 'Delete All'
    
    const input = document.createElement ('input');
    input.classList.add ('todo_input');
    input.setAttribute ('type', 'text');
    input.setAttribute ('placeholder', 'Enter todo ...');
    header.append (input);   //поле ввода для новых задач
    
    const addBtn = document.createElement ('button');
    addBtn.classList.add ('todo_btn');
    addBtn.textContent = 'Add';
    header.append (addBtn);  // кнопка 'Add'
    
    const todoList = document.createElement ('div');
    todoList.classList.add ('todo_list');
    container.append (todoList); //контейнер для списка задач

    return { input, addBtn, deleteAllBtn, todoList };
};

export { createTodoItem, initDOM };