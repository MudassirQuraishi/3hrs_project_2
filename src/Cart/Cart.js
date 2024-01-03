import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const increaseQuantityHandler = (item) => {
        cartCtx.increaseQuantity(item);
    };
    const decreaseQuantityHandler = (item) => {
        cartCtx.decreaseQuantity(item);
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => {
                return (
                    <div className={classes["cart-item"]} key={item.id}>
                        <div className={classes["item-details"]}>
                            <li key={item.id}>{item.name}</li>
                            <span> X {item.quantity}</span>
                        </div>
                        <div className={classes.actions}>
                            <button
                                className={classes["button--alt"]}
                                onClick={() => {
                                    decreaseQuantityHandler(item);
                                }}>
                                -
                            </button>
                            <button
                                className={classes.button}
                                onClick={() => {
                                    increaseQuantityHandler(item);
                                }}>
                                +
                            </button>
                        </div>
                    </div>
                );
            })}
        </ul>
    );

    const cartCloseHandler = () => {
        props.closeCartHandler();
    };

    return (
        <Modal>
            {cartItems}
            {cartCtx.items.length === 0 && <p>No orders in cart</p>}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={cartCloseHandler}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
export default Cart;
