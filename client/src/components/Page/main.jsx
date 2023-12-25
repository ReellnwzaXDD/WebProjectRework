import { useNavigate ,Routes, Route} from 'react-router-dom';
import Error from './Error';

export default function Main(){
    let Navi = useNavigate();
    return(
        <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O'clock</title>
        <link rel="icon" type="image/x-icon" href="./img/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style-dropbar.css" />
        <script src="../js/app.js"></script>
      </head>
      <body>
        {/* Menu Herizon */}
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li><a className="menu__item" href="index.php">Home</a></li>
            <li><a className="menu__item" href="/php/Shop.php">Shop</a></li>
            <li><a className="menu__item" href="/php/Magazine.php">Magazine</a></li>
            <li><a className="menu__item" href="/php/Custom.php">Custom Your Own</a></li>
            {/* <li><a className="menu__item" href="../Page/login.jsx">Login</a></li> */}
            <li><a className="menu__item" href="../Page/login.jsx">Login</a></li>
          </ul>
        </div>

        {/* Menu Verticle */}
        <div className="top-menu">
          <img src="/img/Shadow.png" className="Shadow" title="Shadow" />
          <nav className="main-nav">
            <ul className="menu-left">
              <a href="index.php"><img src="/img/logo.png" className="logo" alt="Logo" /></a>
              {/* <li><a href="./php/Shop.php" className="Shop">SHOP</a></li> */}
              <li><button onClick={()=> Navi("/shop")} >SHOP</button></li>
              <li><a href="./php/Magazine.php" className="Magazine">MAGAZINE</a></li>
              <li><a className="Custom" href="./php/Custom.php">CUSTOM YOUR OWN</a></li>
            </ul>
            <div className="menu-right">
              <input type="search" className="searchbox" placeholder="Search Products" />
              <a href="./php/Cartbeforelogin.php"><img src="/img/cart.png" className="cart" alt="Cart" /></a>
              {/* <a href="./php/login.php"><img src="/img/Login.png" className="login" alt="Login" /></a> */}
              {/* <img src="/img/Login.png" className="login" alt="Login" /> */}
            </div>
          </nav>
        </div>
        
        {/* Banner */}
        <div className="Banner">
          <video src="/vdo/BannerVideo.mp4" className="VdoBanner" autoPlay muted loop playsInline data-object-fit="cover" />
        </div>

        {/* Recommand */}
        <div className="Recommand">
          <div className="Rec-image">
            <img src="/img/Customyourown-neww.png" className="cyo" title="cyo" alt="Custom Your Own" />
          </div>
          <div className="Rec-paragraph">
            <h1 className="Rec-paragraph-Headers">Custom Your Own!</h1>
            <p className="Rec-paragraph-Paragraph">
              สร้างสไตล์ของคุณเอง! เลือกผ้าที่คุณชื่นชอบ ทำให้เสื้อของคุณไม่เหมือนใคร! เริ่มต้นที่ O'Clock และเป็นส่วนหนึ่งของการสร้างสรรค์แฟชั่นของคุณได้เลย!
            </p>
            <button className="Button-Paragraph" onClick={() => window.location.href='../php/Custom.php'}>ทดลองใช้</button>
          </div>
        </div>

        {/* Detail */}
        <div className="Detail-area">
          <div className="Detail-grid">
            <div className="Copyright">
              <h4 className="Copyright-detail" style={{ color: 'white' }}>Copyright © 2023 O'Clock. All Rights Reserved.</h4>
            </div>
          </div>
        </div>
        
      </body>
    </html>
    
  )
    
}