function addTask() {
    var taskInput = document.getElementById("task-input");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Use AJAX to send the task to the server
    $.post("save_data.php", { description: taskInput.value }, function(data) {
        if (data === "success") {
            // Refresh the task list after successful addition
            fetchTasks();
            taskInput.value = "";
        } else {
            alert("Failed to add task!");
        }
    });
}

function deleteTask(button, taskId) {
    // Use AJAX to send the task ID to the server for deletion
    $.post("delete_data.php", { id: taskId }, function(data) {
        if (data === "success") {
            // Refresh the task list after successful deletion
            fetchTasks();
        } else {
            alert("Failed to delete task!");
        }
    });
}

function editTask(button, taskId) {
    var taskItem = button.parentNode;
    var taskDescription = taskItem.querySelector('span');
    var newDescription = prompt("Edit task:", taskDescription.textContent);

    if (newDescription !== null && newDescription.trim() !== "") {
        // Use AJAX to send the updated task description to the server
        $.post("edit_data.php", { id: taskId, description: newDescription }, function(data) {
            if (data === "success") {
                // Refresh the task list after successful edit
                fetchTasks();
            } else {
                alert("Failed to edit task!");
            }
        });
    }
}

function fetchTasks() {
    // Use AJAX to fetch tasks from the server and update the task list
    $.get("get_data.php", function(data) {
        document.getElementById("task-list").innerHTML = data;
    });
}

// Fetch tasks on page load
$(document).ready(function() {
    fetchTasks();
});
