<?php
session_start();
include "./connect.php";
if(!empty($_GET["action"])){
    if ($_GET["action"]=="add") {
        
        $pid = $_GET['pid'];
        $sql = "SELECT * FROM products WHERE PID = '$pid' ";
        
        $result = $con->query($sql);
        $res = mysqli_fetch_assoc($result);
        $cart_item = array(
            'pid' => $pid,
            'pname' => $res["product_name"],
            'price' => $res["price"],
            'qty' => $_GET['qty'],
            'img' => $_GET['img']
        );

        // ถ้ายังไม่มีสินค้าใดๆในรถเข็น
        if(empty($_SESSION['cart']))
            $_SESSION['cart'] = array();       
    
        // ถ้ามีสินค้านั้นอยู่แล้วให้บวกเพิ่ม
        if(array_key_exists($pid, $_SESSION['cart'])){
            $_SESSION['cart'][$pid]['qty'] += $_GET['qty'];
            
        }
            
        // หากยังไม่เคยเลือกสินค้นนั้นจะ
        else
            $_SESSION['cart'][$pid] = $cart_item;
        

    // ปรับปรุงจำนวนสินค้า
    } else if ($_GET["action"]=="update") {
        $pid = $_GET["pid"];     
        $qty = $_GET["qty"];
        $_SESSION['cart'][$pid]['qty'] = $qty;

    // ลบสินค้า
    } else if ($_GET["action"]=="delete") {
        
        $pid = $_GET['pid'];
        unset($_SESSION['cart'][$pid]);
    }
}else
// add to cart form Custom page //
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['imageData'])) {
    // Retrieve the image data from the POST request
    $imageData = $_POST['imageData'];
    $imageData = str_replace('data:image/png;base64,', '', $imageData);
    $decodedData = base64_decode($imageData);
    // Generate a unique filename
    $filename = time() . '.png';

    // Specify the file path to save the image on the server
    $filepath = '../img/custom/' . $filename;
   
    // Save the image to the server
    if (file_put_contents($filepath, $decodedData)) {
        // Image saved successfully
        $member_name = $_SESSION['username'];
        $member = $_SESSION['userdetail'];
        $memberID = $member['id'];

        // Establish your database connection
        // for fix bug sometime don't connect DB
        $con = mysqli_connect('db', 'oclockne', 'Thongsongsom@1', 'oclockne_Webtest');

        // Check the connection
        if (!$con) {
            die('Could not connect to the database: ' . mysqli_connect_error());
        }

        // Prepare and execute the SQL insertion
        $sql = "INSERT INTO orders_custom (M_id, member_name, image_path) VALUES ('$memberID', '$member_name', '$filepath')";
        sleep(1);
        mysqli_query($con, $sql);
        // header('Location: ./Cartafterlogin.php?member='+$memberID);
        // Close the database connection
    } else {
        echo 'Error saving image to the server.';
    }
} 
if (isset($_GET["member"])) {
    
    $member = $_SESSION['userdetail'];
    $memberID = $member['id'];
    // echo $memberID;
    $sql = "SELECT * FROM orders_custom WHERE M_Id = '$memberID' ";
    $result = $con->query($sql);
        
        while($res = mysqli_fetch_assoc($result)){
        if(!isset($_SESSION['cart'])){
			$_SESSION['cart']=array();
		}
        $cart_item = array(
            'pid' => $res["C_id"],
            'pname' => "custom Shirt",
            'price' => "1500",
            'qty' => "1",
            'img' => $res["image_path"]
        );

        // ถ้ายังไม่มีสินค้าใดๆในรถเข็น
        $product_id = $cart_item['pid'];
        if(empty($_SESSION['cart'])){
            $_SESSION['cart'] = array();
        }
        
    
        // ถ้ามีสินค้านั้นอยู่แล้วให้บวกเพิ่ม
        if(array_key_exists($product_id, $_SESSION['cart'])){
            $_SESSION['cart'][$product_id]['qty'] += $_GET["qty"];
        }
            
        // หากยังไม่เคยเลือกสินค้นนั้นจะ
        else{
            $_SESSION['cart'][$product_id] = $cart_item;
        }
    }
} 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/stylecart2.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/style-dropbar.css">
    <title>Cart</title>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <!-- <script src = "../js/cart2.js"></script> -->
</head>
<script>function update(pid) {
		var qty = document.getElementById(pid).value;
		// ส่งรหัสสินค้า และจำนวนไปปรับปรุงใน session
		document.location = "Cartafterlogin.php?action=update&pid=" + pid + "&qty=" + qty; 
	}</script>

<body>
    <!-- Menu Herizon -->
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
 <br><br><br><br>


  <div class="cart-content">
    <br><br>
    <h1>SHOPPING CART</h1>
    
    </div>
<br>
<div class = "mycart">
    <div class = "product">
    <div class = "listcart">
    <?php
        $sum =0;
        if (empty($_SESSION["cart"])) {
            echo '<div class="cart-content">
            <br>
            <p>STATUS: EMPTY</p>
            <ion-icon name="cart-sharp"></ion-icon>
            <br>
            <p class ="detailbeforeshop">หากคุณสนใจที่จะสั่งซื้อสินค้าของเรากรุณากดปุ่ม</p>
            <br>
            <a href="../php/Shop.php" class="shop-now">SHOP NOW</a>

             </div>';
        } else {
            foreach ($_SESSION["cart"] as $item){
                $sum += $item["price"] * $item["qty"];
            ?>

            <div class = "numberlist">
                
                <img src = "<?=$item["img"]?>" class ="numberlist-img">
                <div class = "numberlist-text">
                    
                    <p class = "numberlist-name"><?=$item["pname"]?></p>
                    
                </div>
                <div class ="quantity">
                    
                    
                    <input class ="item-quantity" type="number" id="<?=$item["pid"]?>" value="<?=$item["qty"]?>" min="1" max="9">
			        <a href="#" class ="update" onclick="update(<?=$item["pid"]?>)"><p>Update</p></a>
                    
                </div>
                <h2 class = "numberlist-price"><?=$item["price"]?> ฿</h2>
                <!-- <button class = "numberlist-del-btn"><ion-icon name="trash-sharp" ></ion-icon></button><br> -->
                <a href="?action=delete&pid=<?=$item["pid"]?>" class = "numberlist-del-btn"><ion-icon name="trash-sharp"></ion-icon></a>
                
            </div>
        <?php } }?>    
        </div>
    </div> 
    <div class = "subtotal">
        <div class = "subtotal-box">
            <h1 class = "text">YOUR TOTAL</h1>
            <h2 class = "subtotalprice"><?=$sum?> ฿</h2>
            <form action="./checkout.php" method="post">
                <input type="submit" value="BUY NOW!" name="Sbmit" class = "subtotal-btn">
            </form>
            <!-- <a href="#" class="subtotal-btn">BUY NOW!</a> -->
        </div>
    </div>
</div> 
<script src = "../js/cart.js"></script>
  
</body>
</html>