import Styles from "../css/Store.module.css";
import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
// Context
import { useProductsContext } from "./Productscontext";

// Components
import Product from "./product";

const Store = () => {
  //const products = useContext(ProductsContext);
  const { products, currentPage, setCurrentPage, setSortType} = useProductsContext();
  // console.log(currentPage);
  let Navi = useNavigate();
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleSortSubmit = (type) => {
    // Update the sorting type state
    setSortType(type);
  };

  useEffect(()=>{
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert("You are not login!");
      Navi('/login');
    }
  },[Navi])
  
  return (
    <div data-theme="emerald">
      <div className={Styles.container}></div>
        <div className="dropdown dropdown-end" style={{ left: '5rem' }}>
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by Feature
        </div>
        <div className="dropdown-content" style={{ left: '10px' }}>
          <button
            className="SortBT"
            onClick={() => handleSortSubmit('DESC')}
          >
            Sort by MAX
          </button>
          <button
            className="SortBT"
            onClick={() => handleSortSubmit('ASC')}
          >
            Sort by MIN
          </button>
        </div>
      </div>   
    <div className={Styles.container}>
      
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
    <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Previous Page
        </button>
        <button onClick={handleNextPage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Store;