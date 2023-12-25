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
                        <a href="./HistoryOforder.php">ORDER HISTROY</a>
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
                <h5 class="text-muted mb-0">Hello, <span style="color: #a8729a;"><?php echo $_SESSION['username']; ?></span>!</h5>
            </div>
            <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="lead fw-normal mb-0" style="color: #a8729a;">Receipt</p>
                
                </div>
                <?php
                    
                     $sum =0;
                     $sql = "SELECT order_detail.OID,images.Image_path,products.product_name,products.price,order_detail.Amount,orders.DATE ,member_detail.Name,member_detail.Surname,member_detail.Address,member_detail.tel FROM `order_detail` JOIN  `orders`ON order_detail.OID=orders.OID JOIN products ON order_detail.PID=products.PID JOIN images ON products.IMG_ID=images.IMG_ID JOIN member_detail ON member_detail.Id=orders.M_ID;";
                     $result = $con->query($sql);
                     $row = $result->fetch_assoc();
                    //  $rowCount = $row['count'];
                     
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
                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0"><?=$row["Name"]?></p>
                    </div>
                    <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p class="text-muted mb-0"><?=$row["Address"]?> <?=$row["tel"]?></p>
                    </div>
                    </div>
                    <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
                    <div class="d-flex justify-content-around mb-1">
                    <p class="text-muted mt-1 mb-0 small ms-xl-5">OrderDate: </p>
                      <p class="text-muted mt-1 mb-0 small ms-xl-5"><?=$row["DATE"]?></p>
                    </div>
                    
                    
                </div>
                </div>
                <?php } ?> 

                
        </div>
        </div>
    </div>
    </section>
</body>
</html>