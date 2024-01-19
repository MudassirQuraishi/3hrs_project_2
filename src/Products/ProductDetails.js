import React from "react";
import classes from "./Product.module.css";

const ProductDetails = ({ name, description, price, quantity }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
        </>
    );
};

export default ProductDetails;
