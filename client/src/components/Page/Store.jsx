import React, { useContext } from "react";
import Styles from "../css/Store.module.css";

// Context
import { ProductsContext } from "./Productscontext";

// Components
import Product from "./product";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={Styles.container}>
      {products.map((item) => (
        <Product key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Store;