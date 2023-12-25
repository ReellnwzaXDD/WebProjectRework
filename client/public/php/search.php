<?php
include "./connect.php";
// Get the keyword from the URL parameter
$keyword = isset($_GET["keyword"]) ? $_GET["keyword"] : "";
$itemsPerPage = 16; // Number of items to display per page
$page = isset($_GET['page']) ? $_GET['page'] : 1; // Get the current page from the query string or default to page 1

// Calculate the offset (starting index) for the SQL query
$offset = ($page - 1) * $itemsPerPage;
// Modify the SQL query to search for products based on the keyword
$sql = "SELECT images.image_path FROM images 
        JOIN products ON images.IMG_ID = products.IMG_ID 
        WHERE products.product_name LIKE '%" . $keyword . "%' 
        LIMIT $offset, $itemsPerPage";

// Execute the modified SQL query
$result = $con->query($sql);

$imagePaths = []; // An array to store the image paths

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $imagePaths[] = $row['image_path'];
    }
}

// Output the images in the HTML
foreach ($imagePaths as $imagePath) {
    $sqlPrice = "SELECT products.price,products.PID FROM products JOIN images ON products.IMG_ID = images.IMG_ID WHERE images.image_path = '$imagePath'";
    $priceResult = $con->query($sqlPrice);
    $res = mysqli_fetch_assoc($priceResult);
    $price = $res['price'];
    $pid = $res['PID'];
    // Output the image and any other relevant information
    echo '<div class="product-item">
            <a href="ShopDetail.php?imgpath=' . $imagePath . '">
                <img src="' . $imagePath . '" alt="Image" />
            </a>
            <p class="product-price">' . $price . ' ฿</p>
        </div>';
}

// Close the database connection
$con->close();

?>
