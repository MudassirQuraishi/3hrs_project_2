import React, { useContext, useRef } from "react";
import MedicineContext from "../store/product-context";
import classes from "./AddProduct.module.css";

const AddProduct = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const idRef = useRef();
    const medicineCtx = useContext(MedicineContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const medicineDetails = {
            id: parseInt(idRef.current.value),
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: parseInt(priceRef.current.value),
            quantity: parseInt(quantityRef.current.value),
        };
        console.log(medicineDetails);
        medicineCtx.addMedicine(medicineDetails);
    };

    return (
        <div className={classes["form-section"]}>
            <form onSubmit={handleSubmit}>
                <div className={classes["input-field"]}>
                    <label htmlFor='id'>ID:</label>
                    <input type='number' id='id' ref={idRef} placeholder='ID' />
                </div>
                <div className={classes["input-field"]}>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        ref={nameRef}
                        placeholder='Name'
                    />
                </div>
                <div className={classes["input-field"]}>
                    <label htmlFor='description'>Description:</label>
                    <input
                        type='text'
                        id='description'
                        ref={descriptionRef}
                        placeholder='Description'
                    />
                </div>
                <div className={classes["input-field"]}>
                    <label htmlFor='price'>Price:</label>
                    <input
                        type='number'
                        id='price'
                        ref={priceRef}
                        placeholder='Price'
                    />
                </div>
                <div className={classes["input-field"]}>
                    <label htmlFor='quantity'>Quantity:</label>
                    <input
                        type='number'
                        id='quantity'
                        ref={quantityRef}
                        placeholder='Quantity'
                    />
                </div>
                <button type='submit'>Add to Inventory</button>
            </form>
        </div>
    );
};

export default AddProduct;
