//Работа с localStorage

function getData () {
    const data = localStorage.getItem ('todos');
    return data ? JSON.parse (data) : [];   //получаем данные из localStorage, если нет данных возвращаем пустой массив
};

function setData (todos) {
    localStorage.setItem ('todos', JSON.stringify (todos)); //сохранение данных в localStorage
};

function clearAll() {                       // очищаем хранилище
    localStorage.removeItem('todos');
};
  
export { getData, setData, clearAll };