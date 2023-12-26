import { useState , useEffect} from 'react'
export default function Shop(){
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [maxPriceFilter, setMaxPriceFilter] = useState('');
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [imagePaths, setImagePaths] = useState([]);
    const [totalImages, setTotalImages] = useState(0);
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
    
      const handleSortSubmit = async (type) => {
        // Handle sorting logic based on type
        try {
          const formData = new FormData();
          formData.append('sortType', type);
          let url = '/img/sortmin';
          if (type === 'max') {
            url = '/img/sortmax';
          }  
          
          const response = await fetch(url, {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            const data = await response.json();
            setImagePaths(data.imagePaths);
          } else {
            console.error('Error sorting data');
          }
        } catch (error) {
          console.error('Error', error.message);
        }
      };
    

    return(
        <html lang="en" data-theme="emerald">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>O'clock</title>
            <link rel="icon" type="image/x-icon" href="/img/logo.png" />
            <link rel="stylesheet" href="/css/styleShop.css" />
            <link rel="stylesheet" href="/css/style.css" />
            <link rel="stylesheet" href="/css/style-dropbar.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300&display=swap" rel="stylesheet" />
            <script src="app.js" defer></script>
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
              <li><button onClick={()=> Navi("/magazine")} >MAGAZINE</button></li>
              <li><button onClick={()=> Navi("/custom")} >CUSTOM YOUR OWN</button></li>
  
            </ul>
            <div className="menu-right">
              <input type="search" className="searchbox" placeholder="Search Products" />
              <a href="./php/Cartbeforelogin.php"><img src="/img/cart.png" className="cart" alt="Cart" /></a>
              {/* <a href="./php/login.php"><img src="/img/Login.png" className="login" alt="Login" /></a> */}
              <button onClick={()=> Navi("/login")} > <img src="/img/Login.png" className="login" alt="Login" /></button>
            </div>
          </nav>
        </div>

        <div className="Shop-filter">
            {/* Filter form */}
            <button
            id="filterBT"
            className="filterBT"
            onClick={() => setCategoryFilter(!categoryFilter)}
            >
            Filter
            </button>
            <form onSubmit={handleFilterSubmit}>
            {/* ... */}
            </form>

            {/* Sort button and form */}
            <div className="dropdown">
          <button disabled className="SortBT" name="SortBT">
            Sort by Feature
          </button>
          <div className="dropdown-content" style={{ left: '1px' }}>
            <button className="SortBT" onClick={() => handleSortSubmit('max')}>
              Sort by MAX
            </button>
            <button className="SortBT" onClick={() => handleSortSubmit('min')}>
              Sort by MIN
            </button>
          </div>
        </div>
      </div>

        <div id="image-container">
            {/* Image container */}
            {/* ... */}
        </div>

        <div className="Next-pic">
            {/* Pagination */}
            {/* ... */}
        </div>

        <div id="result"></div>
        </div>   


        </html>
    )
}