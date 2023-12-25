<?php
session_start();


$user = $_SESSION['user_login'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Della+Respira&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap" rel="stylesheet">
    <title>Magazine</title>
    <link rel="stylesheet" href="../css/style-magazine.css">
    <link rel="javascript" href="../js/app-magazine.js">
</head>
<body>
    <div class="blur-effect">
        <div class="blur-gradient"></div>
    </div>  
    <!-- Menu -->
    <div class="blur-effect">

        </div>
    <div class="top-menu"> 
         
        <nav class="main-nav">
            <ul class="menu-left">
                <li><a href="./Shop.php"class="Shop" href="">SHOP</a></li>
                <li><a href="./Magazine.html" class="Magazine" href="">MAGAZINE</a></li>
                <li><a class="Custom" href="./Custom.php">CUSTOM YOUR OWN</a></li>
            </ul>
            <!-- <div class="menu-middle">
                <a href="index.html"><img src="../img/logo.png"class="logo"></a>
            </div> -->
            <div class="menu-right">
                <!-- <input type="search" class="searchbox" placeholder="Search Products" > -->
                <a href="./Cartafterlogin.php"><img src="../img/cart.png" class="cart"></a>
                <a href="./html/Login.html"><img src="../img/Login.png" class="login"> </a>
                <div class="dropdown-content" style="left: 1px;">
                            
                            <a href="./profile.php">PROFILE</a>
                            <a href="./logout.php">LOGOUT</a>
                        </div>
            </div>
        </nav>
    </div> 

    <!-- Banner -->
    <section class="Banner-Section">
        <header class="header translate"  data-speed="-0.7">MAGAZINE</header>
        <div class="Banner-Image">
            <img src="../img/Magazine/shadows.png" class="shadow">
            <img src="../img/Magazine/background1-back.png" class="background-back translate" id="back" data-speed="-0.6" alt="">
            <img src="../img/Magazine/background1-mid.png" class="background-mid translate" id="mid" data-speed="-0.2" alt="">
            <img src="../img/Magazine/background1-front.png" class="background-front translate" id="front" data-speed="-0.1" alt="">
        </div>
    </section>
    <section class="Magazine-Section">
        <header class="header-magazine">Magazine</header>
        <div class="detail-magazine">
            <div class="detail-image-magazine">
                <div class="img-box"><h3>Fashion Show Dior 2021</h3></div>
                <div class="img-box"><h3>O'Clock x HarryPotter</h3></div>
                <div class="img-box"><h3>Thai Fashion festival 2022</h3></div>
                <div class="img-box"><h3>Thai Fashion festival 2023</h3></div>

        </div>
    </section>
    

   
    <script src="../js/app-magazine.js"></script>


    
</body>
</html>