<?php
include 'connect.php';

// Function to generate a random alphanumeric code of a given length
function generateRandomCode($length = 6) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $code = '';
    $charactersLength = strlen($characters);

    for ($i = 0; $i < $length; $i++) {
        $code .= $characters[rand(0, $charactersLength - 1)];
    }

    return $code;
}

// Function to generate a random price between 100 and 1000
function generateRandomPrice() {
    return rand(100, 1000); // Generates a float between 1.00 and 10.00
}

// Function to generate a random amount between 0 and 100
function generateRandomAmount() {
    return rand(0, 100);
}

// Generate and execute SQL queries to insert products into the product table
for ($i = 1; $i <= 398; $i++) {
    // Determine the product_name, CID, and IMG_ID based on the criteria
    if ($i >= 1 && $i <= 199) {
        $product_name = "t-shirt " . generateRandomCode(5);
        $CID = 1;
        $IMG_ID = $i; // Assuming IMG_ID corresponds to the image ID in the images table
    } else {
        $product_name = "jeans " . generateRandomCode(5);
        $CID = 2;
        $IMG_ID = $i; // Adjust the IMG_ID for the second category
    }

    // Generate random price and amount
    $price = generateRandomPrice();
    $amount = generateRandomAmount();

    // Generate the SQL query for inserting a product into the product table
    $sql = "INSERT INTO products (product_name, price, amount, CID, IMG_ID)
            VALUES ('$product_name', $price, $amount, $CID, $IMG_ID)";

    // Execute the SQL query
    if ($con->query($sql) !== TRUE) {
        echo "Error inserting product $i: " . $con->error;
    }
}

echo "Products inserted successfully.";

$con->close();
?>
