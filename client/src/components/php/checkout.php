<?php
session_start();
include './connect.php';
    if(empty($_SESSION['cart'])&&isset($_SESSION['cart'])){
        echo "<script type='text/javascript'>alert('กรุณาใส่ของลงตระกร้าก่อนชำระเงิน'); 
                window.location = './Shop.php'
            </script>";
    }
    if(isset($_POST['Submit'])&&isset($_SESSION['cart'])){
        
        $member = $_SESSION['userdetail'];
        $memberID = $member['id'];
        $sql = "INSERT INTO orders (`DATE`, `TIME`, `M_ID`) VALUES (CURRENT_DATE,CURRENT_TIME, '$memberID')";
        $rs = mysqli_query($con, $sql);
        if($rs)
        {   $_SESSION['Customstatus'] = true;
            $mdId = mysqli_insert_id($con);
            foreach ($_SESSION["cart"] as $item){
               $pid=$item["pid"];
               $qty=$item["qty"];
               $sql2 = "INSERT INTO order_detail (`PID`, `OID`, `Amount`) VALUES ('$pid', '$mdId', '$qty')";
               $rs2 = mysqli_query($con, $sql2);
               
            }
            
        }
        if ($rs2&&$rs) {
                unset($_SESSION['cart']);
                echo "<script type='text/javascript'>alert('Sent your order to shop now'); 
                    window.location = './Shop.php'
                </script>";
            }else{
                echo "<script type='text/javascript'>alert('Error.....'); 
                    window.location = './Cartafterlogin.php'
                </script>";
            }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oclock</title>
    
    <!-- เพิ่มการเชื่อมต่อไปยังไลบรารี Ionicons -->
    <link rel="stylesheet" href="../css/style-checkin.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ionicons@5.5.1/dist/css/ionicons.min.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
</head>
<body>
<div class="top-menu">
        <img src="../img/Shadow.png" class="Shadow">
        <nav class="main-nav" style="display: relative; position: absolute;">
            <ul class="menu-left">
                <a href="afterlogin.php"><img src="../img/logo.png" class="logo"></a>
                <li><a class="Shop" href="./Shop.php">SHOP</a></li>
                <li><a href="./Magazine.php" class="Magazine" href="">MAGAZINE</a></li>
                <li><a class="Custom" href="./Custom.php">CUSTOM YOUR OWN</a></li>
            </ul>
            <div class="menu-right">
                <input type="text" class="searchbox" placeholder="Search Products" name="keyword" id="keyword" onkeyup="send()">
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
                <!-- <a href="Login.php"><img src="../img/Login.png" class="login"> </a> -->
            </div>
        </nav>
    </div>
    <br><br><br><br><br>
    
    <div class = "checkout">
    <h1>CHECKOUT</h1>
    
    <h2>YOUR ORDERS</h2>
    <table border="1">
        <tr class ="head">
        <th colspan="2">PRODUCT</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
        </tr>
        <?php 
                $sum =0;
             foreach ($_SESSION["cart"] as $item){
                $sum += $item["price"] * $item["qty"];
            ?>
        <tr>
            <td><img src = "<?=$item["img"]?>" class ="numberlist-img"></td>
            <td><?=$item["pname"]?></td>
            <td><?=$item["qty"]?> ตัว</td>
            <td><?=$item["price"]?> BATH</td>
        </tr>
       <?php } ?> 
       <td colspan="4" class = "mysubtotal">
            <div class="summary">
                <p>SUBTOTAL: <?=$sum?> BATH</p>
            </div>
        </td>
    </table>
    <br>

        <form method="post" action="./checkout.php" class = "myform">
        <div class ="submit"><input type="submit" value="CONFIRM YOUR ORDERS" name="Submit"></div>
        </form>
             </div>
        

        </body>
</html>