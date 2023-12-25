<?php
    // Start a session (if not already started)
    session_start();
    if (isset($_SESSION['username'])) { // ถ้าเข้าระบบอยู่
        header("location: ./afterlogin.php"); // redirect ไปยังหน้า index.php
        exit;
    }else
    // Database connection code
    include "./connect.php";

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Query to check if the provided username and password match a record in the database
        $sql = "SELECT * FROM `member_account` WHERE `Username` = '$username' AND `Password` = '$password'";
        $sql2 = "SELECT * FROM `member_detail` JOIN `member_account` ON member_detail.Id = member_account.MD_Id WHERE `Username` = '$username' AND `Password` = '$password'";
        $result = mysqli_query($con, $sql);
        $result2 = mysqli_query($con, $sql2);
        $res = mysqli_fetch_assoc($result2);
        if ($result && mysqli_num_rows($result) > 0) {
            // Login successful
            $_SESSION['username'] = $username; // Store username in session for future use
            
            $_SESSION['userdetail'] = array(
                'name' => $res['Name'],
                'surname' => $res['Surname'],
                'email' => $res['Email'],
                'phone' => $res['tel'],
                'address' => $res['Address'],
                'pass' => $res['Password'],
                'id' => $res['MD_Id']
            );
           
            echo "<script type='text/javascript'>alert('Login Complete'); 
                window.location = './afterlogin.php'

             </script>"; // Redirect to the dashboard or another secure page
            
        } else {
            // Login failed
            echo "<script type='text/javascript'>alert('Invalid username or password. Please try again.'); 
                window.location = './login.php'
            </script>";
            // echo "Invalid username or password. Please try again.";
        }
    } //else {
    //     echo "<script type='text/javascript'>alert('Please provide both username and password. Or you not Register?'); 
    //         window.location = '../html/Login.html'
    //     </script>";
    //     //echo "Please provide both username and password.";
    // }

    mysqli_close($con);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>O'clock</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="../Miniprojectweb/img/logo.png">
        <link rel="stylesheet" href="../css/stylelog.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap" rel="stylesheet">
        <script src="app.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
        
    </head>
    <body class="Login-page">
        <div class = "mybox">
        <form class="Loginform" action="./login.php" method="post">
            
            <div class="Logintext"><img src ="../img/Loginlogo.png"></div>
            <div class = "myinput"><ion-icon name="person"></ion-icon><input type="text" placeholder="USERNAME" name="username"></div>

            <div class ="myinput"><ion-icon name="lock-closed"></ion-icon><input type="password" placeholder="PASSWORD" name="password"></div>
            <div class ="Remember"><p><input type ="checkbox" value="Remember">
                REMEMBER ME!</p></div>
            <input type="submit" value="Login" class="btnlogin">
            <!-- <a href="../html/afterlogin.html" class = "btnlogin">LOGIN</a> -->
            <a href="../index.php" class ="btnback">BACK</a>

            <div class ="Register">
            <p>IF YOU DON'T HAVE AN ACCOUNT <a href="./register.php">Register</a></p>
            </div>
             <!-- <button onclick="window.location.href = 'register.html';">Register</button> -->
            
        </form>
        </div>
    </body>
</html>