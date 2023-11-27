function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var newTask = document.createElement("li");
    newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";
}


function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

function editTask(button) {
    var taskItem = button.parentNode;
    var taskDescription = taskItem.querySelector('span');
    var newDescription = prompt("Edit task:", taskDescription.textContent);

    if (newDescription !== null && newDescription.trim() !== "") {
        taskDescription.textContent = newDescription;
    }
}
