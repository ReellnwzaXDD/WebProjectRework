import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ImageGallery from './imgcontainer';
export default function Shop(){
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [imagePaths, setImagePaths] = useState([]);
    const [totalImages, setTotalImages] = useState(0);
    let Navi = useNavigate();
    useEffect(() => {
        // Fetch data when component mounts or when filters change
        fetchData();
      }, [categoryFilter, maxPriceFilter, minPriceFilter]);

      const fetchData = async () => {
        try {
          const formData = new FormData();
    
          formData.append('category', categoryFilter.join(','));
          formData.append('max-price', maxPriceFilter);
          formData.append('min-price', minPriceFilter);
    
          const response = await fetch('your-api-endpoint-here', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            const data = await response.json();
            setImagePaths(data.imagePaths);
            setTotalImages(data.totalImages);
          } else {
            console.error('Error fetching data');
          }
        } catch (error) {
          console.error('Error', error.message);
        }
      };
    
      const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Handle the filter logic
        fetchData();
      };
    

    return(
        <html lang="en" data-theme="emerald">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>O'clock</title>
            <link rel="icon" type="image/x-icon" href="/img/logo.png" />
            <link rel="stylesheet" href="/css/style-Shop.css" />
            <link rel="stylesheet" href="/css/style.css" />
            <link rel="stylesheet" href="/css/style-dropbar.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.css" />
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer></script>
        </head>
            <div>
       
        <nav id="side" style={{ display: 'none' }}>
            {/* ... */}
        </nav>

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li><button className="menu__item" onClick={()=> Navi("/")} >Home</button></li>
            <li><button className="menu__item" onClick={()=> Navi("/shop")} >SHOP</button></li>
            <li><button className="menu__item" onClick={()=> Navi("/magazine")} >MAGAZINE</button></li>
            <li><button className="menu__item" onClick={()=> Navi("/custom")} >CUSTOM YOUR OWN</button></li>
            <li><button className="menu__item" onClick={()=> Navi("/login")} >Login</button></li>
          </ul>
        </div>

        {/* Menu Verticle */}
        <div className="top-menu">
          <img src="/img/Shadow.png" className="Shadow" title="Shadow" />
          <nav className="main-nav">
            <ul className="menu-left">
              <a href="index.php"><img src="/img/logo.png" className="logo" alt="Logo" /></a>
              <li><button onClick={()=> Navi("/shop")} >SHOP</button></li>
              <li><button onClick={()=> Navi("/magazine")} >MAGAZINE</button></li>
              <li><button onClick={()=> Navi("/custom")} >CUSTOM YOUR OWN</button></li>
  
            </ul>
            <div className="menu-right">
              <input type="search" className="searchbox" placeholder="Search Products" />
              <a href="./php/Cartbeforelogin.php"><img src="/img/cart.png" className="cart" alt="Cart" /></a>
              <button onClick={()=> Navi("/login")} > <img src="/img/Login.png" className="login" alt="Login" /></button>
            </div>
          </nav>
        </div>

        <div className="Shop-filter flex items-center justify-between">   
        </div>
        <div>
            <ImageGallery></ImageGallery>
        </div>

        <div className="Next-pic">
        </div>

        <div id="result"></div>
        </div>   


        </html>
    )
}