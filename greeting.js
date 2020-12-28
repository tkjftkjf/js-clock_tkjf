const form = document.querySelector(".js-form"),
    input = form.querySelector(".js-form-input"),
    greeting = document.querySelector(".js-greeting")

const USER_LS = "currentUser",
    SHOWING_CN = "showing"

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = ` Hello! ${text}`
}

function saveName(name){
    localStorage.setItem(USER_LS ,name)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit)
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null || currentUser === "") {
        askForName();
    } else {
        paintGreeting(currentUser);
}
}

function init(){
    loadName()
}

init()