<?php
session_start();
	
if (!isset($_SESSION['username'])) { // ถ้าlogin ไว้แล้ว
    header("location: ./afterlogin.php"); // ให้ redirect ไป หน้าlogin แล้ว
    exit;
}
include './connect.php';

?>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        
        
    </head>
    <style>
        .gradient-custom {
        /* fallback for old browsers */
        background: white;

        /* Chrome 10-25, Safari 5.1-6 */
        background: white;

        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: white;
        }
    </style>
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
                        <a href="./orderdetails.php">ORDER HISTROY</a>
                        <a href="./logout.php">LOGOUT</a>
                    </div>
                        <p style="text-align: center;">Hi <?php echo $_SESSION['username']; ?></p>
                    </div>
                </div>
            </nav>
            
        </div> 
        <br><br><br>
    <section class="h-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-10 col-xl-8">
            <div class="card" style="border-radius: 10px;">
            <div class="card-header px-4 py-5">
                <h5 class="text-muted mb-0">History of your Order, <span style="color: #a8729a;"><?php echo $_SESSION['username']; ?></span>!</h5>
            </div>
            <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="lead fw-normal mb-0" style="color: #a8729a;">Receipt</p>
                
                </div>
                <?php
                    
                     $sum =0;
                     $id=$_SESSION['userdetail']['id'];
                     $sql = "SELECT * FROM `order_detail` JOIN  `orders`ON order_detail.OID=orders.OID JOIN products ON order_detail.PID=products.PID JOIN images ON products.IMG_ID=images.IMG_ID WHERE `M_id` = '$id'";
                     $result = $con->query($sql);
                     if ($result->num_rows === 0){
                        
                        echo "<script type='text/javascript'>alert('คุณยังไม่เคยสั่งซื้อสินค้ากับเรา ลองดูสิ!'); 
                            window.location = './Shop.php'
                        </script>";
                    } else {
                     while ($row = $result->fetch_assoc()) {
                     $sum += $row["price"];
                    
                    ?>
                <div class="card shadow-0 border mb-4">
                <div class="card-body">
                    <div class="row">
                    
                    <div class="col-md-2">
                        <img src="<?=$row["Image_path"]?>"
                        class="img-fluid" alt="Phone">
                    </div>
                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0"><?=$row["product_name"]?></p>
                    </div>
                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small">Qty: <?=$row["Amount"]?></p>
                    </div>
                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0 small"><?=$row["price"]?> ฿</p>
                    </div>
                    </div>
                    <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
                    <div class="d-flex justify-content-around mb-1">
                    <p class="text-muted mt-1 mb-0 small ms-xl-5">OrderDate: </p>
                      <p class="text-muted mt-1 mb-0 small ms-xl-5"><?=$row["DATE"]?></p>
                    </div>
                </div>
                </div>
                <?php } }?> 

                <div class="d-flex justify-content-between pt-2">
                <p class="fw-bold mb-0">Order Details</p>
                <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> <?=$sum?> ฿</p>
                </div>
                <div class="d-flex justify-content-between">
                <p class="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
                </div>

                <div class="d-flex justify-content-between mb-5">
                <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
                </div>
            </div>
            <div class="card-footer border-0 px-4 py-5"
                style="background-color: black; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                paid: <span class="h2 mb-0 ms-2"><?=$sum?> ฿</span></h5>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</body>
</html>