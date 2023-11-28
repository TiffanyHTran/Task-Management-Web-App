function addTask(){
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter task!");
        return;
    }

    var newTask = document.getElementById("li");

    //newTask.innerHTML = '';


    taskList.appendChild(newTask);
    taskInput.value = "";
}

function deleteTask(button){
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

function editTask(button){
    var taskItem = button.parentNode;
    var taskDescription = taskItem.querySelector('span');
    var newDescription = prompt("Edit Task", taskDescription.textContent);

    if (newDescription !== null && newDescription.trim() !== "") {
        taskDescription.textContent = newDescription;
    }
}