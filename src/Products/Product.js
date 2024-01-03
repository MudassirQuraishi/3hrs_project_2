import React, { useContext } from "react";
import CartContext from "../store/cart-context";
const Product = ({ name, description, price }) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        const cartItem = { name: name, price: price };
        cartCtx.addItem(cartItem);
    };

    return (
        <li className='product'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <label htmlFor='quantity'>Quantity:</label>
            <input type='number' id='quantity' />
            <button onClick={addToCartHandler}>Add to Cart</button>
        </li>
    );
};
export default Product;
