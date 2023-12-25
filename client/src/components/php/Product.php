<?php
session_start();


$user = $_SESSION['user_login'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product</title>
    <link rel="stylesheet" href="../css/style-product.css">
    
</head>
<body>

    <!-- Menu -->
    <div class="top-menu"> 
        <!-- <img src="../img/Shadow.png" class="Shadow" title="Shadow"> -->
        <nav class="main-nav">
            <ul class="menu-left">
                <a href="index.html"><img src="../img/logo.png"class="logo"></a>
                <li><a href="./html/Shop.html"class="Shop" href="">SHOP</a></li>
                <li><a href="./Magazine.html" class="Magazine" href="">MAGAZINE</a></li>
                <li><a class="Custom" href="./html/Custom.html">CUSTOM YOUR OWN</a></li>
                
            </ul>
            <div class="menu-right">
                <input type="search" class="searchbox" placeholder="Search Products" >
                <a href="./html/Cart.html"><img src="../img/cart.png" class="cart"></a>
                <a href="./html/Login.html"><img src="../img/Login.png" class="login"> </a>
            </div>
        </nav>
    </div> 

    <!-- Product Area -->
    <div class="Product-area">
        <div class="Product-box">
            <div class="leave-area"></div>
            <section class="Image-area">
                <img src="../img/Clothes/Pant/8.1.png" class="product-image">
            </section>
    <!-- Detail เสื้อผ้า -->
            <section class="Detail-area">
                <h2 class="product-name">Crepe Couture mini dress</h2>
                <div class="product-detail">
                Valentino Garavani’s minidress is crafted to form the shape of a layered combination shirt and sweatshirt. Crafted in Italy
                </div>
                
                <div class="size">
                    <form>
                        <div class="size-select">
                            <p class="size-header">Size</p>
                            <label for="small">
                                <input type="radio" name="size" id="small">
                                <span>S</span>
                            </label>
                            <label for="medium">
                                <input type="radio" name="size" id="medium">
                                <span>M</span>
                            </label>
                            <label for="large">
                                <input type="radio" name="size" id="large">
                                <span>L</span>
                            </label>
                            <label for="x-large">
                                <input type="radio" name="size" id="x-large">
                                <span>XL</span>
                            </label>
                        </div>
                    </form>
                </div>
                <div class="colors">
                    <p class="color-header">Color</p>
                    <div class="color-pick-area">
                        <ul class="color-choice">
                            <li><img src="../img/colors/brown.png" class="brown"></li>
                            <li><img src="../img/colors/nude.png" class="nude"></li>
                            <li><img src="../img/colors/grey.png" class="grey"></li>
                            <li><img src="../img/colors/green.png" class="green"></li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="price">฿ 2500</div>
                <div class="button-area">
                    <button class="btn">ADD TO CART</button>
                </div>
            </section>
        </div>
    </div>

   



    
</body>
</html>