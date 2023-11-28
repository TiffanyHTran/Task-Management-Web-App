<?php
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    $sql = "DELETE FROM tasks WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
