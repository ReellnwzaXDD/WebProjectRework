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
$imagePath = $_GET["imgpath"];
$sql = "SELECT * FROM `products` INNER JOIN images ON products.IMG_ID = images.IMG_ID WHERE Image_path ='$imagePath'";
$result = $con->query($sql);
$row = mysqli_fetch_assoc($result);
$pid = $row["PID"];

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>O'clock</title>
    <link rel="icon" type="image/x-icon" href="./img/logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/style-ShopDetail.css">
    <script src="https://kit.fontawesome.com/e08e147dde.js" crossorigin="anonymous"></script>
    <script src="../js/Shop.js"></script>
</head>

<body>
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
                    <input type="search" class="searchbox" placeholder="Search Products" >
                    <a href="./Cartafterlogin.php"><img src="../img/cart.png" class="cart"></a>
                    <div class="dropdown">
                    <img src="../img/Login.png" class="login" alt="Login Icon">

                    <div class="dropdown-content" style="left: 1px;">
                    <?php if($_SESSION['username']=== 'admin'){ ?>
                            <a href="./listorder.php">LIST OF ORDER</a>
                        <?php }?>
                        <a href="./HistoryOforder.php">ORDER HISTROY</a>
                        <a href="./profile.php">PROFILE</a>
                        <a href="./logout.php">LOGOUT</a>
                    </div>
                        <p style="text-align: center;">Hi <?php echo $_SESSION['username']; ?></p>
                    </div>
                </div>
            </nav>
            
        </div>
        <br><br>
    <div class="content">
    <div class="img-detail">
        <?php
        
        echo '<img src="' . $imagePath . '" alt="Image" />';
        ?>
    </div>
    <div class="detail">
        <?php
        if ($row['amount'] > 0) {
                echo '<p>Name: ' . $row['product_name'] . '</p>
                    <p>Price: ' . $row['price'] . ' ฿</p>
                    <p>Remain: ' . $row['amount'] . '</p>
                    <form method="get" action="./Cartafterlogin.php" class="product-price"> 
                        <input type="hidden" name="action" value="add">
                        <input type="hidden" name="pid" value="' . $pid . '">
                        <input type="hidden" name="img" value="' . $imagePath . '">
                        <div class="quantity">
                            <button type="button" onclick="decrementQuantity()">-</button>
                                <input type="number" id="quantity" name="qty" value="1">
                            <button type="button" onclick="incrementQuantity()">+</button>
                        </div>
                        <input type="submit" value="ADD TO CART" class="addtocart">
                    </form>
                    <a href="Shop.php">
                        <button>BACK</button>
                    </a>';
        } else {
            echo   '<p>This product is out of stock.</p>
                    <a href="Shop.php">
                    <button>BACK</button>
                    </a>';
        }
        ?>
        
    </div>
</div>


</body>
<script>
    function incrementQuantity() {
        var quantityInput = document.getElementById("quantity");
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }

    function decrementQuantity() {
        var quantityInput = document.getElementById("quantity");
        var currentValue = parseInt(quantityInput.value);
        
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
</script>
</html>