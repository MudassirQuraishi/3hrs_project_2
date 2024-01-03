import React, { useContext } from "react";
import CartIcon from "../Icons/CarIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../store/cart-context";
const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberofCartItems = cartCtx.items.length;
    const openCartHandler = () => {
        props.openCartHandler(true);
    };
    return (
        <button className={classes.button} onClick={openCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.buttonTitle}>Your Cart</span>
            <span className={classes.badge}>{numberofCartItems}</span>
        </button>
    );
};
export default HeaderButton;
