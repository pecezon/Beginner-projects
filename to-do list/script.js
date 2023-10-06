const taskInput = document.getElementById("input");
const toDoItems = document.getElementsByClassName("to-do-items")[0];

taskInput.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addItem()
    }
})

function addItem() {

    let task = document.createElement("div")
    task.className = "item"

    let text = document.createElement("p");

    let buttonsDiv = document.createElement("div");
    let checkBox = document.createElement("input");
    checkBox.setAttribute('type', "checkbox");
    let trashcan = document.createElement("i");
    trashcan.className = "fa-solid fa-trash-can";
    trashcan.addEventListener("click",function(){
        task.remove();
    })
    buttonsDiv.appendChild(checkBox);
    buttonsDiv.appendChild(trashcan);

    task.appendChild(text);
    task.appendChild(buttonsDiv);

    text.innerHTML = taskInput.value;

    toDoItems.appendChild(task);
    taskInput.value = "";
}
