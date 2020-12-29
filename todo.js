const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const xBtn = "<i class='fas fa-times'></i>";
    delBtn.innerHTML = xBtn ;
    const span = document.createElement("span");
    const newId = toDos.length + 1
    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    toDoObj = {
        text: text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const lodedToDos = localStorage.getItem(TODOS_LS)
    if(lodedToDos !== null){
        const parsedToDo = JSON.parse(lodedToDos);
        parsedToDo.forEach(function(toDo){
            paintToDo(toDo.text)
        })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();