<?php
session_start();
	
if (!isset($_SESSION['username'])) { // ถ้าlogin ไว้แล้ว
    header("location: ./afterlogin.php"); // ให้ redirect ไป หน้าlogin แล้ว
    exit;
}
// cart
if(!isset($_SESSION['cart'])){
    $_SESSION['cart']=array();
}
include './connect.php'; // Include your database connection code
// Pagination configuration
$itemsPerPage = 16; // Number of items to display per page
$page = isset($_GET['page']) ? $_GET['page'] : 1; // Get the current page from the query string or default to page 1

// Calculate the offset (starting index) for the SQL query
$offset = ($page - 1) * $itemsPerPage;

// Query to select image paths with pagination
//$sql = "SELECT image_path FROM images LIMIT $offset, $itemsPerPage";
$sql = "SELECT images.image_path FROM images 
            JOIN products ON images.IMG_ID = products.IMG_ID LIMIT $offset, $itemsPerPage";
//sort Item
$sql2 = "SELECT image_path FROM images JOIN products ON images.IMG_ID=products.IMG_ID ORDER BY products.price DESC LIMIT $offset, $itemsPerPage;";
$sql3 = "SELECT image_path FROM images JOIN products ON images.IMG_ID=products.IMG_ID ORDER BY products.price ASC LIMIT $offset, $itemsPerPage;";


//if have sort , filter , next
if (isset($_POST['submit-fitler'])|| !empty($_GET['category']) || isset($_POST['SortBT']) || isset($_POST['SortBTASC'])) {
    if (isset($_POST['category'])) {
        $category = (array)$_POST['category'];
    }else if(isset($_GET['category'])){
        $category = (array)$_GET['category'];
    } 
    else {
        // Handle the case where 'category' is not set, e.g., when no checkboxes are selected
        $category = []; // Initialize it as an empty array or handle it as needed
    }
    $maxPrice = isset($_POST['max-price']) ? $_POST['max-price'] : null;
    $minPrice = isset($_POST['min-price']) ? $_POST['min-price'] : null;

    // Create the base SQL query
     $sql = "SELECT images.image_path FROM images 
             JOIN products ON images.IMG_ID = products.IMG_ID";

    // Add category filter if selected
    if (!empty($category)) {
        $categoryFilters = [];
        foreach ($category as $cat) {
            if ($cat === 'shirt') {
                $categoryFilters[] = "products.CID = 1"; // Shirt category ID
            } else if ($cat === 'Jeans') {
                $categoryFilters[] = "products.CID = 2"; // Jeans category ID
            }
        }
        if (!empty($categoryFilters)) {
            $sql .= " WHERE " . implode(" OR ", $categoryFilters);
        }

    }

    // Add price range filter if max and min prices are provided
    if (!empty($maxPrice) && !empty($minPrice)) {
        $sql .= " AND products.price BETWEEN $minPrice AND $maxPrice";
    }

    // Sort the results based on price
    if (isset($_POST['SortBT'])) {
        $sql .= " ORDER BY products.price DESC";
    } else if (isset($_POST['SortBTASC'])) {
        $sql .= " ORDER BY products.price ASC";
    }
    $sql .= " LIMIT $offset, $itemsPerPage";
    if (isset($_GET["keyword"])) {
        $keyword = $_GET["keyword"];
        $sql .= " WHERE products.product_name LIKE '%" . $keyword . "%'";
    }    
    // echo $sql;
    // Execute the modified SQL query
    $result = $con->query($sql);
} else {//next , normal
    if(isset($_POST['SortBT'])){
        if (isset($_GET["keyword"])) {
            $keyword = $_GET["keyword"];
            $sql2 .= " WHERE products.product_name LIKE '%" . $keyword . "%'";
        }
        $result = $con->query($sql2);
    }else if(isset($_POST['SortBTASC'])){
        if (isset($_GET["keyword"])) {
            $keyword = $_GET["keyword"];
            $sql3 .= " WHERE products.product_name LIKE '%" . $keyword . "%'";
        }
        $result = $con->query($sql3);
    }else{
        if (isset($_GET["keyword"])) {
            $keyword = $_GET["keyword"];
            $sql .= " WHERE products.product_name LIKE '%" . $keyword . "%'";
        }
        $result = $con->query($sql);
    }
}

$imagePaths = []; // An array to store the image paths

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $imagePaths[] = $row['image_path'];
    }
}

