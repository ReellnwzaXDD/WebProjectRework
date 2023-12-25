<?php
session_start();
if (!isset($_SESSION['username'])) { // ถ้าไม่ได้เข้าระบบอยู่
    header("location: ./login.php"); // redirect ไปยังหน้า login.php
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">   
    <link rel="stylesheet" href="../css/styleCustom.css">
    <title>CustomYourOwn</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Custom Your Own Page</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <canvas id="canvas" style="max-width: 100%; height: auto;">
          </canvas>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./afterlogin.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./Cartafterlogin.php">Cart</a>
                </li>
                <hr><br>
                <h3>Let Custom!</h3>
              </ul>
              <section class="tools-board">
                <div class="row">
                  <label class="title">Shapes</label>
                  <ul class="options">
                    <li class="option tool" id="rectangle">
                      <img src="../img/icons/rectangle.svg" alt="">
                      <span>Rectangle</span>
                    </li>
                    <li class="option tool" id="circle">
                      <img src="../img/icons/circle.svg" alt="">
                      <span>Circle</span>
                    </li>
                    <li class="option tool" id="triangle">
                      <img src="../img/icons/triangle.svg" alt="">
                      <span>Triangle</span>
                    </li>
                    <li class="option">
                      <input type="checkbox" id="fill-color">
                      <label for="fill-color">Fill color</label>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <label class="title">Options</label>
                  <ul class="options">
                    <li class="option active tool" id="brush">
                      <img src="../img/icons/brush.svg" alt="">
                      <span>Brush</span>
                    </li><br>
                    <li class="option tool" id="eraser">
                      <img src="../img/icons/eraser.svg" alt="">
                      <span>Eraser</span>
                    </li><br>
                    
                    <li class="option">
                      <input type="range" id="size-slider" min="1" max="30" value="5">
                    </li>
                    <div class="row">
                        <label class="title">Import Image</label>
                        <ul class="options">
                          <li class="option">
                            <input type="file" id="file-input" accept="image/*" style="display: none">
                            <label for="file-input" id="import-image-button">Import Image</label>
                          </li>
                        </ul>
                      </div>
                    <div class="row">
                        <label class="title">Image Options</label>
                        <ul class="options">
                            <li class="option tool" id="pointer-tool">
                                <img src="../img/icons/cursor-move.svg" alt="" width="30px">
                                <span>pointer-move</span>
                              </li>
                              <li class="option tool" id="pointer-tool2">
                                <img src="../img/icons/resize.svg" alt="" width="30px">
                                <span>pointer-resize</span>
                              </li>                    
                        </ul>
                      </div>
                <div class="row colors">
                  <label class="title">Colors</label>
                  <ul class="options">
                    <li class="option"></li>
                    <li class="option selected"></li>
                    <li class="option"></li>
                    <li class="option"></li>
                    <li class="option">
                      <input type="color" id="color-picker" value="#4A98F7">
                    </li>
                  </ul>
                </div>
                <div class="row buttons">
                  <button class="clear-canvas">Clear Canvas</button>
                  <button class="save-img">Add to cart</button>
                </div>
              </section>
              
            </div>
          </div>
        </div>
        
      </nav>
      
      <script src="../js/Custom.js"></script>
</body>
</html>