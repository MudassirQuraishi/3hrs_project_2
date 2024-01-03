import React, { useContext, useRef } from "react";
import CartContext from "../store/cart-context";
import classes from "./Product.module.css";
const Product = ({ id, name, description, price, quantity }) => {
    const cartCtx = useContext(CartContext);
    const quantityRef = useRef();
    const addToCartHandler = () => {
        if (quantityRef.current.value > 0 && quantityRef.current.value < 10) {
            const cartItem = {
                id: id,
                name: name,
                price: price,
                quantity: parseInt(quantityRef.current.value),
            };
            console.log(cartItem);
            cartCtx.addItem(cartItem);
            quantityRef.current.value = "";
        } else {
            alert("Please Select a quntity between 1 and 10");
            quantityRef.current.value = "";
            quantityRef.current.focus();
        }
    };

    return (
        <li className={classes.product}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price:${price}</p>
            <p>Quantity :{quantity}</p>
            <input
                type='number'
                ref={quantityRef}
                min={1}
                max={5}
                id='quantity'
                placeholder='QTY'
            />
            <button onClick={addToCartHandler}>Add to Cart</button>
        </li>
    );
};
export default Product;
