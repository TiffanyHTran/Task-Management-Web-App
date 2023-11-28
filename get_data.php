<?php
require_once('db.php');

// Fetch tasks from the database
$result = $conn->query("SELECT * FROM tasks");

while ($row = $result->fetch_assoc()) {
    echo '<li>';
    echo '<span>' . $row['description'] . '</span>';
    echo '<button class="edit-btn" onclick="editTask(this)">Edit</button>';
    echo '<button class="delete-btn" onclick="deleteTask(this, ' . $row['id'] . ')">Delete</button>';
    echo '</li>';
}
?>
