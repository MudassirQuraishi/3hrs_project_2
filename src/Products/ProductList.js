import React, { useContext } from "react";
import Product from "./Product";
import MedicineContext from "../store/product-context";
const Products = () => {
    const medicineCtx = useContext(MedicineContext);
    const products = medicineCtx.medicines;
    return (
        <ul className='products'>
            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                />
            ))}
        </ul>
    );
};
export default Products;
