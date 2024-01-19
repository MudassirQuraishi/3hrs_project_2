import React, { useContext, useRef } from "react";
import CartContext from "../store/cart-context";
import classes from "./Product.module.css";
import MedicineContext from "../store/product-context";
const Product = ({ id, name, description, price, quantity }) => {
    const cartCtx = useContext(CartContext);
    const medicineCtx = useContext(MedicineContext);
    const quantityRef = useRef();

    const addToCartHandler = () => {
        const addedQuantity = parseInt(quantityRef.current.value);
        if (
            addedQuantity > 0 &&
            addedQuantity < 10 &&
            quantity - addedQuantity >= 0
        ) {
            const cartItem = {
                id: id,
                name: name,
                price: price,
                quantity: addedQuantity,
            };
            cartCtx.addItem(cartItem);
            medicineCtx.decreaseQuantity(id, addedQuantity);
            quantityRef.current.value = "";
        } else {
            alert(
                "Please Select a quntity below 5 and check the available quantity"
            );
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
