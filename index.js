const inputEl = document.getElementById("todo")
const btnEl = document.querySelector(".add-btn")
const outputEl = document.getElementById("result")

function add(){
    if(inputEl.value){
        outputEl.innerHTML += "<li>" + inputEl.value + "</li>"
    }
}