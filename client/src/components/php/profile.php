<?php
session_start();
if (!isset($_SESSION['username'])) { // ถ้าไม่ได้เข้าระบบอยู่
    header("location: ./login.php"); // redirect ไปยังหน้า login.php
    exit;
}
$user = $_SESSION['userdetail'];
if(isset($_POST['Submit']))
{
    include "./connect.php";
    $txtName = $_POST['txtName'];
    $txtoldpassword = $_POST['oldpass'];
    $txtSurname = $_POST['txtSurname'];
    $txtEmail = $_POST['txtEmail'];
    $txtPhone = $_POST['txtPhone'];
    $txtAddress = $_POST['txtAddress'];
    $txtid = $user['id'];
    $sql = "UPDATE `member_detail` SET `Name` = '$txtName', `Surname` = '$txtSurname', `Email` = '$txtEmail', `tel` = '$txtPhone', `Address` = '$txtAddress' WHERE `member_detail`.`Id` = '$txtid';";
    $rs = mysqli_query($con, $sql);
    
    if ($rs) {
        echo "<script type='text/javascript'>alert('แก้ไขข้อมูลเรียบร้อย กรุณาlogout และ login ใหม่ อีกครั้ง');
            window.location = './afterlogin.php';
            </script>";
    }else{
        echo "<script type='text/javascript'>alert('Error');
            </script>";
            
    }
}
if(isset($_POST['Submit2'])){
    include "./connect.php";
    $txtPassword = $_POST['newpass1'];
    $txtPassword2 =$_POST['newpass2'];
    $oldpassword = $user['pass'];
    if($oldpassword==$txtoldpassword){
        if($txtPassword == $txtPassword2){
            $sql2 = "UPDATE `member_account` SET `Password` = '$txtPassword' WHERE `member_account`.`MD_Id` = '$txtid';";
            $rs2 = mysqli_query($con, $sql2);
        }else{
            echo "<script type='text/javascript'>alert('รหัสผ่านไม่ตรงกัน'); 
                </script>";
            
        }
    }else{
        echo "<script type='text/javascript'>alert('รหัสผ่านผิด'); 
                </script>";
            
    }
    if ($rs2) {
        echo "<script type='text/javascript'>alert('แก้ไขข้อมูลเรียบร้อย กรุณาlogout และ login ใหม่ อีกครั้ง');
            window.location = './afterlogin.php';
            </script>";
    }else{
        echo "<script type='text/javascript'>alert('Error');
            </script>";
            
    }
}
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<style>
        body{margin-top:20px;
    color: #9b9ca1;
    }
    .bg-secondary-soft {
        background-color: rgba(208, 212, 217, 0.1) !important;
    }
    .rounded {
        border-radius: 5px !important;
    }
    .py-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }
    .px-4 {
        padding-right: 1.5rem !important;
        padding-left: 1.5rem !important;
    }
    
    .text-secondary {
        --bs-text-opacity: 1;
        color: rgba(208, 212, 217, 0.5) !important;
    }
    .btn-success-soft {
        color: #28a745;
        background-color: rgba(40, 167, 69, 0.1);
    }
    .btn-danger-soft {
        color: #dc3545;
        background-color: rgba(220, 53, 69, 0.1);
    }
    .form-control {
        display: block;
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 0.9375rem;
        font-weight: 400;
        line-height: 1.6;
        color: #29292e;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #e5dfe4;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 5px;
        -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    }

    .col-xxl-6
    {
        margin-top: 15px;
    }
</style>
<div class="container">
<div class="row">
		<div class="col-12">
			<!-- Page title -->
			<div class="my-5">
				<h3>My Profile</h3>
				<hr>
			</div>
			<!-- Form START -->
			<form class="file-upload" method='post' action='./profile.php'>
				<div class="row mb-5 gx-5">
					<!-- Contact detail -->
					<div class="col-xxl-8 mb-5 mb-xxl-0">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-4 mt-0">Contact detail</h4>
								<!-- First Name -->
								<div class="col-md-6">
									<label class="form-label">First Name *</label>
									<input type="text" class="form-control" placeholder="" aria-label="First name" value="<?php echo $user['name']; ?>" name=txtName pattern="[A-Za-z0-9]{3,20}">
								</div>
								<!-- Last name -->
								<div class="col-md-6">
									<label class="form-label">Last Name *</label>
									<input type="text" class="form-control" placeholder="" aria-label="Last name" value="<?php echo $user['surname']; ?>" name="txtSurname">
								</div>
								<!-- Phone number -->
								<div class="col-md-6">
									<label class="form-label">Phone number *</label>
									<input type="text" class="form-control" placeholder="" aria-label="Phone number" value="<?php echo $user['phone']; ?>" name="txtPhone">
								</div>
								<!-- Mobile number -->
								<div class="col-md-6">
									<label class="form-label">Mobile number *</label>
									<input type="text" class="form-control" placeholder="" aria-label="Phone number" value="<?php echo $user['phone']; ?>" pattern="^(\+66|0)[0-9]{1,2}[0-9]{3}[0-9]{4,5}$">
								</div>
								<!-- Email -->
								<div class="col-md-6">
									<label for="inputEmail4" class="form-label">Email *</label>
									<input type="email" class="form-control" id="inputEmail4" value="<?php echo $user['email']; ?>" name="txtEmail" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
								</div>
								<div class="col-md-6">
									<label for="inputEmail4" class="form-label">Address *</label>
									<input type="text" class="form-control" id="inputEmail4" value="<?php echo $user['address']; ?>" name="txtAddress">
								</div>
							</div> <!-- Row END -->
						</div>
					</div>
					 <!-- Row END -->


					<!-- change password -->
					<div class="col-xxl-6">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="my-4">Change Password</h4>
								<!-- Old password -->
								<div class="col-md-6">
									<label for="exampleInputPassword1" class="form-label">Old password *</label>
									<input type="password" class="form-control" id="exampleInputPassword1" name="oldpass" >
								</div>
								<!-- New password -->
								<div class="col-md-6">
									<label for="exampleInputPassword2" class="form-label">New password *</label>
									<input type="password" class="form-control" id="exampleInputPassword2" name="newpass1" pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$" title="password ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1">
								</div>
								<!-- Confirm password -->
								<div class="col-md-12">
									<label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
									<input type="password" class="form-control" id="exampleInputPassword3" name="newpass2" pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$" title="password ต้องมี8ตัว ตัวใหญ่ 1 ตัวเล็ก 1 ตัวเลข1">
								</div>
							</div>
						</div>
					</div>
				</div> <!-- Row END -->
				<!-- button -->
				<div class="gap-3 d-md-flex justify-content-md-end text-center">
                    <input type="submit" name="Submit" class="btn btn-primary btn-lg" value="Update profile">
                    <input type="submit" name="Submit2" class="btn btn-primary btn-lg" value="Change Password">
                    <a href="./afterlogin.php" class ="btn btn-primary btn-lg">BACK TO HOME</a><br>
					<!-- <button type="butston" class="btn btn-danger btn-lg">Delete profile</button>
					<button type="button" class="btn btn-primary btn-lg">Update profile</button> -->
				</div>
			</form> <!-- Form END -->
		</div>
	</div>
	</div>