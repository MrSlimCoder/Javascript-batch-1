// CRUD - Create, Read, Update, Delete

let todoList = [];

function createTodo() {
    const todo_text = document.getElementById("todo_text").value;

    todoList.push(todo_text);

    localStorage.setItem("todoList", todoList);

    document.getElementById("todo_list").innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        document.getElementById("todo_list").innerHTML =
            document.getElementById("todo_list").innerHTML +
            `<li id=${i}>${todoList[i]}</li>`;
    }

    document.getElementById("todo_text").value = "";
}

function readTodo() {
    const todoListString = localStorage.getItem("todoList");
    todoList = todoListString?.split(",");

    for (let i = 0; i < todoList?.length; i++) {
        document.getElementById("todo_list").innerHTML =
            document.getElementById("todo_list").innerHTML +
            `<li id=${i}>${todoList[i]}</li>`;
    }
}
readTodo();

function clearTodo() {
    todoList = [];
    localStorage.clear();
    document.getElementById("todo_list").innerHTML = "";
}

// Task
function removeTodo() { }