// Count the total number of images in the database
$totalImagesQuery = "SELECT COUNT(*) as total FROM images";
$totalImagesResult = $con->query($totalImagesQuery);
$totalImages = $totalImagesResult->fetch_assoc()['total'];
$categoryFilter = isset($_POST['category']) ? implode(",", $_POST['category']) : '';
$categoryFilter2 = isset($_GET['category']) ? $_GET['category'] : $categoryFilter;
$maxPriceFilter = isset($_POST['max-price']) ? $_POST['max-price'] : '';
$minPriceFilter = isset($_POST['min-price']) ? $_POST['min-price'] : '';


?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O'clock Shop</title>
    <link rel="icon" type="image/x-icon" href="./img/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style-Shop.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://kit.fontawesome.com/e08e147dde.js" crossorigin="anonymous"></script>
    <script src="../js/Shop.js"></script>
    <script>
        function send() {
        request = new XMLHttpRequest();
        request.onreadystatechange = showResult;
        var keyword = document.getElementById("keyword").value;
        var url= "search.php?keyword=" + keyword;
        request.open("GET", url, true);
        request.send(null);
        }
        function showResult() {
            if (request.readyState == 4) {
                if (request.status == 200)
                    document.getElementById("image-container").innerHTML = request.responseText;
                }
        }
    </script>
</head>

