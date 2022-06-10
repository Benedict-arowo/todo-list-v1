const input = document.getElementById("mainInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("todoLists");
const lists = document.getElementsByClassName("list");

let deleteButton = document.getElementsByClassName("deleteButton");
let id = lists.length + 1;

function idCal(){
    return id++;

}

function updateStorage(){
    listItems = list.innerHTML;
    localStorage.setItem("lists", listItems);
}

addButton.onclick = function() {
    let newTodoContent = input.value;
    const listContent = `<div class="list"> 
                    <p>${newTodoContent}</p>
                    <i id="${idCal()}" class="deleteButton fa-solid fa-trash-can"></i>
                    </div>`

    if (newTodoContent == ""){
        alert("You can't add an empty item!")
    }
    else {
        list.innerHTML += listContent;
        updateDeleteButton();
        input.value = '';
        updateStorage();
    }
    // console.log(newTodoContent)
}

function updateDeleteButton(){
    for (let i = 0; i < deleteButton.length; i++){
        let button = deleteButton[i]
        console.log(i)
        button.addEventListener("click", (event) => {
            promptValue = prompt("Are you sure? (yes)");
            
            if (promptValue == null || promptValue == undefined){
                return;
            }

            else if (promptValue.toLowerCase() == "yes" || promptValue.toLowerCase() == "y"){
                button.parentElement.remove();
                updateStorage()
            }
            else {
                return;
            }
        })
    }
}

window.onload = function(){
    let storedList = localStorage.getItem("lists");
    list.innerHTML = storedList;
    updateDeleteButton();
}