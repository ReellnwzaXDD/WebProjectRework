<?php
session_start();
include './connect.php';
$member = $_SESSION['userdetail'];
$memberID = $member['id'];
$sql = "SELECT * FROM orders_custom WHERE M_Id = '$memberID' ";
$result = $con->query($sql);
if ($result && !isset($_SESSION['Customstatus'])) {
    while ($row = mysqli_fetch_assoc($result)) {
        $imageId = $row['M_Id'];

        // Delete the image file (adjust the file path accordingly)
        $imagePath = $row['image_path'];
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }

        // Delete the record from the database (adjust your database deletion logic)

        $deleteSql = "DELETE FROM orders_custom WHERE M_Id = '$memberID' ";
        // Execute the SQL query and handle any errors
        mysqli_query($con, $deleteSql);
    }
}
session_destroy();
header('Location: ../index.php');
?>