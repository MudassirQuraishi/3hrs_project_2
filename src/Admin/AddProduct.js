import React, { useContext, useRef } from "react";
import MedicineContext from "../store/product-context";
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
        medicineCtx.addMedicine(medicineDetails);
    };

    return (
        <div className='form-section'>
            <form onSubmit={handleSubmit}>
                <input type='number' ref={idRef} placeholder='ID' />
                <input type='text' ref={nameRef} placeholder='Name' />
                <input
                    type='text'
                    ref={descriptionRef}
                    placeholder='Description'
                />
                <input type='number' ref={priceRef} placeholder='Price' />
                <input
                    type='Quantity'
                    ref={quantityRef}
                    placeholder='Quantity'
                />
                <button type='submit'>Add to Inventory</button>
            </form>
        </div>
    );
};
export default AddProduct;
