function addTask(){
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("tasl-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter task");
        return;
    }

    var newTask = document.getElementById("li");

    //newTask.innerHTML = ;
    
    taskList.appendChild(newTask);
    taskInput.value = "";
}

