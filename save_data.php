<?php
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $description = $_POST['description'];

    $sql = "INSERT INTO tasks (description) VALUES ('$description')";
    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error: " . $conn->error;
    }
}
?>
