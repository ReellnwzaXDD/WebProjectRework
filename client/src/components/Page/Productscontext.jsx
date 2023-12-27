import React, { createContext,useContext ,useState, useEffect } from "react";

// API
import { getProducts } from "../shared/axiosAPI";

// Create Context
export const ProductsContext = createContext();
 
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(null);
  const values={
    products,
    currentPage,
    sortType,
    setCurrentPage,
    setSortType,
  };
  
  useEffect(() => {
    //   Creating a fetchAPI() to add product data
    const fetchAPI = async () => {
      setProducts(await getProducts(currentPage,sortType));
      
    };

    fetchAPI();
  }, [currentPage, sortType]);

  
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsContextProvider"
    );
  }
  return context;
};

export default ProductsContextProvider;