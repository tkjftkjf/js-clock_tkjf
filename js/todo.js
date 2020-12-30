const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

let idNumbers = 1;

function deleteToDo(event){
    const btn =event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDo()
}

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌" ;
    delBtn.addEventListener("click", deleteToDo)
    const span = document.createElement("span");
    const newId = idNumbers;
    idNumbers += 1;
    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    toDoObj = {
        text,
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
        });
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();