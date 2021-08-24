const todos = []
const list_container = document.querySelector(".todos")
const saveButton = document.querySelector(".actions button")

saveButton.onclick = () => {
    var todo = document.querySelector("#todo_name")
    list_container.innerHTML +=
        `<div class='todo'>` +
            `<p class='name'>${todo.value}</p>` +
        `</div>`

    todo.value = ""
}

