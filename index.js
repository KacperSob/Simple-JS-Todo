const inputEl = document.getElementById("todo")
const btnEl = document.querySelector(".add-btn")
const clearEl = document.querySelector(".clear-btn")
const outputEl = document.getElementById("result")
let lTodo = []

if(localStorage.getItem("lista")){
    lTodo = JSON.parse(localStorage.getItem("lista"))
    for(i = 0; i < lTodo.length; i++){
        outputEl.innerHTML += "<li>" + lTodo[i] + "</li>"
    }
}

function add(){
    if(inputEl.value){
        outputEl.innerHTML += "<li>" + inputEl.value + "</li>"
        lTodo.push(inputEl.value)
        localStorage.setItem("lista", JSON.stringify(lTodo))
    }
}

function clear2(){

    if(localStorage.getItem("lista")){
        localStorage.removeItem("lista")
    }
    outputEl.innerHTML = ""
}