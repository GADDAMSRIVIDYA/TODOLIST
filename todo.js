
function getTodoListFromLoaclStorage(){
    let stringifiedTodoList=localStorage.getItem("todoList");
    let parsedTodoList=JSON.parse(stringifiedTodoList);
    if (parsedTodoList===null){
        return [];
    }
    else{
        return parsedTodoList;
    }
}
let todoList=getTodoListFromLoaclStorage();






function createAndAppendTodo(todo) {
    let todoItemsContainer = document.getElementById("todoItemsContainer");
    let todoElement = document.createElement("li");
    todoItemsContainer.appendChild(todoElement);
    todoElement.classList.add("todo-items-container", "d-flex", "flex-row", "mb-2");


    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    let inputElementId = "inputElementId" + todo.uniqueId;
    inputElement.id = inputElementId;

    todoElement.appendChild(inputElement);
    inputElement.classList.add("checkbox-input");

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);
    let labelElement = document.createElement("label");

    let labelId = "label" + todo.uniqueId;
    labelElement.id = labelId;
    labelElement.textContent = todo.text;
    labelElement.setAttribute("for", inputElementId);
    labelContainer.appendChild(labelElement);
    labelElement.classList.add("checkbox-label");

    let deleteContainer = document.createElement("div");
    labelContainer.appendChild(deleteContainer);
    let deleteIcon = document.createElement("i");
    deleteContainer.appendChild(deleteIcon);
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteContainer.onclick = function() {
        todoItemsContainer.removeChild(todoElement);
    }
    inputElement.onclick = function() {
        labelElement.classList.toggle("strike-through");
    }
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

 let todosCount = todoList.length;
 let addTodoButton = document.getElementById("addTodoButton");
    addTodoButton.onclick = function () {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    
    if (userInputValue === "") return;

    todosCount += 1;

    let newTodo = {
        text: userInputValue,
        uniqueId: todosCount
    };

   todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList)); 
    userInputElement.value = "";
};

let saveButton=document.getElementById("saveTodoButton");
saveButton.onclick=function(){
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

