const inputEl = document.getElementById("todo")
const btnEl = document.querySelector(".add-btn")
const clearEl = document.querySelector(".clear-btn")
const outputEl = document.getElementById("result")
let lTodo = []
let html = null

inputEl.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        add();
    }
});

if(localStorage.getItem("lista")){
    lTodo = JSON.parse(localStorage.getItem("lista"))
    renderTodo()
}

function add(){
    if(inputEl.value){
        lTodo.push(inputEl.value)
        renderTodo()
    }
}

function clear2(){
    if(localStorage.getItem("lista")){
        localStorage.removeItem("lista")
        lTodo = []
        renderTodo()
    }
}

function renderTodo(){
    localStorage.setItem("lista", JSON.stringify(lTodo))
    outputEl.innerHTML = ""
    lTodo.forEach((value, i) => {
        html = `<li>${value}</li><button onclick="deleteTodo(${i})">DELETE</button>`
        outputEl.innerHTML += html
    });
}

function deleteTodo(x){
    lTodo.splice(x, 1)
    renderTodo()
}