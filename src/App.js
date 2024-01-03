import React from "react";
import "./App.css";
import ProductList from "./Products/ProductList";
import AddProduct from "./Admin/AddProduct";
import Header from "./Layout/Header";
import Cart from "./Cart/Cart";

const App = () => {
    const cartStatus = false;
    return (
        <div className='app'>
            {cartStatus && <Cart />}
            <Header />
            <main className='main'>
                <AddProduct />
                <ProductList />
            </main>
        </div>
    );
};

export default App;
