import React, { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  selecedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const sumItem = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { total, itemsCounter };
};
const cartRducer = (state, action) => {
  switch (action.type) { // switch case to check btn in store page 
    case "ADD_ITEM":
      if (!state.selecedItems.find((item) => item.id === action.payload.id)) {
        state.selecedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        selecedItems: [...state.selecedItems],
        ...sumItem(state.selecedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelecedItems = state.selecedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selecedItems: [...newSelecedItems],
        ...sumItem(newSelecedItems),
      };
    case "INCREASE":
      const increasedItems = state.selecedItems.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
      });
      return {
      ...state,
      selecedItems: increasedItems,
      ...sumItem(increasedItems),
    };
    case "DECREASE":
      const decreasedItems = state.selecedItems.map((item) => {
        if (item.id === action.payload.id) {
          // Ensure the quantity does not go below 1
          const newQuantity = Math.max(item.quantity - 1, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return {
        ...state,
        selecedItems: decreasedItems,
        ...sumItem(decreasedItems),
    };
    case "CLEAR":
      return {
        selecedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selecedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      return state;
  }
};
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartRducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;