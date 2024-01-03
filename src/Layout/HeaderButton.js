import React from "react";
import CartIcon from "../Icons/CarIcon";
import classes from "./HeaderButton.module.css";
const HeaderButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.buttonTitle}>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    );
};
export default HeaderButton;