<body>
    <!-- <div class="WelcomePage">  
            <h1>Hello,welcome to our website</h1>  
        </div> -->
    <!-- Menu -->

    <nav id="side" style="display: none;">
        <h1 id="closeFilter">CLOSE</h1>
        <form action="Shop.php" method="post" onsubmit="return validatePrice()">
            <h1>Category</h1>
            <div required>
                <input type="checkbox" id="shirt" name="category[]" value="shirt" <?php if (isset($_POST['category']) && in_array('shirt', $_POST['category'])) echo 'checked'; ?>>
                <label for="shirt">shirt</label>
                <input type="checkbox" id="Jeans" name="category[]" value="Jeans" <?php if (isset($_POST['category']) && in_array('Jeans', $_POST['category'])) echo 'checked'; ?>>
                <label for="Jean"> Jean</label>
            </div>

            <h1>Price</h1>
            <label for="max-price">Max Price : </label>
            <input type="number" name="max-price" placeholder="1000" value="<?php echo (isset($_POST['max-price']) && is_numeric($_POST['max-price'])) ? $_POST['max-price'] : '1000'; ?>">
            <label for="max-price">Min Price : </label>
            <input type="number" name="min-price" min="100" placeholder="100" value="<?php echo (isset($_POST['min-price']) && is_numeric($_POST['min-price'])) ? $_POST['min-price'] : '100'; ?>">
            <input type="submit" name="submit-fitler" id="submit-filter">
        </form>

    </nav>

    <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>
            <ul class="menu__box">
            <li><a class="menu__item" href="./afterlogin.php">Home</a></li>
                    <li><a class="menu__item" href="./Shop.php">Shop</a></li>
                    <li><a class="menu__item" href="./Magazine.php">Magazine</a></li>
                    <li><a class="menu__item" href="./Custom.php">Custom Your Own</a></li>
                    <li><a class="menu__item" href="./Cartafterlogin.php">Cart</a></li>
                    <li><a class="menu__item" href="./profile.php">PROFILE</a></li>
                    <li><a class="menu__item" href="./logout.php">LOGOUT</a></li>
            </ul>
        </div>
        <!-- Menu Verticle-->
        <div class="top-menu"> 
            <img src="../img/Shadow.png" class="Shadow" title="Shadow">
            <nav class="main-nav">
                <ul class="menu-left">
                    <a href="./afterlogin.php"><img src="../img/logo.png"class="logo"></a>
                    <li><a href="./Shop.php"class="Shop" href="">SHOP</a></li>
                    <li><a href="./Magazine.php" class="Magazine" href="">MAGAZINE</a></li>
                    <li><a class="Custom" href="./Custom.php">CUSTOM YOUR OWN</a></li>
                </ul>
                <div class="menu-right">
                    <input type="text" class="searchbox" placeholder="Search Products" name="keyword" id="keyword" onkeyup="send()" >
                    <a href="./Cartafterlogin.php"><img src="../img/cart.png" class="cart"></a>
                    <div class="dropdown">
                    <img src="../img/Login.png" class="login" alt="Login Icon">

                    <div class="dropdown-content" style="left: 1px;">
                    <?php if($_SESSION['username']=== 'admin'){ ?>
                            <a href="./listorder.php">LIST OF ORDER</a>
                        <?php }?>
                        <a href="./profile.php">PROFILE</a>
                        <a href="./HistoryOforder.php">ORDER HISTROY</a>
                        <a href="./logout.php">LOGOUT</a>
                    </div>
                        <p style="text-align: center;">Hi <?php echo $_SESSION['username']; ?></p>
                    </div>
                </div>
            </nav>
            
        </div>

    <div class="Shop-filter">
        <button id="filterBT" class="filterBT">Filter</button>
        <form action="./Shop.php" method="post">
            <div class="dropdown">
                <button disabled class="SortBT" name="SortBT">Sort by Feature</button>
                <div class="dropdown-content" style="left: 1px;">
                    <button class="SortBT" name="SortBT">Sort by MAX</button>
                    <button class="SortBT" name="SortBTASC">Sort by MIN</button>
                </div>
            </div>
            <?php
        // Add hidden input fields to preserve filter parameters in the form
        if (!empty($_POST['category'])) {
            foreach ($_POST['category'] as $selectedCategory) {
                echo '<input type="hidden" name="category[]" value="' . $selectedCategory . '">';
            }
        }
        if (!empty($_POST['max-price'])) {
            echo '<input type="hidden" name="max-price" value="' . $_POST['max-price'] . '">';
        }
        if (!empty($_POST['min-price'])) {
            echo '<input type="hidden" name="min-price" value="' . $_POST['min-price'] . '">';
        }
        //add price letter**********************
        ?>
        </form>
    </div>

    <div id="image-container">

        <!-- Loop through the image paths and display the images -->
        <?php
        foreach ($imagePaths as $imagePath) {
            $sqlPrice = "SELECT products.price,products.PID FROM products JOIN images ON products.IMG_ID = images.IMG_ID WHERE images.image_path = '$imagePath'";
            $priceResult = $con->query($sqlPrice);
            $res = mysqli_fetch_assoc($priceResult);
            $price = $res['price'];
            $pid = $res['PID'];
            echo '  <div class="product-item">
                        <a href="ShopDetail.php?imgpath=' . $imagePath . '">
                            <img src="' . $imagePath . '" alt="Image" />
                        </a>
                        <p class="product-price">' . $price . ' ฿</p>
                    </div>';
        
        }
        
        $con->close(); // Close the database connection
        ?>
    </div>

    <div class="Next-pic">
        <?php
        $totalPages = ceil($totalImages / $itemsPerPage);
        $maxPagesToShow = 10; // Number of pages to display at once
        $halfMax = floor($maxPagesToShow / 2);

        if ($page > 1) {
            $prevPageURL = "?page=" . ($page - 1);
            $prevPageURL .= "&category=" . $categoryFilter2;
            $prevPageURL .= "&SortBT=1";
            $prevPageURL .= "&SortBTASC=1";
            if (!empty($maxPriceFilter)) {
                $prevPageURL .= "&max-price=" . $maxPriceFilter;
            }
            if (!empty($minPriceFilter)) {
                $prevPageURL .= "&min-price=" . $minPriceFilter;
            }
            echo '<a class="Next-pic-bt" href="' . $prevPageURL . '">Previous</a>';
        }

        // Calculate the start and end page numbers to display
        $startPage = max(1, $page - $halfMax);
        $endPage = min($totalPages, $startPage + $maxPagesToShow - 1);

        // Display page numbers
        for ($i = $startPage; $i <= $endPage; $i++) {
            $pageURL = "?page=" . $i;
            $pageURL .= "&category=" . $categoryFilter2;
            $pageURL .= "&SortBT=1";
            $pageURL .= "&SortBTASC=1";

            if (!empty($maxPriceFilter)) {
                $pageURL .= "&max-price=" . $maxPriceFilter;
            }
            if (!empty($minPriceFilter)) {
                $pageURL .= "&min-price=" . $minPriceFilter;
            }

            // Highlight the current page
            $pageClass = ($i == $page) ? 'active-page' : '';

            echo '<a href="' . $pageURL . '" class="page-number-' . $pageClass . '">' . $i . '</a>';
        }

        // Next button
        if ($page < $totalPages) {
            $nextPageURL = "?page=" . ($page + 1);
            $nextPageURL .= "&category=" . $categoryFilter2;
            $nextPageURL .= "&SortBT=1";
            $nextPageURL .= "&SortBTASC=1";

            echo '<a class="Next-pic-bt" href="' . $nextPageURL . '">Next</a>';
        }
        ?>
    </div>
    <div id="result"></div>



</body>

</html>