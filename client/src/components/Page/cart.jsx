import React, { useContext,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartcontext";
import loading from "../../assets/bouncing-squares.svg";
import ShopCart from "./shopcart";
import { useNavigate  } from 'react-router-dom';
import Styles from "../css/Cart.module.css";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [product, setProduct] = useState('');
  const [memberID, setMemberID] = useState('');
  const [amount, setAmount] = useState('');
  const userid = sessionStorage.getItem('id');
  let Navi = useNavigate();

  const handlecheckout = async () => {
    try {
      const response = await fetch('http://localhost:3001/checkout', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,
          memberID,
          amount
        }),
      });

      // const data = await response.json();
      // console.log(data);
      
    } catch (error) {
      console.error('Error during checkout:', error.message);
    }
  };

  useEffect(() => {
    if (state.checkout) {
      handlecheckout();
      Navi('/checkout');
    }
  }, [state.checkout]);

  return (
    <div className={Styles.container}>
      <div className={Styles.cartContainer}>
        {state.selecedItems.map((item) => (
          <ShopCart
            key={item.id}
            data={item}
          />
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
              onClick={() => {
                dispatch({ type: "CHECKOUT" });
                setAmount(state.total);
                setProduct(state.selecedItems);
                setMemberID(userid);
              }}
            >
              Check Out
            </button>
            <button
              className={Styles.clear}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={Styles.complete}>
          <img src={loading} alt="Loading" style={{ width: "20%" }} />
          <h3>Your cart is empty. Go find something!</h3>
          <Link to="/shop">Shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
