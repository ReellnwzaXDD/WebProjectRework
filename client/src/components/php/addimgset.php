<?php
include 'connect.php';

// Directory paths for the "jeans" and "t-shirt" folders
$jeansDirectory = "../img/Product_cloth_dataset/jeans/";
$tShirtDirectory = "../img/Product_cloth_dataset/tshirt/";

$id = 1;

// Function to insert images from a folder into the database
function insertImages($con, $directory, &$id) {
    $files = glob($directory . "*.jpg"); // Assuming the images are in PNG format
    // Initialize the id variable
    foreach ($files as $file) {
        $imageName = basename($file);
        $imagePath = $directory . $imageName;
        $uploadedOn = date('Y-m-d H:i:s'); // Current date and time
        $status = 1; // You can set the status as needed

        // Insert image record into the database
        $sql = "INSERT INTO images (IMG_ID, file_name, uploaded_on, status,Image_path) 
                VALUES ('$id', '$imageName', '$uploadedOn', '$status','$imagePath')";

        if ($con->query($sql) !== TRUE) {
            echo "Error inserting image $imageName: " . $con->error;
        }
        $id++;
    }
}

// Insert images from the "t-shirt" folder
insertImages($con, $tShirtDirectory,$id);

// Insert images from the "jeans" folder
insertImages($con, $jeansDirectory,$id);


echo "Images inserted successfully.";





$con->close();
?>
