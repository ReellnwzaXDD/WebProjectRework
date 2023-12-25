<?php
session_start();
if (!isset($_SESSION['username'])) { // ถ้าไม่ได้เข้าระบบอยู่
    header("location: ./login.php"); // redirect ไปยังหน้า login.php
    exit;
}
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
        <script src="../js/app.js"></script>
        <link rel="stylesheet" href="./css/style-dropbar.css">
        
        
    </head>
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
                        <a href="./profile.php">PROFILE</a>
                        <a href="./HistoryOforder.php">ORDER HISTROY</a>
                        <a href="./logout.php">LOGOUT</a>
                    </div>
                        <p style="text-align: center;">Hi <?php echo $_SESSION['username']; ?></p>
                    </div>
                </div>
            </nav>
            
        </div>  
        <!-- Banner -->
        <div class="Banner">
            <!--Effect ภาพ Banner-->
            <!-- <div class="black_effect"></div>-->
            <video src="../vdo/BannerVideo.mp4" class="VdoBanner" autoplay muted loop playsinline data-object-fit="cover">
        </div>  
        <!-- Recommand -->
        <div class="Recommand">
            <div class="Rec-image">
                <img src="../img/Customyourown-neww.png" class="cyo" title="cyo">
            </div>
            <div class="Rec-paragraph">
                <h1 class="Rec-paragraph-Headers">Custom Your Own!</h1>
                <p class="Rec-paragraph-Paragraph">
                    สร้างสไตล์ของคุณเอง! เลือกผ้าที่คุณชื่นชอบ ทำให้เสื้อของคุณไม่เหมือนใคร! เริ่มต้นที่ O'Clock และเป็นส่วนหนึ่งของการสร้างสรรค์แฟชั่นของคุณได้เลย!
                </p>
                <button class="Button-Paragraph" onclick="window.location.href='../php/Custom.php'">ทดลองใช้</button>
            </div>
            
        </div>
        <div class="Detail-area">
            <div class="Detail-grid">
                <div class="Copyright">
                    <h4 class="Copyright-detail" style="color:white;">Copyright © 2023 O'Clock. All Rights Reserved.</h4>
            </div>
        </div>
        
    </body>
</html>