const root = document.getElementById ('root');
const container = document.createElement ('div');
container.classList.add ('todo_container');
root.append (container);  //container

const header = document.createElement ('div');
header.classList.add ('todo_header');
container.append (header);  //header

const deleteAllBtn = document.createElement ('button');
deleteAllBtn.classList.add ('todo_btn');
deleteAllBtn.textContent = 'Delete All';
header.append (deleteAllBtn);  // button 'Delete All'

const input = document.createElement ('input');
input.classList.add ('todo_input');
input.setAttribute ('type', 'text');
input.setAttribute ('placeholder', 'Enter todo ...');
header.append (input);   //input

const addBtn = document.createElement ('button');
addBtn.classList.add ('todo_btn');
addBtn.textContent = 'Add';
header.append (addBtn);  // button 'Add'

const todoList = document.createElement ('div');
todoList.classList.add ('todo_list');
container.append (todoList); //список задач

function createTodoItem (taskText) {   //ф-ия для задачи (item)
    const todoItem = document.createElement ('div');  //задача
    todoItem.classList.add ('todo_item');

    const checkbox = document.createElement ('input'); //checkbox
    checkbox.classList.add ('todo_checkbox');
    checkbox.setAttribute ('type', 'checkbox');

    checkbox.addEventListener ('change', function () {   //при нажатии на чекбокс
        if (checkbox.checked) {
            todoItem.classList.add ('checked');
        } else {
            todoItem.classList.remove ('checked');
        }
    });

    const textElement = document.createElement ('p');    //text
    textElement.classList.add ('todo_text');
    textElement.textContent = taskText || 'Todo text';

    const rightSection = document.createElement ('div');  //секция для кнопки удаления и даты
    rightSection.classList.add ('todo_right-section');

    const deleteBtn = document.createElement ('button');  //кнопка удаления
    deleteBtn.classList.add ('todo_delete-btn');
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener ('click', function () {   //удалить item
        todoItem.remove ();
    });

    const date = document.createElement ('span');   //date
    date.classList.add ('todo_date');
    date.textContent = new Date ().toLocaleDateString ();   //сгенерировать дату

    rightSection.append (deleteBtn, date);                  //добавить дату,кнопку в правую секцию

    todoItem.append (checkbox, textElement, rightSection);   //добавить чекбокс,текст,правую секцию в item

    return todoItem;

}

addBtn.addEventListener ('click', function () {      //добавить item
   const text = input.value;                         //получаем текст,который пользователь ввел в input
   if (text) {                                      //если есть текст
    const newTask = createTodoItem (text);          //создаем item с этим текстом
    todoList.append(newTask);                       //добавляем в конец списка
    input.value = '';                                //очищаем поле ввода
   } else {
    input.style.borderColor = 'red';                //если нет текста, пустое поле
    setTimeout(function () {
        input.style.borderColor = '';
    }, 1000);        
   }
});

deleteAllBtn.addEventListener ('click', function () {     //удалить все item
    todoList.innerHTML = '';                              //заменить пустой строкой
});






