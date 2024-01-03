import React, { useState } from "react";
import "./App.css";
import ProductList from "./Products/ProductList";
import AddProduct from "./Admin/AddProduct";
import Header from "./Layout/Header";
import Cart from "./Cart/Cart";
import { MedicineProvider } from "./store/product-context";
import { CartProvider } from "./store/cart-context";

const App = () => {
    const [cartStatus, setCartStatus] = useState(false);
    const openCartHandler = () => {
        setCartStatus(true);
    };
    return (
        <CartProvider>
            <div className='app'>
                {cartStatus && <Cart openCartHandler={openCartHandler} />}
                <Header />
                <MedicineProvider>
                    <main className='main'>
                        <AddProduct />
                        <ProductList />
                    </main>
                </MedicineProvider>
            </div>
        </CartProvider>
    );
};

export default App;
