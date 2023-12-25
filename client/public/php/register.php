<?php
// database connection code
if (isset($_SESSION['username'])) { // ถ้าเข้าระบบอยู่
    header("location: ./afterlogin.php"); // redirect ไปยังหน้า index.php
    exit;
}else
if(isset($_POST['Submit']))
{
    // $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
    include "./connect.php";

    // Get the post records
    $txtName = $_POST['txtName'];
    $txtSurname = $_POST['txtsurname'];
    $txtEmail = $_POST['txtEmail'];
    $txtPhone = $_POST['txtPhone'];
    $txtAddress = $_POST['txtAddress'];
    $txtUsername = $_POST['Username'];
    $txtPassword = $_POST['Password'];

    // Database insert SQL code for member_detail table
    $sql = "INSERT INTO `member_detail` (`Name`, `Surname`, `Email`, `tel`, `Address`) VALUES ('$txtName', '$txtSurname', '$txtEmail', '$txtPhone', '$txtAddress')";

    // Insert into member_detail and check for success
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        // Retrieve the auto-generated Id from the last insert operation
        $mdId = mysqli_insert_id($con);

        // Database insert SQL code for member_account table using the retrieved Id
        $sql2 = "INSERT INTO `member_account` (`Username`, `Password`, `MD_id`) VALUES ('$txtUsername', '$txtPassword', '$mdId')";

        // Insert into member_account
        $rs2 = mysqli_query($con, $sql2);

        if($rs2)
        {

            header("Location: ./login.php");
            exit();
            

        }
        else
        {
            echo "<script type='text/javascript'>alert('Failed to insert into table '); 
            window.location = './login.php'
            </script>";
            //echo "Failed to insert into member_account";
        }
    }
    else
    {
        echo "<script type='text/javascript'>alert('Failed to insert into table '); 
        window.location = './login.php'
        </script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O'clock Register</title>
        <link rel="icon" type="image/x-icon" href="../img/logo.png">
        <link rel="stylesheet" href="../css/styleReg.css">
        <script src="../js/regscript.js"></script>
        <script>
            var xmlHttp;

            function checkUsername() {
                // console.log("hi");
                document.getElementById("username").className = "thinking";
                
                xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = showUsernameStatus;
                
                var username = document.getElementById("username").value;
                var url = "Checkname.php?username=" + username;
                xmlHttp.open("GET", url);
                xmlHttp.send();
            }

            function showUsernameStatus() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    if (xmlHttp.responseText == "okay") {
                        document.getElementById("username").className = "approved";

                    } else {
                        document.getElementById("username").className = "denied";
                        document.getElementById("username").focus();
                        document.getElementById("username").select();
                    }
                }
            }
        </script>
</head>
<body>
    <form id="Regform" method="post" action="../php/register.php">
        <h1 class="Reg_Header">Create Account</h1>
        <p>Username:</p>
        <input type="text" pattern="[A-Za-z0-9]{3,20}" id="username" name="Username" onblur="checkUsername()" required>
        <p>Password:</p>
        <input type="password" id="pass1" pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$" title="password ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1" required name="Password">
        <p>ConfPass:</p>
        <input type="password" id="pass2" pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$" required>
        <p>Name:</p>
        <input type="text" name="txtName" id="txtName" placeholder="ชื่อ" required>
        <p>Surname:</p>
        <input type="text" name="txtsurname" id="txtsurname" placeholder="นามสกุล" required>
        <p>Email:</p>
        <input type="text" name="txtEmail" id="txtEmail" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required>
        <p>Tel:</p>
        <input type="text" name="txtPhone" id="txtPhone" pattern="^(\+66|0)[0-9]{1,2}[0-9]{3}[0-9]{4,5}$" placeholder="phone" required>
        <p>Address:</p>
        <select id="province" required>
            <option value="" disabled selected>Select a Province</option>
            <!-- API  -->
        </select>
        <select id="amphure">
            <option value="" disabled selected>Select a District</option>
            <!-- API  -->
        </select>
        <select id="tambon">
            <option value="" disabled selected>Select a Sub-district</option>
            <!-- API  -->
        </select>
        <select id="zipcode">
            <option value="" disabled selected>Select a zipcode</option>
            <!-- API  -->
        </select>

        <!-- <input type="text" id="txtAddress" name="txtAddress" readonly> -->
        <textarea name="txtAddress" id="txtAddress" cols="30" rows="10" readonly></textarea>

        <a href="../index.php">Home </a>
        <input type="submit" name="Submit" id="btnreg" value="Register">
        <!-- <button type="button" id="btnreg">Register</button> -->
       

        <div id="errmsg1" style="color: red;"></div>
        <div id="errmsg2" style="color: red;"></div>
        <div id="errmsg3" style="color: red;"></div>
        <div id="errmsg4" style="color: red;"></div>
        <div id="errmsg5" style="color: red;"></div>

        <!-- <p>**Password (รหัสผ่าน 8 ตัวขึ้นไป)</p> -->
    </form>
</body>
</html>