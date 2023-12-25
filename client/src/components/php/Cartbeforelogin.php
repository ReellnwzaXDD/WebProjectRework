<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    
    <!-- เพิ่มการเชื่อมต่อไปยังไลบรารี Ionicons -->
    <link rel="stylesheet" href="../css/stylecart.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ionicons@5.5.1/dist/css/ionicons.min.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
</head>
<body>
    <div class="container">
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
                    <li><a class="menu__item" href="./php/login.php">Login</a></li>
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
                    <a href="./Cartbeforelogin.php"><img src="../img/cart.png" class="cart"></a>
                    <a href="./login.php"><img src="../img/Login.png" class="login"> </a>
                </div>
            </nav>
            <br>
            <div class="cart-content">
                <h1>SHOPPING CART</h1>
                <ion-icon name="cart-sharp"></ion-icon>
                <p>STATUS: EMPTY</p>
                
                <p class ="mytext">ลงชื่อเข้าใช้เพื่อดูรถเข็นของคุณและเริ่มช็อปปิ้ง</p><br>
                <a href="./login.php" class="login-link">LOGIN</a>
            </div>
        </div>
</body>
</html>
