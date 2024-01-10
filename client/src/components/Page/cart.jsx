import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartcontext";
import loading from "../../assets/bouncing-squares.svg";
import ShopCart from "./shopcart";
import { useNavigate  } from 'react-router-dom';
import Styles from "../css/Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  let Navi = useNavigate();
  return (
    <div className={Styles.container}>
      <div className={Styles.cartContainer}>
        {state.selecedItems.map((item) => (
          <ShopCart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={Styles.payments}>
          <p>
            <span>Total Items : </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments : </span>
            {state.total} ฿
          </p>
          <div className={Styles.buttonContainer}>
            <button
              className={Styles.checkout}
              onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check Out
            </button>
            <button
              className={Styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}>
              Clear
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        Navi('/checkout')
        // <div className={Styles.complete}>
        //   <img src={loading} alt="tt" style={{ width: "20%" }} />
        //   <h3> Checked Out Successfull </h3>
        //   <Link to="/checkout"> Add some address </Link>
        // </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={Styles.complete}>
          <img src={loading} alt="tt" style={{ width: "20%" }} />
          <h3> Your cart is empty go find some thing </h3>
          <Link to="/shop"> Shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;